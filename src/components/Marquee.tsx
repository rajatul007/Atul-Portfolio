import React from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/portfolioData';

export const Marquee: React.FC = () => {
  const row1Items = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Items = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <section
      className="marquee"
      data-marquee="1"
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
      aria-label="Skills & Tools marquee"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Row 1 */}
        <div
          data-row="1"
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
            willChange: 'transform',
            transform: 'translate3d(calc(-33.3333% - 200px), 0px, 0px)',
          }}
        >
          {row1Items.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              style={{
                flexShrink: 0,
                width: '300px',
                height: '150px',
                borderRadius: '16px',
                background: '#141416',
                border: '1px solid rgba(215,226,234,0.1)',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#D7E2EA',
                  opacity: 0.5,
                }}
              >
                {item.category}
              </span>
              <span
                className="hero-heading"
                style={{
                  fontSize: '34px',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div
          data-row="2"
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
            willChange: 'transform',
            transform: 'translate3d(calc(-33.3333% + 200px), 0px, 0px)',
          }}
        >
          {row2Items.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              style={{
                flexShrink: 0,
                width: '300px',
                height: '150px',
                borderRadius: '16px',
                background: '#141416',
                border: '1px solid rgba(215,226,234,0.1)',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#D7E2EA',
                  opacity: 0.5,
                }}
              >
                {item.category}
              </span>
              <span
                className="hero-heading"
                style={{
                  fontSize: '34px',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
