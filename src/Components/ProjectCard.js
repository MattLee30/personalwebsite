import React, { useState } from 'react';
import '../Components/ProjectCard.css';


const ProjectCard = ({ label, bulletPoints, image, draggable, onDragStart, onDragEnd, p5SketchComponent, flippable = true }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        if (flippable) setFlipped(!isFlipped);
    };

    return (
        <div
            className="flip-card-container"
            onClick={handleFlip}
            draggable={draggable}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={{ cursor: draggable ? 'grab' : 'pointer' }}
        >
            <div className={`flip-card${isFlipped && flippable ? ' flipped' : ''}`}>
                <div className="project-card-inner">
                    <div className="project-card-front">
                        {p5SketchComponent ? (
                            p5SketchComponent
                        ) : (
                            <img src={image} alt={label} className="project-image" />
                        )}
                        <h3 className="project-title">{label}</h3>
                    </div>
                    {flippable && (
                        <div className="project-card-back">
                            <ul className="project-list">
                                {bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
