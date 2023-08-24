import * as Separator from "@radix-ui/react-separator";
import { useState } from "react";
import FileUpload from "../components/file-upload";
import GaugeIcon from "../assets/activity.svg";
import DataIcon from "../assets/hard-drive.svg";
import SettingsIcon from "../assets/settings.svg";
import ContributionIcon from "../assets/git-branch.svg";
import BugIcon from "../assets/alert-triangle.svg";
import HubLogo from "../assets/hub-logo.svg";
import FileDownload from "../components/file-download";
import Contribution from "../components/contribution";
import BugReport from "../components/bug-report";
import Dashboard from "../components/dashboard";

const MenuPoints = {
  DASHBOARD: "DASHBOARD",
  HOCHLADEN: "HOCHLADEN",
  HERUNTERLADEN: "HERUNTERLADEN",
  ANZEIGEN: "ANZEIGEN",
  MITWIRKUNG_BEANTRAGEN: "MITWIRKUNG_BEANTRAGEN",
  BUG_MELDEN: "BUG_MELDEN",
  EINSTELLUNGEN: "EINSTELLUNGEN",
};

export default function DataHub() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    MenuPoints.DASHBOARD
  );

  return (
    <div className="flex flex-row justify-between p-5 bg-gray-100 rounded-2xl">
      <div className="flex flex-col rounded-2xl h-[80vh] w-[25%] bg-white p-5 text-gray-500">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 mb-5">
            <img className="h-8" src={HubLogo} />
            <h2 className="text-2xl font-bold text-gray-800">Datahub</h2>
          </div>
          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.DASHBOARD)}>
            <img className="h-4 mr-2" src={GaugeIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Dashboard
            </h3>
          </div>

          <details className="flex flex-col">
            <summary className="flex flex-row items-center">
              <img className="h-4 mr-2" src={DataIcon} />
              <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
                Daten
              </h3>
            </summary>
            <ul className="flex flex-col gap-4 mt-4 pl-7">
              <li onClick={() => setSelectedMenuItem(MenuPoints.HOCHLADEN)}>
                <a className="rounded-[3px] inline-flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
                  Daten hochladen
                </a>
              </li>
              <li onClick={() => setSelectedMenuItem(MenuPoints.HERUNTERLADEN)}>
                <a className="rounded-[3px] inline-flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
                  Daten herunterladen
                </a>
              </li>
              <li onClick={() => setSelectedMenuItem(MenuPoints.ANZEIGEN)}>
                <a className="rounded-[3px] inline-flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
                  Daten anzeigen
                </a>
              </li>
            </ul>
          </details>

          <div
            className="flex flex-row items-center"
            onClick={() =>
              setSelectedMenuItem(MenuPoints.MITWIRKUNG_BEANTRAGEN)
            }
          >
            <img className="h-4 mr-2" src={ContributionIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Mitwirkung beantragen
            </h3>
          </div>

          <div className="flex flex-row items-center" onClick={() =>
              setSelectedMenuItem(MenuPoints.BUG_MELDEN)
            }>
            <img className="h-4 mr-2" src={BugIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Bug melden
            </h3>
          </div>

          <div className="flex flex-row items-center">
            <img className="h-4 mr-2" src={SettingsIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Einstellungen
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        {selectedMenuItem === MenuPoints.DASHBOARD && <Dashboard />}
        {selectedMenuItem === MenuPoints.HOCHLADEN && <FileUpload />}
        {selectedMenuItem === MenuPoints.HERUNTERLADEN && <FileDownload />}
        {selectedMenuItem === MenuPoints.MITWIRKUNG_BEANTRAGEN && <Contribution />}
        {selectedMenuItem === MenuPoints.BUG_MELDEN && <BugReport />}
      </div>
    </div>
  );
}
