import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import DropdownMenu from "./dropdown-menu";
import { useTranslation } from "react-i18next";



export default function BugReport() {
  const { t } = useTranslation();
  const [selectedCar, setSelectedCar] = useState("");

  const cars = [
    { name: "VW ID.3", value: "VW ID.3" },
    { name: "Toyota Mirai", value: "Toyota Mirai" },
    { name: t('datahub.bug.car.dropdown.others'), value: "Sonstiges" },
  ];

  const submitBug = async (event) => {
    const BASE_URL = "http://localhost:5555/api";
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append("model", selectedCar);

    try {
      //axios not working here
      await fetch(`${BASE_URL}/bugs`, {
        method: "POST",
        body: formData,
      });
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
      {t('datahub.bug.header')}
      </h2>
      <Form.Root onSubmit={submitBug}>
        <div className="lg:w-[40%] mt-14 m-auto flex flex-col justify-center bg-white rounded-2xl py-5 items-center border lg:border-0">
          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="contact">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.bug.contact')}
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder={t('datahub.bug.contact.placeholder')}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="title">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.bug.title')}
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder={t('datahub.bug.title.placeholder')}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="model">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.bug.car')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.bug.car.missing')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <DropdownMenu
                  label={t('datahub.bug.car.dropdown.header')}
                  description={t('datahub.bug.car.placeholder')}
                  data={cars}
                  onChange={(value) => setSelectedCar(value)}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="description">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.bug.description')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.bug.description.placeholder')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  required
                  rows="4"
                  placeholder={t('datahub.bug.description.placeholder')}
                />
              </Form.Control>
            </Form.Field>
          </div>
          <Form.Submit asChild>
            <div className="flex flex-row items-center justify-center">
              <button className="mt-2 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
              {t('datahub.bug.submitbutton')}
              </button>
            </div>
          </Form.Submit>
        </div>
      </Form.Root>
    </>
  );
}
