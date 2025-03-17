import React, { useState } from 'react';
import '../Components/ProjectCard.css';
import './TechBox.js';
import TechBox from './TechBox.js';


const ProjectCard = ({ label, bulletPoints, image, tags }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className="flip-card-container" onClick={handleFlip}>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="project-card-inner">

                    <div className="project-card-front">
                        <img src={image} alt={label} className="project-image" />
                        <div className="project-tags">
                            {Array.isArray(tags) && tags.map((tag, index) => (
                                <TechBox key={index} tech={tag} />
                            ))}
                        </div>
                        <h3 className="project-title">{label}</h3>
                    </div>
                    
                    <div className="project-card-back">
                        <ul className="project-list">
                            {bulletPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
