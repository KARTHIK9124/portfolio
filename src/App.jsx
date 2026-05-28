import { useState, useEffect } from 'react';
import './App.css';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Experience    from './components/Experience';
import Skills        from './components/Skills';
import Projects      from './components/Projects';
import Certifications from './components/Certifications';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import ScrollToTop   from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import MagneticCursor from './components/MagneticCursor';
import BlobBackground from './components/BlobBackground';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <>
      <LoadingScreen />
      <MagneticCursor />
      <BlobBackground />
      <ParticleBackground />
      <div className="app">
        <Navbar theme={theme} toggleTheme={() =>
          setTheme(t => t === 'light' ? 'dark' : 'light')
        } />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
