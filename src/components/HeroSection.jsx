import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Download, 
  Code2, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  GitBranch,
  Layers,
  Sparkles
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const initialLogs = [
  { time: '18:27:01', tag: 'TERRAFORM', type: 'info', msg: 'Initializing remote state s3://tf-state-prod/us-east-1.tfstate...' },
  { time: '18:27:02', tag: 'SECURITY', type: 'info', msg: 'Running tfsec & checkov policy scans... 100% compliant' },
  { time: '18:27:04', tag: 'TERRAFORM', type: 'success', msg: '[INFO] Terraform apply complete! Resources: 14 added, 0 destroyed.' },
  { time: '18:27:06', tag: 'KUBERNETES', type: 'info', msg: 'Syncing EKS ingress controllers & ArgoCD application root...' },
  { time: '18:27:08', tag: 'ARGOCD', type: 'success', msg: 'ArgoCD synchronized revision [7b92f4c] with zero downtime.' },
  { time: '18:27:09', tag: 'SRE_PROBE', type: 'success', msg: 'All 32 pods healthy. Cluster latency p99: 24ms. SLO 99.99% active.' }
];

const pipelineStages = [
  { name: 'Git Commit', icon: GitBranch, status: 'complete' },
  { name: 'Docker Build', icon: Cpu, status: 'complete' },
  { name: 'Security Scan', icon: ShieldCheck, status: 'complete' },
  { name: 'Terraform IaC', icon: Layers, status: 'active' },
  { name: 'EKS Rollout', icon: Cloud, status: 'pending' },
];

export const HeroSection = ({ onOpenResume }) => {
  const [logs, setLogs] = useState(initialLogs);
  const [activeStageIndex, setActiveStageIndex] = useState(3);
  const [isRunningSim, setIsRunningSim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % pipelineStages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const triggerLiveDeploy = () => {
    setIsRunningSim(true);
    const newEntry = {
      time: new Date().toLocaleTimeString(),
      tag: 'TRIGGER',
      type: 'warning',
      msg: `[MANUAL EVENT] Triggered Canary deployment to cluster: us-east-1 (Hash: ${Math.random().toString(36).substring(2, 7)})...`
    };
    setLogs((prev) => [...prev.slice(-6), newEntry]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(-6),
        {
          time: new Date().toLocaleTimeString(),
          tag: 'K8S_DISPATCH',
          type: 'success',
          msg: '✓ Pod rollout passed live health checks. Canary promoted to 100% traffic.'
        }
      ]);
      setIsRunningSim(false);
    }, 1800);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-crimson-600/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Terminal Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-crimson-500/30 text-xs font-mono mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-500 animate-ping"></span>
              <span className="text-slate-300">CLOUD TERMINAL:</span>
              <span className="text-crimson-400 font-semibold">PRODUCTION READY</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400">AWS • K8S • GITOPS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">{personalInfo.name}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-crimson-400 to-rose-400 drop-shadow-sm">
                DevOps & Cloud Engineer
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
              Automating Infrastructure, Optimizing CI/CD Pipelines, & Scaling Cloud Systems
            </p>

            {/* Quick Pitch Description */}
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              Specialized in production-grade Kubernetes, declarative Terraform automation, zero-trust cloud security, and resilient Site Reliability Engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-semibold text-base shadow-glow-crimson transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-crimson-400/40"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-charcoal-800/90 hover:bg-charcoal-700 text-slate-200 hover:text-white font-medium text-base border border-charcoal-600/80 hover:border-crimson-500/50 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-crimson-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Media Quick Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-charcoal-800 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800/80 border border-charcoal-700 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-700 hover:shadow-glow-crimson-sm transition-all duration-200"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800/80 border border-charcoal-700 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-700 hover:shadow-glow-crimson-sm transition-all duration-200"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-leetcode"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800/80 border border-charcoal-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/60 hover:bg-charcoal-700 hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 text-xs font-mono font-medium"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span className="text-xs">LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive DevOps Pipeline & Live Terminal UI */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Glowing accent border aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-crimson-600/30 to-rose-600/20 rounded-2xl blur-lg opacity-70"></div>

              {/* Main Terminal Frame */}
              <div className="relative rounded-2xl bg-charcoal-900/95 border border-charcoal-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Terminal Header Bar */}
                <div className="px-4 py-3 bg-charcoal-800/90 border-b border-charcoal-700/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-crimson-500/80 border border-crimson-600"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600"></div>
                    <span className="ml-2 font-mono text-xs text-slate-400 font-medium">pipeline-runner.sh — live telemetry</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={triggerLiveDeploy}
                      disabled={isRunningSim}
                      id="hero-trigger-deploy-btn"
                      className="px-2.5 py-1 rounded bg-crimson-600/30 hover:bg-crimson-600 text-crimson-300 hover:text-white text-xs font-mono border border-crimson-500/50 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3" />
                      <span>{isRunningSim ? 'Deploying...' : 'Deploy'}</span>
                    </button>
                  </div>
                </div>

                {/* Pipeline Flow Visualization */}
                <div className="p-4 bg-charcoal-850/60 border-b border-charcoal-700/60">
                  <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                    <span>CI/CD PIPELINE STAGES</span>
                    <span className="text-emerald-400 text-[11px]">ALL GREEN (99.99%)</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 text-center">
                    {pipelineStages.map((stage, idx) => {
                      const Icon = stage.icon;
                      const isCurrent = idx === activeStageIndex;
                      return (
                        <div
                          key={stage.name}
                          className={`p-2 rounded-lg border transition-all duration-300 ${
                            isCurrent
                              ? 'bg-crimson-600/25 border-crimson-500 text-crimson-300 shadow-glow-crimson-sm scale-105'
                              : 'bg-charcoal-800/70 border-charcoal-700 text-slate-400'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 mx-auto mb-1 ${isCurrent ? 'text-crimson-400 animate-pulse' : 'text-slate-400'}`} />
                          <div className="text-[10px] font-mono leading-tight truncate">{stage.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Terminal Console Logs */}
                <div className="p-4 font-mono text-xs text-left min-h-[250px] max-h-[300px] overflow-y-auto space-y-2.5 bg-charcoal-950/80">
                  <div className="text-slate-500 pb-1 border-b border-charcoal-800 flex items-center justify-between">
                    <span>$ aws eks update-kubeconfig --name production-core</span>
                    <span className="text-[10px] text-emerald-400">STATUS: SYNCED</span>
                  </div>

                  {logs.map((log, index) => (
                    <div key={index} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-600 shrink-0 text-[11px]">{log.time}</span>
                      <span
                        className={`text-[10px] px-1 rounded uppercase font-semibold shrink-0 ${
                          log.type === 'success'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                            : log.type === 'warning'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800/50'
                            : 'bg-charcoal-800 text-slate-300 border border-charcoal-700'
                        }`}
                      >
                        {log.tag}
                      </span>
                      <span
                        className={`break-all ${
                          log.type === 'success'
                            ? 'text-emerald-300'
                            : log.type === 'warning'
                            ? 'text-amber-300'
                            : 'text-slate-300'
                        }`}
                      >
                        {log.msg}
                      </span>
                    </div>
                  ))}

                  {/* Blinking Terminal Cursor */}
                  <div className="flex items-center gap-2 pt-2 text-crimson-400 font-mono">
                    <span>ansh@cloud-host:~$</span>
                    <span className="w-2.5 h-4 bg-crimson-500 animate-terminal-blink inline-block"></span>
                  </div>
                </div>

                {/* Terminal Footer Info */}
                <div className="px-4 py-2.5 bg-charcoal-850 border-t border-charcoal-700/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Pods: 32/32 Running</span>
                  </div>
                  <div>CPU: 18.4% | MEM: 41.2%</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
