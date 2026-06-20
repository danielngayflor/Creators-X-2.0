import React from 'react';
import '../styles/pages/about.css';

export default function About() {
  const missions = [
    { title: 'Empower', desc: 'Creators to own their craft and build sustainable careers' },
    { title: 'Inspire', desc: 'A new generation of creative talent in Liberia' },
    { title: 'Connect', desc: 'Creators across disciplines and geographies' },
    { title: 'Advocate', desc: 'For the creative economy as essential infrastructure' },
    { title: 'Celebrate', desc: 'Every creator who shows up and builds' },
  ];

  const souvenirs = [
    { name: 'T-Shirt', desc: 'Limited edition CreatorsX 2.0 tee' },
    { name: 'Tote Bag', desc: 'Reusable bag with brand mark' },
    { name: 'Notebook', desc: 'For ideas and inspiration' },
    { name: 'Badge & Lanyard', desc: 'Event credential and keepsake' },
  ];

  return (
    <div className="about">
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <img src="/assets/images/MTN-88.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <h1>We Started Something.</h1>
          <p className="hero-sub">Now We're Building On It.</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="origin-story">
        <div className="container">
          <div className="origin-content">
            <div className="origin-text">
              <span className="section-label">WHERE IT STARTED</span>
              <h2>The Beginning</h2>
              <p>
                In August 2024, Konten LR and Bevonne brought together 150+ of Liberia's most creative minds for the inaugural CreatorsX.
                The energy in that room proved what we already knew: Liberia's creative economy is thriving.
                It just needed a space to exist—a moment to be seen, celebrated, and connected.
              </p>
              <p>
                That summit became a turning point. Creators walked away with connections, confidence, and proof that their work matters.
              </p>
            </div>
            <div className="origin-image">
              <img src="/assets/images/MTN-30.jpg" alt="Audience at CreatorsX 1.0" />
            </div>
          </div>
        </div>
      </section>

      {/* What 2.0 Is */}
      <section className="what-2point0">
        <div className="container">
          <div className="what-content">
            <div className="what-image">
              <img src="/assets/images/MTN-90.jpg" alt="Panel discussion at CreatorsX 1.0" />
            </div>
            <div className="what-text">
              <h2>What CreatorsX 2.0 Is</h2>
              <p>
                CreatorsX 2.0 is bigger. Two days instead of one. Multiple activations instead of panels.
                500+ creators instead of 150. And the same energy—amplified.
              </p>
              <p>
                This is not a conference you attend and forget. It's an experience you build in.
                Seven activations designed to celebrate creators across every discipline and stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Explanation */}
      <section className="theme-explanation">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">THE THEME</span>
            <h2 className="theme-heading">"Your Own Da Your Own"</h2>
          </div>
          <div className="theme-columns">
            <div className="theme-column identity">
              <h3>Identity and Pride</h3>
              <p>
                Own your identity. Your story. Your voice. Your perspective is not a limitation—it's your superpower.
                Liberia needs creators who are unapologetically themselves.
              </p>
            </div>
            <div className="theme-column ownership">
              <h3>Ownership and Support</h3>
              <p>
                Support your own. Collaborate with other creators. Build infrastructure that lifts your peers.
                The creative economy grows when we invest in each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="mission-section">
        <div className="container">
          <div className="section-intro">
            <h2>What We're Here To Do</h2>
          </div>
          <div className="mission-list">
            {missions.map((mission, idx) => (
              <div key={idx} className="mission-item">
                <div>
                  <h3>{mission.title}</h3>
                  <p>{mission.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="founders-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">THE PEOPLE BEHIND IT</span>
            <h2>Organised By</h2>
          </div>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-photo">
                <div className="photo-placeholder">BP</div>
              </div>
              <h3>Beyan Flomo Pewee</h3>
              <p className="founder-title">Founder & CEO, Bevonne</p>
              <p className="founder-bio">
                Creative director and entrepreneur building platforms for African creators.
              </p>
              <a href="https://bevonne.com" target="_blank" rel="noopener noreferrer" className="founder-link">
                bevonne.com →
              </a>
            </div>
            <div className="founder-card">
              <div className="founder-photo">
                <div className="photo-placeholder">DG</div>
              </div>
              <h3>Daniel N. Gayflor</h3>
              <p className="founder-title">Founder & Creative Director, Konten LR</p>
              <p className="founder-bio">
                Creative strategist and community builder focused on Liberia's creative economy.
              </p>
              <a href="https://konten.agency" target="_blank" rel="noopener noreferrer" className="founder-link">
                konten.agency →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenirs */}
      <section className="souvenirs-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">TAKE SOMETHING HOME</span>
            <h2>Souvenir Kit</h2>
          </div>
          <div className="souvenirs-grid">
            {souvenirs.map((item, idx) => (
              <div key={idx} className="souvenir-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="souvenirs-note">* Souvenir kit included with every registration</p>
        </div>
      </section>
    </div>
  );
}
