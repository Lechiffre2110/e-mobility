import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

/**
 * Component for the navbar.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  /**
   * Set the current page based on the menu item clicked.
   * @param {String} page the menu item clicked
   */
  function handleLinkClick(page) {
    setMenuOpen(false);
    setCurrentPage(page);
  }

  const { t, i18n } = useTranslation();

  /**
   * Function to change the language of the page.
   * @param {*} language the language to change to (en or de)
   */
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [currentLanguage, setCurrentLanguage] = useState("de"); 

  /**
   * Toggle the language of the page.
   * If the current language is english, change it to german and vice versa.
   */
  const toggleLanguage = () => {
    if (currentLanguage === "en") {
      changeLanguage("de");
      setCurrentLanguage("de");
    } else {
      changeLanguage("en");
      setCurrentLanguage("en");
    }
  };

  return (
    <>
      <div
        id="navbar"
        className="z-[20] h-[4rem] fixed flex flex-col justify-between w-full px-5 pt-5 lg:px-5 lg:flex-row bg-white"
      >
        <div className="flex gap-2">
          <img src={Logo} className="hidden w-8 h-8 lg:block" />
          <h1 className="hidden pb-3 text-2xl font-extrabold lg:block lg:pb-0 lg:text-center">
          {t('navbar.name')}
          </h1>
        </div>
        <img src={Logo} className="w-8 h-8 lg:hidden" />

        <div className="lg:hidden">
          <button className="fixed top-5 right-5" onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="mobile-menu-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="mobile-menu-icon-close"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`bg-blue3 pl-5 pt-10 lg:pt-0 border-b-4 border-[#6bdbc1] lg:border-none ${
            menuOpen
              ? "open-menu"
              : "closed-menu pointer-events-none lg:pointer-events-auto"
          } lg:block lg:relative w-full pb-5 lg:w-[60%] z-[20] top-14 left-0 lg:top-0 bg-white lg:opacity-100`}
        >
          <ul className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-around [&>li]:py-2 lg:[&>li]:px-5 ">
            {currentPage !== "home" && (
            <li className="duration-300 ease-in w-min group">
              <Link to="/" onClick={() => handleLinkClick("home")}>
              {t('navbar.landingpage')}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            )}
            {currentPage !== "authors" && (
            <li className="duration-300 ease-in w-min group">
              <Link to="/authors" onClick={() => handleLinkClick("authors")}>
              {t('navbar.authors')}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            )}
            {currentPage !== "cars" && (
            <li className="duration-300 ease-in w-min group">
              <Link to="/cars" onClick={() => handleLinkClick("cars")}>
              {t('navbar.cars')}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            )}
            <li className="duration-300 ease-in w-min group">
              <Link
                to="https://github.com/Lechiffre2110/e-mobility/wiki"
                target="_blank"
                onClick={() => handleLinkClick(currentPage)}
              >
                {t('navbar.documentation')}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            {currentPage !== "blog" && (
            <li className="duration-300 ease-in w-min group">
              <Link to="/blog" onClick={() => handleLinkClick("blog")}>
              {t('navbar.blog')}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            )}
            <li className="duration-300 ease-in w-min group">
            <button onClick={toggleLanguage}>
            {currentLanguage === "en" ? "DE" : "EN"}
            </button>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            {currentPage !== "datahub" && (
            <li className="px-5 rounded-full w-max bg-[#1E1F22] text-white hover:bg-blackA11">
              <Link
                className="font-semibold "
                to="/datahub"
                onClick={() => handleLinkClick("datahub")}
              >
                {t('navbar.datahub')}
              </Link>
            </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
