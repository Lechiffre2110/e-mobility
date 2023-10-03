import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;