import React from 'react';
import './TechBox.css';

const TechBox = ({ tech }) => {
    return (
        <div className="tech-box">
            {tech}
        </div>
    );
}

export default TechBox;