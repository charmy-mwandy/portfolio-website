import {Outlet} from 'react-router-dom';
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
                                bootcamp at Uncommon.org, where I immersed myself in technologies React, HTML, CSS,
                                SASS, and JavaScript to craft responsive websites. My passion for leveraging technology
                                to drive positive change fuels my ambition to contribute meaningfully to the industry.</p>
             
        <p className='skill-para1'>During my internship upskilling program, I broadened my skill set with a diverse range of 
                                of skills including Laravel, PHP, Django, and Java, coupled with data structures and
                                algorithms. This comprehensive skill set equips me to tackle coding challenges strategically,
                                facilitating efficient problem-solving and debugging in the dynamic software landscape. 
                                 </p>
          
           

               {/* <p className='skill-para2'>
               Driven by my passion to make a significant impact in the sector and contribute to positive change through my skills, I eagerly look forward to collaborating on innovative projects that push the boundaries of technological advancement. Excited for the opportunities that lie ahead, I am ready to embark on this journey of growth and discovery.

Moreover, my hands-on experience in designing websites using Figma, including crafting my portfolio and projects at Dynamic WoW Solutions, has ignited a strong interest in furthering my understanding of design principles. I am enthusiastic about expanding my knowledge in this area.
               </p> */}

                <NavLink className="but2" to='/about_more'>Learn More</NavLink>
    </div>
        
        <MyCanvasContainer />

        

 


  </div> 





  
   
   
   </>

);
}

export default About; 