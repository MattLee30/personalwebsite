import React from 'react';
import './ResumePage.css';

const StyledDiv = ({ title, children }) => (
  <div className="card">
    {title && <h2 className="card-title">{title}</h2>}
    {children}
  </div>
);

const ResumePage = () => (
  <div className="resume-container">
    <h1 className="resume-title">Matthew Lee</h1>

    <h2 className="section-title">Education</h2>
    <StyledDiv>
      <p><strong>Loyola Marymount University</strong> - B.S. in Computer Science (August 2021 - May 2025)</p>
    </StyledDiv>

    <h2 className="section-title">Skills & Tools</h2>
    <div className="card-container">
      <StyledDiv title="Programming Languages">
        <p>C, C#, Go, Java, JavaScript, Python, Swift</p>
      </StyledDiv>
      <StyledDiv title="Tools & Game Engines">
        <p>Blender, Git, Unreal Engine, Unity</p>
      </StyledDiv>
    </div>

    <h2 className="section-title">Relevant Coursework</h2>
    <div className="card-container">
      <StyledDiv title="Computer Science">
        <p>Artificial Intelligence</p>
        <p>Natural Language Processing</p>
        <p>Cognitive Systems and Design</p>
      </StyledDiv>
      <StyledDiv title="Mathematics">
        <p>Applied Linear Algebra</p>
        <p>Discrete Math</p>
      </StyledDiv>
      <StyledDiv title="Game Development">
        <p>Game Design</p>
        <p>Game Development</p>
        <p>Game Engine Development</p>
        <p>Advanced Interactive Animation</p>
      </StyledDiv>
    </div>
  </div>
);

export default ResumePage;
