import React from 'react';
import { Brain, Cpu, Database, Microscope } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const skills = [
    { icon: <Brain size={24} />, title: 'Generative AI', desc: 'Expertise in LLMs, RAG systems, and context-aware intelligent agents.' },
    { icon: <Database size={24} />, title: 'MLOps', desc: 'Building scalable AI pipelines, model deployment, and monitoring.' },
    { icon: <Cpu size={24} />, title: 'Deep Learning', desc: 'Computer Vision, NLP, and advanced neural network architectures.' },
    { icon: <Microscope size={24} />, title: 'Research', desc: 'PhD in Astrophysics with a focus on data-driven discovery.' },
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a Senior AI Research Scientist at Colossal Foundation, where I lead AI-driven initiatives 
            for conservation and biodiversity. My journey began in the realm of theoretical physics, 
            earning a PhD in Astrophysics from Kansas State University.
          </p>
          <p>
            Over the past 10+ years, I have specialized in bridging the gap between high-level theoretical 
            research and scalable, practical AI applications. My work spans from cosmological modeling 
            to pioneering GenAI solutions for global conservation and privacy.
          </p>
          <p>
            I am passionate about creating "local-first" AI systems that prioritize privacy and building 
            intelligent ecosystems that solve complex, real-world problems.
          </p>
        </div>
        
        <div className="about-skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
