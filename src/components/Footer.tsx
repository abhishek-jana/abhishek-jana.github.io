import React from 'react';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Abhishek Jana</h3>
          <p>Senior AI Research Scientist | PhD Astrophysics</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/abhishek-jana" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com/in/abhijan" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="https://scholar.google.com/citations?user=DCN3neAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><GraduationCap size={20} /></a>
          <a href="mailto:ajana.work@gmail.com"><Mail size={20} /></a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Abhishek Jana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
