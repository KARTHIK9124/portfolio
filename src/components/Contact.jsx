import { useState } from 'react';
import { contact, personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '9a088682-dcde-42c5-8217-e7ea1e9ff9bd',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge"><i className="fas fa-envelope" /> Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">{contact.description}</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal-left">
            {contact.details.map((d, i) => (
              <a key={i} href={d.link || '#'} className="contact-item glass">
                <div className="contact-icon" style={{ color: ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b'][i] }}>
                  <i className={d.icon} />
                </div>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.value}</p>
                </div>
              </a>
            ))}

            <div className="contact-socials">
              <h4>Follow</h4>
              <div className="socials">
                {[
                  { href: personalInfo.social.github, icon: 'fab fa-github' },
                  { href: personalInfo.social.linkedin, icon: 'fab fa-linkedin-in' },
                  { href: personalInfo.social.email, icon: 'fas fa-envelope' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn glass">
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form glass reveal-right">
            <h3>Send Message</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send'} <i className="fas fa-paper-plane" />
            </button>

            {sent && (
              <div className="success-msg">
                <i className="fas fa-check-circle" />
                <div>
                  <strong>Message received!</strong>
                  <p>Thank you for reaching out. I will get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            {error && <div className="error-msg">✗ {error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
