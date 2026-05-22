import React from 'react';
import { FileText, Quote } from 'lucide-react';
import '../styles/Publications.css';

const Publications = () => {
  const stats = [
    { label: 'High-impact Publications', value: '5' },
    { label: 'Total Citations', value: '900+' },
    { label: 'Journal Reviewer', value: 'Expert' },
  ];

  const highlights = [
    'Neural Fuzzy Extractors: Secure biometric authentication using artificial neural networks.',
    'ScalPy: A Python package for late-time scalar field cosmology.',
    'Galaxy-Halo Connection: Research using ML to constrain galaxy and dark matter halo connections.',
    'DESI: Validation of scientific programs for the Dark Energy Spectroscopic Instrument.',
  ];

  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Research & Publications</h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="publications-content">
        <h3>Research Highlights</h3>
        <div className="highlights-list">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
              <FileText className="highlight-icon" size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        
        <div className="publications-quote">
          <Quote size={40} className="quote-icon" />
          <blockquote>
            Specializing in bridging the gap between theoretical research and scalable practical applications.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Publications;
