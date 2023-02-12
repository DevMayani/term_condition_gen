import React from "react";
import { Routes, Route,Router } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Signin from './components/Signin/Signin'
import Contact from './components/Contact/Contact'
import About  from './components/About/About'
import Signup from "./components/Signup/Signup";
import Reset from "./components/Resetpass/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Dashhome from "./components/Dashboard/Dashhome";
import Dashboardset from "./components/Dashboardsetting/Dashboardset";
import TandCgenpage from "./components/TandCgen/TandCgenpage";
import Modalpageone from "./components/TandCgen/Modalpageone";
import Modalpagetwo from "./components/TandCgen/Modalpagetwo";
import Modalpagethree from "./components/TandCgen/Modalpagethree";
import Modalfinal from "./components/TandCgen/Modalfinal";
import Termandcon from "./components/Termandcon/Termandcon";
import Privacypolicy from "./components/Privacypolicy/Privacypolicy";
import Privacypolicygen from "./components/Privacypolicygen/Privacypolicygen";
import Privacymodalthree from "./components/Privacypolicygen/Privacymodalthree";
import Privacymodaltwo from "./components/Privacypolicygen/Privacymodaltwo";
import Privacyfinal from "./components/Privacypolicygen/Privacyfinal";
import Modaloneprivacy from "./components/Privacypolicygen/Modaloneprivacy";
import FooterTermandcond from "./components/Footertermcond/FooterTermandcond";
import FooterPrivacypolicy from "./components/Footerprivacy/FooterPrivacypolicy";
import Faq from "./components/FAQ/Faq";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashhome" element={<Dashhome />} />
      <Route path="/dashboardset" element={<Dashboardset />} />
      <Route path="/tandCgenpage" element={<TandCgenpage />} />
      <Route path="/modalpageone" element={<Modalpageone />} />
      <Route path="/modalpagetwo" element={<Modalpagetwo />} />
      <Route path="/modalpagethree" element={<Modalpagethree />} />
      <Route path="/modalfinal" element={<Modalfinal />} />
      <Route path="/termandcon" element={<Termandcon />} />
      <Route path="/privacypolicy" element={<Privacypolicy />} />
      <Route path="/privacypolicygen" element={<Privacypolicygen />} />
      <Route path="/privacyfinal" element={<Privacyfinal />} />
      <Route path="/privacymodaltwo" element={<Privacymodaltwo />} />
      <Route path="/privacymodalthree" element={<Privacymodalthree />} />
      <Route path="/modaloneprivacy" element={<Modaloneprivacy />} />
      <Route path="/footerTermandcond" element={<FooterTermandcond />} />
      <Route path="/footerPrivacypolicy" element={<FooterPrivacypolicy />} />
      <Route path="/faq" element={<Faq />} />
      
      
    
      
     
    </Routes>
  );
}

export default App;
