import { useState } from "react";
import { Button } from "primereact/button";
import * as Form from "@radix-ui/react-form";
import DropdownMenu from "./dropdown-menu";
import OnboardingDialog from "./onboarding-dialog";
import axios from "axios";

export default function Contribution() {

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
          console.log(response.data);
      } catch (error) {
          console.error("Error submitting form:", error);
      }
  }  
    
  return (
    <>
    <div className="h-16  bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold justify-between">
      <h2 className="text-2xl">
        Mitwirkung beantragen
      </h2>
      <OnboardingDialog />
      </div>
      <p className="my-6 text-center">
        Hier haben Sie die Möglichkeit, sich für eine Mitwirkung am Projekt zu bewerben <br />
        Dies können Sie entweder als Student der HTW Berlin oder als externer Mitwirkender tun, falls Sie einen Beitrag zum Projekt geleistet haben
      </p>

      <Form.Root
          className="w-[97%] ml-[2%] flex flex-row justify-around bg-white rounded-2xl py-5 mt-3 h-auto"
          onSubmit={submitForm}
        >
          <div className="flex flex-col w-[40%]">
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Email
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte geben Sie eine Email an
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                  Bitte geben Sie eine valide Email an
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="email"
                  required
                  placeholder="Gib deine Email Adresse ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Name
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib einen Namen an
                </Form.Message>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="typeMismatch"
                >
                  Bitte gib einen gültigen Namen an
                </Form.Message>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  required
                  placeholder="Gib deinen Namen ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="grid mb-[10px]" name="description">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Beschreibung
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte beschreibe deine Tätigkeit im Projekt
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  required
                  rows="4"
                  placeholder="Bitte beschreibe deine Tätigkeit im Projekt"
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[40%]">
            <Form.Field className="grid mb-[10px]" name="name">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Rolle
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib deine Rolle an
                </Form.Message>
              </div>

              <Form.Control asChild>
                <DropdownMenu
                  label="Rollen"
                  description="Wähle eine Rolle aus"
                  data={rollen}
                  onChange={(value) => setSelectedRolle(value)}
                />
              </Form.Control>
            </Form.Field>
            
            <Form.Field className="grid mb-[10px]" name="linkedin">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  LinkedIn
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
                  Github
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
                  label="Absenden"
                  rounded
                />
              </div>
            </Form.Submit>
          </div>
        </Form.Root>
    </>
  );
}
