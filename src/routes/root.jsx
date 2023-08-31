import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <>
      <Navbar />
      <div className="px-5 pt-20" id="detail">
        <Outlet />
      </div>
      {
        /*<Footer />*/
      }
      
    </>
  );
}
