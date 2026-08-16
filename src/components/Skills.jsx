import React from 'react';
import useReveal from '../hooks/useReveal';

const GROUPS = [
  { cat: 'Languages', accent: 'var(--cyan)', items: ['Java', 'Python', 'C++', 'JavaScript'] },
  { cat: 'Web & APIs', accent: 'var(--violet)', items: ['Node.js', 'React', 'REST API', 'Postman'] },
  { cat: 'Data', accent: 'var(--coral)', items: ['MongoDB', 'MySQL'] },
  { cat: 'DevOps', accent: 'var(--lime)', items: ['Docker', 'AWS', 'Git & GitHub'] },
  { cat: 'AI / ML', accent: 'var(--cyan)', items: ['OpenAI', 'LangChain', 'Gemini API', 'Streamlit'] },
];

export default function Skills() {
  const [ref, inView] = useReveal();
  return (
    <section id="skills">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow">04 — Skills</div>
        <h2>What I build with</h2>
        <div className="skills-grid">
          {GROUPS.map((g, i) => (
            <div className="skill-card" style={{ '--accent': g.accent, '--d': `${i * 90}ms` }} key={g.cat}>
              <div className="skill-cat">{g.cat}</div>
              <div className="skill-tags">
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
