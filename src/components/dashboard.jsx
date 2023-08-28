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

export default function Dashboard() {
  const [bugs, setBugs] = useState([]);
  const [requests, setRequests] = useState([]);
  const [contributorCount, setContributorCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [bugCount, setBugCount] = useState(0);

  const getBugs = async () => {
    const res = await fetch("http://localhost:5555/bug/get");
    const data = await res.json();
    setBugs(data.data);
    let count = 0;
    data.data.forEach((bug) => {
      if (!bug.resolved) {
        count++;
      }
    }
    );
    setBugCount(count);
  };

  const getRequests = async () => {
    const res = await fetch("http://localhost:5555/api/get");
    const data = await res.json();
    setRequests(data.data);
    let countApproved = 0;
    let countPending = 0;
    data.data.forEach((request) => {
      if (request.approved) {
        countApproved++;
      } else {
        countPending++;
      }
    }
    );
    setContributorCount(countApproved);
    setRequestCount(countPending);
  };

  useEffect(() => {
    getBugs();
    getRequests();
  }, []);

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] mx-[2%] rounded-lg flex items-center px-5 text-gray-700 font-bold border">
        Dashboard
      </h2>

      <div className="grid grid-cols-5 gap-3 w-[97%] mx-[2%]">
        <DashboardStat
          title="Mitwirkende"
          value={contributorCount}
          icon={UserIcon}
          order="1"
        />
        <DashboardStat
          title="Datensätze"
          value="10"
          icon={DataIcon}
          order="2"
        />
        <DashboardStat title="Bugs" value={bugCount} icon={BugIcon} order="3" />
        <DashboardStat
          title="Anfragen"
          value={requestCount}
          icon={RequestIcon}
          order="4"
        />
        <DashboardStat
          title="Vorschläge"
          value="7"
          icon={SuggestionIcon}
          order="4"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 ml-[2%] w-[97%]">
        <div className="flex flex-row justify-around h-auto py-5 mt-3 text-[#333] bg-white border rounded-xl">
          <div className="w-full px-5">
            <h2 className="mb-4 font-bold text-gray-500 text-md">Requests</h2>
            <div className="flex flex-col justify-between w-full">
              {requests.map((request) => {
                if (request.approved) {
                  return;
                }
                return (
                  <div>
                    <div className="flex flex-row justify-between w-full py-2 text-[14px] font-semibold items-center">
                      <div className="flex">
                        <h3>{request.name} -</h3>
                        <h3 className="ml-1 text-gray-500">{request.role}</h3>
                      </div>
                      <ContributionDialog
                        id={request._id}
                        name={request.name}
                        mail={request.email}
                        role={request.role}
                        description={request.description}
                      />
                    </div>
                    <HorizontalSeparator />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="ml-[2%] flex flex-row justify-around bg-white rounded-xl py-5 px-5 mt-3 h-auto">
          <div className="w-full">
            <h2 className="mb-4 font-bold text-gray-500 text-md">Bugs</h2>
            <div className="flex flex-col text-[14px] font-semibold items-center">
              {bugs.map((bug) => {
                if (bug.resolved) {
                  return;
                }
                  
                return (
                  <div className="w-full">
                    <div className="flex flex-row items-center justify-between item">
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

        <div className="flex flex-row justify-around h-auto py-5 mt-3 text-[#333] bg-white border rounded-xl">
          <div className="w-full px-5">
            <h2 className="mb-4 font-bold text-gray-500 text-md">Onboarding Requests</h2>
            <div className="flex flex-col justify-between w-full">
              {requests.map((request) => {
                return (
                  <div>
                    <div className="flex flex-row justify-between w-full py-2 text-[14px] font-semibold items-center">
                      <div className="flex">
                        <h3>{request.name}</h3>
                      </div>
                      <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                        Senden
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
        <DataTable isAdmin={true} />
      </div>
    </>
  );
}
