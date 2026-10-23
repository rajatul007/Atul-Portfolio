import React from 'react';
import { X, ExternalLink, Award } from 'lucide-react';

interface CertificateModalProps {
  certificate: {
    title: string;
    pdfUrl: string;
    issuer?: string;
  } | null;
  onClose: () => void;
  onSelectCertificate: (title: string, pdfUrl: string, issuer?: string) => void;
}

const ALL_CERTIFICATES = [
  {
    label: 'Code Alpha Internship',
    title: 'CodeAlpha Virtual Internship Program — Certificate of Completion',
    issuer: 'Code Alpha (Ministry of MSME)',
    pdfUrl: '/assets/aistudio/Certificate_Atul_Raj_94b4cb94.pdf',
  },
  {
    label: 'IBI Internship',
    title: 'Info Bharat Interns (IBI) — Web Development Completion Certificate',
    issuer: 'IBI (Info Bharat Interns)',
    pdfUrl: '/assets/aistudio/Atul_Raj_5a041311.pdf',
  },
  {
    label: 'Infosys Python',
    title: 'Basics of Python — Course Completion Certificate',
    issuer: 'Infosys Springboard',
    pdfUrl: '/assets/aistudio/Atul_raj__CS_AIML_A__2f21c277.pdf',
  },
  {
    label: 'HACKDAYS-2026',
    title: 'HACKDAYS-2026 — Team CivicMind AI Certificate of Appreciation',
    issuer: 'HackBase Society & GCET',
    pdfUrl: '/assets/aistudio/Atul_Raj_71b48dba.pdf',
  },
];

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onSelectCertificate,
}) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[28px] border-2 border-[#D7E2EA] bg-[#0C0C0C] text-[#D7E2EA] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D7E2EA]/15 bg-[#141416] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#BBCCD7] shrink-0" />
            <div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#D7E2EA]">
                {certificate.title}
              </h3>
              {certificate.issuer && (
                <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                  {certificate.issuer}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3.5 py-1.5 text-xs uppercase tracking-wider text-[#D7E2EA] hover:bg-white/10 transition-colors"
            >
              Open Full PDF
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#D7E2EA]/30 p-2 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate selection buttons */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-2.5">
          <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/50 mr-1">
            Verified Certificates:
          </span>
          {ALL_CERTIFICATES.map((item) => (
            <button
              key={item.pdfUrl}
              type="button"
              onClick={() => onSelectCertificate(item.title, item.pdfUrl, item.issuer)}
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                certificate.pdfUrl === item.pdfUrl
                  ? 'bg-[#D7E2EA] text-[#0C0C0C] font-semibold'
                  : 'bg-[#141416] text-[#D7E2EA]/75 hover:text-white border border-[#D7E2EA]/15'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-[#141416] p-3 sm:p-5">
          <div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-[#D7E2EA]/20 bg-white">
            <iframe
              src={certificate.pdfUrl}
              title={certificate.title}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
