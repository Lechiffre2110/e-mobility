import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import HorizontalSeparator from "./horizontal-separator";

/**
 * Component for the quick actions section in the dashboard.
 */
export default function QuickActions() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [garageOpen, setGarageOpen] = useState(false);

  //open meeting dialog
  function scheduleMeeting() {
    setOpen(true);
  }

  //open upload invite dialog
  function sendInvitation() {
    setUploadOpen(true);
  }

  //open book garage dialog
  function bookGarage() {
    setGarageOpen(true);
  }

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
        Quick Actions
      </h2>
      <div className="grid lg:grid-cols-3 grid-rows-3 ml-[2%] w-[97%] rounded-2xl mt-4 gap-4">
        <QuickActionButton action={scheduleMeeting} title={t('datahub.quickactions.scheduleMeeting')} />
        <QuickActionButton
          action={sendInvitation}
          title={t('datahub.quickactions.uploadInvite')}
        />
        <QuickActionButton action={bookGarage} title={t('datahub.quickactions.bookGarage')} />
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

/**
 * Component for the quick action buttons.
 * @param {*} action the action to be executed when the button is clicked
 * @param {*} title the title of the button 
 */
function QuickActionButton({ action, title }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-20 text-lg bg-white border cursor-pointer rounded-2xl hover:bg-indigo-100 lg:border-0"
      onClick={action}
    >
      <h4>{title}</h4>
    </div>
  );
}

/**
 * Component for the meeting dialog.
 * @param {*} open state of the dialog
 * @param {*} setOpen function to set the open state
 */
function MeetingForm({ open, setOpen }) {
  const { t } = useTranslation();
  
  /**
   * Function to submit the form
   * @param {*} event the event
   */
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
          {t('datahub.quickactions.scheduleMeeting')}
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          {t('datahub.quickactions.scheduleMeetingDescription')}
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="title" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.scheduleMeetingTtile')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.scheduleMeetingError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  required
                  placeholder={t('datahub.quickactions.scheduleMeetingTitlePlaceholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="date" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.date')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.dateError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder={t('datahub.quickactions.datePlaceholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="time" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.time')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.timeError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="time"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder={t('datahub.quickactions.timeError')}
                />
              </Form.Control>
            </Form.Field>

            <div className="mt-[25px] flex justify-end">
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  {t('button.send')}
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

/**
 * Component for the garage dialog.
 * @param {*} open state of the dialog
 * @param {*} setOpen function to set the open state
 */
function UploadInviteForm({ open, setOpen }) {
  const { t } = useTranslation();
  const [link, setLink] = useState(
    "http://localhost:5173/datahub?menuPage=upload"
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  /**
   * set link based on email, name and description
   */
  useEffect(() => {
    //set link and replace spaces with %20
    let link = `http://localhost:5173/datahub?menuPage=upload&email=${email}&name=${name}&description=${description}`;
    link = link.replace(/ /g, "%20");
    setLink(link);
  }, [email, name, description]);

  /**
   * Function to submit the form
   * @param {*} event the form event 
   */
  async function submitForm(event) {
    const BASE_URL = "http://localhost:5555/api";
    event.preventDefault();
    
    const res = await axios.post(`${BASE_URL}/quickactions/invite`, {
      email: email,
      name: name,
      link: link,
    });
    console.log(res);
  }
    

  /**
   * Function to copy the link to the clipboard
   */
  function copyLink() {
    navigator.clipboard.writeText(link);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {t('datahub.quickactions.uploadInvite')}
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          {t('datahub.quickactions.uploadInviteDescription')}
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="email" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.email')}*
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.emailError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="email"
                  required
                  placeholder={t('datahub.quickactions.emailPlaceholder')}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="name" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.name')}*
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.nameError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="text"
                  placeholder={t('datahub.quickactions.recipient')}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="description" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.description')}
                </Form.Label>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  rows="4"
                  placeholder={t('datahub.quickactions.descriptionError')}
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
                  placeholder={t('datahub.quickactions.recipient')}
                  value={link}
                />
              </Form.Control>
            </Form.Field>

            <div className="mt-[25px] flex justify-end gap-2">
              <button className="bg-blue4 text-blue11 hover:bg-blue5 focus:shadow-blue7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none" onClick={copyLink}>
              {t('datahub.quickactions.copyLink')}
              </button>
              <Form.Submit asChild>
                <button
                  type="submit"
                  className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  {t('button.send')}
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

function GarageForm({ open, setOpen }) {
  const { t } = useTranslation();
  const [emailText, setEmailText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
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
          {t('datahub.quickactions.bookGarage')}
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          {t('datahub.quickactions.bookGarageDescription')}
          </Dialog.Description>
          <Form.Root onSubmit={submitForm}>
            <Form.Field name="date" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.date')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.dateError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder={t('datahub.quickactions.datePlaceholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="Uhrzeit" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.time')}
                </Form.Label>
                <Form.Message
                  className="text-[13px] text-gray-700 opacity-[0.8]"
                  match="valueMissing"
                >
                  {t('datahub.quickactions.timeError')}
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                  type="time"
                  onChange={(e) => setTime(e.target.value)}
                  placeholder={t('datahub.quickactions.timePlaceholder')}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="description" className="my-5">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-mauve11 text-[12px] mb-2">
                {t('datahub.quickactions.emailText')}
                </Form.Label>
              </div>
              <Form.Control asChild>
                <textarea
                  className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                  rows="10"
                  placeholder={t('datahub.quickactions.emailText')}
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
                  {t('datahub.quickactions.bookGarageButton')}
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
