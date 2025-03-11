import React from 'react';
import Profile from '../Images/LinkedIn.jpeg';
import '../App.css';  // Make sure this imports the main app CSS
import '../Pages/HomePage.css';  // Import the new CSS for the HomePage layout
import ProjectCard from '../Components/ProjectCard';
import projects from '../Projects.js'; 
// import ProjectScene from '../Components/ProjectScene';  // Import the 3D scene component

function HomePage() {
    return (
        <div>
            {/* Profile and 3D Project Cards Side by Side */}
            <div className="profile-container">
                {/* Profile Picture */}
                <div className="profile-picture">
                    <img src={Profile} alt="Profile" />
                </div>

                {/* Three.js Canvas (3D project cards) */}
                {/* <div className="threejs-canvas">
                    <ProjectScene />
                </div> */}
            </div>

            {/* Projects Grid (Static view) */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        label={project.label} 
                        bulletPoints={project.bulletPoints} 
                        image={project.image} 
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
