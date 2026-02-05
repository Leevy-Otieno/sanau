
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  // Load projects from localStorage on initial render
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    return savedProjects ? JSON.parse(savedProjects) : [
      { id: 1, title: 'Project 1', description: 'Description of the project.' },
      { id: 2, title: 'Project 2', description: 'Description of the project.' },
      { id: 3, title: 'Project 3', description: 'Description of the project.' }
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Save to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AddProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
      </main>
    </div>
  );
}

export default App;
