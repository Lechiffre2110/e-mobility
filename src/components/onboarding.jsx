import axios from "axios";
import * as Form from "@radix-ui/react-form";


export default function Onboarding() {

    async function submitForm(event) {
        const BASE_URL = "http://localhost:5555/api";
        
        event.preventDefault();
        const formData = new FormData(event.target);
        const res = await axios.post(`${BASE_URL}/onboarding/manual`, {
          name: formData.get("name"),
          email: formData.get("email"),
        });
        console.log(res);
      }

    async function submitBulkForm(event) {
        const BASE_URL = "http://localhost:5555/api";
        
        event.preventDefault();
        const formData = new FormData(event.target);
        const res = await axios.post(`${BASE_URL}/onboarding/bulk`, {
          emails: formData.get("emails").split(","),
        });
        console.log(res);
      }

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] mx-[2%] rounded-xl flex items-center px-5 text-gray-700 font-bold border lg:border-0">
        Onboarding
      </h2>
      <p className="my-6 text-center">
          Hier haben Sie die Möglichkeit neuen Usern eine Onboarding Email zu senden. <br />
          Sie können entweder einen einzelnen User oder eine größere Anzahl von neuen Usern onboarden.<br />
        </p>
      <div className="flex flex-col lg:w-full lg:flex-row lg:justify-around">
        <Form.Root onSubmit={submitForm}>
          <div className="lg:w-[30vw] m-auto flex flex-col justify-center bg-white rounded-xl py-5 items-center border lg:border-0">
            <h2 className="w-[90%] text-lg font-bold text-left">Onboarding</h2>
            <div className="flex flex-col w-[90%] m-auto">
              <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                    Email Adresse
                  </Form.Label>
                </div>

                <Form.Control asChild>
                  <input
                    className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                    type="text"
                    placeholder="Gib die Email Adresse des Users an"
                  />
                </Form.Control>
              </Form.Field>
            </div>

            <div className="flex flex-col w-[90%] m-auto">
              <Form.Field className="grid mb-[10px]" name="name">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                    Name
                  </Form.Label>
                </div>

                <Form.Control asChild>
                  <input
                    className="box-border w-full inline-flex h-[35px] items-center justify-center rounded-[8px] px-[10px] text-[15px] leading-none text-gray outline-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6]"
                    type="text"
                    placeholder="Gib den Namen des Users an"
                  />
                </Form.Control>
              </Form.Field>
            </div>

            <Form.Submit asChild>
              <div className="flex flex-row items-center justify-center">
                <button className="mt-2 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                  Senden
                </button>
              </div>
            </Form.Submit>
          </div>
        </Form.Root>

        <Form.Root onSubmit={submitBulkForm}>
          <div className="mt-14 lg:mt-0 lg:w-[30vw] m-auto flex flex-col justify-center bg-white rounded-xl py-5 items-center border lg:border-0">
          <h2 className="w-[90%] text-lg font-bold text-left">Bulk Onboarding</h2>
            <div className="flex flex-col w-[90%] m-auto">
              <Form.Field className="grid mb-[10px]" name="emails">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-gray-700">
                    Email Adressen
                  </Form.Label>
                  <Form.Message
                    className="text-[13px] text-gray-700 opacity-[0.8]"
                    match="valueMissing"
                  >
                    Bitte gib mindestens eine Email an
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <textarea
                    className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[8px] p-[10px] text-[15px] leading-none hover:border-gray-400 focus:border-gray-500 bg-[#f6f6f6] outline-none resize-none"
                    required
                    rows="4"
                    placeholder="Bitte gib die Email Adressen der User die du onboarden möchtest im Format 'email1, email2, email3' an"
                  />
                </Form.Control>
              </Form.Field>
            </div>
            <Form.Submit asChild>
              <div className="flex flex-row items-center justify-center">
                <button className="mt-2 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                  Senden
                </button>
              </div>
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
    </>
  );
}