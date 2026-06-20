import React from 'react';
import '../styles/pages/speakers.css';

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  initials: '??',
  name: 'Speaker TBA',
  title: 'To Be Announced',
  discipline: 'TBA',
}));

export default function Speakers() {
  return (
    <div className="speakers-page">
      {/* Page Hero */}
      <section className="speakers-hero">
        <img src="/assets/images/MTN-46.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <span className="section-label">CREATORSХ 2.0</span>
          <h1>The People on Stage</h1>
          <p className="hero-sub">Practitioners. Industry leaders. People who have actually done it.</p>
          <div className="coming-soon-badge">Speakers Being Announced — Check Back Soon</div>
        </div>
      </section>

      {/* Placeholder State */}
      <section className="speakers-placeholder">
        <div className="container container-compact">
          <div className="section-intro">
            <h2>Speakers Coming Soon</h2>
          </div>
          <p>
            We're finalising the lineup for CreatorsX 2.0. Every speaker on this stage has built
            something real. Practitioners. Strategists. People who can tell you exactly how they did it.
          </p>
          <a href="/register" className="btn btn-primary">Register Your Interest</a>
        </div>
      </section>

      {/* Speaker Grid */}
      <section className="speakers-grid-section">
        <div className="container">
          <div className="speakers-grid">
            {placeholders.map((speaker, idx) => (
              <div key={idx} className="speaker-card">
                <div className="speaker-photo">
                  <span className="speaker-initials">{speaker.initials}</span>
                </div>
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <span className="speaker-tag">{speaker.discipline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kind of Speakers */}
      <section className="what-speakers">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">WHAT TO EXPECT</span>
            <h2>What Kind of Speakers?</h2>
          </div>
          <div className="speakers-columns">
            <div className="speakers-col">
              <h3>Practitioners</h3>
              <p>
                Creators who are actively building. Musicians, filmmakers, photographers, designers,
                writers, and technologists who can show their work and explain their process.
                No theorists. No consultants who have never shipped anything.
              </p>
            </div>
            <div className="speakers-col">
              <h3>Strategists</h3>
              <p>
                Industry professionals who understand the business side of creativity. Brand builders,
                executives, investors, and operators who have helped creative businesses grow.
                Practical insights, not inspiration porn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
