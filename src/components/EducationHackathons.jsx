import React from 'react';
import useReveal from '../hooks/useReveal';

const HACKS = [
  { mark: 'Top 25', name: 'HackWave ML Hackathon', note: '100+ participants', accent: 'var(--cyan)' },
  { mark: 'Top 10', name: 'Axis My India Hackathon', accent: 'var(--violet)' },
  { mark: 'Top 40', name: 'IVP CodeRush Hackathon', accent: 'var(--coral)' },
  { mark: '2nd place', name: 'Poster Making Competition, VESIT', accent: 'var(--lime)' },
];

export default function EducationHackathons() {
  const [ref, inView] = useReveal();
  return (
    <section id="education">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow">05 — Education</div>
        <h2>Academic record</h2>
        <div className="edu-card">
          <div>
            <div className="edu-name">Vivekanand Education Society&rsquo;s Institute of Technology</div>
            <div className="edu-sub">Bachelor of Engineering — Information Technology</div>
            <div className="edu-detail">Honors in Artificial Intelligence and Machine Learning · CGPA 9.73</div>
          </div>
          <div className="edu-time">
            2022 — 2026
            <br />
            Mumbai, Maharashtra
          </div>
        </div>

        <h2 className="mt-lg">Hackathons &amp; competitions</h2>
        <div className="hack-grid">
          {HACKS.map((h, i) => (
            <div className="hack-card" style={{ '--accent': h.accent, '--d': `${i * 90}ms` }} key={h.name}>
              <span className="hack-mark">{h.mark}</span>
              <span className="hack-name">{h.name}</span>
              {h.note && <span className="hack-note">{h.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
