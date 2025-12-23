import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import P5Sketch from './P5Sketch';

function ProjectsSection({ projects, p5jsSketchMap, importImage }) {
  const [draggedProject, setDraggedProject] = useState(null);
  const [moreInfoProject, setMoreInfoProject] = useState(null);

  const renderProjectCard = (project, index) => {
    if (project.type === 'p5js') {
      return (
        <ProjectCard
          key={index}
          label={project.label}
          bulletPoints={project.bulletPoints}
          image={null}
          draggable
          onDragStart={() => setDraggedProject(project)}
          onDragEnd={() => setDraggedProject(null)}
          p5SketchComponent={
            <P5Sketch sketch={p5jsSketchMap[project.sketchName]} resettable />
          }
          flippable={false}
        />
      );
    }

    return (
      <ProjectCard
        key={index}
        label={project.label}
        bulletPoints={project.bulletPoints}
        image={importImage(project.image)}
        draggable
        onDragStart={() => setDraggedProject(project)}
        onDragEnd={() => setDraggedProject(null)}
      />
    );
  };

  return (
    <section className="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-dragspace-layout">
        <div className="projects-list-column">
          <div className="projects-grid one-column">
            {projects.map(renderProjectCard)}
          </div>
        </div>
        <div className="dragspace-column">
          <MoreInfoSlot
            draggedProject={draggedProject}
            setDraggedProject={setDraggedProject}
            moreInfoProject={moreInfoProject}
            setMoreInfoProject={setMoreInfoProject}
            p5jsSketchMap={p5jsSketchMap}
            importImage={importImage}
          />
        </div>
      </div>
    </section>
  );
}

function MoreInfoSlot({
  draggedProject,
  setDraggedProject,
  moreInfoProject,
  setMoreInfoProject,
  importImage,
  p5jsSketchMap,
}) {
  const handleDrop = () => {
    if (!draggedProject) return;
    setMoreInfoProject(draggedProject);
    setDraggedProject(null);
  };

  return (
    <div
      className="more-info-slot"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleDrop();
        }
      }}
    >
      {moreInfoProject ? (
        <div className="more-info-content">
          <div className="more-info-header" aria-live="polite">
            <span className="more-info-title">{moreInfoProject.label}</span>
          </div>
          <div className="more-info-body">
            {moreInfoProject.type === 'p5js' ? (
              <P5Sketch
                sketch={p5jsSketchMap[moreInfoProject.sketchName]}
                resettable
              />
            ) : (
              <img
                className="more-info-image"
                src={importImage(moreInfoProject.image)}
                alt={moreInfoProject.label}
              />
            )}
            <h3 className="more-info-subtitle">{moreInfoProject.label}</h3>
            <ul className="more-info-list">
              {moreInfoProject.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <span>Drag a project card here for more information</span>
      )}
    </div>
  );
}

export default ProjectsSection;
