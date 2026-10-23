import React, { useEffect, useRef, useState } from 'react';
import { Camera, Volume2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  isTalking: boolean;
  onEnterClick: () => void;
  showEnterGate: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  isTalking,
  onEnterClick,
  showEnterGate,
}) => {
  const magnetOuterRef = useRef<HTMLDivElement>(null);
  const magnetInnerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('atul_portfolio_photo');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const outer = magnetOuterRef.current;
    const inner = magnetInnerRef.current;
    if (!outer || !inner) return;

    const padding = 150;
    const strength = 3;
    let active = false;

    const onMove = (e: MouseEvent) => {
      const r = outer.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) {
        if (!active) {
          active = true;
          inner.style.transition = 'transform 0.3s ease-out';
        }
        inner.style.transform = `translate3d(${(dx / strength).toFixed(1)}px, ${(dy / strength).toFixed(1)}px, 0px)`;
      } else if (active) {
        active = false;
        inner.style.transition = 'transform 0.6s ease-in-out';
        inner.style.transform = 'translate3d(0px, 0px, 0px)';
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomPhoto(result);
      try {
        localStorage.setItem('atul_portfolio_photo', result);
      } catch {
        // ignore
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        maxHeight: '1100px',
        minHeight: '620px',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'clip',
      }}
    >
      {/* Tap to enter overlay matching reference */}
      {showEnterGate && (
        <button
          type="button"
          className="enter"
          data-enter="1"
          onClick={onEnterClick}
          aria-label="Tap to enter portfolio with voice intro"
        >
          <span className="enter-card">
            <span className="enter-ring">
              <Volume2 className="w-8 h-8 text-white" />
            </span>
            <span className="enter-t">Tap to enter</span>
            <span className="enter-s">Atul will say hello, sound on</span>
          </span>
        </button>
      )}

      {/* Top Navigation Bar: Exact 4 links matching reference */}
      <nav
        className="nav"
        data-fade="1"
        style={{
          ['--fy' as string]: '-20px',
          ['--fdel' as string]: '0s',
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Giant Reference Typography */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <h1
          className="hero-heading hero-h1"
          data-fade="1"
          style={{
            ['--fy' as string]: '40px',
            ['--fdel' as string]: '.15s',
            width: '100%',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.025em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          Hi, i’m atul raj
        </h1>
      </div>

      <div style={{ flexGrow: 1 }} />

      {/* Bottom Hero Bar matching reference */}
      <div
        className="hero-bar"
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <p
          className="hero-copy"
          data-fade="1"
          style={{
            ['--fy' as string]: '20px',
            ['--fdel' as string]: '.35s',
            color: '#D7E2EA',
            fontWeight: 300,
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
            lineHeight: 1.375,
            fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
          }}
        >
          {PERSONAL_INFO.heroShortCopy}
        </p>

        <div
          data-fade="1"
          style={{
            ['--fy' as string]: '20px',
            ['--fdel' as string]: '.5s',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <button type="button" onClick={onOpenResume} className="live-btn">
            <FileText className="w-4 h-4 mr-1 inline" />
            Resume
          </button>
          <a className="contact-btn" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      {/* Centerpiece Animated Developer Portrait matching reference exactly */}
      <div className="portrait-pos" style={{ position: 'absolute', left: '50%', zIndex: 10 }}>
        <div data-fade="1" style={{ ['--fy' as string]: '30px', ['--fdel' as string]: '.6s' }}>
          <div ref={magnetOuterRef} data-magnet="1" style={{ position: 'relative' }}>
            <div
              ref={magnetInnerRef}
              data-magnet-inner="1"
              style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px)' }}
            >
              <div className={`p-wrap ${isTalking ? 'talking' : ''}`}>
                <div className="p-glow" />

                <div className="p-img">
                  {customPhoto ? (
                    <img
                      src={customPhoto}
                      alt="Atul Raj"
                      draggable={false}
                      className="rounded-t-full object-cover"
                    />
                  ) : (
                    <>
                      <img
                        src="/assets/portrait.webp"
                        alt="Illustrated portrait of Atul Raj"
                        draggable={false}
                      />
                      <div className="p-blink">
                        <img src="/assets/blink.png" alt="" draggable={false} />
                      </div>
                      <div className="p-mouth" aria-hidden="true">
                        <img data-v="a" src="/assets/mouth_a.png" alt="" draggable={false} />
                        <img data-v="e" src="/assets/mouth_e.png" alt="" draggable={false} />
                        <img data-v="o" src="/assets/mouth_o.png" alt="" draggable={false} />
                        <img data-v="f" src="/assets/mouth_f.png" alt="" draggable={false} />
                        <img data-v="m" src="/assets/mouth_m.png" alt="" draggable={false} />
                      </div>
                    </>
                  )}
                </div>

                <div className="p-badge flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="p-dot" />
                    Open to work
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Change to personal photo"
                    className="opacity-40 hover:opacity-100 transition-opacity ml-1 cursor-pointer"
                  >
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
