import React, { useEffect } from "react";

import './App.css';
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

// Default exports
import Navbar from './components/navbar/navbar';
import Projects from './pages/projects/projects';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Homefooter from './components/homefooter/homefooter';


// Named Exports
import { About } from './pages/about/about';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Homefooter />
      <ScrollToTop smooth />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
