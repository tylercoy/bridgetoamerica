import { useState } from 'react';
import './App.css';
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate

// Components
import DisplayImageWithName from './Components/displayImageWithName';
import Navbar from './Components/Navbar/Navbar'; 
import Welcome from './pages/Welcome';
import Home from './pages/home';
import About from './pages/About';

// Assets
import image from './assets/bridge.jpg';
import React from 'react';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null); 
  const navigate = useNavigate(); // Initialize useNavigate hook

  async function generateAnswer() {
    setAnswer("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCq7zJG21-AMcmJqa7LS7G3mCh3ySjHFy4", 
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      }
    });
    
    setAnswer(response.data.candidates[0].content.parts[0].text);
    setQuestion('')
  }

  const goToHome = () => {
    navigate('/'); // Programmatically navigate to home page
  };

  return (
    <div className="App">
      <Navbar /> {/* Place Navbar at the top */}
      <div 
        className='bta-container'
        style={{
        backgroundImage: `url(${image})`,
        
      }}>
        <h1 className='bg-green-500'>BridgeToAmerica ChatBot</h1>

        <div style={{ position: 'relative' }}> {/* Relative positioning for the image and chatbot */}
          {/* <DisplayImageWithName image={image} /> */}
          <div className="chatbot">
            {
              !answer ? (
                <p>Your message here</p>
              ) : (
                answer
              )
            }
            {/* Add your input field or buttons here */}
          </div>
        </div>

        <div 
          className='input-button-container'
        >
          <div>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              cols="5"
              rows="5"
              placeholder='Lets do this together! Ask me to start learning journey.'
            ></input>
          </div>
          <button 
            onClick={generateAnswer}>Generate Answer</button>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="placeholder" element={<Welcome />} />
        </Routes>
      </div>
      <div>
        <a href="https://latino.si.edu/learn/teaching-and-learning-resources">
          Educational Resources
        </a>
        <a href="https://www.youtube.com/playlist?list=PLYCXLjOiLD_A1Z6rR4KFQ7bhMPjO2yDF4">
          Start Your Journey
        </a>
        <a href="https://es.khanacademy.org/?_gl=1*xvryn2*_ga*MTk1NTQ2MTQ0NS4xNzI3NjE5NDM0*_ga_19G17DJYEE*MTcyNzYxOTQzNC4xLjAuMTcyNzYxOTQzNC4wLjAuMA..">
          Learn With Us
        </a>

      </div>

      {/* Button to navigate to the Home page */}
      
    </div>
  );
}

export default App;
