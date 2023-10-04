import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-white text-green11 px-4 py-2 rounded-xl lg:hover:bg-[#6bdbc1] ease-in duration-300" onClick={() => loginWithRedirect()}>Einloggen</button>;
};

export default LoginButton;