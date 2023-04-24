import React from "react";
import "./index"
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
