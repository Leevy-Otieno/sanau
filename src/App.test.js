import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Personal Project Showcase App/i);
  expect(headerElement).toBeInTheDocument();
});

test('can add a new project', () => {
  render(<App />);
  
  // Fill form
  fireEvent.change(screen.getByLabelText(/Title/i), {
    target: { value: 'Test Project' }
  });
  
  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: 'Test Description' }
  });
  
  // Submit form
//  B: Be more specific with the button text
fireEvent.click(screen.getByText(/^Add$/)); // Exact match "Add" not "Add Project"
  
  // Check if project was added
  expect(screen.getByText('Test Project')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});

test('can search projects', () => {
  render(<App />);
  
  // Type in search
  fireEvent.change(screen.getByPlaceholderText(/Search Projects/i), {
    target: { value: 'Project 1' }
  });
  
  // Check if only Project 1 is visible
  expect(screen.getByText('Project 1')).toBeInTheDocument();
  expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
});

test('can delete a project', () => {
  render(<App />);
  
  // Click delete button on first project
  const deleteButtons = screen.getAllByText('×');
  fireEvent.click(deleteButtons[0]);
  
  // Check if Project 1 was removed
  expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
  expect(screen.getByText('Project 2')).toBeInTheDocument();
});