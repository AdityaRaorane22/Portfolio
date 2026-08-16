import React, { useEffect, useRef, useState } from 'react';
import MagButton from './MagButton';
import useTilt from '../hooks/useTilt';
import aditya from '../assets/aditya.jpg';

const SERVICES = [
  { name: 'MeshLink', status: 'Encrypting every hop', color: 'var(--cyan)' },
  { name: 'QueryForge', status: 'Predicting query cost', color: 'var(--violet)' },
  { name: 'SecureVault', status: 'Guarding the vault', color: 'var(--coral)' },
  { name: 'Hire360AI', status: 'Screening candidates', color: 'var(--lime)' },
];

export default function Hero() {
  const panelRef = useRef(null);
  const tilt = useTilt(5);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const rows = panelRef.current?.querySelectorAll('.status-row');
    if (!rows) return;
    rows.forEach((row, i) => {
      row.style.setProperty('--d', `${i * 120 + 250}ms`);
    });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVerified(true);
      return;
    }
    const t = setTimeout(() => setVerified(true), 1500);
    return () => clearTimeout(t);
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
            never see.<span className="cursor" aria-hidden="true" />
          </h1>
          <p className="hero-sub">
            I&rsquo;m Aditya Raorane. Most of my work never has a UI — it&rsquo;s the encrypted
            pipe, the middleware, the model quietly deciding something looks wrong before a
            human would notice. I build the load-bearing parts, then bring in AI only where
            it earns its keep.
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
          <div
            className="profile-card"
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="profile-head">
              <span>OPERATOR</span>
              <span className={`status-live ${verified ? 'is-online' : 'is-checking'}`}>
                <span className="live-dot" />
                {verified ? 'ONLINE' : 'VERIFYING'}
              </span>
            </div>
            <div className={`profile-photo-wrap ${verified ? '' : 'is-scanning'}`}>
              <img src={aditya} alt="Aditya Raorane" className="profile-photo" />
              <span className="scan-line" />
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
