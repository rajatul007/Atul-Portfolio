import React, { useEffect, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { VoiceIntro } from './components/VoiceIntro';

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

const SPEECH_TEXT =
  "Hi, I'm Atul. Welcome to my portfolio. I am a Computer Science Engineering student specializing in AI and Machine Learning, and a Full Stack Developer. Explore my projects, code, and passion for building.";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<{
    title: string;
    pdfUrl: string;
    issuer?: string;
  } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showEnterGate, setShowEnterGate] = useState(false);

  const timersRef = useRef<number[]>([]);
  const fallbackTimerRef = useRef<number | null>(null);
  const spokenRef = useRef(false);

  // Viseme mouth animation handler
  const showMouthViseme = (v: string) => {
    const mouthImgs = document.querySelectorAll<HTMLImageElement>('.p-mouth img');
    mouthImgs.forEach((img) => {
      if (img.getAttribute('data-v') === v) {
        img.classList.add('on');
      } else {
        img.classList.remove('on');
      }
    });
  };

  const clearMouthTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    showMouthViseme('');
  };

  const playWordVisemes = (word: string, delay: number, rate = 0.96) => {
    const letters = word.replace(/[^a-zA-Z']/g, '');
    let t = delay || 0;
    let prev: string | null = null;
    const CH = 68 / rate;

    const getViseme = (c: string) => {
      c = c.toLowerCase();
      if (c === 'a') return 'a';
      if ('ei'.indexOf(c) > -1) return 'e';
      if ('ouwy'.indexOf(c) > -1) return 'o';
      if ('fv'.indexOf(c) > -1) return 'f';
      if ('mbp'.indexOf(c) > -1) return '';
      if (/[a-z]/.test(c)) return 'm';
      return '';
    };

    for (let i = 0; i < letters.length; i++) {
      const v = getViseme(letters[i]);
      if (v === prev && v !== '') {
        t += CH;
        continue;
      }
      const timeoutId = window.setTimeout(() => showMouthViseme(v), t);
      timersRef.current.push(timeoutId);
      prev = v;
      t += CH;
    }

    const resetId = window.setTimeout(() => showMouthViseme(''), t + 25);
    timersRef.current.push(resetId);
    return t;
  };

  const playAllVisemes = () => {
    let t = 0;
    SPEECH_TEXT.split(/\s+/).forEach((w) => {
      if (!w) return;
      t = playWordVisemes(w, t) + 90;
      if (/[.]$/.test(w)) t += 330;
      else if (/[,]$/.test(w)) t += 180;
    });
  };

  const speakVoiceIntro = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;

    try {
      synth.cancel();
      clearMouthTimers();

      const utterance = new SpeechSynthesisUtterance(SPEECH_TEXT);
      const voices = synth.getVoices() || [];
      const maleVoice =
        voices.find((v) => /en-IN/i.test(v.lang) && /rishi|ravi|prabhat|male/i.test(v.name)) ||
        voices.find((v) => /en-IN/i.test(v.lang)) ||
        voices.find((v) => /^en/i.test(v.lang)) ||
        null;

      if (maleVoice) {
        utterance.voice = maleVoice;
        utterance.lang = maleVoice.lang;
      } else {
        utterance.lang = 'en-IN';
      }

      utterance.rate = 0.95;
      utterance.pitch = 1;

      utterance.onstart = () => {
        spokenRef.current = true;
        setIsSpeaking(true);
        playAllVisemes();
      };

      utterance.onend = utterance.onerror = () => {
        clearMouthTimers();
        setIsSpeaking(false);
      };

      synth.speak(utterance);
    } catch {
      setIsSpeaking(false);
      clearMouthTimers();
    }
  };

  const handleToggleSpeak = () => {
    if (isSpeaking) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      clearMouthTimers();
      setIsSpeaking(false);
    } else {
      speakVoiceIntro();
    }
  };

  const handleEnter = () => {
    setShowEnterGate(false);
    speakVoiceIntro();
  };

  useEffect(() => {
    document.documentElement.classList.add('fx-on');

    // Check user activation for enter gate
    const ua = (navigator as unknown as { userActivation?: { hasBeenActive: boolean } }).userActivation;
    if (ua && !ua.hasBeenActive) {
      setShowEnterGate(true);
    }

    // 1. Fade-in Observer
    const fadeNodes = document.querySelectorAll<HTMLElement>('[data-fade]');
    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      fadeNodes.forEach((node) => observer?.observe(node));
    } else {
      fadeNodes.forEach((node) => node.classList.add('is-in'));
    }

    // 2. Scroll Parallax Engine matching reference
    let rafId = 0;
    const updateScroll = () => {
      rafId = 0;
      const vh = window.innerHeight;

      // Marquee row translation
      const marquee = document.querySelector<HTMLElement>('[data-marquee]');
      const row1 = document.querySelector<HTMLElement>('[data-row="1"]');
      const row2 = document.querySelector<HTMLElement>('[data-row="2"]');

      if (marquee && row1 && row2) {
        const mt = marquee.getBoundingClientRect().top;
        const offset = (vh - mt) * 0.3;
        const s = offset - 200;
        row1.style.transform = `translate3d(calc(-33.3333% + ${s.toFixed(1)}px), 0px, 0px)`;
        row2.style.transform = `translate3d(calc(-33.3333% - ${s.toFixed(1)}px), 0px, 0px)`;
      }

      // About text illumination scrub
      const para = document.querySelector<HTMLElement>('[data-animtext]');
      const chars = para ? para.querySelectorAll<HTMLElement>('[data-ch]') : [];
      if (para && chars.length) {
        const pr = para.getBoundingClientRect();
        const start = vh * 0.82;
        const end = vh * 0.2;
        const p = clamp01((start - pr.top) / (start - end + pr.height));
        const n = chars.length;
        for (let k = 0; k < n; k++) {
          chars[k].style.opacity = (0.2 + 0.8 * clamp01(p * n - k)).toFixed(3);
        }
      }

      // Projects card stack scaling
      const wrap = document.querySelector<HTMLElement>('[data-cards]');
      const cards = document.querySelectorAll<HTMLElement>('[data-card]');
      if (wrap && cards.length) {
        const wr = wrap.getBoundingClientRect();
        const total = cards.length;
        const span = Math.max(1, wr.height - vh);
        const prog = clamp01(-wr.top / span);
        for (let i = 0; i < total; i++) {
          const target = 1 - (total - 1 - i) * 0.03;
          const from = i / total;
          const t = clamp01((prog - from) / (1 - from));
          cards[i].style.transform = `scale(${(1 + (target - 1) * t).toFixed(4)})`;
        }
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll);
    updateScroll();

    return () => {
      observer?.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
      clearMouthTimers();
    };
  }, []);

  const handleOpenCertificate = (title: string, pdfUrl: string, issuer?: string) => {
    setActiveCertificate({ title, pdfUrl, issuer });
  };

  return (
    <main
      data-root="1"
      style={{
        width: '100%',
        background: '#0C0C0C',
        overflowX: 'clip',
        fontFamily: "'Kanit', sans-serif",
        color: '#D7E2EA',
      }}
    >
      {/* 1. HERO */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
        isTalking={isSpeaking}
        onEnterClick={handleEnter}
        showEnterGate={showEnterGate}
      />

      {/* 2. MARQUEE */}
      <Marquee />

      {/* 3. ABOUT */}
      <About onOpenResume={() => setIsResumeOpen(true)} />

      {/* 4. SKILLS */}
      <Skills />

      {/* 5. PROJECTS */}
      <Projects />

      {/* 6. EXPERIENCE, EDUCATION & CERTIFICATIONS */}
      <ExperienceEducation onOpenCertificate={handleOpenCertificate} />

      {/* 7. CONTACT */}
      <Contact onOpenResume={() => setIsResumeOpen(true)} />

      {/* FLOATING VOICE INTRO BUTTON */}
      <VoiceIntro isSpeaking={isSpeaking} onToggleSpeak={handleToggleSpeak} />

      {/* RESUME MODAL (DIRECT VIEW ON CLICK) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenCertificate={(title, pdfUrl, issuer) => {
          setIsResumeOpen(false);
          handleOpenCertificate(title, pdfUrl, issuer);
        }}
      />

      {/* OFFICIAL CERTIFICATE PDF VIEWER MODAL */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
        onSelectCertificate={handleOpenCertificate}
      />
    </main>
  );
}
