export default function miraiInfo({t}) {
  return (
    <>
      <table className="m-auto mt-5 mb-10 border border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">{t('carsinfo.specification')}</th>
            <th className="px-4 py-2 border">Wert</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.manufacturer')}</td>
            <td className="px-4 py-2 border">Toyota</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.performance')}</td>
            <td className="px-4 py-2 border">113 kW (154 PS)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.torque')}M</td>
            <td className="px-4 py-2 border">335 Nm</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.maxspeed')}</td>
            <td className="px-4 py-2 border">175 km/h</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.acceleration')}</td>
            <td className="px-4 py-2 border">8.9 Sekunden</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.range')}</td>
            <td className="px-4 py-2 border">650 km (WLTP)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.capacity')}</td>
            <td className="px-4 py-2 border">5.6 kg</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">{t('carsinfo.chargingtime')}</td>
            <td className="px-4 py-2 border">5 Minuten (80%)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
