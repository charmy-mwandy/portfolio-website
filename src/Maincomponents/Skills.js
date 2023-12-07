import {Outlet} from 'react-router-dom';
import { useState,useRef } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';
import MyCanvasContainer from '../Components/MyCanvasContainer';


const Skills = () => {

  

    const [letterClass, setLetterClass] = useState('text-animate')


 
    return(
        <>
        <div className="page">
          
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
       
  </div>

  <div id="skill">
    <div className="skill-txt">

        <h1>
           <AnimatedLetters letterClass={letterClass}
            strArray={['S','k','i','l','l','s',' ','&',' ', ' ',' ','E','x','p','e','r','i','e','n','c','e']} 
            idx={15}/>
        </h1>
        <p className="skill-para">In my tech journey, I have acquired a diverse technical skill set that spans multiple dimensions of software development.
         I've worked with Laravel PHP.Additionally, my expertise in Python extends to
          backend development, contributing to versatile and scalable solutions. My understanding of data structures and algorithms forms a solid foundation
           for efficient problem-solving, ensuring that I approach coding challenges with a strategic mindset.</p>
             
             
        <p className='skill-para1'> While I've grasped the basics of Java, my
            focus on frontend development has seen me successfully complete projects using React and Python. This amalgamation of technologies reflects
             my commitment to staying versatile and adaptable in the ever-evolving landscape of software engineering. Through hands-on experience and a
              commitment to continuous learning, alongside my technical skills, I bring interpersonal skills and qualities that enhance teamwork and collaboration,
               time management proficiency, and effective problem-solving ,  emphasizing a well-rounded approach to web development challenges.</p>
    </div>
        
        <MyCanvasContainer />

        

 


  </div>





  
   
   
   </>

);
}

export default Skills; 