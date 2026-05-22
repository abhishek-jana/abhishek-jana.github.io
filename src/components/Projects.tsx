import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal CPA 2.0',
      desc: 'Privacy-first, agentic personal finance ecosystem. Features a ReAct agent core, deterministic math engine, and asynchronous document ingestion for tax organization.',
      tags: ['Agentic AI', 'LlamaIndex', 'FastAPI', 'SQLite'],
      github: 'https://github.com/abhishek-jana/personalCPA2.0',
    },
    {
      title: 'QTS2026',
      desc: 'Quantitative Trading System (QTS) core framework and execution engine designed for scalability and performance.',
      tags: ['FinTech', 'Trading', 'Python', 'ML'],
      github: 'https://github.com/abhishek-jana/QTS2026',
    },
    {
      title: 'Few-Shot Bird Call Classification',
      desc: 'An automated pipeline for classifying bird calls using deep learning, specifically applied to conservation impact.',
      tags: ['Deep Learning', 'Audio', 'Conservation'],
      github: 'https://github.com/colossal-compsci/few-shot-bird-call',
      paper: 'https://arxiv.org/abs/2504.16276',
    },
    {
      title: 'Movie-Recommendation-System',
      desc: 'Implementation of various recommendation methods (Content-based, Collaborative Filtering) to suggest movies.',
      tags: ['Recommender Systems', 'Python', 'Scikit-learn'],
      github: 'https://github.com/abhishek-jana/Movie-Recommendation-System',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={20} /> Code
                </a>
                {project.paper && (
                  <a href={project.paper} target="_blank" rel="noopener noreferrer">
                    <FileText size={20} /> Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
