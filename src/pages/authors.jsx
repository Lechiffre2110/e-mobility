import { useEffect, useState } from "react";
import axios from "axios";
import { Project } from "../components/Project/Project";

export default function Authors() {
  const [projects, setProjects] = useState([]);
  const sampleProject = {
      name: "Automatisiertes Messsystem von Fahrzeuganalysedaten alternativer Antriebsarten",
      authors: [
        {
          name: "Philipp Schach",
          email: "philipp.schach@htw-berlin.de",
          role: "author",
        },
      ],
      professors: [
        {
          name: "Prof. Dr. Alexander Huhn",
          email: "Alexander.Huhn@HTW-Berlin.de",
          role: "professor",
        },
        {
          name: "Prof. Dr.-Ing. Christopher Severin",
          email: "Christopher.Severin@HTW-Berlin.de",
          role: "professor",
        },
      ],
      contributors: [
        {
          name: "Dominik Rezmer",
          email: "dominik.rezmer@student.htw-berlin.de",
          role: "student",
        },
        {
          name: "Younes Abdelwadoud",
          email: "younes.abdelwadoud@outlook.de",
          role: "student",
        },
      ]
    }

  const BASE_URL = "http://localhost:5555/api";

  const fetchContributors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/contributors`);
      let allContributors = response.data.data;
      let approvedContributors = allContributors.filter((contributor) => contributor.approved);
      const fetchedProfessors = approvedContributors.filter((contributor) => contributor.role === "professor");
      const fetchedStudents = approvedContributors.filter((contributor) => contributor.role === "student");

      const project = {
        name: "Automatisiertes Messsystem von Fahrzeuganalysedaten alternativer Antriebsarten",
        authors: [
          {
            name: "Philipp Schach",
            email: "philipp.schach@htw-berlin.de",
          },
        ],
        professors: fetchedProfessors,
        contributors: fetchedStudents,
      };
      setProjects([project]);
    } catch (error) {
      console.error("Error fetching contributors:", error);
      setProjects([sampleProject]);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}