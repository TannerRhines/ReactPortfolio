import React from 'react';

function Project({ imageSrc, altText, caption, projectLink }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 pt-5">
      <figure>
        <a className="d-block" href={projectLink}>
          <img src={imageSrc} alt={altText} className="img-fluid" />
        </a>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

export default Project;