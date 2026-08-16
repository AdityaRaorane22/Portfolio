import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Experience() {
  const [ref, inView] = useReveal();
  return (
    <section id="experience">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow">02 — Experience</div>
        <h2>Where I&rsquo;ve worked</h2>
        <div className="exp-card">
          <div className="exp-head">
            <div>
              <div className="exp-role">Backend Developer</div>
              <div className="exp-org">VESIT — Information Technology Department, Mumbai</div>
            </div>
            <div className="exp-time">Jan 2025 — Jun 2025</div>
          </div>
          <ul>
            <li>
              Built the backend for a level-structured mental-math game using Node.js and
              MongoDB, working directly with faculty mentors to shape the requirements.
            </li>
            <li>
              Designed the leaderboard and admin module, coordinating closely with the team to
              get performance tracking right.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
