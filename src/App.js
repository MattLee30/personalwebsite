import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ProfileSection from './Components/ProfileSection';
import TechSection from './Components/TechSection';
import ProjectsSection from './Components/ProjectsSection';
import GradPic from './Images/GraduationPic.JPG';
import { Slime } from './p5js_sketches/Slime';
import { FernSketch } from './p5js_sketches/Fern';


//Deploy commands: 
//npm run build
//npm run deploy -- -m "Commit message"

const techExperience = [
  'C#',
  'Unity',
  'Unreal Engine 5',
  'Git',
  'React',
  'Java',
  'Python',
  'Javascript',
  'Blender',
  'Jira',
  'SQL'
];

const education = [
  'Loyola Marymount University 2021 - 2025, 2025-2026',
  'B.S. Computer Science // M.S Candidate in Computer Science',
];

const p5jsSketchMap = {
  Slime,
  FernSketch,
};

function HomePage() {
  const [projects, setProjects] = useState([]);

  const importImage = (imageName) => {
    try {
      return require(`./Images/${imageName}`);
    } catch (err) {
      console.error('Error importing image:', err);
      return null;
    }
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="home-page">
      <div className="NavBar">
        <NavBar />
      </div>

      <ProfileSection
        imageSrc={GradPic}
        name="Matthew Lee"
        role="Computer Science Student / Game Developer"
        education={education}
      />

      <TechSection techList={techExperience} />

      <ProjectsSection
        projects={projects}
        p5jsSketchMap={p5jsSketchMap}
        importImage={importImage}
      />
    </div>
  );
}

export default HomePage;
