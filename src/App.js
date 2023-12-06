import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './style.css';
import Home from './Maincomponents/Home';
import About from './Maincomponents/About';  
import Skills from './Maincomponents/Skills';
import Work from './Maincomponents/Work';
import Contact from './Maincomponents/Contact';
import Navbar from "./Components/Navbar";


function App() {
  return ( <BrowserRouter>
  <>
  <Navbar />
  </> 

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About Us />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Work />} />
     {/*  <Route path="/testimonials" element={<Testimonials />} /> */}
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
  
  </BrowserRouter>  
  );
}

export default App;
