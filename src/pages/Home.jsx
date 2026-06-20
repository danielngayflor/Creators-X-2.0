import React, { useState, useRef, useEffect } from 'react';
import '../styles/pages/home.css';

/* ── Schedule Data ── */
const schedule = {
  'DAY 1': [
    { title: 'Keynote Addresses', desc: 'Leading voices setting the tone on the state and future of Liberia\'s creative economy.' },
    { title: 'Panel Discussions', desc: 'Practitioners and entrepreneurs tackling the real questions facing Liberia\'s creative community.' },
    { title: 'Networking Breaks', desc: 'Structured time to connect with fellow creatives, collaborators, and industry professionals.' },
    { title: 'Performances & Exhibitions', desc: 'Live showcases celebrating the depth of Liberian creative talent — music, spoken word, and more.' },
  ],
  'DAY 2': [
    { title: 'Workshops', desc: 'Hands-on skill-building sessions — from content creation to monetisation, led by industry experts.' },
    { title: 'Focus Group Discussions', desc: 'Intimate conversations to go deeper, share experience, and shape the future of the creative industry.' },
    { title: 'Fireside Chats', desc: 'Candid, unscripted conversations with creators who have built something real.' },
    { title: 'Creative Job Fair', desc: 'Connect directly with organisations looking to hire designers, filmmakers, photographers, and creators.' },
  ],
  'DAY 3': [
    { title: 'Visual Art Gallery', desc: 'A showcase of paintings, photography, and digital art by Liberian artists — open to the public.' },
    { title: 'Creators Discount Market', desc: 'Shop handmade goods, creative products, and merchandise directly from Liberian creators.' },
  ],
};

const tagColors = {
  KEYNOTE: '#da3019', PANEL: '#b3081d', MARKET: '#f49d00',
  'JOB FAIR': '#b3081d', NETWORKING: '#444', GALLERY: '#b3081d',
  WORKSHOP: '#da3019', 'FOCUS GROUP': '#f49d00', PERFORMANCE: '#da3019',
};

/* ── Speaker Placeholder Data ── */
const speakers = [
  { name: 'Speaker TBA', talk: 'Talk Title Coming Soon', img: '/assets/images/MTN-46.jpg' },
  { name: 'Speaker TBA', talk: 'Talk Title Coming Soon', img: '/assets/images/MTN-45.jpg' },
  { name: 'Speaker TBA', talk: 'Talk Title Coming Soon', img: '/assets/images/MTN-88.jpg' },
  { name: 'Speaker TBA', talk: 'Talk Title Coming Soon', img: '/assets/images/MTN-50.jpg' },
];

/* ── Partners List ── */
const partnersList = ['MTN Mobile Money', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 'Partner 6'];

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
        else setCount(target);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
}

export default function Home() {
  const [activeDay, setActiveDay] = useState('DAY 1');
  const videoRef = useRef(null);
  const [creatorsCount, creatorsRef] = useCountUp(150);
  const [speakersCount, speakersRef] = useCountUp(15);
  const [partnersCount, partnersRef] = useCountUp(8);

  return (
    <div className="home">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero">
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            src="/assets/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/MTN-50.jpg"
            className="hero-video"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1 className="hero-headline">YOUR OWN DA<br />YOUR OWN</h1>
          <p className="hero-sub">
            CreatorsX — Liberia's biggest creative summit is back.<br />
            Three days. 500+ creators. One movement.
          </p>
          <div className="hero-ctas">
            <a href="/register" className="btn btn-primary">Get Your Ticket Now</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════
          TRUSTED BY BANNER
      ══════════════════════════════ */}
      <section className="trusted-by">
        <div className="trusted-label">TRUSTED BY INDUSTRY LEADERS</div>
        <div className="ticker-track">
          <div className="ticker-inner">
            {[...partnersList, ...partnersList].map((p, i) => (
              <div key={i} className="ticker-item">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          COMBINED: COMMUNITY + THEME
      ══════════════════════════════ */}
      <section className="community-section" id="about">
        <div className="container">
          <div className="community-grid">
            <div className="community-image">
              <img src="/assets/images/MTN-45.jpg" alt="CreatorsX 1.0" />
            </div>
            <div className="community-text">
              <h2>Liberia's Creative<br />Community Is Real</h2>
              <p>
                CreatorsX 1.0 brought together 150+ creators from across Liberia in August 2024.
                What we discovered is that Liberia's creative economy is already thriving — it just needed a space to exist.
              </p>
              <div className="theme-callout">
                <p>
                  "Your Own Da Your Own" is more than a theme. It's a challenge.
                  Own your story. Support your own. Build what Liberia deserves.
                </p>
              </div>
              <a href="/about" className="btn btn-primary">About CreatorsX</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SPEAKERS (VidSummit style)
      ══════════════════════════════ */}
      <section className="speakers-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">CREATORSХ 2.0</span>
            <h2>Speakers Being Announced</h2>
            <p>Practitioners. Industry leaders. People who have actually done it.</p>
          </div>
          <div className="speakers-grid">
            {speakers.map((spk, i) => (
              <div key={i} className="spk-card">
                <div className="spk-photo">
                  <img src={spk.img} alt={spk.name} loading="lazy" />
                  <div className="spk-gradient" />
                </div>
                <div className="spk-info">
                  <h3>{spk.name}</h3>
                  <p>{spk.talk}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="speakers-cta">
            <a href="/speakers" className="btn btn-outline">See All Speakers</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          DATE & LOCATION (Parallax)
      ══════════════════════════════ */}
      <section className="location-banner" style={{ backgroundImage: "url('/assets/images/MTN-88.jpg')" }}>
        <div className="location-overlay" />
        <div className="container">
          <div className="location-inner">
            <div className="location-text">
              <span className="section-label">WHERE IT HAPPENS</span>
              <h2 className="location-city">MONROVIA,<br />LIBERIA</h2>
              <p>Join hundreds of creators in the heart of Liberia for three days of building, learning, and community.</p>
              <a href="/register" className="btn btn-primary">Get Your Ticket Now</a>
            </div>
            <div className="location-cards">
              <div className="location-card">
                <div className="location-card-label">VENUE</div>
                <div className="location-card-value">Monrovia, Liberia<br />Venue TBA</div>
              </div>
              <div className="location-card">
                <div className="location-card-label">DATES</div>
                <div className="location-card-value">November 21 – 23<br />2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SEE WHERE IT STARTED
      ══════════════════════════════ */}
      <section className="past-editions-teaser">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">CREATORSХ HISTORY</span>
            <h2>See Where It Started</h2>
          </div>
          <div className="teaser-card">
            <div className="teaser-image">
              <img src="/assets/images/MTN-30.jpg" alt="Audience at CreatorsX 1.0" />
            </div>
            <div className="teaser-content">
              <div className="teaser-stats">
                <div className="teaser-stat" ref={creatorsRef}><strong>{creatorsCount}+</strong><span>Creators</span></div>
                <div className="teaser-stat" ref={speakersRef}><strong>{speakersCount}</strong><span>Speakers</span></div>
                <div className="teaser-stat" ref={partnersRef}><strong>{partnersCount}</strong><span>Partners</span></div>
              </div>
              <p>The inaugural edition. 150+ creators. One day that proved Liberia's creative economy is real.</p>
              <a href="/past-editions" className="btn btn-primary">View Past Editions</a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════
          EVENT SCHEDULE (VidSummit style)
      ══════════════════════════════ */}
      <section className="schedule-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">CREATORSХ 2.0</span>
            <h2>Event Schedule</h2>
            <p>Three days of building, connecting, and creating.</p>
          </div>

          <div className="schedule-tabs">
            {Object.keys(schedule).map(day => (
              <button
                key={day}
                className={`schedule-tab ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="schedule-list">
            {schedule[activeDay].map((item, i) => (
              <div key={i} className="schedule-item">
                <div className="schedule-title">{item.title}</div>
                <div className="schedule-desc">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="schedule-cta">
            <a href="/activations" className="btn btn-outline">See Full Schedule</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SPONSORS & PARTNERS
      ══════════════════════════════ */}
      <section className="sponsors-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">OUR SPONSORS & PARTNERS</span>
            <h2>Backed By The Best</h2>
          </div>
          <div className="sponsors-grid">
            {partnersList.map((p, i) => (
              <div key={i} className="sponsor-logo-box">{p}</div>
            ))}
          </div>
          <a href="/sponsors" className="btn btn-outline">Become a Partner</a>
        </div>
      </section>

    </div>
  );
}
