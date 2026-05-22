import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's collaborate</h3>
          <p>
            I'm always open to discussing research opportunities, AI projects, 
            or how we can leverage technology for global impact.
          </p>
          <div className="contact-methods">
            <div className="method">
              <Mail className="method-icon" />
              <span>ajana.work@gmail.com</span>
            </div>
            <div className="method">
              <MessageSquare className="method-icon" />
              <a href="https://linkedin.com/in/abhijan" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Connect on LinkedIn</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
