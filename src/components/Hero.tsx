import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, BookOpen } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-profile-pic">
          <img src="https://github.com/abhishek-jana.png" alt="Abhishek Jana" />
        </div>
        <h2 className="hero-greeting">Hi, I'm</h2>
        <h1 className="hero-name">Abhishek Jana</h1>
        <h3 className="hero-title">PhD in Astrophysics | AI/ML Researcher and Storyteller</h3>
        <p className="hero-description">
          Bridging the gap between theoretical research and scalable practical applications. 
          10+ years of experience in Generative AI, MLOps, 
          and AI for global conservation.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/abhishek-jana" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
          <a href="https://linkedin.com/in/abhijan" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href="https://medium.com/@abhijana" target="_blank" rel="noopener noreferrer" title="Medium"><BookOpen size={24} /></a>
          <a href="https://scholar.google.com/citations?user=DCN3neAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"><GraduationCap size={24} /></a>
          <a href="mailto:ajana.work@gmail.com"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
