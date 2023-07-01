import { useState } from "react";
import { Dialog } from "primereact/dialog";

import { TabView, TabPanel } from "primereact/tabview";
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
              className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300"
              onClick={() => setID3Visible(true)}
            >
              Technische Daten
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
              Setup Guide
            </button>
            <div className="flex flex-col justify-center items-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header="Technische Daten Volkswagen ID3"
              visible={ID3Visble}
              style={{ width: "50vw" }}
              onHide={() => setID3Visible(false)}
            >
              <table class="table-auto border m-auto mt-10 border-gray-300">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Spezifikation</th>
                    <th class="px-4 py-2 border">Wert</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 border">Hersteller</td>
                    <td class="px-4 py-2 border">Volkswagen</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Leistung</td>
                    <td class="px-4 py-2 border">150 kW (204 PS)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Max. Drehmoment</td>
                    <td class="px-4 py-2 border">310 Nm</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Höchstgeschwindigkeit</td>
                    <td class="px-4 py-2 border">160 km/h</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Beschleunigung</td>
                    <td class="px-4 py-2 border">
                      0-100 km/h in 7.3 Sekunden
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Reichweite</td>
                    <td class="px-4 py-2 border">420 km (WLTP)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Batteriekapazität</td>
                    <td class="px-4 py-2 border">58 kWh</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Ladezeit</td>
                    <td class="px-4 py-2 border">30 Minuten (80%)</td>
                  </tr>
                </tbody>
              </table>
            </Dialog>
          </TabPanel>
          <TabPanel header="Toyota Mirai">
            <button
              className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300"
              onClick={() => setMiraiVisible(true)}
            >
              Technische Daten
            </button>
            <button className="mr-3 bg-gray-200 px-4 py-2 rounded-full hover:bg-[#6bdbc1] ease-in duration-300">
              Setup Guide
            </button>
            <div className="flex flex-col justify-center items-center">
              <img className="w-[80vw]" src={VWID3} />
            </div>
            <Dialog
              header="Technische Daten Toyota Mirai"
              visible={miraiVisble}
              style={{ width: "50vw" }}
              onHide={() => setMiraiVisible(false)}
            >
              <table class="table-auto border m-auto mt-10 border-gray-300">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">Spezifikation</th>
                    <th class="px-4 py-2 border">Wert</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 border">Hersteller</td>
                    <td class="px-4 py-2 border">Toyota</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Leistung</td>
                    <td class="px-4 py-2 border">113 kW (154 PS)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Max. Drehmoment</td>
                    <td class="px-4 py-2 border">335 Nm</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Höchstgeschwindigkeit</td>
                    <td class="px-4 py-2 border">175 km/h</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Beschleunigung</td>
                    <td class="px-4 py-2 border">8.9 Sekunden</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Reichweite</td>
                    <td class="px-4 py-2 border">650 km (WLTP)</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Batteriekapazität</td>
                    <td class="px-4 py-2 border">5.6 kg</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-2 border">Ladezeit</td>
                    <td class="px-4 py-2 border">5 Minuten (80%)</td>
                  </tr>
                </tbody>
              </table>
            </Dialog>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
