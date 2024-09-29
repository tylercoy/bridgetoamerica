import React from 'react';

import rightImage from '../../assets/right_img.png'
import buttonImage from '../../assets/arrow_icon.png'

import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <form action="https://api.web3forms.com/submit" method="POST">
          <h2>Let us know you!</h2>
          <p>To better assist you, we would like you to answer the following questions. Let's start this journey together!</p>
          <hr />
          <input type="hidden" name="access_key" value="f5ee5964-782d-494d-8504-7a859ac1bdaf" />
          <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
          <input type="text" name="english_level" placeholder="Your English Level (1-10)" pattern="[1-9]|10" className="contact-inputs" required />
          <input type="text" name="grade" placeholder="Your Grade (e.g., 3 for 3rd grade)" pattern="\d*" className="contact-inputs" required />
          <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
          <button type="submit">
            Submit <img src={buttonImage} alt="arrow icon" />
          </button>
        </form>
      </div>
      <div className="contact-right">
        <img src={rightImage} alt="Right visual" />
      </div>
    </div>
  );
};

export default ContactForm;