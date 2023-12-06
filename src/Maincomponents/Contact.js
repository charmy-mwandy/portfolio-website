
import { useState,useRef } from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedLetters from '../Components/AnimatedLetters';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef
  
 /*     useEffect(() => {
       return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])  */

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


            <div className="contact-page">
                <div className="contact-txt">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['G','e','t','  ',' i','n','  ',' t','o','u','c','h']} 
                        idx={15}/>
                    </h1>

                    <p className='contact-ptxt1'>I’m interested in freelance opportunities - especially ambitious or
                         large projects.However, if you have other request or question, don’t
                          hesitate to use the form below.</p>

                          <div className="contact-form">
                            <form  r/* ef={refForm} onSubmit={sendEmail} */ >
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
                            </form>

                          </div>
                </div>

                <div className="contact-email">
                    <h3 className='txt-1'>Email me :</h3>
                    <div className="contact1">
                        <img className='' src= 'images/icon email 1.png'  alt="emailicon"/>
                        <a  className='link' href="#">charmainemwandiringa@gmail.com</a>
                    </div>

                    <h3 className='txt-2'>Contact me :</h3>
                    <div className="contact2">
                        <img className='' src= 'images/icon call 1.png'  alt="callicon"/>
                        <a className='link' href="#">+263 777228641</a>
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