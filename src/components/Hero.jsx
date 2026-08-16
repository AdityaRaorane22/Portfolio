import React, { useEffect, useRef } from 'react';
import MagButton from './MagButton';
import aditya from '../assets/aditya.jpg';

const SERVICES = [
  { name: 'MeshLink', status: 'Encrypting every hop', color: 'var(--cyan)' },
  { name: 'QueryForge', status: 'Predicting query cost', color: 'var(--violet)' },
  { name: 'SecureVault', status: 'Guarding the vault', color: 'var(--coral)' },
  { name: 'Hire360AI', status: 'Screening candidates', color: 'var(--lime)' },
];

export default function Hero() {
  const panelRef = useRef(null);

  useEffect(() => {
    const rows = panelRef.current?.querySelectorAll('.status-row');
    if (!rows) return;
    rows.forEach((row, i) => {
      row.style.setProperty('--d', `${i * 120 + 250}ms`);
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Systems &amp; AI Engineer</div>
          <h1>
            Building the parts
            <br />
            of a system <span className="hl">most people</span>
            <br />
            never see.
          </h1>
          <p className="hero-sub">
            I&rsquo;m Aditya Raorane — I build encrypted networks, database middleware, and
            anomaly detection, then wire AI in only where it actually earns its place.
          </p>
          <div className="hero-actions">
            <MagButton href="#work" className="btn-ink">
              See the work
            </MagButton>
            <MagButton href="#contact" className="btn-outline">
              Get in touch
            </MagButton>
          </div>
        </div>

        <div className="hero-side">
          <div className="profile-card">
            <div className="profile-head">
              <span>OPERATOR</span>
              <span className="status-live">
                <span className="live-dot" />
                ONLINE
              </span>
            </div>
            <div className="profile-photo-wrap">
              <img src={aditya} alt="Aditya Raorane" className="profile-photo" />
              <span className="profile-corner tl" />
              <span className="profile-corner tr" />
              <span className="profile-corner bl" />
              <span className="profile-corner br" />
            </div>
            <div className="profile-meta">
              <span className="profile-name">Aditya Raorane</span>
              <span className="profile-role">Systems &amp; AI Engineer</span>
            </div>
          </div>

          <div className="status-panel" ref={panelRef}>
            <div className="status-head">
              <span>SYSTEM STATUS</span>
              <span className="status-live">
                <span className="live-dot" />
                LIVE
              </span>
            </div>
            {SERVICES.map((s) => (
              <a href="#work" className="status-row" key={s.name} style={{ '--accent': s.color }}>
                <span className="status-indicator">
                  <span className="ping" />
                  <span className="dot" />
                </span>
                <span className="status-name">{s.name}</span>
                <span className="status-text">{s.status}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
