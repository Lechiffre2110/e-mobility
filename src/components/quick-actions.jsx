import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import DropdownMenu from "./dropdown-menu";
import { useTranslation } from "react-i18next";



export default function QuickActions() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
      Quick Actions
      </h2>
      
    </>
  );
}
