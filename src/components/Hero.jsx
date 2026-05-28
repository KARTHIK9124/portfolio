import { useState, useEffect } from 'react';
import { personalInfo, roles } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);
  const [idx, setIdx]           = useState(0);
  const [speed, setSpeed]       = useState(100);

  useEffect(() => {
    const full = roles[idx % roles.length];
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) {
          setSpeed(2000);
          setDeleting(true);
        } else {
          setSpeed(90);
        }
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIdx(i => i + 1);
          setSpeed(400);
        } else {
          setSpeed(45);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, speed]);

  const goto = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner container">

        {/* ── Left ── */}
        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="badge-pulse" />
            {personalInfo.availability}
          </div>

          <h1 className="hero-name reveal">
            Hi, I'm<br />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-role reveal">
            <span className="role-text">{text}</span>
            <span className="caret">|</span>
          </h2>

          <p className="hero-bio reveal">{personalInfo.bio}</p>

          <div className="hero-btns reveal">
            <button className="btn btn-primary" onClick={() => goto('projects')}>
              View My Work <i className="fas fa-arrow-right" />
            </button>
            <button className="btn btn-outline" onClick={() => goto('contact')}>
              Let's Talk
            </button>
          </div>

          <div className="hero-socials reveal">
            {[
              { href: personalInfo.social.github,   icon: 'fab fa-github',      label: 'GitHub' },
              { href: personalInfo.social.linkedin,  icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
              { href: personalInfo.social.email,     icon: 'fas fa-envelope',    label: 'Email' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                 className="social-pill" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hero-visual reveal-right">
          <div className="avatar-ring">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="avatar-wrap">
              <img src="/karthik-new.png" alt={personalInfo.name} className="avatar-img" />
              <div className="avatar-glow" />
            </div>
          </div>

          {/* Floating chips */}
          <div className="chip chip-1 glass">
            <i className="fab fa-python" /> Python
          </div>
          <div className="chip chip-2 glass">
            <i className="fab fa-aws" /> AWS
          </div>
          <div className="chip chip-3 glass">
            <i className="fas fa-bolt" /> FastAPI
          </div>
          <div className="chip chip-4 glass">
            <i className="fab fa-react" /> React
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="mouse"><div className="wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
