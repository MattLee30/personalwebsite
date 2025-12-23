import React from 'react';
import TechBox from './TechBox';

function TechSection({ techList }) {
  return (
    <section className="tech">
      <div className="tech-title">
        <h1>Technologies and Experience</h1>
      </div>
      <div className="tech-experience">
        {techList.map((tech) => (
          <TechBox key={tech} tech={tech} />
        ))}
      </div>
    </section>
  );
}

export default TechSection;
