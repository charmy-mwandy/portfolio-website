import { useState,useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import AnimatedLetters from '../Components/AnimatedLetters';
import CV from "../Components/dox/Charmaine-CV.pdf";


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['  ','C','h','a','r','m','a','i','n','e']
    const jobArray = ['W','e','b','    ','D','e','v','e','l','o','p','e','r']

 /*    useEffect(() => {
       return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])  
 */
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Front-end Developer","Web Developer","Web Designer" ];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () =>{ clearInterval(ticker)};
    }, [text] )

    const tick =  () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText =isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
       
        
    return(
        <>
             <div className="page">
                <div className="page-bg">
                    <img className='bgfirst' src= 'images/bg-header 1.png'  alt="homeimage"/>
                </div>
            
         <span className='tags top-tags'>&lt;html&gt;</span> 
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

 
       <div className="hero">
            <div className="hero-txt">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                <br/>
                    <span className={`${letterClass} _13`}>l'</span>
                    <span className={`${letterClass} _14`}>m</span>
                   
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} 
                    idx={15}/>
                      
                    <br/> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} 
                    idx={22}/>
                 
                </h1>
                <h3>&lt; {/* Front-end Developer */} {text} &gt;</h3>
                 <a href={CV} download="Charmaine-CV.pdf"><button className="but1">Download Cv</button></a> 
            
            </div> 

            
       </div> 
       
        
        
        </>
  
    );
}

export default Home; 