import React from "react";
import { Routes, Route,Router } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Signin from './components/Signin/Signin'
import Contact from './components/Contact/Contact'
import About  from './components/About/About'
import Createnew from "./components/Newacc/Createnew";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/createnew" element={<Createnew />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
