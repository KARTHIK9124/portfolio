import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const LINKS = ['home','about','experience','skills','projects','certifications','contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = LINKS.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 100 && bottom >= 100;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        {/* Logo */}
        <button className="nav-logo" onClick={() => goto('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="gradient-text">KR</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        {/* Desktop links */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(id => (
            <li key={id}>
              <button
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={() => goto(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="link-dot" />
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark'
              ? <i className="fas fa-sun" />
              : <i className="fas fa-moon" />}
          </button>
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-primary nav-resume">
            Resume <i className="fas fa-download" />
          </a>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
