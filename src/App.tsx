import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPostPage from './components/BlogPostPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Publications />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
