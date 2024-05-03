import { useState, } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';
import MyCanvasContainer from '../Components/MyCanvasContainer';
import { NavLink } from 'react-router-dom';

const About = () => {

     const [letterClass] = useState('text-animate')
    return(
        <>


   <div id="skill">
    <div className="skill-txt">
    <h6>Here is something about</h6>

        <h1>
            <AnimatedLetters letterClass={letterClass}
                strArray={['C','h','a','r','m','a','i','n','e ','  ','M','w','a','n',' d','i','r','i','n','g','a']} 
                idx={15}/>
        </h1>
        <p className="skill-para">As a dedicated Front-end Web Developer, I've honed my skills through an intensive
                                bootcamp at Uncommon.org, where I immersed myself in technologies like <span color="green"> React, HTML, CSS,
                                SASS, and JavaScript </span>  to craft responsive websites. My passion for leveraging technology
                                to drive positive change fuels my ambition to contribute meaningfully to the industry.</p>
             
        <p className='skill-para1'>During my internship upskilling program, I broadened my skill set with a diverse range  
                                of skills including Laravel, PHP, Django ,Java and System Design coupled with data structures and
                                algorithms. This comprehensive skill set equips me to tackle coding challenges strategically,
                                facilitating efficient problem-solving and debugging in the dynamic software landscape. 
                                 </p>
          
        
        <NavLink className="but2" to='/about_more'>Learn More</NavLink>
    </div>
        
        <MyCanvasContainer />

        

 


  </div> 





  
   
   
   </>

);
}

export default About; 