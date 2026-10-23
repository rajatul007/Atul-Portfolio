import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="round-top sect"
      style={{ background: '#FFFFFF', color: '#0C0C0C' }}
    >
      <h2
        className="sect-h"
        data-fade="1"
        style={{
          ['--fy' as string]: '40px',
          color: '#0C0C0C',
          fontWeight: 900,
          textTransform: 'uppercase',
          lineHeight: 1,
          letterSpacing: '-0.025em',
          textAlign: 'center',
          fontSize: 'clamp(3rem, 12vw, 160px)',
        }}
      >
        Skills
      </h2>

      <div style={{ maxWidth: '1024px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.number}
            className="svc"
            data-fade="1"
            style={{
              ['--fdel' as string]: `${idx * 0.1}s`,
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(20px, 4vw, 64px)',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.025em',
                color: '#0C0C0C',
                fontSize: 'clamp(3rem, 10vw, 140px)',
              }}
            >
              {cat.number}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3
                style={{
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  color: '#0C0C0C',
                  fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  lineHeight: 1.2,
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  lineHeight: 1.625,
                  maxWidth: '672px',
                  color: '#0C0C0C',
                  opacity: 0.65,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
