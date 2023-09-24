import React from 'react';
import Project from './Project'; 


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="projects-container">
                <Project 
                    imageSrc="path-to-your-project-image-1" 
                    caption="Project 1" 
                    projectLink=""
                />
                <Project 
                    imageSrc="path-to-your-project-image-2" 
                    caption="Project 2" 
                    projectLink=""
                />
                {/* Add more Project components as needed */}
            </div>
        </div>
    );
}
