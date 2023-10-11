import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import ZapIcon from "../assets/zap.svg";
import FileDownload from "../components/file-download";
import Contribution from "../components/contribution";
import BugReport from "../components/bug-report";
import Dashboard from "../components/dashboard";
import Onboarding from "../components/onboarding";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/login-button";
import LogoutButton from "../components/logout-button";
import MobileDashboardMenu from "../components/mobile-dashboard-menu";
import LogoutIcon from "../assets/logout.svg";
import QuickActions from "../components/quick-actions";

/**
 * Component for the Project Hub page.
 * @param {*} t translation function
 */
export default function DataHub({t}) {
  const [initials, setInitials] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [searchParams, setSearchParams] = useSearchParams({
    menuPage: "dashboard",
  });

  /**
   * Get the initials of the user.
   * @param {String} name the name of the user
   * @returns the initials of the user
   */
  function getInitials(name) {
    //if name is an email address, show the first letter of the email
    if (name.includes("@")) {
      return name.charAt(0).toUpperCase();
    }
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return initials;
  }

  /**
   * Set the menu page url based on the menu item clicked.
   * @param {String} menuItem 
   */
  function changeMenuUrl(menuItem) {
    setSearchParams({ menuPage: menuItem });
  }

  /**
   * Set the menu page url to upload if the user is not authenticated or to dashboard otherwise.
   */
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setSearchParams({ menuPage: "upload" });
    } else {
      setSearchParams({ menuPage: "dashboard" });
      setInitials(getInitials(user.name));
    }
  }, [isLoading, isAuthenticated]);

  


  return (
    <div className="flex flex-col-reverse pb-5 lg:p-5 lg:bg-gray-100 sm:flex-row rounded-xl">
      <div className="flex flex-col lg:rounded-xl lg:h-[85vh] fixed lg:relative bottom-0 left-0 lg:w-[25%] lg:max-w-[300px] lg:min-h-[650px] lg:bg-white p-5 text-gray-500 bg-white">
        <div className="hidden gap-1 lg:flex lg:flex-col">
          <div className="hidden gap-4 mb-5 lg:flex lg:flex-row">
            <img className="h-8" src={HubLogo} />
            <h2 className="text-2xl font-bold text-gray-800">{t('datahub.name')}</h2>
          </div>

          {isAuthenticated && (
            <div className="lg:my-1">
              <h3 className="hidden text-xs font-bold lg:block">{t('datahub.admin')}</h3>
              <div
                className={`my-1 flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "dashboard" && "bg-indigo-200 text-[#333]" } `}
                onClick={() => changeMenuUrl("dashboard")}
              >
                <img className="h-4 mr-2" src={GaugeIcon} />
                <h3 className="font-bold flex items-center h-[25px] ">
                  Dashboard
                </h3>
              </div>

              <div
                className={`my-1 flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "quickactions" && "bg-indigo-200 text-[#333]" } `}
                onClick={() => changeMenuUrl("quickactions")}
              >
                <img className="h-4 mr-2" src={ZapIcon} />
                <h3 className="font-bold flex items-center h-[25px] ">
                  Quick Actions
                </h3>
              </div>

              <div
                className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "onboarding" && "bg-indigo-200 text-[#333]" } `}
                onClick={() => changeMenuUrl("onboarding")}
              >
                <img className="h-4 mr-2" src={ClipboardIcon} />
                <h3 className="font-bold flex items-center h-[25px] ">
                  Onboarding
                </h3>
              </div>
            </div>
          )}

          <h3 className="hidden text-xs font-bold lg:block">{t('datahub.data')}</h3>

          <div
            className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "upload" && "bg-indigo-200 text-[#333]" } `}
            onClick={() => changeMenuUrl("upload")}
          >
            <img className="h-4 mr-2" src={UploadIcon} />
            <h3 className="font-bold flex items-center h-[25px] ">
            {t('datahub.upload')}
            </h3>
          </div>

          <div
            className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "download" && "bg-indigo-200 text-[#333]" } `}
            onClick={() => changeMenuUrl("download")}
          >
            <img className="h-4 mr-2" src={DownloadIcon} />
            <h3 className="font-bold flex items-center h-[25px]">
            {t('datahub.download')}
            </h3>
          </div>

          <div
            className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "data" && "bg-indigo-200 text-[#333]" } `}
            onClick={() => changeMenuUrl("data")}
          >
            <img className="h-4 mr-2" src={ChartIcon} />
            <h3 className="font-bold flex items-center h-[25px] ">
            {t('datahub.dataview')}
            </h3>
          </div>

          <h3 className="hidden text-xs font-bold lg:block">{t('datahub.project')}</h3>
          <div
            className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "contribution" && "bg-indigo-200 text-[#333]" } `}
            onClick={() => changeMenuUrl("contribution")}
          >
            <img className="h-4 mr-2" src={ContributionIcon} />
            <h3 className="font-bold flex items-center h-[25px] ">
            {t('datahub.contribution')}
            </h3>
          </div>

          <div
            className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "bugs" && "bg-indigo-200 text-[#333]" } `}
            onClick={() => changeMenuUrl("bugs")}
          >
            <img className="h-4 mr-2" src={BugIcon} />
            <h3 className="font-bold flex items-center h-[25px] ">
            {t('datahub.bug')}
            </h3>
          </div>

          <div className={`flex flex-col items-center text-xs lg:text-[16px] lg:flex-row lg:hover:bg-indigo-100 lg:py-2 lg:px-3 lg:hover:text-indigo-800 rounded-md  ${searchParams.get("menuPage") === "settings" && "bg-indigo-200 text-[#333]" } `}>
            <img className="h-4 mr-2" src={SettingsIcon} />
            <h3 className="font-bold flex items-center h-[25px] ">
            {t('datahub.settings')}
            </h3>
          </div>

          <div className="absolute left-0 flex justify-around w-full px-3 pt-3 overflow-hidden bottom-4">
            {isAuthenticated ?(
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex gap-2">
                  <div className="flex justify-center items-center bg-gray-200 rounded-full h-[40px] w-[40px] font-bold">
                    <p>{initials}</p>
                  </div>
                  <div className="max-w-[170px]">
                    <h4 className="text-sm font-semibold truncate">{user.name}</h4>
                    <p className="text-xs truncate">{user.email}</p>
                  </div>
                </div>
                <LogoutButton />
              </div>
            ) : <LoginButton />}
          </div>
        </div>
      </div>
      <div className="w-full mb-14 sm:mb-0">
        {searchParams.get("menuPage") === "dashboard" && <Dashboard t={t} />}
        {searchParams.get("menuPage") === "quickactions" && <QuickActions t={t} />}
        {searchParams.get("menuPage") === "onboarding" && <Onboarding />}
        {searchParams.get("menuPage") === "upload" && <FileUpload t={t} />}
        {searchParams.get("menuPage") === "download" && <FileDownload t={t} />}
        {searchParams.get("menuPage") === "contribution" && <Contribution />}
        {searchParams.get("menuPage") === "bugs" && <BugReport t={t}/>}
      </div>
      <MobileDashboardMenu />
    </div>
  );
}
