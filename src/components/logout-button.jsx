import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import LogoutIcon from "../assets/logout.svg";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { t } = useTranslation();

  return (
    <>
      <button
        className="bg-red4 text-red11 hover:bg-red5 focus:shadow-red7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px] lg:hidden"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        {t("button.logout")}
      </button>
      <button className="hidden lg:block" onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }>
        <img className="h-5" src={LogoutIcon} />
      </button>
    </>
  );
};

export default LogoutButton;
