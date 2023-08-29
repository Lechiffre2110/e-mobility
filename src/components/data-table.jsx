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
    console.log(tempData);

    if (selectedCar && selectedCar !== "other") {
      tempData = tempData.filter((d) => d.model === selectedCar);
    }

    if (startDate) {
      tempData = tempData.filter(
        (d) => new Date(d.uploadDate) >= new Date(startDate)
      );
    }

    if (endDate) {
      tempData = tempData.filter(
        (d) => new Date(d.uploadDate) <= new Date(endDate)
      );
    }

    setFilteredData(tempData);
  }, [selectedCar, startDate, endDate, filteredData]);

  const handleFilter = () => {
    setFilteredData(filteredData);
  };

  function downloadFile(id) {
    console.log(id);
    const downloadUrl = `${BASE_URL}/data/download/${id}`;
    const a = document.createElement("a");
    a.href = downloadUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      <div className="rounded-2xl w-[97%] ml-[2%] bg-white h-[74%] px-[3%] py-[2%]">
        <div className="flex p-[10px] w-[100%] min-w-max rounded-md bg-white shadow-[0_2px_10px] shadow-blackA7 items-center mb-3">
          <div className="flex flex-col gap-4 w-[100%]">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1 w-[100%]">
                <label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Fahrzeug
                </label>
                <DropdownMenu
                  label="Fahrzeug"
                  description="Fahrzeug auswählen"
                  data={cars}
                  onChange={(value) => setSelectedCar(value)}
                />
              </div>
              <div className="flex flex-row gap-1 w-[50%]">
                <label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Von
                </label>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-1 w-[50%]">
                <label className="text-[15px] font-medium leading-[35px] text-gray-700">
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
        </table>
        <div className="overflow-y-auto max-h-[250px]">
          <table className="w-full">
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
                        className="px-[10px] text-white bg-violet9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                        onClick={() => downloadFile(data.id)}
                      >
                        Herunterladen
                      </button>
                    </td>
                    {props.isAdmin && (
                      <td className="px-5 py-3">
                        <button
                          className="px-[10px] text-white bg-violet9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
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
        <button className="px-[10px] text-white bg-violet9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 mt-5">
          Alle Datensätze herunterladen
        </button>
      </div>
    </>
  );
}
