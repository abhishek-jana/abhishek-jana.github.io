import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2 className="section-title">Latest Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date"><Calendar size={14} /> {post.date}</span>
                <span className="blog-time"><Clock size={14} /> {post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="blog-link">
                Read Full Article <ChevronRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
