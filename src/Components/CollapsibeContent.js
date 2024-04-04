import React, { useState } from 'react';
import '../Dropdown.css'; // Assuming the CSS file is in the same directory

function CollapsibleContent({ buttonLabel, bulletPoints }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ border: '2px solid black', borderRadius: '20px', maxWidth: '300px', margin: '0 auto' }}>
        <button type="button" className={`collapsible ${isOpen ? 'active' : ''}`} onClick={toggleContent}>
          <div style={{textAlign: 'center'}}>
            {buttonLabel}
          </div>
        </button>
        <div className="content" style={{ display: isOpen ? 'block' : 'none' }}>
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleContent;

