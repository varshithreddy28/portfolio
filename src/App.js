import React, { useEffect, useState } from "react";

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

  const [theme, setTheme] = useState(true);

  // true : dark , false : light

  useEffect(() => {
    console.log(theme)
  }, [theme]);


  return (
    <div className="App" data-theme={theme ? "dark" : "light"}>
      <Navbar />
      <Home theme={theme} setTheme={setTheme} />
      {/* <Homefooter theme={theme} setTheme={setTheme} /> */}
      <ScrollToTop smooth />
      <Projects theme={theme} setTheme={setTheme} />
      <About theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
