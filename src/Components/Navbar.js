import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    const navLinkStyles = ({ isActive }) => {
        return{
             fontWeight: isActive ? 'bold' : 'normal', 
            color: isActive ? 'rgb(255, 196, 72)' : 'rgb(110, 112, 113)',
        }   
    }

      const closeNav = () => {
    setIsNavOpen(false);
  };


    const iconStyle = {
        fontSize: '3em', // Adjust the font size
        color: '#FFC448', // Set the desired color
      
      };

    const githubProfileUrl = 'https://github.com/charmy-mwandy?tab=repositories'; 
    const linkedinProfileUrl = 'https://linkedin.com/in/charmaine-mwandiringa-719885264/'; 
      
 
    return(
        <>

        <nav className="nav-bar" id="nav-bar">
            <NavLink className="logo" to={'/'}>
                <img src= 'images/mainlogo.png'  alt="logo"/>
                
            </NavLink>
              <p>Web Developer</p>
                    
                   <ul>
                        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                        <NavLink style={navLinkStyles} to='/About'>About</NavLink>
                        <NavLink style={navLinkStyles} to='/Skills'>Skills</NavLink>
                        <NavLink style={navLinkStyles} to='/Work'>Work</NavLink>
                        <NavLink style={navLinkStyles} to='/Contact'>Contact</NavLink>
                    </ul>  

                    <div className="logos">
                        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub style={iconStyle} />
                        </a>
                        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={iconStyle}  />
                        </a>
                   
                    </div>
               

        </nav>

         <nav className={`nav-bar1 ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-menu-icon" onClick={toggleNav}>
      <div className="bar"></div>
        <div className="bar"></div>
         <div className="bar"></div>
       </div>

       <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
        <NavLink to="/" onClick={closeNav} exact>
           Home
        </NavLink>
        <NavLink to="/About" onClick={closeNav}>
          About
        </NavLink>
        <NavLink to="/Skills" onClick={closeNav}>
          Skills
         </NavLink>
         <NavLink to="/Work" onClick={closeNav}>
         Work
        </NavLink>
        <NavLink to="/Contact" onClick={closeNav}>
           Contact
         </NavLink>

       <div className="logos">
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav> 
        
        </>
      
    );
}

export default Navbar; 

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';


// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const closeNav = () => {
//     setIsNavOpen(false);
//   };

//       const navLinkStyles = ({ isActive }) => {
//         return{
//              fontWeight: isActive ? 'bold' : 'normal', 
//             color: isActive ? 'rgb(255, 196, 72)' : 'rgb(110, 112, 113)',
//         }   
//     }


//     const iconStyle = {
//         fontSize: '3em', // Adjust the font size
//         color: '#FFC448', // Set the desired color
      
//       };

//     const githubProfileUrl = 'https://github.com/charmy-mwandy?tab=repositories'; 
//     const linkedinProfileUrl = 'https://linkedin.com/in/charmaine-mwandiringa-719885264/'; 
      
 

//   return (
//     <>
//        <nav className="navbar" id="navbar">
//             <NavLink className="logo" to={'/'}>
//                 <img src= 'images/mainlogo.png'  alt="logo"/>
                
//             </NavLink>
//               <p>Web Developer</p>
                    
//                    <ul>
//                         <NavLink style={navLinkStyles} to='/'>Home</NavLink>
//                         <NavLink style={navLinkStyles} to='/About'>About</NavLink>
//                         <NavLink style={navLinkStyles} to='/Skills'>Skills</NavLink>
//                         <NavLink style={navLinkStyles} to='/Work'>Work</NavLink>
//                         <NavLink style={navLinkStyles} to='/Contact'>Contact</NavLink>
//                     </ul>  

//                     <div className="logos">
//                         <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
//                             <FaGithub style={iconStyle} />
//                         </a>
//                         <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
//                             <FaLinkedin style={iconStyle}  />
//                         </a>
                   
//                     </div>
               

//         </nav>


//     {/* <nav className={`nav-bar1 ${isNavOpen ? 'open' : ''}`}>
//       <div className="nav-menu-icon" onClick={toggleNav}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
//         <NavLink to="/" onClick={closeNav} exact>
//           Home
//         </NavLink>
//         <NavLink to="/About" onClick={closeNav}>
//           About
//         </NavLink>
//         <NavLink to="/Skills" onClick={closeNav}>
//           Skills
//         </NavLink>
//         <NavLink to="/Work" onClick={closeNav}>
//           Work
//         </NavLink>
//         <NavLink to="/Contact" onClick={closeNav}>
//           Contact
//         </NavLink>

//         <div className="logos">
//           <a
//             href="https://github.com/your-github-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/your-linkedin-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </nav> */}
//     </>
//   );
// };

// export default Navbar;












// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Navbar = () => {

//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const toggleNav = () => {
//       setIsNavOpen(!isNavOpen);
//     };

//     const navLinkStyles = ({ isActive }) => {
//         return{
//              fontWeight: isActive ? 'bold' : 'normal', 
//             color: isActive ? 'rgb(255, 196, 72)' : 'rgb(110, 112, 113)',
//         }   
//     }


//     const iconStyle = {
//         fontSize: '3em', // Adjust the font size
//         color: '#FFC448', // Set the desired color
      
//       };

//     const githubProfileUrl = 'https://github.com/charmy-mwandy?tab=repositories'; 
//     const linkedinProfileUrl = 'https://linkedin.com/in/charmaine-mwandiringa-719885264/'; 
      
 
//     return(
//         <>

//       <div className={`nav-menu-icon ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

        
//         {/* <nav className="nav-bar" id="nav-bar"> */}
//         <nav className={`nav-bar ${isNavOpen ? "open" : ""}`} id="nav-bar">
//             <NavLink className="logo" to={'/'}>
//                 <img src= 'images/mainlogo.png'  alt="logo"/>
                
//             </NavLink>
//               <p>Web Developer</p>
                    
//                    <ul>
//                         <NavLink style={navLinkStyles} to='/'>Home</NavLink>
//                         <NavLink style={navLinkStyles} to='/About'>About</NavLink>
//                         <NavLink style={navLinkStyles} to='/Skills'>Skills</NavLink>
//                         <NavLink style={navLinkStyles} to='/Work'>Work</NavLink>
//                         <NavLink style={navLinkStyles} to='/Contact'>Contact</NavLink>
//                     </ul>  

//                     <div className="logos">
//                         <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
//                             <FaGithub style={iconStyle} />
//                         </a>
//                         <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
//                             <FaLinkedin style={iconStyle}  />
//                         </a>
                   
//                     </div>
               

//         </nav>
        
//         </>
      
//     );
// }

// export default Navbar; 