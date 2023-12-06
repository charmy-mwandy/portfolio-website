import { useState,useRef } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
 
    return(
        <>

  <div id="work">
    <div className="work-txt">
        <h1>
        <AnimatedLetters letterClass={letterClass}
        strArray={['L','a','t','e','s','t',' ','w','o','r','k','s']} 
        idx={15}/>
        </h1>
        <p>Here you will find some of the personal and clients projects that I  developed!</p>
    </div>

    <div className="work-gallery">
        <img className="workfirst" src= 'images/Luis.png'  alt="workfirstimage"/>
        <img className="workfirst" src= 'images/Bakersinn.png'  alt="worksecondimage"/>
        <img className="workfirst" src= 'images/Directhome.png'  alt="workforthimage"/>
        <img className="workfirst" src= 'images/Tay.png'  alt="workthirdimage"/>
        <img className="workfirst" src= 'images/Load.png'  alt="workforthimage"/>
        <img className="workfirst" src= 'images/resellme.png'  alt="workfiveimage"/>
    </div>
   
  
  </div>

   </>

);
}

export default Work; 