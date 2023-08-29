import './project.css'

export const  Project = ({ project }) => (
  <div className="project">
    <h1>{project.name}</h1>
    <div className="authors">
      <h2>Autor*innen:</h2>
      {project.authors.map((author, index) => (
        <div key={index} className="author">
          <p>{author.name}</p>
          <p>{author.email}</p>
        </div>
      ))}
    </div>
    <div className="professors">
      <h2>Professor*innen:</h2>
      {project.professors.map((professor, index) => (
        <div key={index} className="professor">
          <p>{professor.name}</p>
          <p>{professor.email}</p>
        </div>
      ))}
    </div>
    <div className="contributors">
      <h2>Mitwirkende:</h2>
      {project.contributors.map((contributor, index) => (
        <div key={index} className="contributor">
          <p>{contributor.name}</p>
          <p>{contributor.email}</p>
        </div>
      ))}
    </div>
  </div>
);