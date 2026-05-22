import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import '../styles/BlogPost.css';

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    content: React.ReactNode;
  };
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="blog-post-container">
      <button onClick={onBack} className="back-btn">
        <ArrowLeft size={20} /> Back to Articles
      </button>

      <article className="blog-post-full">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span><Calendar size={16} /> {post.date}</span>
            <span><User size={16} /> Abhishek Jana</span>
            <span><Clock size={16} /> 8 min read</span>
          </div>
        </header>

        <div className="post-content">
          {post.content}
        </div>

        <footer className="post-footer">
          <div className="share-section">
            <p>Enjoyed this article? Share it with your network.</p>
            <div className="share-links">
              <button className="share-btn"><Share2 size={18} /> Share</button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
