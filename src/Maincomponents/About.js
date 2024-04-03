import { useState } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';

const About = () => {
    const [letterClass] = useState('text-animate')
    
 
    return(
        <div className="about">
            <h6>Here is something about</h6>
            <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={['C','h','a','r','m','a','i','n','e ','  ','M','w','a','n',' d','i','r','i','n','g','a']} 
                idx={15}/>
            </h1>
            <p>As a dedicated front-end developer, I am deeply passionate about crafting engaging UI effects,
                 animations, and intuitive interfaces that breathe life into websites and developing responsive
                  websites.
                    <br />
                    <br />
                    <br />
                    Driven by my enthusiasm for ambitious projects and surrounded by positive-minded individuals,
                    I am committed and honed in my ability to consistently deliver exceptional results. I am eager
                    to contribute my skills and expertise to projects that push the boundaries of innovation and
                    creativity. Additionally, I am dedicated to continuous growth and learning in both design and
                     development, eager to expand my knowledge and proficiency in creating impactful digital solutions.
                   

   
            </p>

            {/* <a href="#first"><button className="but2">Learn More</button></a> */}
            <div className="page-bg-about">
                    <img className='bgsecond' src= 'images/bg-header 2.png'  alt="aboutimage"/>
            </div>
            
       </div>
    );
}

export default About; 