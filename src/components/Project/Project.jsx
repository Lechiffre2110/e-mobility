import ContributorList from "../contributor-list";
import HorizontalSeparator from "../horizontal-separator";
import "./project.css";
import { useTranslation } from "react-i18next";


export const Project = ({ project }) => {
  const { t } = useTranslation();
  (
  <div className="">
    <h1 className="text-3xl text-[#333] mb-2">{t('authorspage.header')}</h1>
    <p className="lg:w-[60%]">{t('authorspage.text')}</p>
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
)}
;
