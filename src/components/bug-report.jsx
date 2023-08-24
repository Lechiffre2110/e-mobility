import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import DropdownMenu from "./dropdown-menu";

export default function BugReport() {
    const [selectedCar, setSelectedCar] = useState("");

  const cars = [
    { name: "VW ID.3", value: "VW ID.3" },
    { name: "Toyota Mirai", value: "Toyota Mirai" },
    { name: "Sonstiges", value: "Sonstiges" },
  ];
        

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold">
        Bug melden
      </h2>
      <Form.Root>
        <div className="w-[40%] mt-14 m-auto flex flex-col justify-center bg-white rounded-2xl py-5 items-center">
          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="contact">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Kontakt
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="Gib eine Kontaktmöglichkeit an (optional)"
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[90%] m-auto">
            <Form.Field className="grid mb-[10px]" name="contact">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Bug Titel
                </Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="Gib dem Bug einen Titel"
                />
              </Form.Control>
            </Form.Field>
          </div>

          <div className="flex flex-col w-[90%] m-auto">
          <Form.Field className="grid mb-[10px]" name="model">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                  Fahrzeug
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib ein Modell an
                </Form.Message>
              </div>

              <Form.Control asChild>
                <DropdownMenu
                  label="Fahrzeug"
                  description="Wähle ein Fahrzeug aus"
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
                  Beschreibung
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte beschreiben Sie den Bug
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  required
                  rows="4"
                  placeholder="Bitte beschreiben Sie den Bug so genau wie möglich"
                />
              </Form.Control>
            </Form.Field>
          </div>
          <Form.Submit asChild>
            <div className="flex flex-row items-center justify-center">
              <button className="mt-2 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                Bug melden
              </button>
            </div>
          </Form.Submit>
        </div>
      </Form.Root>
    </>
  );
}
