import { useState,useRef } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
 
    return(
        <div className="about">
            <h6>Here is something about</h6>
            <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={['C','h','a','r','m','a','i','n','e ','  ','M','w','a','n',' d','i','r','i','n','g','a']} 
                idx={15}/>
            </h1>
            <p>Hello ,l’m a front-end developer with a serious passion for UI effects, animations,
                 and creating intuitive, dynamic, and effective websites.With expertise in developing
                   responsive websites and a desire to work on ambitious projects with positive people,
                    l’m confident in my ability to deliver exceptional results.
                    <br />
                    <br />
                    <br />

              As a goal-driven and dynamic person, l’m confident on being a workaholic  who is committed
               to achieving success.However, l’m also a family person who values my leisure time.When l’m
                not working you can find me listening to music or catching up on my favorite series.
            </p>

            <a href="#first"><button className="but2">Learn More</button></a>
            <div className="page-bg-about">
                    <img className='bgsecond' src= 'images/bg-header 2.png'  alt="aboutimage"/>
            </div>
            
       </div>
    );
}

export default About; 