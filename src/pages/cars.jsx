import { useState } from "react";
import { Dialog } from "primereact/dialog";

import { TabView, TabPanel } from "primereact/tabview";
import ID3Info from "../components/id3-info";
import MiraiInfo from "../components/mirai-info";
import VWID3 from "../assets/vw-id3.png.webp";

export default function Cars() {
  const [ID3Visble, setID3Visible] = useState(false);
  const [miraiVisble, setMiraiVisible] = useState(false);

  return (
    <>
      <div>
        <TabView>
          <TabPanel header="Volkswagen ID3">
            <button
              className="hidden lg:inline-block mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300"
              onClick={() => setID3Visible(true)}
            >
              Technische Daten
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
              Setup Guide
            </button>
            <div className="flex flex-col items-center justify-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header="Technische Daten Volkswagen ID3"
              visible={ID3Visble}
              style={{ width: "50vw" }}
              onHide={() => setID3Visible(false)}
            >
              <ID3Info />
            </Dialog>
            <div className="lg:hidden">
              <h2 className="mt-5 text-2xl font-bold text-center">
                Technische Daten
              </h2>
              <ID3Info />
            </div>
          </TabPanel>
          <TabPanel header="Toyota Mirai">
            <button
              className="hidden lg:inline-block mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300"
              onClick={() => setMiraiVisible(true)}
            >
              Technische Daten
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
              Setup Guide
            </button>
            <div className="flex flex-col items-center justify-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header="Technische Daten Toyota Mirai"
              visible={miraiVisble}
              style={{ width: "50vw" }}
              onHide={() => setMiraiVisible(false)}
            >
              <MiraiInfo />
            </Dialog>
            <div className="lg:hidden">
              <h2 className="mt-5 text-2xl font-bold text-center">
                Technische Daten
              </h2>
              <MiraiInfo />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
