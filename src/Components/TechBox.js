import React from 'react';
import './TechBox.css';

const TechBox = ({ key, tech }) => {
    return (
        <div className="tech-box" key={key}>
            {tech}
        </div>
    );
}

export default TechBox;