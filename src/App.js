import React, { useState, useEffect } from 'react';
import './App.css';  
import './Pages/HomePage.css';
import ProjectCard from './Components/ProjectCard';
import Profile from './Images/LinkedIn.jpeg';
import GradPic from './Images/GraduationPic.JPG';
import TechBox from './Components/TechBox.js';
import NavBar from './Components/NavBar'; 

import P5Sketch from './Components/P5Sketch';
import { Slime } from './p5js_sketches/Slime.js';
import { FernSketch } from './p5js_sketches/Fern.js';
import { BallBouncer } from './p5js_sketches/BallBouncer.js';
import { Fractal } from './p5js_sketches/Fractal.js';

//npm run build
//npm run deploy

function HomePage() {
    const [projects, setProjects] = useState([]);

    const techExperience = ["C#", "Unity", "Unreal Engine 5", "Git", "React", "Java", "Python", "Javascript", "Blender"];

    const sketches = [
        { sketch: Slime, title: "Slime Simulation" },
        { sketch: FernSketch, title: "Barnsley Fern" },
        { sketch: BallBouncer, title: "Ball Bouncer" },
        { sketch: Fractal, title: "Fractal" },
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
        fetch(process.env.PUBLIC_URL + '/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <div className="NavBar">
                <NavBar />
            </div>
 
            <div className="profile-container">
                <div className="profile-picture">
                    <img src={GradPic} alt="GradPic" />
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

            <div className="sketch-section">
                <h1 className="section-title">Art Projects</h1>
                <div className="sketch-grid">
                    {sketches.map(({ sketch, title }, index) => (
                        <P5Sketch
                            key={index}
                            sketch={sketch}
                            resettable={true}
                            title={title}
                        />
                    ))}
                </div>
            </div>
            {/* <div className="projects">
                <div className="project-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-grid">
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
            </div> */}
        </div>
    );
}

export default HomePage;
