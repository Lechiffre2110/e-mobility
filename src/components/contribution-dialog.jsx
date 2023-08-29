import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import HorizontalSeparator from "./horizontal-separator";
import axios from "axios";

export default function contributionDialog(props) {
  const BASE_URL = "http://localhost:5555/api";
  
  const declineRequest = async () => {
    try {
      await axios.delete(`${BASE_URL}/contributors/${props.id}/decline`);
    } catch (error) {
      console.error("Error declining request:", error);
    }
    props.reload();
  };

  const acceptRequest = async () => {
    try {
      await axios.put(`${BASE_URL}/contributors/${props.id}/approve`);
      props.reload();
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[30px] items-center justify-center rounded-md px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
            Review
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Contribution Request
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              {props.name} hat eine Contribution Request gestellt. Nimm sie hier
              entweder an oder lehne sie ab.
            </Dialog.Description>
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="name">
                NAME
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-auto w-full flex-1 text-[15px]">
                {props.name}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="email">
                EMAIL
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-auto w-full flex-1 text-[15px]">
                {props.mail}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="description">
                TÄTIGKEIT
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-auto w-full flex-1 text-[15px]">
                {props.description}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <fieldset className="flex flex-col">
              <label className="text-mauve11 text-[12px]" htmlFor="role">
                ROLLE
              </label>
              <p className="text-mauve12 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 text-[15px]">
                {props.role}
              </p>
            </fieldset>
            <HorizontalSeparator />
            <div className="mt-[25px] flex justify-end gap-5">
              <Dialog.Close asChild>
                <button
                  className="bg-red4 text-red11 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  onClick={declineRequest}
                >
                  Ablehnen
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  onClick={acceptRequest}
                >
                  Annehmen
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
