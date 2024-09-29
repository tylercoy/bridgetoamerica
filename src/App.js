import { Route, Routes } from "react-router-dom"; // Import useNavigate

 import Navbar from './Components/Navbar/Navbar'; 

import React from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import LandingPage from './Components/LandingPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar /> {/* Place Navbar at the top */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact-us" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
