import { 
  Award, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 bg-charcoal-950 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>LEARNING MILESTONES & ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Technical Milestones
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Structured cloud curriculums, hands-on lab milestones, and target accreditations backing my practical DevOps experience.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-charcoal-700/80 hover:border-crimson-500/80 transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-glow-crimson-sm hover:-translate-y-1"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.badgeColor} p-2.5 flex items-center justify-center text-white shadow-md`}>
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal-800 border border-charcoal-700 text-[10px] font-mono text-crimson-300">
                    <Compass className="w-3 h-3 text-crimson-400" />
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-base font-bold text-white group-hover:text-crimson-300 transition-colors mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Practical Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="pt-3 border-t border-charcoal-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Key Topics & Labs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-700/80 text-[10px] font-mono text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-charcoal-800 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Hands-on labs completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
