import { useState, useEffect } from "react";
import DropdownMenu from "./dropdown-menu";
import axios from "axios";
import HorizontalSeparator from "./horizontal-separator";
import { useTranslation } from "react-i18next";

/**
 * Component for the data table in the dashboard and download section of the project hub.
 * @param {*}
 */
export default function DataTable(props) {
  const { t } = useTranslation();
  const BASE_URL = "http://localhost:5555/api";
  const cars = [
    { name: "Toyota Mirai", value: "Toyota Mirai" },
    { name: "VW ID.3", value: "VW ID.3" },
    { name: t("datahub.download.others"), value: "other" },
  ];

  // States for the filters
  const [selectedCar, setSelectedCar] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  /**
   * Fetches all available datasets from the backend.
   */
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/data`);
      setData(response.data.data);
      setFilteredData(response.data.data);
      let counter = 0;
      response.data.data.forEach((data) => {
        counter++;
      });
      if (props.setDataCount) {
        props.setDataCount(counter);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /**
   * Fetches all available datasets from the backend on component mount.
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Filters the data based on the selected filters.
   * If no filters are selected, all data is shown.
   * If a filter is selected, the data is filtered by the selected filter.
   * If multiple filters are selected, the data is filtered by all selected filters.
   * If a filter is deselected, the data is filtered by the remaining filters.
   */
  useEffect(() => {
    if (!filteredData && !data) return;

    let tempData = data;

    if (selectedCar && selectedCar !== "other") {
      tempData = tempData.filter((d) => d.model === selectedCar);
    }

    if (startDate) {
      tempData = tempData.filter(
        (d) =>
          convertToDateObject(d.uploadDate) >= convertToDateObject(startDate)
      );
    }

    if (endDate) {
      tempData = tempData.filter(
        (d) => convertToDateObject(d.uploadDate) <= convertToDateObject(endDate)
      );
    }

    setFilteredData(tempData);
  }, [selectedCar, startDate, endDate]);

  /**
   * Converts a date string to a date object.
   * @param {*} dateString the date string to convert
   * @returns the converted date object
   */
  function convertToDateObject(dateString) {
    const [day, month, year] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
  }

  /**
   * Downloads a file from the backend.
   * @param {*} id the id of the file to download
   * @returns the file
   */
  function downloadFile(id) {
    const downloadUrl = `${BASE_URL}/data/download/${id}`;
    const a = document.createElement("a");
    a.href = downloadUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * Downloads all files from the backend.
   * @returns all files as a zip file
   */
  function downloadAllFiles() {
    const downloadUrl = `${BASE_URL}/data/download`;
    const a = document.createElement("a");
    a.href = downloadUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      <div className="rounded-2xl w-[97%] ml-[2%] bg-white h-[74%] px-[3%] py-[2%]">
        <div className="flex w-[100%]  rounded-md bg-white items-center mb-3">
          <div className="flex flex-col gap-4 w-[100%]">
            <div className="flex gap-4 lg:flex-row">
              <div className="flex flex-col lg:flex-row gap-1 w-[100%]">
                <label className="lg:text-[15px] text-[12px] font-medium lg:leading-[35px] text-gray-700">
                  {t("datahub.download.car.header")}
                </label>
                <DropdownMenu
                  label={t("datahub.download.car.description")}
                  description={t("datahub.download.car.dropdown.placeholder")}
                  data={cars}
                  onChange={(value) => setSelectedCar(value)}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-1 w-[50%]">
                <label className="lg:text-[15px] text-[12px] font-medium lg:leading-[35px] text-gray-700">
                  {t("datahub.download.date.start")}
                </label>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-1 w-[50%]">
                <label className="lg:text-[15px] text-[12px] font-medium lg:leading-[35px] text-gray-700">
                  {t("datahub.download.date.end")}
                </label>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="lg:hidden">
              <HorizontalSeparator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-x-auto overflow-y-auto max-h-[350px]">
          <table className="w-full mb-3">
            <thead>
              <tr className="text-left">
                <th className="px-5 py-3 font-bold text-gray-700">
                  {t("datahub.download.date.header")}
                </th>
                <th className="px-5 py-3 font-bold text-gray-700">
                  {t("datahub.download.car.header")}
                </th>
                <th className="px-5 py-3 font-bold text-gray-700">
                  {t("datahub.download.description.header")}
                </th>
                <th className="px-5 py-3 font-bold text-gray-700">
                  {t("datahub.download.download.header")}
                </th>
                {props.isAdmin && (
                  <th className="px-5 py-3 font-bold text-gray-700">
                    {t("datahub.download.delete")}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData.map((data) => (
                  <tr
                    key={data.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-5 py-3">{data.uploadDate}</td>
                    <td className="px-5 py-3">{data.model}</td>
                    <td className="px-5 py-3">{data.description}</td>
                    <td className="px-5 py-3">
                      <button
                        className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px]"
                        onClick={() => downloadFile(data.id)}
                      >
                        {t("datahub.download.download.header")}
                      </button>
                    </td>
                    {props.isAdmin && (
                      <td className="px-5 py-3">
                        <button
                          className="bg-red4 text-red11 hover:bg-red5 focus:shadow-red7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px]"
                          onClick={() => props.deleteData(data.id)}
                        >
                          {t("datahub.download.delete")}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <button
          className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px] mt-5"
          onClick={downloadAllFiles}
        >
          {t("datahub.download.downloadbutton")}
        </button>
      </div>
    </>
  );
}
