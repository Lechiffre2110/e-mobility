import ContributorList from "../contributor-list";
import HorizontalSeparator from "../horizontal-separator";
import "./project.css";
import { useTranslation } from "react-i18next";

/**
 * Component that displays the project's authors, professors and contributors.
 * @param {*} project object containing the project's authors, professors and contributors.
 */
export const Project = ({ project }) => {
  const { t } = useTranslation();
  return (
  <div className="">
    <h1 className="text-3xl text-[#333] mb-2">{t('authorspage.header')}</h1>
    <p>{t('authorspage.text')}</p>
    <HorizontalSeparator />
    <div className="authors">
      <ContributorList
        title={t('authorspage.author')}
        contributors={project.authors}
        color="red"
      />
    </div>
    <HorizontalSeparator />
    <div className="professors">
      <ContributorList
        title={t('authorspage.professors')}
        contributors={project.professors}
        color="violet"
      />
    </div>
    <HorizontalSeparator />
    <div className="contributors">
      <ContributorList
        title={t('authorspage.students')}
        contributors={project.contributors}
        color="green"
      />
    </div>
    <HorizontalSeparator />
  </div>
)}
;
