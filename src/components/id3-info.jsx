export default function ID3Info({t}) {
  return (
    <>
     <table className="m-auto mt-5 border border-gray-300 table-auto">
        <thead>
            <tr>
                <th className="px-4 py-2 border">{t('carsinfo.specification')}</th>
                <th className="px-4 py-2 border">{t('carsinfo.value')}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.manufacturer')}</td>
                <td className="px-4 py-2 border">Volkswagen</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.performance')}</td>
                <td className="px-4 py-2 border">150 kW (204 PS)</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.torque')}</td>
                <td className="px-4 py-2 border">310 Nm</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.maxspeed')}</td>
                <td className="px-4 py-2 border">160 km/h</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.acceleration')}</td>
                <td className="px-4 py-2 border">7.3 Sekunden</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.range')}</td>
                <td className="px-4 py-2 border">424 km (WLTP)</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.capacity')}</td>
                <td className="px-4 py-2 border">77 kWh</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">{t('carsinfo.chargingtime')}</td>
                <td className="px-4 py-2 border">30 Minuten (80%)</td>
            </tr>
        </tbody>
     </table>
    </>
  );
}
