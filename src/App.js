import React, { useState, useEffect } from 'react';
import './App.css';  
import './Pages/HomePage.css';
import ProjectCard from './Components/ProjectCard';
import Profile from './Images/LinkedIn.jpeg';
import TechBox from './Components/TechBox.js';
import NavBar from './Components/NavBar.js';
 
function App() {
  const [projects, setProjects] = useState([]);

  const techExperience = ["C#", "Unity", "Unreal Engine 5", "Git", "React", "Java", "Python", "Javascript", "Blender"];

  // Function to require images dynamically based on the file name
  const importImage = (imageName) => {
      try {
          return require(`./Images/${imageName}`);
      } catch (err) {
          console.error('Error importing image:', err);
          return null; // Fallback if the image is not found
      }
  };

  useEffect(() => {
      fetch('/projects.json')
          .then((response) => response.json())
          .then((data) => setProjects(data))
          .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
      <div>
          <NavBar />
          <div className="profile-container">
              <div className="profile-picture">
                  <img src={Profile} alt="Profile" />
              </div>
              <div className="profile-text">
                  <h1>Matthew Lee</h1>
                  <p>Computer Science Student / Game Developer</p>
                  <div className="education">
                      <h1>Education</h1>
                      <p>Loyola Marymount University 2021 - 2025</p>
                      <p>B.S. Computer Science</p>
                  </div>
              </div>
          </div>

          <div className="tech">
              <div className="tech-title">
                  <h1>Technologies and Experience</h1>
              </div>
              <div className="tech-experience">
                  {techExperience.map((tech, index) => (
                      <TechBox key={index} tech={tech} />
                  ))}
              </div>
          </div>

          <div className="projects">
              <div className="project-title">
                  <h1>Projects</h1>
                  <p>(hint: drag me)</p>
              </div>
              <div className="projects-grid">
                  {projects.map((project, index) => {
                      const projectImage = importImage(project.image); // Dynamically load the image
                      return (
                          <ProjectCard 
                              key={index} 
                              label={project.label} 
                              bulletPoints={project.bulletPoints} 
                              image={projectImage} // Pass the dynamically loaded image
                              tags={project.tags}
                          />
                      );
                  })}
              </div>
          </div>
      </div>
  );
}

export default App;

