import React, { useState } from 'react';
import '../styles/pages/contact.css';

const subjects = [
  'General enquiry',
  'Sponsorship / partnerships',
  'Media / press',
  'Speaker application',
  'Vendor / market application',
  'Hackathon',
  'Art gallery submission',
  'Other',
];

const channels = [
  { label: 'General', email: 'contact@konten.agency', desc: 'General questions and enquiries' },
  { label: 'Partnerships', email: 'sales@konten.agency', desc: 'Sponsorship and partnership opportunities' },
  { label: 'Media', email: 'marketing@konten.agency', desc: 'Press credentials and media coverage' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* Page Hero */}
      <section className="contact-hero">
        <img src="/assets/images/MTN-136.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <span className="section-label">GET IN TOUCH</span>
          <h1>Talk to Us.</h1>
          <p className="hero-sub">Whether you want to partner, speak, exhibit, or just find out more — we want to hear from you.</p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="channels-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">GET IN TOUCH</span>
            <h2>Contact Us</h2>
          </div>
          <div className="channels-grid">
            {channels.map((ch, i) => (
              <div key={i} className="channel-card">
                <h3>{ch.label}</h3>
                <p>{ch.desc}</p>
                <a href={`mailto:${ch.email}`} className="channel-email">{ch.email}</a>
              </div>
            ))}
          </div>
          <div className="contact-extra">
            <div className="extra-item">
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+231776049390">+231 776 049 390</a> / <a href="tel:+2310886888438">0886 888 438</a></p>
              </div>
            </div>
            <div className="extra-item">
              <div>
                <strong>Website</strong>
                <p><a href="https://konten.agency" target="_blank" rel="noopener noreferrer">konten.agency</a></p>
              </div>
            </div>
            <div className="extra-item">
              <div>
                <strong>Social</strong>
                <p>@creatorsx on Instagram, Facebook & TikTok</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container container-compact">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <div className="form-group">
                <label htmlFor="c-name">Full Name *</label>
                <input type="text" id="c-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label htmlFor="c-email">Email Address *</label>
                <input type="email" id="c-email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="c-subject">Subject *</label>
                <select id="c-subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject...</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Message *</label>
                <textarea id="c-message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us what's on your mind..." rows={6}></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">Send</button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Message received.</h2>
              <p>We've got your message. Expect a response within 48 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* Organised By */}
      <section className="organised-by-section">
        <div className="container">
          <div className="section-intro"><span className="section-label">ORGANISED BY</span></div>
          <div className="org-grid">
            <div className="org-card">
              <div className="org-logo-placeholder">Konten LR</div>
              <h3>Konten LR</h3>
              <p>Creative strategy & production agency behind CreatorsX.</p>
              <a href="https://konten.agency" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">konten.agency →</a>
            </div>
            <div className="org-card">
              <div className="org-logo-placeholder">Bevonne</div>
              <h3>Bevonne</h3>
              <p>Co-organiser and community partner for CreatorsX 2.0.</p>
              <a href="https://bevonne.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">bevonne.com →</a>
            </div>
          </div>
          <p className="closing-line">Tell your story. · <a href="https://konten.agency">www.konten.agency</a> · <a href="https://creatorsx.net">www.creatorsx.net</a></p>
        </div>
      </section>

    </div>
  );
}
