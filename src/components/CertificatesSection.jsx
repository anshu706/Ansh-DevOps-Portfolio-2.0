import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Hash, 
  X,
  Sparkles
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-charcoal-950 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>VERIFIED INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Accreditations
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Formal technical certifications validating deep expertise in cloud architectures, container orchestration, and declarative infrastructure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-charcoal-700/80 hover:border-crimson-500/80 transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-glow-crimson-sm hover:-translate-y-1.5"
            >
              <div>
                {/* Badge Top Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.badgeColor} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-crimson-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Credential Details */}
                <div className="space-y-2 mb-6 pt-3 border-t border-charcoal-800 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-crimson-400" />
                      <span>ID:</span>
                    </span>
                    <span className="text-white font-mono">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-crimson-400" />
                      <span>Issued:</span>
                    </span>
                    <span className="text-white font-mono">{cert.issueDate}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.slice(0, 3).map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-700/80 text-[10px] font-mono text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Verify CTA Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                id={`cert-verify-btn-${index}`}
                className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-crimson-600/30 text-slate-200 hover:text-white font-medium text-xs font-mono border border-charcoal-700 hover:border-crimson-500/60 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-crimson-400" />
                <span>Verify Credential</span>
              </button>
            </div>
          ))}
        </div>

        {/* Verification Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-charcoal-900 border border-charcoal-700 rounded-2xl max-w-md w-full p-6 text-left relative shadow-2xl">
              <button
                id="cert-modal-close-btn"
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-charcoal-800 text-slate-400 hover:text-white border border-charcoal-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedCert.badgeColor} p-2 flex items-center justify-center text-white`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{selectedCert.title}</h4>
                  <p className="text-xs font-mono text-slate-400">{selectedCert.issuer}</p>
                </div>
              </div>

              <div className="bg-charcoal-950 p-4 rounded-xl border border-charcoal-800 space-y-2 mb-6 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Credential ID:</span>
                  <span className="text-emerald-400 font-bold">{selectedCert.credentialId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400">ACTIVE & VERIFIED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Issuing Authority:</span>
                  <span className="text-white">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Skills Validated:</span>
                  <span className="text-crimson-300 truncate max-w-[200px]">{selectedCert.skills.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-glow-crimson-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Verification Portal</span>
                </a>
                <button
                  id="cert-modal-dismiss-btn"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-300 text-xs font-mono border border-charcoal-700 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
