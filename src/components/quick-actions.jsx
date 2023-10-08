import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { use } from "i18next";
import HorizontalSeparator from "./horizontal-separator";

export default function QuickActions() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [garageOpen, setGarageOpen] = useState(false);

  function scheduleMeeting() {
    setOpen(true);
  }

  function sendInvitation() {
    setUploadOpen(true);
  }

  function bookGarage() {
    setGarageOpen(true);
  }

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
        Quick Actions
      </h2>
      <div className="grid grid-rows-3 ml-[2%] w-[97%] rounded-2xl mt-4 gap-4">
        <QuickActionButton action={scheduleMeeting} title="Meeting erstellen" />
        <QuickActionButton
          action={sendInvitation}
          title="Upload Einladung senden"
        />
        <QuickActionButton action={bookGarage} title="Fahrzeughalle buchen" />
      </div>

      <MeetingForm open={open} setOpen={setOpen} submitForm={setOpen} />
      <UploadInviteForm
        open={uploadOpen}
        setOpen={setUploadOpen}
        submitForm={setUploadOpen}
      />
      <GarageForm
        open={garageOpen}
        setOpen={setGarageOpen}
        submitForm={setGarageOpen}
      />
    </>
  );
}

function QuickActionButton({ action, title }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-20 text-lg bg-white border cursor-pointer rounded-2xl hover:bg-indigo-100 hover:font-semibold lg:border-0"
      onClick={action}
    >
      <h4>{title}</h4>
    </div>
  );
}

function MeetingForm({ open, setOpen }) {
  async function submitForm(event) {
    const BASE_URL = "http://localhost:5555/api";
    
    event.preventDefault();
    const formData = new FormData(event.target);
    //format date to dd.mm.yyyy
    let dateArray = formData.get("date").split("-");
    let formattedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    
    const res = await axios.post(`${BASE_URL}/quickactions/meeting`, {
      title: formData.get("title"),
      date: formattedDate,
      time: formData.get("time"),
    });
    console.log(res);
  }
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Schedule Meeting
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Erstelle ein Meeting mit den ausgewählten Teilnehmern
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="title" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  TITEL
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte geben Sie dem Meeting einen Titel
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  required
                  placeholder="Gib den Titel des Meetings ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="date" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  DATUM
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib ein Datum an.
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Gib ein Datum ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="time" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  UHRZEIT
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib eine Uhrzeit an.
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="time"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Gib eine Uhrzeit ein"
                />
              </Form.Control>
            </Form.Field>

            <div className="mt-[25px] flex justify-end">
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Einladung Senden
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
  );
}

function UploadInviteForm({ open, setOpen, submitForm }) {
  const [link, setLink] = useState(
    "http://localhost:5173/datahub?menuPage=upload"
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setLink(
      `http://localhost:5173/datahub?menuPage=upload&email=${email}&name=${name}&description=${description}`
    );
  }, [email, name, description]);

  function copyLink() {
    navigator.clipboard.writeText(link);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Upload Einladung senden
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Sende eine Einladung zum Upload von Daten
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="email" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  EMAIL*
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte geben Sie die Email des Empfängers ein
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="email"
                  required
                  placeholder="Bitte geben Sie die Email an"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="name" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  NAME*
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte geben Sie den Namen des Empfängers ein
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="Geben Sie den Namen des Empfängers ein"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="description" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  BESCHREIBUNG
                </Form.Label>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  rows="4"
                  placeholder="Geben Sie bei Bedarf die Beschreibung des Datensatzes ein"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Control>
            </Form.Field>
            <HorizontalSeparator />
            <Form.Field name="link" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  LINK
                </Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder="Geben Sie den Namen des Empfängers ein"
                  value={link}
                />
              </Form.Control>
            </Form.Field>

            <div className="mt-[25px] flex justify-end gap-2">
              <button className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none" onClick={copyLink}>
                Link kopieren
              </button>
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Einladung Senden
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
  );
}

function GarageForm({ open, setOpen, submitForm }) {
  const [emailText, setEmailText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    //format the date to dd.mm.yyyy
    let dateArray = date.split("-");
    let formattedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    setEmailText(
      `Sehr geehrter Herr Sturm,\nsehr geehrter Herr Hauffe,\n\nwir würden die Fahrzeughalle und den VW ID.3 gerne am ${formattedDate} ab ${time} buchen.\n\nMit freundlichen Grüßen,\n\nDas E-Mobility Team`
    );
  });

  async function submitForm(event) {
    const BASE_URL = "http://localhost:5555/api";
    event.preventDefault();
    const res = await axios.post(`${BASE_URL}/quickactions/book`, {
      text: emailText,
    });
    console.log(res);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Fahrzeughalle buchen
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Buche die Fahrzeughalle zur gewünschten Zeit
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="date" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  DATUM
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib ein Datum an.
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Gib ein Datum ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="Uhrzeit" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  UHRZEIT
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  Bitte gib eine Uhrzeit an.
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="time"
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Gib eine Uhrzeit ein"
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="description" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                  EMAIL TEXT
                </Form.Label>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  rows="10"
                  placeholder="Email Text"
                  value={emailText}
                />
              </Form.Control>
            </Form.Field>

            <div className="mt-[25px] flex justify-end">
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Halle buchen
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
  );
}
