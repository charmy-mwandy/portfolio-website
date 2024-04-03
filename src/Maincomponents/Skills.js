import {Outlet} from 'react-router-dom';
import { useState, } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';
import MyCanvasContainer from '../Components/MyCanvasContainer';


const Skills = () => {

  

     const [letterClass] = useState('text-animate')


 
    return(
        <>
        {/* <div className="page">
          
   <span className='tags top-tags'>
       &lt;html&gt;
       <br />
       <span className='bottom-tag-html'>&lt;body&gt;</span>
   </span>

   <Outlet />

   <span className='tags bottom-tags'>
       &lt;/body&gt;
       <br />
       <span className='bottom-tag-html'>&lt;/html&gt;</span>
   </span>
       
  </div> */}

  {/* <div class="container">
  <div class="carousel">
    <div class="carousel__face"><span className='skill_text'>This is something</span></div>
    <div class="carousel__face"><span className='skill_text'>Very special</span></div>
    <div class="carousel__face"><span className='skill_text'>Special is the key</span></div>
    <div class="carousel__face"><span className='skill_text'>For you</span></div>
    <div class="carousel__face"><span className='skill_text'>Just give it</span></div>
  </div>
</div> */}

   <div id="skill">
    <div className="skill-txt">

        <h1>
           <AnimatedLetters letterClass={letterClass}
            strArray={['S','k','i','l','l','s',' ','&',' ','E','x','p','e','r','i','e','n','c','e']} 
            idx={15}/>
        </h1>
        <p className="skill-para">A driven Front-end Web Developer, I've successfully completed projects during my bootcamp utilizing React, HTML, CSS, SASS, and JavaScript to create responsive websites.My journey in software development has provided me with a diverse skill set, including exposure to technologies like Laravel PHP, Django, and foundational knowledge in data structures and algorithms. I am driven to further enhance my understanding of software technologies.

This diverse skill set enables me to approach coding challenges with a strategic mindset, facilitating efficient problem-solving and debugging in the dynamic software industry.      </p>
             
             
        <p className='skill-para1'> My commitment to versatility and adaptability is reflected in my amalgamation of technologies, which underscores my dedication to staying current in the ever-evolving landscape of software development. Through hands-on experience and continuous learning, I not only possess technical skills but also bring interpersonal qualities that enhance teamwork and collaboration, as well as effective problem-solving abilities.</p>

               <p className='skill-para2'>
               Driven by my passion to make a significant impact in the sector and contribute to positive change through my skills, I eagerly look forward to collaborating on innovative projects that push the boundaries of technological advancement. Excited for the opportunities that lie ahead, I am ready to embark on this journey of growth and discovery.

Moreover, my hands-on experience in designing websites using Figma, including crafting my portfolio and projects at Dynamic WoW Solutions, has ignited a strong interest in furthering my understanding of design principles. I am enthusiastic about expanding my knowledge in this area.
               </p>
    </div>
        
        <MyCanvasContainer />

        

 


  </div> 





  
   
   
   </>

);
}

export default Skills; 