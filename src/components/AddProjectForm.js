
import React, { useState } from 'react';

const AddProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddProject({
        id: Date.now(),
        title: title.trim(),
        description: description.trim()
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-project-card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
