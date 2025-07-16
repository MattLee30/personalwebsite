import React, { useState } from 'react';
import './App.css';  
import ProjectCard from './Components/ProjectCard';
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

function HomePage() {
    const [projects, setProjects] = useState([]);
    const [draggedProject, setDraggedProject] = useState(null);
    const [moreInfoProject, setMoreInfoProject] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const techExperience = ["C#", "Unity", "Unreal Engine 5", "Git", "React", "Java", "Python", "Javascript", "Blender"];

    const importImage = (imageName) => {
        try {
            return require(`./Images/${imageName}`);
        } catch (err) {
            console.error('Error importing image:', err);
            return null;
        }
    };

    React.useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/projects.json`)
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    // Map sketch names to actual sketch functions
    const p5jsSketchMap = {
        Slime,
        FernSketch,
    };

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
                        <p>B.S. Computer Science // M.S Candidate in Computer Science </p>
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
                <h1 className="section-title">Projects</h1>
                <div className="projects-dragspace-layout">
                    <div className="projects-list-column">
                        <div className="projects-grid one-column">
                            {projects.map((project, index) => {
                                if (project.type === 'p5js') {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            label={project.label}
                                            bulletPoints={project.bulletPoints}
                                            image={null}
                                            draggable
                                            onDragStart={() => setDraggedProject(project)}
                                            onDragEnd={() => setDraggedProject(null)}
                                            p5SketchComponent={
                                                <P5Sketch
                                                    sketch={p5jsSketchMap[project.sketchName]}
                                                    resettable={true}
                                                />
                                            }
                                            flippable={false}
                                        />
                                    );
                                } else {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            label={project.label}
                                            bulletPoints={project.bulletPoints}
                                            image={importImage(project.image)}
                                            draggable
                                            onDragStart={() => setDraggedProject(project)}
                                            onDragEnd={() => setDraggedProject(null)}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="dragspace-column">
                        {/* More Information Slot */}
                        <div
                            className="more-info-slot"
                            onDragOver={e => e.preventDefault()}
                            onDrop={e => {
                                setMoreInfoProject(draggedProject);
                                setDropdownOpen(true);
                                setDraggedProject(null);
                            }}
                            style={{
                                margin: '32px auto',
                                minHeight: '80px',
                                border: '2px dashed #661b1c',
                                borderRadius: '12px',
                                background: '#23242b',
                                maxWidth: '400px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#e1ceb6',
                                fontSize: '1.2rem',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                            }}
                        >
                            {moreInfoProject ? (
                                <div style={{ width: '100%' }}>
                                    <div
                                        style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px' }}
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        {moreInfoProject.label} {dropdownOpen ? '\u25b2' : '\u25bc'}
                                    </div>
                                    {dropdownOpen && (
                                        <div className="more-info-dropdown" style={{ background: '#191d26', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                                            {moreInfoProject.type === 'p5js' ? (
                                                <P5Sketch
                                                    sketch={p5jsSketchMap[moreInfoProject.sketchName]}
                                                    resettable={true}
                                                />
                                            ) : (
                                                <img src={importImage(moreInfoProject.image)} alt={moreInfoProject.label} style={{ width: '100%', maxWidth: '220px', borderRadius: '8px', marginBottom: '12px' }} />
                                            )}
                                            <h3 style={{ color: '#f5f6fa', marginBottom: '8px' }}>{moreInfoProject.label}</h3>
                                            <ul style={{ color: '#e1ceb6', textAlign: 'left', paddingLeft: '18px' }}>
                                                {moreInfoProject.bulletPoints.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <span>Drag a project card here for more information</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
