import React from 'react';
import '../styles/stats-bar.css';

export default function StatsBar() {
  const stats = [
    { number: '150+', label: 'Creators at 1.0' },
    { number: '15', label: 'Speakers' },
    { number: '8', label: 'Partners' },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
