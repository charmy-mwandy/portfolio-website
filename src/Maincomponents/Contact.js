import { useState,useRef } from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedLetters from '../Components/AnimatedLetters';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef
  

     const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'template_okwlk38',
            'refForm',
            'zNAmHV0JLXDokUr0h',
        )

        .then(
            () => {
                alert('Message sent successfully')
                window.location.reload(false)
            },
            () => {
                alert('Failed to sent message , please try again')
            }
        )
    } 
 
    return(
        <>
               <div className="page">
          
          <span className='tags top-tags'>
              {/* &lt;html&gt; */}
              <span className='bottom-tag-html'>&lt;html&gt;</span>
              <br />
              <span className='top-tag-html'>&lt;body&gt;</span>
          </span>
       
          <Outlet />
       
          <span className='tags bottom-tags'>
              &lt;/body&gt;
              <br />
              <span className='bottom-tag-html'>&lt;/html&gt;</span>
          </span>
              
         </div>


            <div className="contact-page">
                <div className="contact-txt">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['G','e','t','  ',' i','n','  ',' t','o','u','c','h']} 
                        idx={15}/>
                    </h1>

                    <p className='contact-ptxt1'>
                        Don't hesitate to reach out. Whether you have questions, requests, or simply
                        want to connect, feel free to use the form below. Let's explore opportunities
                        for collaboration and make a difference together.
                    </p>

                          <div className="contact-form">
                            {/* <form   action="https://formspree.io/f/xeqwvrpb" method='POST'>
                                <ul>
                                    <li className='contact-half'>
                                        <input type="text" name="name" placeholder="Name" required />
                                    </li>
                                    <li className='contact-half'>
                                        <input type="subject" name="subject" placeholder="Subject" required />
                                    </li>
                                    <li>
                                       <textarea placeholder="Message" name="message" required></textarea>
                                    </li>
                                    <li className='butform'>
                                      <input type="submit" className='form-button'  value="Send message"/>
                                    </li>
                                </ul>
                            </form> */}
                            <div class="contact-form">
                                <form action="https://formspree.io/f/xeqwvrpb" method='POST'>
                                    <div class="name-subject-container">
                                        <input type="text" name="name" placeholder="Name" required />
                                        <input type="text" name="subject" placeholder="Subject" required />
                                    </div>
                                        <textarea placeholder="Message" name="message" required></textarea>
                                        <div class="submit-button">
                                            <input type="submit" className='form-button' value="Send message"/>
                                        </div>
                                       
                                </form>
                            </div>

                          </div>
                </div>

                <div className="contact-email">
                    <h3 className='txt-1'>Email me :</h3>
                    <div className="contact1">
                        <img  src= 'images/icon email 1.png'  alt="emailicon"/>
                        <a  className='link' href="mailto:charmainemwandiringa@gmail.com">charmainemwandiringa@gmail.com</a>
                    </div>

                    <h3 className='txt-2'>Contact me :</h3>
                    <div className="contact2">
                        <img  src= 'images/icon call 1.png'  alt="callicon"/>
                        <a className='link' href="https://wa.me/+263777228641/" target='_blank'>+263 777228641</a>
                    </div>
                </div>

                <div className="contact-bg">
                    <img className='contact-img' src= 'images/bg-header 2.png'  alt="contactimg"/>
                </div>
            </div>
        
        </>
     
    );
}

export default Contact; 


