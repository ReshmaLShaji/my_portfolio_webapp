
import React from 'react';
import  './Contact.css'

function Contact() {
  return (
    
    <div className="contact-me">
      <h1>Get in Touch</h1>
      <p>Let's connect and discuss your project!</p>
      

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send Message</button>
        
      </form>
      
      <div className="social-links">
        <a href="(link unavailable)" target="_blank">
          <i className="fa fa-linkedin" />
        </a>
        <a href="(link unavailable)" target="_blank">
          <i className="fa fa-github" />
        </a>
        <a href="mailto:your-email@example.com">
          <i className="fa fa-envelope" />
        </a>
      </div>
    </div>
  );
}

export default Contact;


  