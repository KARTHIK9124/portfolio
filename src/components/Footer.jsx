import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <h3><span className="gradient-text">KR</span></h3>
          <p>Backend Developer<br />Python • AWS • FastAPI</p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <a href={personalInfo.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Karthik's Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="footer-icons">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
