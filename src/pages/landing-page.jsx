import { useEffect } from "react";
import { Button } from "primereact/button";
import InfoSection from "../components/info-section";
import Lottie from "lottie-react";
import CarAnimation from "../assets/car-animation.json";

function LandingPage({ props, t }) {
  const scrollDown = () => {
    document.getElementById("info-section").scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <div className="text-center lg:flex-col">
        <div className="w-full lg:w-[100%] flex flex-col items-center mb-10">
          <h1 className="mt-6 text-4xl font-extrabold md:text-4xl lg:text-6xl lg:w-[70%] lg:leading-[66px]">
            {t("landingpage.header")}
          </h1>
          <p className="mt-3 mb-4 lg:mt-5">{t("landingpage.subheader")}</p>
          <Button
            className="w-[50%] md:w-[40%] lg:w-[20%] m-auto z-10"
            label={t("landingpage.button")}
            rounded
            onClick={scrollDown}
          />
          <div className="">
            <Lottie animationData={CarAnimation} />
          </div>
        </div>
      </div>
      <InfoSection />
    </>
  );
}
export default LandingPage;
