import React from 'react';
import '../styles/pages/sponsors.css';

const tiers = [
  {
    name: 'GOLD',
    range: '$5,000 – $10,000',
    borderColor: '#f49d00',
    perks: [
      'Panel participation or moderator role',
      'Large exhibition booth',
      '6 VIP tickets',
      'Prominent logo on all materials',
      'Stage branding',
      'Opening & closing recognition',
    ],
  },
  {
    name: 'SILVER',
    range: '$2,000 – $5,000',
    borderColor: '#C0C0C0',
    perks: [
      'Small booth or exhibition table',
      '3 VIP tickets',
      'Logo on select materials & social',
      'Opening & closing recognition',
    ],
  },
  {
    name: 'BRONZE',
    range: '$500 – $1,500',
    borderColor: '#CD7F32',
    perks: [
      'Logo on website & printed programme',
      '1 complimentary ticket',
      'Community supporter recognition',
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="sponsors-page">
      {/* Page Hero */}
      <section className="sponsors-hero">
        <img src="/assets/images/MTN-50.jpg" alt="" className="hero-bg-image" aria-hidden="true" />
        <div className="hero-content">
          <span className="section-label">CREATORSХ 2.0</span>
          <h1>Back the Movement.</h1>
          <p className="hero-sub">CreatorsX 2.0 is not a conference you sponsor. It is a movement you join.</p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="why-partner">
        <div className="container">
          <span className="section-label" style={{ color: 'var(--color-text-dark)' }}>WHY PARTNER</span>
          <h2 style={{ color: 'var(--color-text-dark)' }}>Why Support CreatorsX 2.0?</h2>
          <div className="why-grid">
            <div className="why-col">
              <p>
                CreatorsX 2.0 puts your brand in front of 500+ of Liberia's most engaged creative
                professionals. Not a passive audience — an active one. These are the people building
                Liberia's creative economy.
              </p>
            </div>
            <div className="why-col">
              <p>
                Partners at CreatorsX are visible before, during, and after the event. Digital reach.
                On-ground activation. Community goodwill. Association with the most significant
                creative gathering in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="tiers-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">SPONSORSHIP TIERS</span>
            <h2>How You Can Partner</h2>
          </div>
          <div className="tiers-grid">
            {tiers.map((tier, idx) => (
              <div key={idx} className="tier-card" style={{ borderTopColor: tier.borderColor }}>
                <h3 className="tier-name" style={{ color: tier.borderColor }}>{tier.name}</h3>
                <p className="tier-range">{tier.range}</p>
                <ul className="tier-perks">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx}>{perk}</li>
                  ))}
                </ul>
                <a href="mailto:sales@konten.agency" className="btn btn-outline">
                  Partner at This Tier →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Kind & Media */}
      <section className="inkind-section">
        <div className="container">
          <div className="section-intro"><h2>Other Ways to Partner</h2></div>
          <div className="inkind-grid">
            <div className="inkind-col">
              <h3>In-Kind Partners</h3>
              <p>
                Contribute goods, services, or production support in exchange for recognition and
                exposure. Food & beverage, logistics, venue support, printing, merchandise —
                all considered. Valued and credited at equivalent rates.
              </p>
            </div>
            <div className="inkind-col">
              <h3>Media Partners</h3>
              <p>
                Radio stations, digital publications, YouTube channels, and content creators who
                want to cover and amplify CreatorsX 2.0. Media partners receive credentials,
                exclusive access, and co-promotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-grid-section">
        <div className="container">
          <div className="section-intro"><span className="section-label">OUR PARTNERS</span></div>
          <p className="partners-placeholder">
            Partner announcements coming soon.{' '}
            <a href="/contact">Get in touch →</a>
          </p>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="sponsor-cta-section">
        <div className="container">
          <h2>Ready to Partner?</h2>
          <p>
            Reach out to us directly. We'll send over the full sponsorship deck and talk through
            which tier makes the most sense for your organisation.
          </p>
          <div className="sponsor-cta-buttons">
            <button className="btn btn-primary btn-disabled" disabled>
              Download Sponsorship Deck
            </button>
            <a href="mailto:sales@konten.agency" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
