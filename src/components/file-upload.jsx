import { useState, useRef, forwardRef } from "react";
import { Button } from "primereact/button";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Form from "@radix-ui/react-form";
import * as Toast from "@radix-ui/react-toast";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import DropdownMenu from "./dropdown-menu";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function fileUpload() {
  const [open, setOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const { t } = useTranslation();

  const cars = [
    { name: "VW ID.3", value: "VW ID.3" },
    { name: "Toyota Mirai", value: "Toyota Mirai" },
    { name: t('datahub.upload.car.dropdown.others'), value: t('datahub.upload.car.dropdown.others') },
  ];


  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("model", selectedCar);
    const currentFileName = formData.get("file").name;
    setToastDescription("Dateiname: " + currentFileName);
    toggleToast("Datei wird hochgeladen");
    uploadData(formData);
    event.target.reset();
  }

  function toggleToast(title, shouldOpen = null) {
    setToastTitle(title);
    if (shouldOpen !== null) {
      setOpen(shouldOpen);
    } else {
      setOpen((prevOpen) => !prevOpen);
    }
  }

  async function uploadData(formData) {
    const BASE_URL = "http://localhost:5555/api";
    try {
      const res = await axios.post(`${BASE_URL}/data`, formData);
      //TODO: remove delay in production
      setTimeout(() => {
        setOpen(false);
        setToastDescription(res.message)
        toggleToast("Datei wurde hochgeladen", true);
      }, 2000);
    } catch (error) {
      console.error("Error uploading data:", error);
      setToastDescription(res.message)
      toggleToast("Fehler beim Hochladen", true);
    }
  }

  return (
    <>
      <Toast.Provider swipeDirection="right" duration={1500}>
        <h2 className="h-16 text-2xl bg-white lg:w-[97%] lg:ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border">
        {t('datahub.upload.header')}
        </h2>
        <p className="my-6 text-center">
        {t('datahub.upload.text')}
        </p>
        <Form.Root
          className="lg:w-[97%] lg:ml-[2%] flex flex-col lg:flex-row justify-around bg-white rounded-2xl py-5 mt-3 h-auto border"
          onSubmit={submitForm}
        >
          <div className="px-5 flex flex-col lg:w-[40%] lg:p-0">
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.upload.email')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.upload.email')}
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                 {t('datahub.upload.email.valid')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="email"
                  required
                  placeholder={t('datahub.upload.email.placeholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.upload.name')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.upload.name.placeholder')}
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                 {t('datahub.upload.name.valid')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  required
                  placeholder={t('datahub.upload.name.placeholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="description">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.upload.description')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.upload.description.placeholder')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  required
                  rows="4"
                  placeholder={t('datahub.upload.description.placeholder')}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="px-5 flex flex-col lg:w-[40%] lg:p-0">
            <Form.Field className="grid mb-[10px]" name="model">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.upload.car')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.upload.car.placeholder')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <DropdownMenu
                  label={t('datahub.upload.car.dropdown.header')}
                  description={t('datahub.upload.car.placeholder')}
                  data={cars}
                  onChange={(value) => setSelectedCar(value)}
                />
              </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="file">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                {t('datahub.upload.file')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.upload.file.missing')}
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                  {t('datahub.upload.file.valid')}
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="h-16 text-sm text-gray-400 p-4 bg-[#f6f6f6] rounded-lg file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 mb-8"
                  type="file"
                  required
                  accept=".csv"
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <div className="flex flex-row items-center justify-center">
                <Button
                  className="w-[50%] m-auto z-10"
                  label={t('datahub.upload.uploadbutton')}
                  rounded
                />
              </div>
            </Form.Submit>
          </div>
        </Form.Root>

        <Toast.Root
          className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
            {toastTitle}
          </Toast.Title>
          <Toast.Description asChild>
            <p className="m-0 text-slate11 text-[13px] leading-[1.3]">
              {toastDescription}
            </p>
          </Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
              Undo
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </>
  );
}
