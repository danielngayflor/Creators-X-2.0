import React, { useState, useRef, useEffect } from 'react';
import '../styles/pages/home.css';

/* ── Schedule Data ── */
const schedule = {
  'DAY 1': [
    { time: '9:00 AM', title: 'Registration & Welcome', tags: ['OPENING'] },
    { time: '10:00 AM', title: 'Opening Keynote: The State of Liberia\'s Creative Economy', tags: ['KEYNOTE'] },
    { time: '11:30 AM', title: 'Panel: From Passion to Profession', tags: ['PANEL'] },
    { time: '1:00 PM', title: 'Lunch & Creators Discount Market Opens', tags: ['MARKET'] },
    { time: '2:30 PM', title: 'Creative Job Fair & Internship Board Opens', tags: ['JOB FAIR'] },
    { time: '3:30 PM', title: 'Live Podcast Studio: Session 1', tags: ['PODCAST'] },
    { time: '4:30 PM', title: 'Hackathon Kickoff — The 48-Hour Sprint', tags: ['HACKATHON'] },
    { time: '6:00 PM', title: 'Networking & Close of Day 1', tags: ['NETWORKING'] },
  ],
  'DAY 2': [
    { time: '9:00 AM', title: 'Doors Open — Visual Art Gallery Opens', tags: ['GALLERY'] },
    { time: '10:00 AM', title: 'Panel: Building Creative Businesses in West Africa', tags: ['PANEL'] },
    { time: '11:30 AM', title: 'Workshop: Monetising Your Creative Work', tags: ['WORKSHOP'] },
    { time: '1:00 PM', title: 'Lunch & Creators Market Continues', tags: ['MARKET'] },
    { time: '2:30 PM', title: 'Live Podcast Studio: Session 2', tags: ['PODCAST'] },
    { time: '3:30 PM', title: 'Creative Industry Manifesto — Community Session', tags: ['MANIFESTO'] },
    { time: '5:00 PM', title: 'Hackathon Final Presentations', tags: ['HACKATHON'] },
    { time: '7:00 PM', title: 'The X Awards — Night of Excellence', tags: ['AWARDS'] },
  ],
  'DAY 3': [
    { time: '10:00 AM', title: 'X Awards Winner Celebration & Gallery Closing', tags: ['GALLERY'] },
    { time: '11:00 AM', title: 'Fireside Chat: Liberia\'s Next Creative Decade', tags: ['KEYNOTE'] },
    { time: '12:30 PM', title: 'Final Panel: What Comes After CreatorsX', tags: ['PANEL'] },
    { time: '2:00 PM', title: 'Community Lunch & Final Networking', tags: ['NETWORKING'] },
    { time: '3:30 PM', title: 'Closing Ceremony & Next Steps', tags: ['CLOSING'] },
  ],
};

const tagColors = {
  KEYNOTE: '#da3019', PANEL: '#b3081d', MARKET: '#f49d00',
  'JOB FAIR': '#b3081d', PODCAST: '#da3019', HACKATHON: '#f49d00',
  NETWORKING: '#444', GALLERY: '#b3081d', WORKSHOP: '#da3019',
  MANIFESTO: '#f49d00', AWARDS: '#f49d00', OPENING: '#da3019', CLOSING: '#b3081d',
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
  const [muted, setMuted] = useState(true);
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
            muted={muted}
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
          WHAT'S HAPPENING
      ══════════════════════════════ */}
      <section className="activations-preview">
        <div className="container">
          <span className="section-label">WHAT'S HAPPENING</span>
          <h2>What's Happening at 2.0</h2>
          <div className="activations-grid">
            {[
              { name: 'Creators Discount Market', desc: 'Shop directly from Liberian creators' },
              { name: 'The X Awards', desc: 'Night of Excellence — celebrating the best' },
              { name: 'Visual Art Gallery', desc: 'Paintings, photography and installations' },
              { name: 'Live Podcast Studio', desc: 'Record and broadcast live on the floor' },
              { name: 'Hackathon', desc: 'The 48-Hour creative sprint' },
              { name: 'Creative Job Fair', desc: 'Creative opportunities and internships' },
            ].map((a, i) => (
              <div key={i} className="activation-card">
                <span className="activation-num">0{i + 1}</span>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
          <a href="/activations" className="btn btn-primary">See All Activations</a>
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
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-title">{item.title}</div>
                <div className="schedule-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="schedule-tag" style={{ backgroundColor: tagColors[tag] || '#333' }}>
                      {tag}
                    </span>
                  ))}
                </div>
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
