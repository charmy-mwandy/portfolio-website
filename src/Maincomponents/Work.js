import { useState, } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';
import WorkImage from '../Components/WorkImage';

const Work = () => {
    const [letterClass] = useState('text-animate')
 
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
      <WorkImage src="images/Directhome.png" alt="workthirdimage" link="https://charmaine-directhome.netlify.app" />
      <WorkImage src="images/Bakersinn.png" alt="worksecondimage" link="https://bakercharmy.vercel.app/" />
      <WorkImage src="images/Load.png" alt="workforthimage" link="https://charmaine-loadhaul.netlify.app" />
      <WorkImage src="images/resellme.png" alt="workfifthimage" link="https://reselle-project-charmy.vercel.app" />
      <WorkImage src="images/no_walls.png" alt="worksixthimage" link="https://charmaine-nowalls.netlify.app" />
      <WorkImage src="images/mobi.png" alt="workfirstimage" link="https://charmaine-mobi.netlify.app" />
    </div>
   
  
  </div>

   </>

);
}

export default Work; 