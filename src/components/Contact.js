import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      

      <main className="contact-content">
        <h2>Contact Me</h2>
        <div className="contact-intro">
          
          <div className="email-info">
            <h3>Get In Touch</h3>
            
            
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;

