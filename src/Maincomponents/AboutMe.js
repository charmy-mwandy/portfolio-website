import { useState } from 'react';
// import AnimatedLetters from '../Components/AnimatedLetters';


const AboutMe = () => {
    // const [letterClass] = useState('text-animate')
    
 
    return(
        <div className="about">
            <h6>Here is something about
            <p className="skill-para">
                Motivated by a commitment to continuous growth, I've ventured into mobile application development,
                self-teaching React-Native.js and Typescript. This self-directed learning journey has been instrumental
                in broadening my expertise, culminating in the development of personal projects and valuable practical
                experience gained through projects at Dynamic Wow Solutions, where I am currently employed.
            </p>
             
            <p className='skill-para1'>
                Furthermore, I've taken the initiative to explore dashboard development using React.js, a pursuit
                driven by my passion for creating intuitive and impactful data visualization solutions. Embracing
                these challenges fuels my ambition to evolve as a versatile developer, equipped to tackle diverse
                projects and contribute meaningfully to the ever-evolving tech landscape.
            </p>

            <p className="skill-para">
                Looking ahead, I am enthusiastic about the prospect of collaborating on innovative projects that drive
                technological advancement to new heights. With a blend of adaptability, versatility, technical prowess,
                and strong interpersonal skills, I am well-positioned to contribute as a valuable asset to any team dedicated
                to excellence in the tech industry.
            </p>
             
            <p className='skill-para1'>
                I welcome the opportunity to discuss potential collaborations and explore how our synergies can lead to impactful
                outcomes in this ever-evolving landscape. Please feel free to reach out to me to initiate a conversation on how we
                can work together to make a difference.
            </p>
          
            </h6>
       </div>
    );
}

export default AboutMe; 