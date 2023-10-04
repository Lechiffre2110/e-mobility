import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMobileMenu() {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [currentLanguage, setCurrentLanguage] = useState("de"); 

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
          <button className="fixed top-5 right-5" onClick={toggleMobileMenu}>
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
            <li className="duration-300 ease-in w-min group">
              <Link to="/" onClick={handleLinkClick}>
              {t('navbar.landingpage')}
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="duration-300 ease-in w-min group">
              <Link to="/authors" onClick={handleLinkClick}>
              {t('navbar.authors')}
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="duration-300 ease-in w-min group">
              <Link to="/cars" onClick={handleLinkClick}>
              {t('navbar.cars')}
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="duration-300 ease-in w-min group">
              <Link
                to="https://project-e-mobility.gitbook.io/projekt-e-mobility/"
                target="_blank"
                onClick={handleLinkClick}
              >
                {t('navbar.documentation')}
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="duration-300 ease-in w-min group">
              <Link to="/blog" onClick={handleLinkClick}>
              {t('navbar.blog')}
              </Link>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="duration-300 ease-in w-min group">
            <button onClick={toggleLanguage}>
            {currentLanguage === "en" ? "🇩🇪" : "🇬🇧"}
            </button>
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
            </li>
            <li className="px-5 rounded-full w-max bg-[#1E1F22] text-white hover:bg-blackA11">
              <Link
                className="font-semibold "
                to="/datahub"
                onClick={handleLinkClick}
              >
                {t('navbar.datahub')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
