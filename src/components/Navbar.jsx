import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/activations', label: 'Activations' },
    { path: '/speakers', label: 'Speakers' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/past-editions', label: 'Past Editions' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="/assets/images/creatorsx-logo.png" alt="CreatorsX" className="navbar-logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar-right">
            <Link to="/register" className="btn btn-primary btn-sm">
              Get Your Ticket Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu active">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/register"
              className="btn btn-primary"
              style={{ marginTop: 'var(--spacing-md)' }}
              onClick={() => setIsOpen(false)}
            >
              Get Your Ticket Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
