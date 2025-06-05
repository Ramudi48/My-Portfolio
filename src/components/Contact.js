import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-wrapper" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>

      <div className="contact-card">
        <form className="contact-form">
          <label htmlFor="name">Namme</label>
          <input type="text" id="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
