import React, { useState, useEffect, useCallback } from 'react';
import '../styles/pages/gallery.css';

const BATCH_SIZE = 30;
const TOTAL_IMAGES = 154;

const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery/MTN-${i + 1}.jpg`,
  alt: `CreatorsX 1.0 — Photo ${i + 1}`,
  edition: '1.0',
}));

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const filtered = activeTab === 'all' ? allImages : allImages.filter(img => img.edition === activeTab);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox({ open: false, index: 0 });
      if (e.key === 'ArrowRight') setLightbox(lb => ({ ...lb, index: Math.min(lb.index + 1, filtered.length - 1) }));
      if (e.key === 'ArrowLeft') setLightbox(lb => ({ ...lb, index: Math.max(lb.index - 1, 0) }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, filtered.length]);

  const openLightbox = useCallback((index) => {
    setLightbox({ open: true, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, index: 0 });
  }, []);

  return (
    <div className="gallery-page">

      {/* Page Hero */}
      <section className="gallery-hero">
        <div className="hero-content">
          <span className="section-label">CREATORSХ IN PHOTOS</span>
          <h1>The Moments.</h1>
          <p className="hero-sub">Every room we filled. Every conversation we started. Every creator who showed up.</p>
        </div>
      </section>

      {/* Sticky Filter Tabs */}
      <div className="gallery-tabs">
        <div className="container">
          <div className="tabs-inner">
            <button className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => { setActiveTab('all'); setVisibleCount(BATCH_SIZE); }}>All</button>
            <button className={`tab ${activeTab === '1.0' ? 'active' : ''}`} onClick={() => { setActiveTab('1.0'); setVisibleCount(BATCH_SIZE); }}>CreatorsX 1.0 — 2024</button>
            <button className="tab disabled" disabled>CreatorsX 2.0 — 2025</button>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="masonry-grid">
            {visible.map((img, idx) => (
              <figure
                key={img.id}
                className="gallery-item"
                onClick={() => openLightbox(idx)}
                data-edition={img.edition}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="expand-icon">⊕</span>
                </div>
              </figure>
            ))}
          </div>

          {hasMore && (
            <div className="load-more-wrap">
              <button className="btn btn-outline" onClick={() => setVisibleCount(v => v + BATCH_SIZE)}>
                Load More Photos ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* More Coming After 2.0 */}
      <section className="gallery-footer-note">
        <div className="container">
          <div className="section-intro">
            <div className="gold-accent-line" style={{margin: '0 auto var(--spacing-md)'}}></div>
            <h3>More Coming After 2.0</h3>
          </div>
          <p>Photos from CreatorsX 2.0 will be added here after November 22, 2025.</p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: Math.max(lb.index - 1, 0) })); }}
            disabled={lightbox.index === 0}
            aria-label="Previous"
          >‹</button>

          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox.index].src} alt={filtered[lightbox.index].alt} />
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: Math.min(lb.index + 1, filtered.length - 1) })); }}
            disabled={lightbox.index === filtered.length - 1}
            aria-label="Next"
          >›</button>

          <div className="lightbox-counter">{lightbox.index + 1} / {filtered.length}</div>
        </div>
      )}
    </div>
  );
}
