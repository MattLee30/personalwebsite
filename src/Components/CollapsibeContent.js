import React, { useState } from 'react';
import '../Dropdown.css'; // Assuming the CSS file is in the same directory

function CollapsibleContent({ buttonLabel, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button type="button" style={{ textAlign: 'center' }} className={`collapsible ${isOpen ? 'active' : ''}`} onClick={toggleContent}>
        {buttonLabel}
      </button>
      <div className="content" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CollapsibleContent;
