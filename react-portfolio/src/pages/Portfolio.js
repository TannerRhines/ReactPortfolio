import React from 'react';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';

import eyeballs from '../assets/images/eyeballs.png';
import runner from '../assets/images/runner.png';
import artSite from '../assets/images/art.png';

const projects = [
  { imageSrc: runner, altText: "Description 1", caption: "C++ Runner", projectLink: "link-to-your-project-1" },
  { imageSrc: eyeballs, altText: "Description 2", caption: "Interactive Eyeballs", projectLink: "link-to-your-project-2" },
  { imageSrc: artSite, altText: "Description 2", caption: "Art Website", projectLink: "link-to-your-project-2" }
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
