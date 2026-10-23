import React from 'react';

interface VoiceIntroProps {
  isSpeaking: boolean;
  onToggleSpeak: () => void;
}

export const VoiceIntro: React.FC<VoiceIntroProps> = ({ isSpeaking, onToggleSpeak }) => {
  return (
    <button
      type="button"
      onClick={onToggleSpeak}
      className={`intro-btn ${isSpeaking ? 'is-speaking' : ''}`}
      title={isSpeaking ? 'Stop voice intro' : 'Hear intro'}
      aria-label="Play voice intro: Hi, I am Atul Raj, welcome to my portfolio"
      data-intro="1"
    >
      <svg
        className="spk"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M19 5a10 10 0 0 1 0 14" />
      </svg>
      <span className="bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span data-intro-label="1">{isSpeaking ? 'Speaking' : 'Hear intro'}</span>
    </button>
  );
};
