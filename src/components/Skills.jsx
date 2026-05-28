import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setAnimated(true),
      { threshold: 0.3 }
    );
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-code" /> Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-group glass reveal">
            <h3><i className="fas fa-palette" /> Frontend</h3>
            <div className="skill-list">
              {skills.frontend.map(s => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span>{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{
                      width: animated ? `${s.level}%` : '0%',
                      transition: 'width 1.5s var(--ease)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-group glass reveal">
            <h3><i className="fas fa-server" /> Backend</h3>
            <div className="skill-list">
              {skills.backend.map(s => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span>{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{
                      width: animated ? `${s.level}%` : '0%',
                      transition: 'width 1.5s var(--ease)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill-group glass reveal">
            <h3><i className="fas fa-tools" /> Tools & Platforms</h3>
            <div className="tool-tags">
              {skills.tools.map(t => (
                <span key={t} className="tool-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
