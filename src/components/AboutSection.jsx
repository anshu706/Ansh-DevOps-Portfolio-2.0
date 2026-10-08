import React from 'react';
import { 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { keyHighlights, engineeringValues } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>BACKGROUND & ENGINEERING MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who I Am & How I Work
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            From tinkering with Linux systems in university labs to architecting automated cloud environments.
          </p>
        </div>

        {/* 2-Column Profile & Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Bio & Journey Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-charcoal-700 text-left flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Ansh Upadhayay
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-crimson-400 mt-0.5">
                    DevOps & Cloud Engineer • B.Tech CSE Student
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-crimson-400" />
                  <span>Parul University</span>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a Computer Science student at <strong className="text-white font-medium">Parul University</strong> with a deep focus on cloud computing and infrastructure automation. My journey into DevOps started when I realized how much time developers lose to manual server configuration, broken deployments, and "it works on my machine" bugs.
                </p>
                <p>
                  I enjoy solving that exact problem. I focus on containerizing applications with <strong className="text-white font-medium">Docker</strong>, orchestrating them on <strong className="text-white font-medium">Kubernetes</strong>, and writing automated delivery pipelines with <strong className="text-white font-medium">GitHub Actions</strong> that run tests, scan for vulnerabilities, and ship code reliably.
                </p>
                <p>
                  On the cloud side, I work with <strong className="text-white font-medium">AWS</strong> and write declarative <strong className="text-white font-medium">Terraform</strong> so that infrastructure is version-controlled, auditable, and reproducible across environments. When I step away from cloud consoles, I solve algorithmic challenges on <strong className="text-white font-medium">LeetCode</strong> to keep my problem-solving sharp.
                </p>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-slate-500">Currently exploring:</span>
                <span className="text-crimson-400 font-medium">Go CLI tools & Kubernetes Operators</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Actively building & open to internships</span>
              </div>
            </div>
          </div>

          {/* Practical Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-charcoal-700 hover:border-crimson-500/50 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{highlight.label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-crimson-400 border border-charcoal-700">
                      {highlight.badge}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight group-hover:text-crimson-400 transition-colors">
                    {highlight.value}
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Engineering Principles */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-bold text-white mb-2">Core Engineering Values</h3>
          <p className="text-xs text-slate-400">How I approach building and maintaining systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringValues.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 border border-charcoal-700/80 hover:border-crimson-500/50 transition-all duration-300 text-left hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-lg bg-crimson-950/80 border border-crimson-800/60 flex items-center justify-center text-crimson-400 mb-4 font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
