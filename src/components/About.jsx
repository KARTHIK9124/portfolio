import { about } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-user" /> About</div>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal-left">
            {about.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about-features reveal-right">
            {about.features.map((f, i) => (
              <div key={i} className="feature glass">
                <div className="feature-icon" style={{ color: ['#6366f1', '#ec4899', '#14b8a6'][i] }}>
                  <i className={f.icon} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {about.stats.map((s, i) => (
            <div key={i} className="stat glass reveal" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="stat-icon" style={{ color: ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b'][i] }}>
                <i className={s.icon} />
              </div>
              <div className="stat-num">{s.number}+</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
