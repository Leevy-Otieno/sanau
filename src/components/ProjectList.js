import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, onDelete }) => {
  if (projects.length === 0) {
    return (
      <p className="no-projects">No projects found. Add your first project!</p>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProjectList;
