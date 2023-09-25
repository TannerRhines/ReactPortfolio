import React from 'react';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';

import eyeballs from '../assets/images/eyeballs.png';
import runner from '../assets/images/runner.png';
import artSite from '../assets/images/art.png';
import tux from '../assets/images/tux.png';
import mongo from '../assets/images/mongoDB.png';
import weather from '../assets/images/weathermap.png';

const projects = [
  { imageSrc: runner, altText: "runner", caption: "C++ Runner", projectLink: "https://github.com/TannerRhines/PixelRPG" },
  { imageSrc: eyeballs, altText: "interactive eyeballs", caption: "Interactive Eyeballs", projectLink: "https://tannerrhines.github.io/InteractiveEyeballs/" },
  { imageSrc: tux, altText: "mac address changer", caption: "Mac Address Changer", projectLink: "https://github.com/TannerRhines/mac-address-changer" },
  { imageSrc: artSite, altText: "art website", caption: "Art Website", projectLink: "https://tannerrhines.com" },
  { imageSrc: mongo, altText: "mongoDB", caption: "MongoDB BackEnd", projectLink: "https://github.com/TannerRhines/mongoDBsocial" },
  { imageSrc: weather, altText: "weather api app", caption: "weather forecast app", projectLink: "https://github.com/TannerRhines/WeatherAPIApp1" }
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
