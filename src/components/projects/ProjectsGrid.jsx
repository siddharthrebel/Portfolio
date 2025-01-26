import React from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects";
import "./ProjectsGrid.css";
import "aos/dist/aos.css";
import AOS from "aos";

const ProjectsGrid = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div id='projects' className="projects-grid">
      <h1>Projects</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;