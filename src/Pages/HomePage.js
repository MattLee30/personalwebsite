import React, { useState, useEffect } from 'react';
import '../App.css';  
import '../Pages/HomePage.css';
import ProjectCard from '../Components/ProjectCard';
import Profile from '../Images/LinkedIn.jpeg';

function HomePage() {
    const [projects, setProjects] = useState([]);

    const techExperience = ["C#", "Unity", "Unreal Engine 5", "Git", "React", "Java", "Python", "Javascript", "Blender"];

    // Function to require images dynamically based on the file name
    const importImage = (imageName) => {
        try {
            return require(`../Images/${imageName}`);
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
            <div className="profile-container">
                <div className="profile-picture">
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
            <div className="tech">
                <div className= "tech-title">
                    <h1>Technologies and Experience</h1>
                </div>
                <div className="tech-experience">
                    {techExperience.map((tech, index) => (
                        <div key={index} className="tech-box">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
            <div className= "projects">
                <div className= "project-title">
                    <h1>Projects</h1>
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
                        />
                    );
                })}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
