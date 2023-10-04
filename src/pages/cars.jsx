import { useState } from "react";
import { Dialog } from "primereact/dialog";

import { TabView, TabPanel } from "primereact/tabview";
import ID3Info from "../components/id3-info";
import MiraiInfo from "../components/mirai-info";
import VWID3 from "../assets/vw-id3.png.webp";

export default function Cars({t}) {
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
            {t('carspage.databutton')}
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
            {t('carspage.guidebutton')}
            </button>
            <div className="flex flex-col items-center justify-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header={t('carspage.id3')}
              visible={ID3Visble}
              style={{ width: "50vw" }}
              onHide={() => setID3Visible(false)}
            >
              <ID3Info t={t}/>
            </Dialog>
            <div className="lg:hidden">
              <h2 className="mt-5 text-2xl font-bold text-center">
                {t('carspage.databutton')}
              </h2>
              <ID3Info t={t}/>
            </div>
          </TabPanel>
          <TabPanel header="Toyota Mirai">
            <button
              className="hidden lg:inline-block mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300"
              onClick={() => setMiraiVisible(true)}
            >
              {t('carspage.databutton')}
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
            {t('carspage.guidebutton')}
            </button>
            <div className="flex flex-col items-center justify-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header={t('carspage.mirai')}
              visible={miraiVisble}
              style={{ width: "50vw" }}
              onHide={() => setMiraiVisible(false)}
            >
              <MiraiInfo t={t}/>
            </Dialog>
            <div className="lg:hidden">
              <h2 className="mt-5 text-2xl font-bold text-center">
              {t('carspage.databutton')}
              </h2>
              <MiraiInfo t={t}/>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
