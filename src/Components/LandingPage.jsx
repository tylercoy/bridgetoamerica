import React, { useState } from 'react';
import axios from 'axios';

import image from '../assets/bridge.jpg';

const LandingPage = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(null); 

    const generateAnswer = async () => {
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
    return ( 
        <>
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
       
      </div>
      <div>
        <a target='_blank' href="https://latino.si.edu/learn/teaching-and-learning-resources">
          Educational Resources
        </a>
        <a target='_blank' href="https://www.youtube.com/playlist?list=PLYCXLjOiLD_A1Z6rR4KFQ7bhMPjO2yDF4">
          Start Your Journey
        </a>
        <a target='_blank' href="https://es.khanacademy.org/?_gl=1*xvryn2*_ga*MTk1NTQ2MTQ0NS4xNzI3NjE5NDM0*_ga_19G17DJYEE*MTcyNzYxOTQzNC4xLjAuMTcyNzYxOTQzNC4wLjAuMA..">
          Learn With Us
        </a>

      </div>
        </>
     );
}
 
export default LandingPage;