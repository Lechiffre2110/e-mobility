import HorizontalSeparator from "./horizontal-separator";
import { useTranslation } from "react-i18next";
import Road from "../assets/road.svg";
import Postbox from "../assets/postbox.png";

export default function infoSection(props) {
  const { t } = useTranslation();
  return (
    <>
      <div id="info-section" className="flex">
        <div className="lg:w-[50%] h-min flex flex-col justify-around">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            {t("landingpage.intro.header")}
          </h2>
          <div className="mt-8 w-[95%]">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {t("landingpage.projekt.header")}
            </h2>
            <p className="leading-7">{t("landingpage.projekt.text")}</p>
          </div>

          <div className="mt-8 w-[95%]">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {t("landingpage.goals.header")}
            </h2>
            <p className="leading-7">{t("landingpage.goals.text")}</p>
          </div>

          <div className="my-8 w-[95%]">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {t("landingpage.collaboration.header")}
            </h2>
            <p className="leading-7">{t("landingpage.collaboration.text")}</p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[50%] h-min">
          <img className="m-auto max-h-[750px]" src={Road} alt="street" />
        </div>
      </div>

      <div className="mb-4 lg:my-24">
        <div className="px-8 py-5 m-auto flex flex-row items-center gap-3  lg:w-[50%] bg-gray-100 rounded-lg">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              {t("landingpage.discord.header")}
            </h2>
            <p href="https://www.discord.com">
              {t("landingpage.discord.description")}
            </p>
            <a
              className="text-blue-500 hover:text-blue-800"
              href="https://discord.gg/5k8X7pY"
            >
              <button className="flex items-center pl-3 pr-1 text-white rounded-lg bg-[#5865F2] mt-2 mb-10">
                {t("landingpage.discord.button")}
                <img
                  src="https://cdn.discordapp.com/embed/avatars/0.png?size=128"
                  alt="Discord"
                  class="h-10 w-10 rounded-xl"
                  draggable="false"
                />
              </button>
            </a>
            <p className="mb-2 font-bold" href="https://www.discord.com">
              {t("landingpage.email.description")}
            </p>
            <p>
              {t("landingpage.email.writeus")} {" "}
              <a
                className="underline text-blue8"
                href="mailto:e-mobility@htw-berlin.de"
              >
                e-mobility@htw-berlin.de
              </a>
            </p>
          </div>
          <img className="hidden md:block w-[30%]" src={Postbox} alt="postbox" />
        </div>
      </div>
    </>
  );
}
