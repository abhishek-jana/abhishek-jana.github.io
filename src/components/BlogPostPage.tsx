import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import '../styles/BlogPost.css';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="blog-post-container">
        <h1>Post not found</h1>
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <button onClick={() => navigate('/')} className="back-btn">
        <ArrowLeft size={20} /> Back to Portfolio
      </button>

      <article className="blog-post-full">
        <header className="post-header">
          <img src={post.heroImage} alt={post.title} className="post-hero-img" />
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span><Calendar size={16} /> {post.date}</span>
            <span><User size={16} /> Abhishek Jana</span>
            <span><Clock size={16} /> {post.readTime}</span>
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

export default BlogPostPage;
