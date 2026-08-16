import React from 'react';
import useMagnetic from '../hooks/useMagnetic';

export default function MagButton({ href, className = '', children, target, rel }) {
  const mag = useMagnetic(0.2);
  return (
    <a
      href={href}
      className={`btn ${className}`}
      ref={mag.ref}
      onMouseMove={mag.onMouseMove}
      onMouseLeave={mag.onMouseLeave}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
