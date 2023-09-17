export default function infoSection(props) {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Was ist Projekt E-Mobility?</h2>
        <p>
          Projekt E-Mobility ist ein fachbereichsübergreifendes Projekt des
          Fachbereichs 4: Informatik und des Fachbereichs 2 Fahrzeugtechnik. Das
          Ziel ist es, Fahrzeugdaten von Elektroautos über den verfügbaren
          OBD-Stecker aufnehmen zu können, um diese im Anschluss analysieren zu
          können. Dabei wird ein besonderer Fokus auf die Analyse der
          Rekkuperation der Batterie aber auch anderer technischer Elemente
          gelegt.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Was wollen wir erreichen?</h2>
        <p>
          Das Projekt versucht wie oben bereit erwähnt Daten zu sammeln und
          damit die Basis zu schaffen, Rückschlüsse auf die Rekupperation von
          Batterien in E-Autos zu erlangen. Das langfristige Ziel ist es ein
          System zu entwickeln, das möglichst einfach zu bedienen ist und
          kostengünstig hergestellt werden kann. Dies würde ermöglichen, das
          Gerät an verschiedene Personen/Institutionen zu schicken und Daten
          sammeln zu lassen. Das würde wiederum zu mehr Daten und
          dementsprechend einer besseren Ausgangslage für weitere Forschung
          führen.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold">Wer kann am Projekt mitwirken?</h2>
        <p>
          Primär richtet sich das Projekt an Studierende der HTW Berlin. Als
          Open-Source Projekt steht es aber auch außenstehenden Personen frei,
          Vorschläge und Pull Requests für das Projekt einzureichen. Im{" "}
          <a href="https://www.discord.com">Projekt Discord</a> besteht
          desweiteren die Möglichkeit, sich mit den aktiven Studenten und
          anderen Mitwirkenden auszutauschen.
        </p>
      </div>
    </>
  );
}
