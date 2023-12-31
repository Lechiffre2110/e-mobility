import { useState } from "react";
import { useTranslation } from "react-i18next";
import XIcon from "../assets/xmark-solid.svg";
import MenuIcon from "../assets/ellipsis-solid.svg";
import { useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

/**
 * Component for the mobile dashboard menu.
 */
export default function MobileDashboardMenu() {
  // store the menu page url in the url search params
  const [searchParams, setSearchParams] = useSearchParams({
    menuPage: "dashboard",
  });
  const [showMenu, setShowMenu] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { t } = useTranslation();

  /**
   * Toggle the menu.
   * If the menu is shown, hide it and vice versa.
   */
  function toggleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  /**
   * Set the menu page url based on the menu item clicked.
   * @param {String} menuItem the menu item clicked
   */
  function changeMenuUrl(menuItem) {
    setSearchParams({ menuPage: menuItem });
  }

  return (
    <>
      <div
        className="fixed flex items-center justify-center text-white bottom-3 right-3 lg:hidden w-[50px] h-[50px] rounded-full text-2xl bg-black"
        onClick={toggleMenu}
      >
        <img src={MenuIcon} alt="Compass" className="w-[25px] h-[25px]" />
      </div>

      {showMenu && (
        <div className="fixed bottom-3 right-3 w-[200px] h-[320px] bg-black lg:hidden text-[#fff] rounded-2xl px-5 py-3 flex flex-col justify-around border-black">
          <div
            onClick={toggleMenu}
            className="absolute w-[40px] h-[40px]  rounded-full top-1 right-1 flex justify-center items-center"
          >
            <img src={XIcon} alt="X" className="w-[20px] h-[20px]" />
          </div>
          {isAuthenticated && (
            <a onClick={() => changeMenuUrl("dashboard")}>Dashboard</a>
          )}
          {isAuthenticated && (
            <a onClick={() => changeMenuUrl("onboarding")}>Onboarding</a>
          )}
          {isAuthenticated && (
            <a onClick={() => changeMenuUrl("quickactions")}>Quick Actions</a>
          )}
          <a onClick={() => changeMenuUrl("download")}>{t('datahub.download')}</a>
          <a onClick={() => changeMenuUrl("upload")}>{t('datahub.upload')}</a>
          <a onClick={() => changeMenuUrl("contribution")}>{t('datahub.contribution')}</a>
          <a onClick={() => changeMenuUrl("bugs")}>{t('datahub.bug')}</a>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}
        </div>
      )}
    </>
  );
}
