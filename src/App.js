import React, { useState, useEffect } from 'react';
import './App.css';  
import ProjectCard from './Components/ProjectCard';
import Profile from './Images/LinkedIn.jpeg';
import GradPic from './Images/GraduationPic.JPG';
import TechBox from './Components/TechBox.js';
import NavBar from './Components/NavBar'; 

import P5Sketch from './Components/P5Sketch';
import { Slime } from './p5js_sketches/Slime.js';
import { FernSketch } from './p5js_sketches/Fern.js';
// import { BallBouncer } from './p5js_sketches/BallBouncer.js';
// import { Fractal } from './p5js_sketches/Fractal.js';

//npm run build
//npm run deploy -- -m "Commit Message"

function App() {
    const [projects, setProjects] = useState([]);

    const techExperience = ["C#", "Unity", "Unreal Engine 5", "Git", "React", "Java", "Python", "Javascript", "Blender"];

    const sketches = [
        { sketch: Slime, title: "Slime Simulation" },
        { sketch: FernSketch, title: "Barnsley Fern" },
        // { sketch: BallBouncer, title: "Ball Bouncer" },
        // { sketch: Fractal, title: "Fractal" },
    ];

    const importImage = (imageName) => {
        try {
            return require(`./Images/${imageName}`);
        } catch (err) {
            console.error('Error importing image:', err);
            return null;
        }
    };

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-8">
            <NavBar />
            {/* Profile Section */}
            <div className="profile-container-glass">
                <div className="profile-img-col">
                    <img src={Profile} alt="Profile" className="profile-img" />
                </div>
                <div className="profile-divider" />
                <div className="profile-info-col">
                    <h1 className="profile-name">Matthew Lee</h1>
                    <p className="profile-role">Computer Science Student / <span className="accent-role">Game Developer</span></p>
                    <div className="profile-edu-card">
                        <h2 className="profile-edu-title">Education</h2>
                        <p className="profile-edu-school">Loyola Marymount University 2021 - 2025</p>
                        <p className="profile-edu-degree">B.S. Computer Science</p>
                    </div>
                </div>
            </div>

            {/* Technologies Section */}
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Technologies and Experience</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {techExperience.map((tech, index) => (
                        <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-md text-sm md:text-base">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-3xl font-bold mb-1">Projects</h2>
                    <p className="text-gray-400 text-sm">(hint: drag me)</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const projectImage = importImage(project.image);
                        return (
                            <ProjectCard 
                                key={index} 
                                label={project.label} 
                                bulletPoints={project.bulletPoints} 
                                image={projectImage}
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
