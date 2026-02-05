// src/components/ProjectItem.js
import React from "react";
import ProjectList from "./ProjectList";
import "./ProjectItem.css"; // <-- ADDED THIS LINE

const ProjectItem = ({ project, onDelete }) => {
  return (
    <div className="project-item">
      <div className="project-thumbnail">
        <span className="thumbnail-icon">X</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <button
        onClick={() => onDelete(project.id)}
        className="delete-button"
        aria-label="Delete project"
      >
        ×
      </button>
    </div>
  );
};

export default ProjectItem;
