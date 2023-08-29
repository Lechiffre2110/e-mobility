import { useState } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Cross2Icon } from "@radix-ui/react-icons";
import HorizontalSeparator from "./horizontal-separator";

export default function OnboardingDialog() {
  const [open, setOpen] = useState(false);

  async function submitForm(event) {
    const BASE_URL = "http://localhost:5555/api";
    
    event.preventDefault();
    const formData = new FormData(event.target);
    const res = await axios.post(`${BASE_URL}/onboarding`, {
      name: formData.get("name"),
      email: formData.get("email"),
    });
    setOpen(false);
    console.log(res);
  }

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
            Onboarding
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Onboarding Formular
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Gib hier Deinen Namen und Deine Email Adresse ein und du erhälst
              in Kürze eine Onboarding Email.
            </Dialog.Description>
            <Form.Root onSubmit={submitForm}>
              <Form.Field name="name">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-mauve11 text-[12px] mb-2">
                    NAME
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-gray-700 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Bitte gib deinen Namen an
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

              <Form.Field name="email" className="my-5">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-mauve11 text-[12px] mb-2">
                    EMAIL
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
                    placeholder="Gib deine Email ein"
                  />
                </Form.Control>
              </Form.Field>

              <div className="mt-[25px] flex justify-end">
                <Form.Submit asChild>
                  <button
                    type="submit"
                    className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  >
                    Senden
                  </button>
                </Form.Submit>
              </div>
            </Form.Root>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}