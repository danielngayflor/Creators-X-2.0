import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Tagline */}
        <div className="footer-column">
          <Link to="/" className="footer-logo-link">
            <img src="/assets/images/creatorsx-logo.png" alt="CreatorsX" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">Liberia's biggest creative summit.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activations">Activations</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-contact">
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:contact@konten.agency">contact@konten.agency</a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+231776049390">+231 776 049 390</a>
            </p>
            <p>
              <strong>Website:</strong>
              <br />
              <a href="https://konten.agency" target="_blank" rel="noopener noreferrer">
                konten.agency
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-credit">
          © {currentYear} CreatorsX. Co-organised by Konten LR & Bevonne.
        </p>
        <div className="footer-social">
          <a href="https://instagram.com/creatorsx" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
          <a href="https://facebook.com/creatorsx" target="_blank" rel="noopener noreferrer" title="Facebook">FB</a>
          <a href="https://tiktok.com/@creatorsx" target="_blank" rel="noopener noreferrer" title="TikTok">TT</a>
        </div>
      </div>
    </footer>
  );
}
