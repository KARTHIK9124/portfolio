import { workExperience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-briefcase" /> Experience</div>
          <h2 className="section-title">Work History</h2>
        </div>

        <div className="timeline">
          {workExperience.map((job, i) => (
            <div key={i} className="timeline-item glass reveal">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="job-header">
                  <div>
                    <h3>{job.position}</h3>
                    <h4>{job.company}</h4>
                    <p className="job-meta">
                      <i className="fas fa-map-marker-alt" /> {job.location}
                    </p>
                  </div>
                  <div className="job-badges">
                    <span className="badge-duration">{job.duration}</span>
                    <span className="badge-type">{job.type}</span>
                  </div>
                </div>

                <p className="job-desc">{job.description}</p>

                <div className="job-achievements">
                  <h5>Key Achievements</h5>
                  <ul>
                    {job.achievements.map((a, j) => (
                      <li key={j}><i className="fas fa-check" /> {a}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-tech">
                  {job.technologies.map(t => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
