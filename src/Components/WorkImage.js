
import React from 'react';

const WorkImage = ({ src, alt, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="work-image-container">
      <img className="workfirst" src={src} alt={alt} />
      <div className="overlay">
        <span>Visit Website</span>
      </div>
    </a>
  );
};

export default WorkImage;
