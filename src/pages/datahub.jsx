import * as Separator from "@radix-ui/react-separator";
import { useState } from "react";
import FileUpload from "../components/file-upload";
import GaugeIcon from "../assets/activity.svg";
import SettingsIcon from "../assets/settings.svg";
import ContributionIcon from "../assets/git-branch.svg";
import BugIcon from "../assets/alert-triangle.svg";
import ClipboardIcon from "../assets/clipboard.svg";
import UploadIcon from "../assets/upload-cloud.svg";
import DownloadIcon from "../assets/download-cloud.svg";
import ChartIcon from "../assets/bar-chart.svg";
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
          <h3 className="text-xs font-bold">ADMIN</h3>
          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.DASHBOARD)}>
            <img className="h-4 mr-2" src={GaugeIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Dashboard
            </h3>
          </div>

          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.DASHBOARD)}>
            <img className="h-4 mr-2" src={ClipboardIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Onboarding
            </h3>
          </div>

          <h3 className="text-xs font-bold">DATEN</h3>

          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.HOCHLADEN)}>
            <img className="h-4 mr-2" src={UploadIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Daten hochladen
            </h3>
          </div>

          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.HERUNTERLADEN)}>
            <img className="h-4 mr-2" src={DownloadIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Daten herunterladen
            </h3>
          </div>

          <div className="flex flex-row items-center" onClick={() => setSelectedMenuItem(MenuPoints.ANZEIGEN)}>
            <img className="h-4 mr-2" src={ChartIcon} />
            <h3 className="font-bold rounded-[3px] flex items-center h-[25px] hover:bg-gray-800 px-2 hover:text-white">
              Daten Anzeigen
            </h3>
          </div>

          <h3 className="text-xs font-bold">PROJEKT</h3>
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
