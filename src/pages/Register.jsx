import React, { useState } from 'react';
import '../styles/pages/register.css';

const creatorTypes = [
  'Musician / Artist',
  'Filmmaker / Videographer',
  'Photographer',
  'Graphic Designer / Visual Artist',
  'Writer / Journalist / Blogger',
  'Content Creator / Influencer',
  'Fashion Designer / Stylist',
  'Tech / Developer',
  'Entrepreneur / Business Owner',
  'Student / Aspiring Creator',
  'Other',
];

const hearAboutOptions = [
  'Instagram',
  'Facebook',
  'TikTok',
  'Twitter / X',
  'Word of mouth / Friend',
  'Konten LR',
  'Bevonne',
  'News / Media',
  'Other',
];

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creatorType: '',
    hearAbout: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="register-page">
      {/* Page Hero */}
      <section className="register-hero">
        <div className="container">
          <span className="section-label">CREATORSХ 2.0</span>
          <h1>Be Part of It.</h1>
          <p className="hero-sub">November 21–22, 2025. Monrovia, Liberia. 500+ creators.</p>
        </div>
      </section>

      {/* Tickets Status */}
      <section className="register-content">
        <div className="container container-compact">
          <div className="tickets-notice">
            <strong>Tickets are not on sale yet.</strong>
            <p>
              Register your interest below and you will be the first to know when they drop —
              including early access and any early-bird pricing.
            </p>
          </div>

          {/* Interest Form */}
          {!submitted ? (
            <form className="interest-form" onSubmit={handleSubmit}>
              <h2>Register Your Interest</h2>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number <span className="optional">(optional)</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+231 ..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="creatorType">What type of creator are you? *</label>
                <select
                  id="creatorType"
                  name="creatorType"
                  value={formData.creatorType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select one...</option>
                  {creatorTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="hearAbout">How did you hear about CreatorsX? <span className="optional">(optional)</span></label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                >
                  <option value="">Select one...</option>
                  {hearAboutOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Count Me In
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>You're on the list.</h2>
              <p>We'll hit you first when tickets drop.</p>
            </div>
          )}

          {/* Vendor Applications */}
          <div className="vendor-section">
            <h3>Want More Than a Ticket?</h3>
            <ul className="vendor-list">
              <li><span><strong>Creators Market vendor</strong> — Sell your work at the market</span></li>
              <li><span><strong>Hackathon participant</strong> — Compete in the 48-hour sprint</span></li>
              <li><span><strong>Art Gallery artist</strong> — Exhibit your visual work</span></li>
              <li><span><strong>Job Fair employer</strong> — Post creative opportunities</span></li>
            </ul>
            <p className="vendor-note">
              Applications open soon — register your interest above to be notified.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
