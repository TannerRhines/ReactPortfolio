import React from 'react';
import './Project.css';

function Project({ imageSrc, caption, projectLink }) {
    return (
        <div className="project-item">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={caption} />
            </a>
            <p>{caption}</p>
        </div>
    );
}

export default Project;
