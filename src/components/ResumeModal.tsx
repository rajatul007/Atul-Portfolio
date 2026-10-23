import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Printer,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  FileCheck2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  ACHIEVEMENTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCertificate: (title: string, pdfUrl: string, issuer?: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenCertificate,
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] text-[#D7E2EA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D7E2EA]/15 bg-[#141416] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#D7E2EA]">
              {PERSONAL_INFO.fullName} — Resume
            </span>
            <div className="flex items-center gap-1 rounded-full bg-[#0C0C0C] p-1 border border-[#D7E2EA]/15">
              <button
                type="button"
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'interactive'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-semibold'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                Sheet
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-semibold'
                    : 'text-[#D7E2EA]/70 hover:text-white'
                }`}
              >
                PDF
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3 py-1.5 text-xs uppercase tracking-wider text-[#D7E2EA] hover:bg-white/10 transition-colors"
            >
              Full Tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3 py-1.5 text-xs uppercase tracking-wider text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#D7E2EA]/30 p-2 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[74vh] rounded-2xl overflow-hidden border border-[#D7E2EA]/20 bg-white">
              <iframe
                src={PERSONAL_INFO.resumePdfUrl}
                title="Atul Raj Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-2xl bg-white text-[#0C0C0C] p-6 sm:p-10 shadow-xl space-y-6">
              <div className="border-b-2 border-[#0C0C0C] pb-5">
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0C0C0C]">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-[#0C0C0C]/75">
                  {PERSONAL_INFO.headline} · {PERSONAL_INFO.degree}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#0C0C0C]/80">
                  <a href={PERSONAL_INFO.emailHref} className="!text-[#0C0C0C] hover:underline inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.email}
                  </a>
                  <span>·</span>
                  <a href={PERSONAL_INFO.phoneHref} className="!text-[#0C0C0C] hover:underline inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.phone}
                  </a>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#0C0C0C] underline inline-flex items-center gap-1"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#0C0C0C] underline inline-flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub (@rajatul007)
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#0C0C0C] underline inline-flex items-center gap-1"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    LeetCode (@Atulraj07)
                  </a>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-[#0C0C0C]/20 pb-1">
                  Education
                </h2>
                <div className="mt-3 space-y-3">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="flex flex-wrap justify-between gap-2 text-xs sm:text-sm">
                      <div>
                        <div className="font-bold text-[#0C0C0C]">{edu.institution}</div>
                        <div className="text-[#0C0C0C]/80">
                          {edu.degree} ({edu.boardOrSpecialization})
                        </div>
                      </div>
                      <div className="text-right text-[#0C0C0C]/70">
                        <div className="font-semibold">{edu.period}</div>
                        <div>{edu.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-[#0C0C0C]/20 pb-1">
                  Technical Skills
                </h2>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.number}>
                      <span className="font-bold">{cat.title}: </span>
                      <span className="text-[#0C0C0C]/80">{cat.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Experience */}
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-[#0C0C0C]/20 pb-1">
                  Internship Experience
                </h2>
                <div className="mt-3 space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold text-[#0C0C0C]">
                          {exp.company} — {exp.role}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#0C0C0C]/70">{exp.period}</span>
                          <button
                            type="button"
                            onClick={() =>
                              onOpenCertificate(
                                exp.certificateTitle,
                                exp.certificatePdfUrl,
                                exp.company
                              )
                            }
                            className="inline-flex items-center gap-1 rounded-full bg-[#0C0C0C] text-white px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider cursor-pointer"
                          >
                            <FileCheck2 className="w-3 h-3" />
                            Certificate
                          </button>
                        </div>
                      </div>
                      <ul className="mt-1.5 list-disc list-inside text-[#0C0C0C]/80 space-y-1">
                        {exp.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-[#0C0C0C]/20 pb-1">
                  Projects
                </h2>
                <div className="mt-3 space-y-3">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-[#0C0C0C]">{proj.title}</span>
                        <div className="flex items-center gap-3 text-xs font-medium">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="!text-[#0C0C0C] underline"
                            >
                              Live
                            </a>
                          )}
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="!text-[#0C0C0C] underline"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                      <p className="mt-1 text-[#0C0C0C]/80">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest border-b border-[#0C0C0C]/20 pb-1">
                  Achievements &amp; Certifications
                </h2>
                <div className="mt-3 space-y-2.5 text-xs sm:text-sm">
                  {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-bold">{ach.title}</span> —{' '}
                        <span className="text-[#0C0C0C]/75">
                          {ach.issuer} ({ach.date})
                        </span>
                      </div>
                      {ach.certificatePdfUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            onOpenCertificate(ach.title, ach.certificatePdfUrl!, ach.issuer)
                          }
                          className="inline-flex items-center gap-1 rounded-full bg-[#0C0C0C] text-white px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider cursor-pointer"
                        >
                          <FileCheck2 className="w-3 h-3" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
