import React from 'react';
import './SketchBox.css';

const SketchBox = ({ sketch }) => {
    return (
        <div className="sketch-box">
            {sketch}
        </div>
    );
}

export default SketchBox;