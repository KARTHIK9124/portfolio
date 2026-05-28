import { education, certifications } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-certificate" /> Credentials</div>
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        {/* Education */}
        <div className="cred-section">
          <h3 className="cred-title"><i className="fas fa-graduation-cap" /> Education</h3>
          <div className="edu-grid">
            {education.map((e, i) => (
              <div key={i} className="edu-card glass reveal">
                <div className="edu-icon">
                  <i className="fas fa-university" />
                </div>
                <h4>{e.degree} - {e.field}</h4>
                <p className="edu-inst">{e.institution}</p>
                <p className="edu-meta">
                  <i className="fas fa-map-marker-alt" /> {e.location}
                </p>
                <p className="edu-meta">
                  <i className="fas fa-calendar" /> {e.year}
                </p>
                {e.cgpa && <p className="edu-cgpa"><i className="fas fa-star" /> CGPA: {e.cgpa}</p>}
                <p className="edu-desc">{e.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cred-section">
          <h3 className="cred-title"><i className="fas fa-award" /> Certifications</h3>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <div key={i} className="cert-card glass reveal" style={{ '--delay': `${i * 0.1}s` }}>
                <div className="cert-icon">
                  <i className="fas fa-certificate" />
                </div>
                <h4>{c.title}</h4>
                <p className="cert-issuer">
                  <i className="fas fa-building" /> {c.issuer}
                </p>
                {c.duration && <p className="cert-duration"><i className="fas fa-clock" /> {c.duration}</p>}
                {c.description && <p className="cert-desc">{c.description}</p>}
                {c.courses && (
                  <div className="cert-courses">
                    <strong>Courses:</strong>
                    <ul>
                      {c.courses.map((course, j) => (
                        <li key={j}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
