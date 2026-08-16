import React, { useState } from 'react';
import MagButton from './MagButton';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <a href="#home" className="nav-logo">
          <span className="nav-dot" />
          Aditya Raorane
        </a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <MagButton href="#contact" className="btn-ink nav-cta">
          Let&rsquo;s talk
        </MagButton>
        <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <button className="nav-mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          &times;
        </button>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
