import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className="bg-red4 text-red11 hover:bg-red5 focus:shadow-red7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px]" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Ausloggen
      </button>
    );
  };

export default LogoutButton;