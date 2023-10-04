import { useState } from "react";
import { Button } from "primereact/button";
import * as Form from "@radix-ui/react-form";
import DropdownMenu from "./dropdown-menu";
import OnboardingDialog from "./onboarding-dialog";
import axios from "axios";
import { useTranslation } from "react-i18next";


export default function Contribution() {
  const { t } = useTranslation();
    const rollen = [
        { name: "Professor", value: "professor" },
        { name: "Student (HTW)", value: "student" },
        { name: "Extern", value: "other" },
    ];

    const [selectedRolle, setSelectedRolle] = useState("");
    
    async function submitForm(event) {
      const BASE_URL = "http://localhost:5555/api";
      event.preventDefault();
      
      const formData = new FormData(event.target);
      formData.append("role", selectedRolle);
  
      try {
          const response = await axios.post(`${BASE_URL}/contributors`, formData);
          event.target.reset();
      } catch (error) {
          console.error("Error submitting form:", error);
      }
  }  
    
  return (
    <>
    <div className="h-16  bg-white lg:w-[97%] lg:ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold justify-between border">
      <h2 className="text-xl lg:text-2xl">
      {t('datahub.contribution.header')}

      </h2>
      <OnboardingDialog />
      </div>
      <p className="my-6 text-center">
      {t('datahub.contribution.text')}
      </p>

      <Form.Root
          className="lg:w-[97%] lg:ml-[2%] flex flex-col px-5 lg:px-0 lg:flex-row justify-around bg-white rounded-2xl py-5 mt-3 h-auto"
          onSubmit={submitForm}
        >
          <div className="flex flex-col lg:w-[40%]">
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.email')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.contribution.email.placeholder')}
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                  {t('datahub.contribution.email.valid')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="email"
                  required
                  placeholder={t('datahub.contribution.email.placeholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.name')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.contribution.name.placeholder')}
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                 {t('datahub.contribution.name.valid')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  required
                  placeholder={t('datahub.contribution.name.placeholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="description">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.description')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.contribution.description.placeholder')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  required
                  rows="4"
                  placeholder={t('datahub.contribution.description.placeholder')}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col lg:w-[40%]">
            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.role')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.contribution.role.placeholder')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <DropdownMenu
                  label={t('datahub.contribution.role.dropdown.header')}
                  description={t('datahub.contribution.role.placeholder')}
                  data={rollen}
                  onChange={(value) => setSelectedRolle(value)}
                />
              </Form.Control>
            </Form.Field>
            
            <Form.Field className="grid mb-[10px]" name="linkedin">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.linkedin')}
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="LinkedIn Link (optional)"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="github">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.contribution.github')}
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="Github Link (optional)"
                />
              </Form.Control>
            </Form.Field>
            
            <Form.Submit asChild>
              <div className="flex flex-row items-center justify-center mt-2">
                <Button
                  className="w-[50%] m-auto z-10"
                  label={t('datahub.contribution.submitbutton')}
                  rounded
                />
              </div>
            </Form.Submit>
          </div>
        </Form.Root>
    </>
  );
}
