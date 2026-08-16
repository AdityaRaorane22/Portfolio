import React from 'react';
import useReveal from '../hooks/useReveal';

const FACTS = [
  ['Degree', 'B.E. Information Technology'],
  ['Institute', 'VESIT, Mumbai'],
  ['CGPA', '9.73'],
  ['Honors', 'AI & Machine Learning'],
  ['Graduated', '2026'],
  ['Status', 'Open to full-time roles'],
];

export default function About() {
  const [ref, inView] = useReveal();
  return (
    <section id="about">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow">01 — About</div>
        <h2>What I actually work on</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Most of what I build sits at the same intersection: systems that move or store
              data safely, with a model somewhere in the loop deciding what&rsquo;s normal and
              what isn&rsquo;t.
            </p>
            <p>
              That&rsquo;s a peer-to-peer network encrypting every hop between nodes, a database
              layer that predicts whether a query is going to be expensive before it runs, and a
              file vault where the server never sees what it&rsquo;s actually storing.
            </p>
            <p>
              During my degree I worked a semester as a backend developer for VESIT&rsquo;s IT
              department, and picked up a few placements in hackathons built around ML and
              applied AI.
            </p>
          </div>
          <dl className="spec-sheet">
            {FACTS.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
