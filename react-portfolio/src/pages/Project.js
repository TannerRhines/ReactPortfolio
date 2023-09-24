import React from 'react';

function Project({ imageSrc, caption, projectLink }) {
    return (
        <div className="project">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={caption} />
            </a>
            <p>{caption}</p>
        </div>
    );
}

export default Project;
