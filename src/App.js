import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './style.css';
import Home from './Maincomponents/Home';
import About from './Maincomponents/About';  
import Work from './Maincomponents/Work';
import Contact from './Maincomponents/Contact';
import Navbar from "./Components/Navbar";
import AboutMe from "./Maincomponents/AboutMe";

function App() {
  return ( <BrowserRouter>
  <>
  <Navbar />
  </> 

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About Us />} />
      <Route path="/about_more" element={<AboutMe />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
  
  </BrowserRouter>  
  );
}

export default App;
