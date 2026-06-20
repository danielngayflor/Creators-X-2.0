import React, { useState, useEffect } from 'react';
import '../styles/announcement-banner.css';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner has been dismissed
    const dismissed = localStorage.getItem('announcementBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcementBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <span className="announcement-text">
          CREATORSХ 2.0 IS COMING — NOVEMBER 21–22, MONROVIA ·{' '}
          <a href="/register" className="announcement-link">
            REGISTER YOUR INTEREST NOW →
          </a>
        </span>
        <button
          className="announcement-close"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}
