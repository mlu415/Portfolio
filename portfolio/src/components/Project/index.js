import "./index.scss";
import dataProject from "../datasheets/dataProject";
import { useState } from "react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToProject = (projectIndex) => {
    setCurrentIndex(projectIndex);
  };
  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>Project</h1>

        <h2>{dataProject[currentIndex].title}</h2>

        <ul className="demo-src">
          <li>
            {" "}
            <a
              href={dataProject[currentIndex].demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </li>
          <li>
            <a
              href={dataProject[currentIndex].sourceCode}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </li>
        </ul>

        <p className="project-description">
          {dataProject[currentIndex].description}
        </p>
        <ul className="project-tech">
          {dataProject[currentIndex].tech.map((tech, techIndex) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-right">
        <div className="container-img">
          <img
            src={dataProject[currentIndex].image}
            alt={`${dataProject[currentIndex].title}`}
          ></img>
        </div>
      </div>
    </div>
  );
};

/* <div className="projects">
              <div className="brackets-wrapper">
                <div className="projects-info">
                  <h1 className="project-title">
                    {dataProject[currentIndex].title}
                  </h1>
                  <div className="project-links">
                    <a
                      href={dataProject[currentIndex].demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={dataProject[currentIndex].sourceCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                  <ul className="project-tech">
                    {dataProject[currentIndex].tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  <p className="project-description">
                    {dataProject[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="projects-nav">
              {dataProject.map((project, projectIndex) => (
                <div
                  style={{
                    background: `${
                      projectIndex === currentIndex
                        ? "var(--bg-primary)"
                        : "var(--bg-secondary)"
                    }`,
                  }}
                  key={projectIndex}
                  onClick={() => goToProject(projectIndex)}
                ></div>
              ))}

          </div> */

export default Project;
