import React from 'react';
import useReveal from '../hooks/useReveal';
import useTilt from '../hooks/useTilt';

const PROJECTS = [
  {
    n: '01',
    name: 'MeshLink',
    accent: 'var(--cyan)',
    tags: ['Python', 'React', 'WebSockets', 'RSA-2048', 'AES-256-GCM', 'MongoDB'],
    url: 'https://github.com/AdityaRaorane22/MeshLink',
    points: [
      'A peer-to-peer encrypted mesh network with a custom gossip protocol for node discovery and message routing, layering RSA-2048 key exchange under AES-256-GCM session encryption so no plaintext ever crosses a hop.',
      'Trained an Isolation Forest on node traffic telemetry to flag compromised or overloaded nodes in real time, surfaced through a React dashboard showing live topology and anomalies, backed by a MongoDB offline message queue.',
    ],
  },
  {
    n: '02',
    name: 'QueryForge',
    accent: 'var(--violet)',
    tags: ['Python', 'MongoDB', 'asyncio', 'XGBoost', 'Docker'],
    url: 'https://github.com/AdityaRaorane22/QueryForge',
    points: [
      'A database middleware layer with an async connection pool and a read/write splitting router — SELECTs go to replicas, mutations go to primary.',
      'Trained an XGBoost regressor on query execution plans to predict cost before a query hits the database, blocking expensive queries and surfacing index optimization hints instead.',
    ],
  },
  {
    n: '03',
    name: 'SecureVault',
    accent: 'var(--coral)',
    tags: ['Node.js', 'AES-256-GCM', 'PBKDF2', 'MongoDB', 'Docker', 'Python'],
    url: 'https://github.com/AdityaRaorane22/Secure_vault',
    points: [
      'Client-side AES-256-GCM encryption with PBKDF2 key derivation, done entirely in-browser with chunked uploads and per-chunk SHA-256 integrity hashing — the server never sees plaintext.',
      'Trained an LSTM on user access sequences (time, file type, location, frequency) to catch anomalous retrieval patterns and trigger automatic session revocation on high threat scores.',
    ],
  },
  {
    n: '04',
    name: 'Hire360AI',
    accent: 'var(--lime)',
    tags: ['MERN', 'Gemini API', 'CNN', 'OpenCV'],
    url: 'https://github.com/AdityaRaorane22/Hire360',
    points: [
      'A dual-dashboard recruitment portal using the Gemini API to parse resumes and auto-generate role-specific interview questions, cutting down manual screening.',
      'Built an AI scoring layer that evaluates candidates on answer quality and facial expression using a CNN and OpenCV.',
    ],
  },
];

export default function Projects() {
  const [ref, inView] = useReveal();
  return (
    <section id="work">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow">03 — Work</div>
        <h2>Things I&rsquo;ve built</h2>
      </div>
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [revealRef, inView] = useReveal();
  const tilt = useTilt(5);

  return (
    <div
      className={`reveal ${inView ? 'in-view' : ''}`}
      ref={revealRef}
      style={{ '--d': `${index * 100}ms` }}
    >
      <div
        className="project-card"
        style={{ '--accent': project.accent }}
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <div className="project-top">
          <span className="project-n">{project.n}</span>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub ↗
          </a>
        </div>
        <h3>{project.name}</h3>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <ul>
          {project.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
