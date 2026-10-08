import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Layers, 
  Boxes, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Workflow, 
  Flame,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { personalInfo, sreMetrics } from '../data/portfolioData';

const principles = [
  {
    icon: Workflow,
    title: "Zero-Downtime GitOps",
    desc: "Every cluster state change is stored in Git, validated with automated tests, and continuously synchronized through declarative ArgoCD workflows."
  },
  {
    icon: Layers,
    title: "Deterministic IaC",
    desc: "Cloud infrastructure is provisioned strictly via modular, reusable Terraform modules with automated drift detection and state locking."
  },
  {
    icon: Activity,
    title: "Observability-Driven SRE",
    desc: "Service Level Objectives (SLOs) and Error Budgets guide deployment velocity. Real-time Prometheus metrics trigger self-healing runbooks."
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps Hardening",
    desc: "Shift-left vulnerability auditing in CI pipelines with Checkov, tfsec, container image signing, and dynamic secrets management using Vault."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>SYSTEM OVERVIEW & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About My Engineering Approach
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Bridging software development and high-availability operations with reliable infrastructure automation, rapid feedback loops, and robust cloud architectures.
          </p>
        </div>

        {/* 2-Column Profile & Core Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>Cloud & Reliability Engineer</span>
                <span className="text-xs px-2 py-0.5 rounded bg-charcoal-800 text-crimson-400 font-mono border border-charcoal-700">
                  DevOps / SRE
                </span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I specialize in designing resilient, highly available cloud systems and automating the entire software delivery lifecycle. My focus is on turning complex, manual operations into automated, self-healing code that developers can depend on.
                </p>
                <p>
                  From architecting multi-region <strong className="text-white font-medium">Kubernetes (EKS/GKE)</strong> clusters to optimizing <strong className="text-white font-medium">CI/CD pipelines</strong> that slash build times from 30 minutes down to under 5 minutes, I build scalable systems with security baked in at every level.
                </p>
                <p>
                  I treat infrastructure as code and operations as software problems, combining <strong className="text-white font-medium">Terraform</strong>, <strong className="text-white font-medium">ArgoCD</strong>, and full-stack observability with <strong className="text-white font-medium">Prometheus & Grafana</strong> to maintain four-nines (99.99%) uptime.
                </p>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-slate-500">Current Focus:</span>
                <span className="text-crimson-400 font-semibold">Kubernetes GitOps & Platform Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Enterprise Production Ready</span>
              </div>
            </div>
          </div>

          {/* SRE Key Metrics Callouts (4 Grid Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sreMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-charcoal-700/80 hover:border-crimson-500/50 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{metric.label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-crimson-950/80 text-crimson-400 border border-crimson-800/40">
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-crimson-400 transition-colors">
                    {metric.value}
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400 leading-snug">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-charcoal-700/70 hover:border-crimson-500/40 transition-all duration-300 text-left hover:-translate-y-1 shadow-sm hover:shadow-glow-crimson-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-crimson-950/80 border border-crimson-800/50 flex items-center justify-center text-crimson-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
