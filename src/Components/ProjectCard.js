import React from 'react';
import '../Components/ProjectCard.css';

const ProjectCard = ({ label, bulletPoints, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={label} className="project-image" />
            <h3 className="project-title">{label}</h3>
            <ul className="project-list">
                {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
