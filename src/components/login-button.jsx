import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px]" onClick={() => loginWithRedirect()}>Einloggen</button>;
};

export default LoginButton;