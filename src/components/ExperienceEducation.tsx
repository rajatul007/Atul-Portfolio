import React from 'react';
import { Award, Briefcase, GraduationCap, ExternalLink, FileCheck2 } from 'lucide-react';
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ExperienceEducationProps {
  onOpenCertificate: (title: string, pdfUrl: string, issuer?: string) => void;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({
  onOpenCertificate,
}) => {
  return (
    <section
      id="experience"
      className="sect"
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#0C0C0C',
        borderTop: '1px solid rgba(215,226,234,0.1)',
        paddingTop: '64px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '96px' }}>
        {/* 1. INTERNSHIP EXPERIENCE */}
        <div>
          <h2
            className="hero-heading"
            data-fade="1"
            style={{
              ['--fy' as string]: '40px',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 9vw, 120px)',
              marginBottom: '56px',
            }}
          >
            Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <article
                key={exp.id}
                data-fade="1"
                style={{ ['--fdel' as string]: `${idx * 0.1}s` }}
                className="rounded-[32px] border-2 border-[#D7E2EA]/70 bg-[#141416] p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.credentialId && (
                      <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
                        {exp.credentialId}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA]">
                    {exp.company} — Intern
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-wider text-[#D7E2EA]/70">
                    {exp.role}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm sm:text-base font-light text-[#D7E2EA]/90 leading-relaxed">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#BBCCD7] font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-[#D7E2EA]/15">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenCertificate(exp.certificateTitle, exp.certificatePdfUrl, exp.company)
                      }
                      className="contact-btn"
                    >
                      <FileCheck2 className="w-4 h-4 mr-1 inline" />
                      View Certificate
                    </button>
                    <a
                      href={exp.certificatePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      Open PDF
                      <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 2. EDUCATION */}
        <div>
          <h2
            className="hero-heading"
            data-fade="1"
            style={{
              ['--fy' as string]: '40px',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 9vw, 120px)',
              marginBottom: '56px',
            }}
          >
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => (
              <article
                key={edu.id}
                data-fade="1"
                style={{ ['--fdel' as string]: `${idx * 0.1}s` }}
                className="rounded-[28px] border border-[#D7E2EA]/25 bg-[#141416] p-6 sm:p-7 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#BBCCD7]" />
                      {edu.period}
                    </span>
                    <span>{edu.boardOrSpecialization}</span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold uppercase text-[#D7E2EA] leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-[#BBCCD7]">
                    {edu.degree}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D7E2EA]/10 text-xs uppercase tracking-wider text-[#D7E2EA]/65">
                  {edu.location}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 3. ACHIEVEMENTS & CERTIFICATIONS */}
        <div>
          <h2
            className="hero-heading"
            data-fade="1"
            style={{
              ['--fy' as string]: '40px',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              textAlign: 'center',
              fontSize: 'clamp(2.25rem, 8vw, 108px)',
              marginBottom: '56px',
            }}
          >
            Certifications &amp; Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <article
                key={ach.id}
                data-fade="1"
                style={{ ['--fdel' as string]: `${idx * 0.1}s` }}
                className="rounded-[28px] border border-[#D7E2EA]/25 bg-[#141416] p-6 sm:p-7 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                    <span className="inline-flex items-center gap-1.5 text-[#BBCCD7]">
                      <Award className="w-4 h-4" />
                      {ach.category}
                    </span>
                    <span>{ach.date}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold uppercase text-[#D7E2EA] leading-snug">
                    {ach.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#BBCCD7]">
                    {ach.issuer}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#D7E2EA]/80">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-wrap items-center gap-2.5">
                  {ach.certificatePdfUrl && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenCertificate(ach.title, ach.certificatePdfUrl!, ach.issuer)
                        }
                        className="contact-btn"
                      >
                        <FileCheck2 className="w-4 h-4 mr-1 inline" />
                        View Certificate
                      </button>
                      <a
                        href={ach.certificatePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-btn"
                      >
                        PDF
                      </a>
                    </>
                  )}
                  {ach.externalUrl && (
                    <a
                      href={ach.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      Verify on LeetCode
                      <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
