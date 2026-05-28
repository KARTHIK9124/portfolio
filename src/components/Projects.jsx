import { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, 3);

  const handleLink = (e, link) => {
    if (!link || link === '#') {
      e.preventDefault();
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-code" /> Portfolio
          </div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my work — from backend systems to web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {displayed.map((proj, i) => (
            <div
              key={proj.id}
              className="project-card glass proj-visible"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Thumbnail */}
              <div
                className="proj-thumb"
                style={{ background: `linear-gradient(135deg, ${proj.color}30, ${proj.color}08)` }}
              >
                {proj.image ? (
                  <img src={`/${proj.image}`} alt={proj.title} />
                ) : (
                  <i className={proj.icon} style={{ color: proj.color }} />
                )}

                {/* Overlay */}
                <div className="proj-overlay">
                  <a
                    href={proj.link && proj.link !== '#' ? proj.link : undefined}
                    target={proj.link && proj.link !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="proj-overlay-btn"
                    onClick={(e) => handleLink(e, proj.link)}
                  >
                    <i className="fas fa-external-link-alt" />
                  </a>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="proj-overlay-btn">
                      <i className="fab fa-github" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="proj-content">
                <span className="proj-category">{proj.category}</span>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.description}</p>
                <div className="proj-tech">
                  {proj.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less Button */}
        <div className="projects-toggle">
          <button className="btn btn-outline" onClick={() => setShowAll(prev => !prev)}>
            {showAll
              ? <><i className="fas fa-chevron-up" /> Show Less</>
              : <><i className="fas fa-chevron-down" /> View More Projects</>
            }
          </button>
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <p>Want to see more?</p>
          <a href="https://github.com/KARTHIK9124" target="_blank" rel="noreferrer" className="btn btn-primary">
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
