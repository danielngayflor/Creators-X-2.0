import React from 'react';
import '../styles/pages/activations.css';

const activations = [
  {
    num: '01',
    name: 'Creators Discount Market',
    poweredBy: 'MTN Mobile Money',
    desc: 'A curated marketplace where creators sell directly to the public — fashion, art, photography, tech, beauty, and more. Discounted prices. Direct creator-to-consumer. Cashless payments powered by MTN MoMo.',
    format: 'Open marketplace · Both days',
    icon: null,
    bg: '#111111',
    img: 'MTN-73.jpg',
  },
  {
    num: '02',
    name: 'Creative Economy Manifesto',
    poweredBy: null,
    desc: 'A community-driven session where Liberia\'s creatives come together to define the future of the creative economy. Shared values, collective commitments, and a declaration for what comes next.',
    format: 'Community session · Day 2',
    icon: null,
    bg: '#1A1A1A',
    img: 'MTN-50.jpg',
  },
  {
    num: '03',
    name: 'Visual Art Gallery & Installations',
    poweredBy: null,
    desc: 'A curated exhibition of paintings, photography, digital art, and physical installations by Liberian visual artists. The gallery runs throughout both days and is open to all attendees.',
    format: 'Gallery exhibition · Both days',
    icon: null,
    bg: '#111111',
    img: 'MTN-88.jpg',
  },
  {
    num: '04',
    name: 'Live Podcast Studio',
    poweredBy: null,
    desc: 'A functioning podcast studio on the summit floor. Creators record live episodes, interview each other, and broadcast conversations happening in real time at the summit.',
    format: 'Live recording · Both days',
    icon: null,
    bg: '#1A1A1A',
    img: 'MTN-46.jpg',
  },
  {
    num: '05',
    name: 'Hackathon — The 48-Hour Sprint',
    poweredBy: null,
    desc: 'Teams of builders compete to solve creative industry problems in 48 hours. Designers, developers, writers, and strategists. One brief. One deadline. Real prizes.',
    format: 'Competition · Runs across both days',
    icon: null,
    bg: '#111111',
    img: 'MTN-75.jpg',
  },
  {
    num: '06',
    name: 'Creative Job Fair & Internship Board',
    poweredBy: null,
    desc: 'Connecting Liberian businesses and agencies with creative talent. Companies post opportunities. Creators bring portfolios. Internships, contracts, and full-time roles available.',
    format: 'Job fair · Day 1',
    icon: null,
    bg: '#1A1A1A',
    img: 'MTN-30.jpg',
  },
  {
    num: '07',
    name: 'The Creative Industry Manifesto',
    poweredBy: null,
    desc: 'A live, collaborative session where Liberia\'s creative community writes and adopts a manifesto for the industry. What do we stand for? What do we demand? What do we commit to?',
    format: 'Community session · Day 2',
    icon: null,
    bg: '#111111',
    img: 'MTN-90.jpg',
  },
];

export default function Activations() {
  return (
    <div className="activations-page">
      {/* Page Hero */}
      <section className="activations-hero">
        <img src="/assets/images/MTN-75.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <span className="section-label">CREATORSХ 2.0</span>
          <h1>More Than a Conference.</h1>
          <p className="hero-sub">Seven activations. Two days. Zero filler.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="activations-intro">
        <div className="container container-compact">
          <div className="section-intro">
          <p className="intro-body">
            CreatorsX 2.0 is built around activations — not just panels. Every activation is designed
            to give creators something real: a platform, a prize, a connection, a sale, or a record.
            Here's what's happening.
          </p>
          </div>
        </div>
      </section>

      {/* Activation Sections */}
      {activations.map((activation, idx) => (
        <section
          key={idx}
          className={`activation-section ${idx % 2 === 0 ? 'layout-text-right' : 'layout-text-left'}`}
          style={{ backgroundColor: activation.bg }}
        >
          <div className="activation-bg-num">{activation.num}</div>
          <div className="container">
            <div className="activation-inner">
              <div className="activation-text">
                {activation.poweredBy && (
                  <span className="powered-by">Powered by {activation.poweredBy}</span>
                )}
                <h2>{activation.name}</h2>
                <p>{activation.desc}</p>
                <div className="activation-meta">
                  <span className="meta-icon">{activation.icon}</span>
                  <span className="meta-format">{activation.format}</span>
                </div>
                <button className="btn btn-outline btn-disabled" disabled>
                  Applications Opening Soon
                </button>
              </div>
              <div className="activation-image">
                <img src={`/assets/images/${activation.img}`} alt={activation.name} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
