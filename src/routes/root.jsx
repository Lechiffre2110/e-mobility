import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <>
      <Navbar />
      <div className="px-5 pt-20 lg:px-16" id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
