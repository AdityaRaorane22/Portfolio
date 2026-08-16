import React from 'react';
import useReveal from '../hooks/useReveal';
import MagButton from './MagButton';

export default function Contact() {
  const [ref, inView] = useReveal();
  return (
    <footer id="contact">
      <div className={`reveal ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="eyebrow section-eyebrow center">06 — Contact</div>
        <h2 className="center">Let&rsquo;s build something</h2>
        <p className="contact-sub">
          Open to full-time systems, backend, and applied-AI roles. Email works best for a reply
          within a day or two.
        </p>
        <div className="contact-row">
          <MagButton href="mailto:adityanraorane@gmail.com" className="btn-ink">
            adityanraorane@gmail.com
          </MagButton>
          <MagButton href="https://github.com/AdityaRaorane22" target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub
          </MagButton>
          <MagButton href="https://www.linkedin.com/in/aditya-raorane/" target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn
          </MagButton>
          <MagButton href="tel:+917506318120" className="btn-outline">
            +91 7506318120
          </MagButton>
        </div>
      </div>
      <div className="foot-note">Aditya Raorane · Thane, Maharashtra</div>
    </footer>
  );
}
