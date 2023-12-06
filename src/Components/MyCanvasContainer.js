import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,faSass,
  faReact,
  
  faGitAlt} from '@fortawesome/free-brands-svg-icons';


function MyCanvasContainer() {

  return (
    <div id="myCanvasContainer">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color='rgb(255, 196, 72)'/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color='rgb(255, 196, 72)'/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faSass} color='rgb(255, 196, 72)'/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color='rgb(255, 196, 72)'/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color='rgb(255, 196, 72)'/>
          </div>
          {/* <div className="face6">
            <FontAwesomeIcon icon={faES6} color='rgb(255, 196, 72)'/>
          </div> */}

        </div>
    </div>
  );
}

export default MyCanvasContainer;