import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  function toggleMobileMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hidden");
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }

  return (
    <>
      <div id="navbar" className="z-[20] h-[4rem] fixed flex flex-col justify-between w-full px-5 pt-5 lg:px-10 lg:flex-row bg-white">
        <h1 className="hidden pb-3 text-2xl font-extrabold lg:block lg:pb-0 lg:text-center">
          Project E-Mobility
        </h1>
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

        <nav className="pl-5 pt-10 lg:pt-0 border-b-4 border-[#6bdbc1] lg:border-none  fixed lg:block lg:relative w-full pb-5 lg:w-[60%] z-[20] top-14 left-0 lg:top-0 bg-white">
            <ul className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-around [&>li]:py-2 lg:[&>li]:px-5 ">
                <li className="duration-300 ease-in w-min group">
                  <Link to="/authors">Autoren</Link>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                </li>
                <li className="duration-300 ease-in w-min group">
                  <Link to="/cars">Fahrzeuge</Link>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                </li>
                <li className="duration-300 ease-in w-min group">
                  <Link
                    to="https://project-e-mobility.gitbook.io/projekt-e-mobility/"
                    target="_blank"
                  >
                    Dokumentation
                  </Link>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                </li>
                <li className="duration-300 ease-in w-min group">
                  <Link to="/blog">Blog</Link>
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 green-background"></span>
                </li>
                <li className="px-5 rounded-full w-max green-background hover:bg-emerald-500">
                  <Link className="font-semibold " to="/datahub">
                    Data Hub
                  </Link>
                </li>
            </ul>
          </nav>
      </div>
    </>
  );
}
