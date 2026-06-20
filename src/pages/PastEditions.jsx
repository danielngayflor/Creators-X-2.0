import React from 'react';
import '../styles/pages/past-editions.css';

const stats1 = [
  { num: '150+', label: 'Creators' },
  { num: '15', label: 'Speakers' },
  { num: '8', label: 'Partners' },
  { num: '1', label: 'Day' },
];

const stats2 = [
  { num: '500+', label: 'Creators' },
  { num: '2', label: 'Days' },
  { num: 'TBA', label: 'Speakers' },
  { num: '7', label: 'Activations' },
];

const comparison = [
  { label: 'Attendees', v1: '150+', v2: '500+ (target)' },
  { label: 'Days', v1: '1', v2: '2' },
  { label: 'Speakers', v1: '15', v2: 'TBA' },
  { label: 'Partners', v1: '8', v2: 'Growing' },
  { label: 'Activations', v1: 'Panels & workshops', v2: '7 activations' },
];

export default function PastEditions() {
  return (
    <div className="past-editions-page">

      {/* Page Hero */}
      <section className="pe-hero">
        <img src="/assets/images/MTN-50.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <span className="section-label">CREATORSХ HISTORY</span>
          <h1>Where It's Been.</h1>
          <p className="hero-sub">Two editions. One growing movement. Here's how it started.</p>
        </div>
      </section>

      {/* Edition Cards */}
      <section className="editions-section">
        <div className="container container-narrow">
          <div className="section-intro">
            <span className="section-label">CREATORSХ EDITIONS</span>
            <h2>The Journey So Far</h2>
          </div>
          <div className="editions-grid">

            {/* Edition 1.0 */}
            <div className="edition-card">
              <div className="edition-img">
                <img src="/assets/images/MTN-50.jpg" alt="CreatorsX 1.0" />
                <div className="edition-img-overlay"></div>
                <span className="edition-badge">Edition 1.0</span>
              </div>
              <div className="edition-body">
                <div className="edition-meta">
                  <span>August 2024</span>
                  <span>Tropicana Resort, Thinker's Village, Monrovia</span>
                </div>
                <div className="edition-stats">
                  {stats1.map((s, i) => (
                    <div key={i} className="edition-stat">
                      <span className="stat-num">{s.num}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p>The inaugural CreatorsX brought Liberia's creative community together for the first time under one roof. 150+ creators walked through the door. The energy proved that Liberia's creative economy was already here — it just needed a space.</p>
                <a href="/gallery" className="btn btn-primary">See the Photos →</a>
              </div>
            </div>

            {/* Edition 2.0 — Teaser */}
            <div className="edition-card edition-card--upcoming">
              <div className="edition-img edition-img--placeholder">
                <span className="logo-placeholder">CreatorsX</span>
                <span className="coming-soon-badge">COMING SOON</span>
                <span className="edition-badge">Edition 2.0</span>
              </div>
              <div className="edition-body">
                <div className="edition-meta">
                  <span>November 21–22, 2025</span>
                  <span>Monrovia, Liberia</span>
                </div>
                <div className="edition-theme">
                  <span className="theme-label">THEME</span>
                  <span className="theme-text">Your Own Da Your Own</span>
                </div>
                <div className="edition-stats">
                  {stats2.map((s, i) => (
                    <div key={i} className="edition-stat">
                      <span className="stat-num">{s.num}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p>The next chapter. Bigger. More intentional. Built for the moment we're in.</p>
                <a href="/register" className="btn btn-primary">Register Your Interest →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Strip */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-node">
              <div className="node-dot"></div>
              <div className="node-year">2024</div>
              <div className="node-stats">
                <span>150 creators</span>
                <span>1 day</span>
                <span>8 partners</span>
              </div>
            </div>
            <div className="timeline-line">
              <div className="timeline-line-fill"></div>
            </div>
            <div className="timeline-node">
              <div className="node-dot node-dot--upcoming"></div>
              <div className="node-year">2025</div>
              <div className="node-stats">
                <span>500+ creators</span>
                <span>2 days</span>
                <span>growing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="comparison-section">
        <div className="container container-narrow">
          <div className="section-intro"><h2>Edition to Edition</h2></div>
          <div className="comparison-grid">
            <div className="comparison-col">
              <h3 className="col-header">1.0 <span>2024</span></h3>
              {comparison.map((row, i) => (
                <div key={i} className="comparison-row">
                  <span className="row-label">{row.label}</span>
                  <span className="row-value">{row.v1}</span>
                </div>
              ))}
            </div>
            <div className="comparison-col comparison-col--right">
              <h3 className="col-header">2.0 <span>2025</span></h3>
              {comparison.map((row, i) => (
                <div key={i} className="comparison-row">
                  <span className="row-label">{row.label}</span>
                  <span className="row-value text-gold">{row.v2}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
