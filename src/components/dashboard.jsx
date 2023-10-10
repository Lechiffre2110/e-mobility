import { useEffect, useState } from "react";
import BugDialog from "./bug-dialog";
import ContributionDialog from "./contribution-dialog";
import HorizontalSeparator from "./horizontal-separator";
import DashboardStat from "./dashboard-stat";
import UserIcon from "../assets/users.svg";
import BugIcon from "../assets/alert-triangle.svg";
import DataIcon from "../assets/file.svg";
import RequestIcon from "../assets/git-branch.svg";
import SuggestionIcon from "../assets/message.svg";
import DataTable from "./data-table";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

/**
 * Component for the dashboard page.
 */
export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [bugs, setBugs] = useState([]);
  const [requests, setRequests] = useState([]);
  const [onboardingRequests, setOnboardingRequests] = useState([]);
  const [contributorCount, setContributorCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [bugCount, setBugCount] = useState(0);
  const [dataCount, setDataCount] = useState(0);
  const [pageReload, setPageReload] = useState(false);
  const { t } = useTranslation();
  const BASE_URL = "http://localhost:5555/api";

  /**
   * Fetches all bugs from the backend and sets the bug count to the number of unresolved bugs.
   */
  const getBugs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/bugs`);
      const data = response.data;
      setBugs(data.data);

      const unresolvedBugsCount = data.data
        ? data.data.filter((bug) => !bug.resolved).length
        : 0;
      setBugCount(unresolvedBugsCount);
    } catch (error) {
      console.error("Error fetching bugs:", error);
    }
  };

  /**
   * Fetches all requests from the backend and sets the contributor count to the number of approved requests and the request count to the number of pending requests.
   */
  const getRequests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/contributors`);
      const data = response.data;

      setRequests(data.data);

      const countApproved = data.data
        ? data.data.filter((request) => request.approved).length
        : 0;
      const countPending = data.data
        ? data.data.filter((request) => !request.approved).length
        : 0;

      setContributorCount(countApproved);
      setRequestCount(countPending);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  /**
   * Fetches all onboarding requests from the backend.
   */
  const getOnboardingRequests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/onboarding`);
      setOnboardingRequests(response.data.data);
    } catch (error) {
      console.error("Error fetching onboarding requests:", error);
    }
  };

  /**
   * accept the onboarding request of the contributor passed in props in the backend.
   * @param {*} id the id of the contributor
   */
  const acceptOnboardingRequest = async (id) => {
    try {
      await axios.put(`${BASE_URL}/onboarding/${id}/accept`);
      setPageReload(!pageReload);
    } catch (error) {
      console.error("Error accepting onboarding request:", error);
    }
  };

  /**
   * Reloads the page.
   * This is used to update the dashboard after a bug or request was resolved.
  */
  const reload = () => {
    setPageReload(!pageReload);
  };

  /**
   * Fetches all bugs, requests and onboarding requests from the backend on component mount.
   */
  useEffect(() => {
    getBugs();
    getRequests();
    getOnboardingRequests();
  }, [pageReload]);

  // Loading screen
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Unauthorized screen if user is not authenticated
  if (!isAuthenticated) {
    return <div className="m-auto">Unauthorized</div>;
  }

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] mx-[2%] rounded-xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
        Dashboard
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 w-[97%] mx-[2%]">
        <DashboardStat
          title={t("datahub.dashboard.contributors")}
          value={contributorCount}
          icon={UserIcon}
          order="1"
        />
        <DashboardStat
          title={t("datahub.dashboard.datasets")}
          value={dataCount}
          icon={DataIcon}
          order="2"
        />
        <DashboardStat title="Bugs" value={bugCount} icon={BugIcon} order="3" />
        <DashboardStat
          title={t("datahub.dashboard.requests")}
          value={requestCount}
          icon={RequestIcon}
          order="4"
        />
        <div className="hidden lg:block">
          <DashboardStat
            title={t("datahub.dashboard.suggestions")}
            value="7"
            icon={SuggestionIcon}
            order="4"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-2 ml-[2%] w-[97%] overflow-hidden">
        <div className="flex flex-row justify-around h-auto py-5 mt-3 text-[#333] bg-white border lg:border-0 rounded-xl">
          <div className="w-full px-5">
            <h2 className="mb-4 font-bold text-gray-500 text-md">
              {t("datahub.dashboard.requests")}
            </h2>
            <div className="flex flex-col justify-between w-full max-h-[250px] overflow-y-auto">
              {requestCount === 0 && (
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[14px] font-semibold text-gray-500">
                    {t("datahub.dashboard.noRequests")}
                  </h3>
                </div>
              )}
              {requests &&
                requests.map((request) => {
                  if (request.approved) {
                    return;
                  }
                  return (
                    <div>
                      <div className="flex flex-row justify-between w-full py-2 text-[14px] font-semibold items-center max-h-[250px] overflow-y-auto">
                        <div className="flex flex-col">
                          <h3>{request.name}</h3>
                          <div className="flex flex-row items-center px-2 border text-[12px] font-normal rounded-full w-min justify-center gap-1 text-gray-500">
                            <h3 className="">{request.role}</h3>
                          </div>
                        </div>
                        <ContributionDialog
                          id={request._id}
                          name={request.name}
                          mail={request.email}
                          role={request.role}
                          description={request.description}
                          reload={reload}
                        />
                      </div>
                      <HorizontalSeparator />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around h-auto px-5 py-5 mt-3 bg-white border rounded-xl lg:border-0">
          <div className="w-full">
            <h2 className="mb-4 font-bold text-gray-500 text-md">
              {t("datahub.dashboard.bugs")}
            </h2>
            <div className="flex flex-col text-[14px] font-semibold items-center max-h-[250px] overflow-y-auto">
              {bugCount === 0 && (
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-gray-500">
                    {t("datahub.dashboard.noBugs")}
                  </h3>
                </div>
              )}
              {bugs &&
                bugs.map((bug) => {
                  if (bug.resolved) {
                    return;
                  }

                  return (
                    <div className="w-full">
                      <div className="flex flex-row items-center justify-between py-2">
                        <p className="max-w-[70%] overflow-hidden whitespace-nowrap overflow-ellipsis">
                          {bug.title}
                        </p>
                        <div>
                          <BugDialog
                            id={bug._id}
                            title={bug.title}
                            model={bug.model}
                            description={bug.description}
                            contact={bug.contact}
                            reload={reload}
                          />
                        </div>
                      </div>
                      <HorizontalSeparator />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around h-auto py-5 mt-3 text-[#333] bg-white border rounded-xl lg:border-0">
          <div className="w-full px-5">
            <h2 className="mb-4 font-bold text-gray-500 text-md">
              {t("datahub.dashboard.onboarding")}
            </h2>
            <div className="flex flex-col justify-between w-full">
              {onboardingRequests && onboardingRequests.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-[14px] font-semibold text-gray-500">
                    {t("datahub.dashboard.noOnboarding")}
                  </h3>
                </div>
              )}
              {onboardingRequests &&
                onboardingRequests.map((request) => {
                  return (
                    <div>
                      <div className="flex flex-row justify-between w-full py-2 text-[14px] font-semibold items-center">
                        <div className="flex">
                          <h3>{request.name}</h3>
                        </div>
                        <button
                          className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                          onClick={() => acceptOnboardingRequest(request._id)}
                        >
                          {t("button.send")}
                        </button>
                      </div>
                      <HorizontalSeparator />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <DataTable isAdmin={true} setDataCount={setDataCount} />
      </div>
    </>
  );
}
