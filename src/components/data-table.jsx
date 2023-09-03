import { useState, useEffect } from "react";
import DropdownMenu from "./dropdown-menu";
import axios from "axios";

export default function DataTable(props) {
  const BASE_URL = "http://localhost:5555/api";
  const cars = [
    { name: "Toyota Mirai", value: "Toyota Mirai" },
    { name: "VW ID.3", value: "VW ID.3" },
    { name: "Sonstiges", value: "other" },
  ];

  const [selectedCar, setSelectedCar] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!filteredData && !data) return;

    let tempData = data;

    if (selectedCar && selectedCar !== "other") {
      tempData = tempData.filter((d) => d.model === selectedCar);
    }
  
    if (startDate) {
      tempData = tempData.filter((d) => convertToDateObject(d.uploadDate) >= convertToDateObject(startDate));
    }

    if (endDate) {
      tempData = tempData.filter((d) => convertToDateObject(d.uploadDate) <= convertToDateObject(endDate));
    }

    setFilteredData(tempData);
  }, [selectedCar, startDate, endDate]);

  // Converts "dd.mm.yyyy" to "yyyy-mm-dd"
  function convertToDateObject(dateString) {
    const [day, month, year] = dateString.split('.');
    return new Date(`${year}-${month}-${day}`);
  }

  function downloadFile(id) {
    const downloadUrl = `${BASE_URL}/data/download/${id}`;
    const a = document.createElement("a");
    a.href = downloadUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

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
                    Fahrzeug
                </label>
                <DropdownMenu
                    label="Fahrzeug"
                    description="Fahrzeug auswählen"
                    data={cars}
                    onChange={(value) => setSelectedCar(value)}
                                    />
            </div>
            <div className="flex flex-col lg:flex-row gap-1 w-[50%]">
                <label className="lg:text-[15px] text-[12px] font-medium lg:leading-[35px] text-gray-700">
                    Von
                </label>
                <input
                    className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="flex flex-col lg:flex-row gap-1 w-[50%]">
                <label className="lg:text-[15px] text-[12px] font-medium lg:leading-[35px] text-gray-700">
                    Bis
                </label>
                <input
                    className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                />
                </div>
        </div>
    </div>
        </div>
        <div className="flex flex-col gap-4 overflow-x-auto overflow-y-auto max-h-[350px]">
        <table className="w-full mb-3">
          <thead>
            <tr className="text-left">
              <th className="px-5 py-3 font-bold text-gray-700">Datum</th>
              <th className="px-5 py-3 font-bold text-gray-700">Fahrzeug</th>
              <th className="px-5 py-3 font-bold text-gray-700">
                Beschreibung
              </th>
              <th className="px-5 py-3 font-bold text-gray-700">Download</th>
              {props.isAdmin && (
                <th className="px-5 py-3 font-bold text-gray-700">Löschen</th>
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
                        Herunterladen
                      </button>
                    </td>
                    {props.isAdmin && (
                      <td className="px-5 py-3">
                        <button
                          className="bg-red4 text-red11 hover:bg-red5 focus:shadow-red7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none text-[14px]"
                          onClick={() => props.deleteData(data.id)}
                        >
                          Löschen
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
          Alle Datensätze herunterladen
        </button>
      </div>
    </>
  );
}
