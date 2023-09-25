import ContributorList from "../contributor-list";
import HorizontalSeparator from "../horizontal-separator";
import "./project.css";

export const Project = ({ project }) => (
  <div className="">
    <h1 className="text-3xl text-[#333] mb-2">Contributors</h1>
    <p className="lg:w-[60%]">Die folgenden Personen haben am Projekt aktiv mitgewirkt. Falls du ebenfalls am Projekt beteiligt bist kannst du im Datahub beantragen, als Contributor aufgeführt zu werden.</p>
    <HorizontalSeparator />
    <div className="authors">
      <ContributorList
        title="Autor"
        contributors={project.authors}
        color="red"
      />
    </div>
    <HorizontalSeparator />
    <div className="professors">
      <ContributorList
        title="Professoren"
        contributors={project.professors}
        color="violet"
      />
    </div>
    <HorizontalSeparator />
    <div className="contributors">
      <ContributorList
        title="Studenten"
        contributors={project.contributors}
        color="green"
      />
    </div>
    <HorizontalSeparator />
  </div>
);
