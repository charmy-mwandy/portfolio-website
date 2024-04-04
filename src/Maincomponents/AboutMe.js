import { useState } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';


const AboutMe = () => {
    const [letterClass] = useState('text-animate')
    
 
    return(
        <div className="about">
            <h6>Here is something about
                This diverse skill set enables me to approach coding challenges with a strategic mindset, facilitating efficient problem-solving and debugging in the dynamic software industry.   
            </h6>
       </div>
    );
}

export default AboutMe; 