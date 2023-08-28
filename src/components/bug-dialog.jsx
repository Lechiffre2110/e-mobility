import { useState } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import HorizontalSeparator from "./horizontal-separator";

export default function bugDialog(props) {
const [open, setOpen] = useState(false);


  const resolveBug = async () => {
    console.log(props.id);
    const res = axios.post("http://localhost:5555/bug/resolve", {
      id: props.id,
    });
    console.log(res);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
            Details
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Bug Details
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              Review a bug and mark it as resolved, after fixing it.
            </Dialog.Description>
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="title">
                TITEL
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-auto w-full flex-1 text-[15px]">
                {props.title}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="model">
                FAHRZEUG
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 text-[15px]">
                {props.model}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="description">
                BESCHREIBUNG
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-auto w-full flex-1 items-center justify-center text-[15px]">
                {props.description}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="contact">
                KONTAKT
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 text-[15px]">
                {props.contact}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                onClick={resolveBug}>
                  Resolve Bug
                </button>
              </Dialog.Close>
            </div>
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
