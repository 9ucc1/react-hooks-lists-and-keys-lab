import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectLists = projects.map((projItem) => {
    return (
      <ProjectItem key={projItem.id} name={projItem.name} about={projItem.about} technologies={projItem.technologies}></ProjectItem>
    )})
  return(
      <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectLists}
      </div>
    </div>
    )
  }

export default ProjectList;
