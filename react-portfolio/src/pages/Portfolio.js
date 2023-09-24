import React from 'react';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';

import eyeballs from '../assets/images/eyeballs.png';
import runner from '../assets/images/runner.png';

const projects = [
  { imageSrc: runner, altText: "Description 1", caption: "Project 1", projectLink: "link-to-your-project-1" },
  { imageSrc: eyeballs, altText: "Description 2", caption: "Project 2", projectLink: "link-to-your-project-2" },
];

export default function Portfolio() {
  return (
    <div className="gallery">
      <section className="image-grid">
        <div className="container-xxl">
          <div className="row gy-4">
            {projects.map((project, index) => (
              <Project 
                key={index}
                imageSrc={project.imageSrc}
                altText={project.altText}
                caption={project.caption}
                projectLink={project.projectLink}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
