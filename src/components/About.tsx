import React from 'react';
import { FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const words = PERSONAL_INFO.aboutParagraph.split(' ');
  let charIndex = 0;

  return (
    <section
      id="about"
      className="about"
      style={{
        position: 'relative',
        minHeight: 'min(100vh, 1000px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="about-stack"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="about-text-block"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2
            className="hero-heading"
            data-fade="1"
            style={{
              ['--fy' as string]: '40px',
              ['--fdel' as string]: '0s',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              fontSize: 'clamp(3rem, 12vw, 160px)',
            }}
          >
            About me
          </h2>

          {/* Animated Text illumination matching reference */}
          <p
            data-animtext="1"
            aria-label={PERSONAL_INFO.aboutParagraph}
            style={{
              maxWidth: '640px',
              color: '#D7E2EA',
              fontWeight: 500,
              textAlign: 'center',
              lineHeight: 1.625,
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            }}
          >
            {words.map((word, wIdx) => (
              <span
                key={wIdx}
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  marginRight: '0.27em',
                }}
              >
                {word.split('').map((ch) => {
                  const currentIdx = charIndex++;
                  return (
                    <span
                      key={currentIdx}
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <span style={{ opacity: 0 }}>{ch}</span>
                      <span
                        data-ch={currentIdx}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          opacity: 0.2,
                        }}
                      >
                        {ch}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </p>

          {/* Reference Stats Counter Row */}
          <div
            data-fade="1"
            style={{
              ['--fy' as string]: '30px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(24px, 6vw, 88px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                maxWidth: '200px',
                textAlign: 'center',
              }}
            >
              <span
                className="hero-heading"
                style={{
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                }}
              >
                120+
              </span>
              <span
                style={{
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  color: '#D7E2EA',
                  opacity: 0.7,
                }}
              >
                Problems solved on LeetCode
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                maxWidth: '200px',
                textAlign: 'center',
              }}
            >
              <span
                className="hero-heading"
                style={{
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                }}
              >
                4+
              </span>
              <span
                style={{
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  color: '#D7E2EA',
                  opacity: 0.7,
                }}
              >
                Full-stack &amp; AI-powered web projects
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                maxWidth: '200px',
                textAlign: 'center',
              }}
            >
              <span
                className="hero-heading"
                style={{
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                }}
              >
                2x
              </span>
              <span
                style={{
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  color: '#D7E2EA',
                  opacity: 0.7,
                }}
              >
                Software engineering internships
              </span>
            </div>
          </div>
        </div>

        {/* Reference Degree Pill & Buttons */}
        <div
          data-fade="1"
          style={{
            ['--fy' as string]: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              borderRadius: '9999px',
              border: '1px solid rgba(215,226,234,0.25)',
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#D7E2EA',
              textAlign: 'center',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            B.Tech in CSE (AI &amp; ML) · Galgotias College of Engineering and Technology
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button type="button" onClick={onOpenResume} className="live-btn">
              <FileText className="w-4 h-4 mr-1 inline" />
              View Resume
            </button>
            <a className="contact-btn" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
