import React, { useState } from 'react';
import { ExternalLink, Github, Info, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS, ProjectItem, PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderProjectSvg = (type: ProjectItem['iconType']) => {
    switch (type) {
      case 'sparkles':
        // AI Text-to-Image Generator SVG
        return (
          <svg
            className="v-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
            <path d="M14 6l1.2 2.8L18 10l-2.8 1.2L14 14l-1.2-2.8L10 10l2.8-1.2L14 6z" />
          </svg>
        );
      case 'utensils':
        // Taste of Heaven Restaurant Cloche & Dining SVG
        return (
          <svg
            className="v-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v2" />
            <path d="M4 14h16c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
            <path d="M2 18h20" />
            <path d="M4 14v4" />
            <path d="M20 14v4" />
          </svg>
        );
      case 'calendar':
        // EventHive Event Booking & Ticket SVG
        return (
          <svg
            className="v-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="m9 16 2 2 4-4" />
          </svg>
        );
      case 'users':
      default:
        // Connectly Social Media Network SVG
        return (
          <svg
            className="v-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <section
      id="projects"
      className="round-top sect projects"
      style={{ position: 'relative', zIndex: 10, background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading sect-h"
        data-fade="1"
        style={{
          ['--fy' as string]: '40px',
          fontWeight: 900,
          textTransform: 'uppercase',
          lineHeight: 1,
          letterSpacing: '-0.025em',
          textAlign: 'center',
          fontSize: 'clamp(3rem, 12vw, 160px)',
        }}
      >
        Projects
      </h2>

      {/* Sticky Stacked Cards matching reference website */}
      <div data-cards="1" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="card-slot">
            <article
              className="card"
              data-card={index}
              style={{
                position: 'relative',
                top: `${index * 28}px`,
                transformOrigin: 'top center',
                willChange: 'transform',
                border: '2px solid #D7E2EA',
                background: '#0C0C0C',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(16px, 2vw, 28px)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px 24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(16px, 3vw, 40px)',
                  }}
                >
                  <div
                    className="hero-heading"
                    style={{
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: '-0.025em',
                      fontSize: 'clamp(3rem, 10vw, 140px)',
                    }}
                  >
                    {project.number}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      style={{
                        fontWeight: 300,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#D7E2EA',
                        opacity: 0.6,
                        fontSize: 'clamp(0.75rem, 1.1vw, 1rem)',
                      }}
                    >
                      {project.subtitle}
                    </span>
                    <h3
                      style={{
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        color: '#D7E2EA',
                        lineHeight: 1.15,
                        fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                  {project.liveUrl && (
                    <a
                      className="live-btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                  <a
                    className="live-btn"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="live-btn"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Grid Body */}
              <div className="proj-grid" style={{ display: 'flex', gap: '12px' }}>
                <div
                  className="card-img proj-info"
                  style={{
                    background: '#141416',
                    border: '1px solid rgba(215,226,234,0.12)',
                    padding: 'clamp(20px, 2.4vw, 36px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: '#D7E2EA',
                      fontSize: 'clamp(0.9rem, 1.3vw, 1.15rem)',
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Container matching reference */}
                <div
                  className="card-img proj-visual"
                  style={{ minHeight: 'clamp(240px, 30vw, 420px)' }}
                >
                  <div
                    className="v-glow"
                    style={{
                      background: `radial-gradient(closest-side, ${project.glowColor}, rgba(0,0,0,0))`,
                    }}
                  />
                  {renderProjectSvg(project.iconType)}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <p
        data-fade="1"
        style={{
          ['--fy' as string]: '20px',
          position: 'relative',
          margin: '160px auto 0',
          maxWidth: '640px',
          textAlign: 'center',
          fontWeight: 300,
          fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
          lineHeight: 1.6,
          color: '#D7E2EA',
          opacity: 0.7,
        }}
      >
        + Full project repositories, documentation, and code available on{' '}
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          GitHub (@rajatul007)
        </a>
        .
      </p>

      {/* Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                  Project {selectedProject.number} · {selectedProject.subtitle}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-[#D7E2EA]/30 p-2 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/90">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7]">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-light text-[#D7E2EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#3DDC84] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[#D7E2EA]/15 pt-5">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  Live
                  <ExternalLink className="w-4 h-4 ml-1 inline" />
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                <Github className="w-4 h-4 mr-1 inline" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
