import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cardwrapper from './Cardwrapper.js'

function Home(){
 return(
  <div className='cards'>
    <Cardwrapper/>
  </div>
 )
  
}

function About() {
  return ( <div> 
  <h2>ℹ️ About Page</h2>;
  <p>Hey! My Name is Bhagya </p>
  </div>
  );
}

function Contact() {
  return ( <div>
    <h2>📞 Contact Page</h2>;
    <h3>1234567890</h3>
    </div>
  );
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;