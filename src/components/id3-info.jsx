export default function ID3Info() {
  return (
    <>
     <table className="m-auto mt-5 border border-gray-300 table-auto">
        <thead>
            <tr>
                <th className="px-4 py-2 border">Spezifikation</th>
                <th className="px-4 py-2 border">Wert</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 border">Hersteller</td>
                <td className="px-4 py-2 border">Volkswagen</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Leistung</td>
                <td className="px-4 py-2 border">150 kW (204 PS)</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Max. Drehmoment</td>
                <td className="px-4 py-2 border">310 Nm</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Höchstgeschwindigkeit</td>
                <td className="px-4 py-2 border">160 km/h</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Beschleunigung</td>
                <td className="px-4 py-2 border">7.3 Sekunden</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Reichweite</td>
                <td className="px-4 py-2 border">424 km (WLTP)</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Batteriekapazität</td>
                <td className="px-4 py-2 border">77 kWh</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Ladezeit</td>
                <td className="px-4 py-2 border">30 Minuten (80%)</td>
            </tr>
        </tbody>
     </table>
    </>
  );
}
