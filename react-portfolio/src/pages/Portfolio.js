import React from 'react';
import Project from './Project'; 
import eyeballs from '../assets/images/eyeballs.png';
import runner from '../assets/images/runner.png';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="projects-container">
                <Project 
                    imageSrc={eyeballs} 
                    caption="eyeballs" 
                    projectLink=""
                />
               
            </div>


            <div className="projects-container">
                <Project 
                    imageSrc={runner} 
                    caption="eyeballs" 
                    projectLink=""
                />
               
            </div>



            <div className="projects-container">
                <Project 
                    imageSrc={runner} 
                    caption="eyeballs" 
                    projectLink=""
                />
               
            </div>
        </div>
    );
}
