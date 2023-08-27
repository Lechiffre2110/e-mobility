import DataTable from "./data-table";
import React, { useState, useEffect } from "react";

export default function FileDownload() {
  

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold">
        Daten herunterladen
      </h2>
      <p className="my-6 text-center">
        Hier haben Sie die Möglichkeit vorhandene Datensätze herunterzuladen
        <br />
        Wählen Sie dafür einen bestimmten Datensatz aus oder laden Sie alle
        Datensätze runter
        <br />
      </p>

      <DataTable />
      
    </>
  );
}
