
import { Project } from "../components/Project";

export default function Authors() {
const projects = [
  {
    name: "Automatisiertes Messsystem von Fahrzeuganalysedaten alternativer Antriebsarten",
    authors: [
      {
        name: "Philipp Schach",
        email: "philipp.schach@htw-berlin.de",
      },
    ],
    professors: [
      {
        name: "Prof. Dr. Alexander Huhn",
        email: "Alexander.Huhn@HTW-Berlin.de",
      },
      {
        name: "Prof. Dr.-Ing. Christopher Severin",
        email: "Christopher.Severin@HTW-Berlin.de",
      },
    ],
  },
  // Weitere Projekte können hier hinzugefügt werden
];

   return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

