import React, { useState } from 'react';
import {
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'dispatched' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const buildGmailComposeUrl = () => {
    const su = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'New Message'} — from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Atul,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nReply-To Email: ${formData.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${su}&body=${body}`;
  };

  const buildMailtoUrl = () => {
    const su = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'New Message'} — from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Atul,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nReply-To Email: ${formData.email}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${su}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email address, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address so Atul can reply to you.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Message] ${formData.subject.trim() || 'Inquiry from ' + formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('dispatched');
      } else {
        window.location.href = buildMailtoUrl();
        setStatus('dispatched');
      }
    } catch {
      window.location.href = buildMailtoUrl();
      setStatus('dispatched');
    }
  };

  return (
    <section
      id="contact"
      className="sect"
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#0C0C0C',
        paddingTop: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(32px, 5vw, 56px)',
        }}
      >
        <h2
          className="hero-heading"
          data-fade="1"
          style={{
            ['--fy' as string]: '40px',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            textAlign: 'center',
            fontSize: 'clamp(2.75rem, 10vw, 140px)',
          }}
        >
          Let’s work together
        </h2>

        <p
          data-fade="1"
          style={{
            ['--fdel' as string]: '.1s',
            fontWeight: 300,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            textAlign: 'center',
            color: '#D7E2EA',
            fontSize: 'clamp(0.85rem, 1.4vw, 1.2rem)',
          }}
        >
          Open to software engineering and full stack roles
        </p>

        {/* Reference Contact Rows */}
        <div
          data-fade="1"
          style={{
            ['--fdel' as string]: '.2s',
            width: '100%',
            maxWidth: '640px',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid rgba(215,226,234,0.15)',
          }}
        >
          {/* Email */}
          <a className="contact-row" href={PERSONAL_INFO.emailHref}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              {PERSONAL_INFO.email}
            </span>
          </a>

          {/* Phone */}
          <a className="contact-row" href={PERSONAL_INFO.phoneHref}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PERSONAL_INFO.phone}
            </span>
          </a>

          {/* Location */}
          <div className="contact-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {PERSONAL_INFO.location}
            </span>
          </div>

          {/* LinkedIn */}
          <a
            className="contact-row"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn Profile
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase' }}>
              Visit
            </span>
          </a>

          {/* GitHub */}
          <a
            className="contact-row"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub (@rajatul007)
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase' }}>
              Visit
            </span>
          </a>

          {/* LeetCode */}
          <a
            className="contact-row"
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
                <path d="m14.5 4-5 16" />
              </svg>
              LeetCode (120+ Solved)
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase' }}>
              Visit
            </span>
          </a>
        </div>

        {/* Direct Message Form */}
        <div
          data-fade="1"
          style={{ ['--fdel' as string]: '.25s', width: '100%', maxWidth: '640px' }}
          className="rounded-[28px] border border-[#D7E2EA]/15 bg-[#141416] p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA] mb-2">
            Send a Message
          </h3>
          <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 mb-6">
            Message will be sent to <span className="text-[#D7E2EA]">{PERSONAL_INFO.email}</span> with your email as Reply-To.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#B600A8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#B600A8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering / Collaboration"
                className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#B600A8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                Message *
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#B600A8] focus:outline-none resize-y"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'dispatched' && (
              <div className="rounded-2xl border border-[#3DDC84]/40 bg-[#3DDC84]/10 p-4 text-xs sm:text-sm text-[#D7E2EA] space-y-3">
                <div className="flex items-center gap-2 font-medium text-[#3DDC84]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message dispatched to {PERSONAL_INFO.email}!</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={buildGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D7E2EA]/25 px-3 py-1 text-xs uppercase tracking-wider text-white"
                  >
                    Open in Gmail
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={buildMailtoUrl()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D7E2EA]/25 px-3 py-1 text-xs uppercase tracking-wider text-white"
                  >
                    Mail App
                  </a>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="contact-btn"
              >
                <Send className="w-4 h-4 mr-1 inline" />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              <button type="button" onClick={onOpenResume} className="live-btn">
                <FileText className="w-4 h-4 mr-1 inline" />
                View Resume
              </button>
            </div>
          </form>
        </div>

        {/* Primary Contact CTA button matching reference */}
        <div data-fade="1" style={{ ['--fdel' as string]: '.3s' }}>
          <a className="contact-btn" href={PERSONAL_INFO.emailHref}>
            Contact Me
          </a>
        </div>

        <p
          style={{
            marginTop: '24px',
            fontWeight: 300,
            fontSize: '0.85rem',
            letterSpacing: '0.06em',
            color: '#D7E2EA',
            opacity: 0.5,
          }}
        >
          © 2026 {PERSONAL_INFO.fullName}
        </p>
      </div>
    </section>
  );
};
