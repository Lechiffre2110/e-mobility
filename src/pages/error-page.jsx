import { useRouteError, Link } from "react-router-dom";
import Plug from "../assets/plug.svg";
import Navbar from "../components/navbar";

/**
 * Component for the error page.
 * @param {*} t translation function
 */
export default function ErrorPage({t}) {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar />
    <div id="error-page" className="w-full h-[100vh]flex flex-col align-middle justify-center mt-28">
      <div className="text-center">
        <img src={Plug}></img>
      <h1 className="m-auto mb-5 text-4xl font-extrabold">Oops! Es ist ein unerwarteter Fehler aufgetreten</h1>
      <p className="hidden">
        <i className="m-auto">{error.statusText || error.message}</i>
      </p>
      <Link href="/" className="px-10 py-2 mt-5 font-bold rounded-full green-background hover:bg-emerald-500">Zurück</Link>
      </div>
    </div>
    </>
  );
}
