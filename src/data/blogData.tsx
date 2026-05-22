import React from 'react';
import PersonalCPA from './posts/personalCPA';
import QTS2026 from './posts/qts2026';
import GalaxyHalo from './posts/galaxyHalo';
import Biometric from './posts/biometric';
import Starbucks from './posts/starbucks';
import NLPDisaster from './posts/nlpDisaster';
import Airbnb from './posts/airbnb';
import AIFuture from './posts/aiFuture';

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: React.ReactNode;
}

export const blogPosts: Post[] = [
  {
    id: 1,
    slug: 'agentic-ai-tax-management',
    title: 'Taming the Tax Beast with Agentic AI',
    excerpt: "During the 2026 tax season, I realized how painful it is to manage personal finances and keep information organized. This inspired Personal CPA 2.0 - a local-first, agentic ecosystem.",
    date: 'May 20, 2026',
    readTime: '15 min read',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    content: <PersonalCPA />
  },
  {
    id: 2,
    slug: 'qts2026-quant-trading-bias',
    title: 'QTS2026: Eliminating Look-Ahead Bias',
    excerpt: "Building a bi-temporal Quantitative Trading System that solves the most common failure mode in financial ML: unintentional use of future information.",
    date: 'May 10, 2026',
    readTime: '20 min read',
    heroImage: 'https://images.unsplash.com/photo-1611974717482-98aa007137f6?auto=format&fit=crop&q=80&w=1000',
    content: <QTS2026 />
  },
  {
    id: 3,
    slug: 'astrophysics-to-ai-galaxy-halo',
    title: 'Bridging Astrophysics and AI: Galaxy-Halo Mapping',
    excerpt: "How I used deep learning to constrain the complex connection between galaxies and their dark matter halos, moving from cosmic scales to neural architectures.",
    date: 'March 15, 2024',
    readTime: '15 min read',
    heroImage: '/images/research/halo_connection.png',
    content: <GalaxyHalo />
  },
  {
    id: 4,
    slug: 'biometric-authenticator-deep-learning',
    title: 'Secure Biometric Authentication with Neural Fuzzy Extractors',
    excerpt: "Solving the noise problem in biometric security by leveraging high-dimensional latent space mappings.",
    date: 'Jan 3, 2022',
    readTime: '18 min read',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    content: <Biometric />
  },
  {
    id: 5,
    slug: 'starbucks-sales-analysis',
    title: 'Starbucks Sales Analysis: Predicting Customer Behavior',
    excerpt: "How to use XGBoost and feature engineering to optimize promotional offer completion and marketing spend.",
    date: 'Feb 11, 2021',
    readTime: '20 min read',
    heroImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000',
    content: <Starbucks />
  },
  {
    id: 6,
    slug: 'nlp-disaster-response',
    title: 'Using NLP in Disaster Response',
    excerpt: "Building an end-to-end data pipeline to categorize emergency messages into 36 distinct categories for real-time prioritization.",
    date: 'Dec 17, 2022',
    readTime: '15 min read',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
    content: <NLPDisaster />
  },
  {
    id: 7,
    slug: 'airbnb-price-analysis',
    title: 'Boston or Seattle? An Airbnb Price Analysis',
    excerpt: "Comparing market dynamics and pricing drivers in two major cities using the CRISP-DM process.",
    date: 'Oct 21, 2020',
    readTime: '14 min read',
    heroImage: 'https://images.unsplash.com/photo-1496560238219-03da56bd042a?auto=format&fit=crop&q=80&w=1000',
    content: <Airbnb />
  },
  {
    id: 8,
    slug: 'ai-automation-future',
    title: 'The Future of AI and Automation',
    excerpt: "Exploring the societal impact and ethical considerations of the AI revolution.",
    date: 'Oct 31, 2020',
    readTime: '12 min read',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    content: <AIFuture />
  }
];
