import React from "react";
import { Routes, Route,Router } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Signin from './components/Signin/Signin'
import Contact from './components/Contact/Contact'
import About  from './components/About/About'

import Signup from "./components/Signup/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
