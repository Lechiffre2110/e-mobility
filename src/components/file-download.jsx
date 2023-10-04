import DataTable from "./data-table";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function FileDownload() {
  const { t } = useTranslation();


  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
      {t('datahub.download.header')}
      </h2>
      <p className="my-6 text-center">
      {t('datahub.download.text')}
        
      </p>

      <DataTable />
      
    </>
  );
}
