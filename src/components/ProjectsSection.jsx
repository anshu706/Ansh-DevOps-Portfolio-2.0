import React, { useState } from 'react';
import { 
  ExternalLink, 
  Terminal, 
  Layers, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Server,
  Network,
  Cpu,
  ChevronRight,
  Boxes
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const ProjectsSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activePreviewTab, setActivePreviewTab] = useState('terminal'); // 'terminal' | 'topology' | 'metrics'
  const [isSimulating, setIsSimulating] = useState(false);

  const currentProject = projects[activeProjectIndex];

  const handleSimulateAction = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <section id="projects" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>ENTERPRISE PRODUCTION WORKLOADS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured DevOps & SRE Case Studies
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Split-screen architecture walkthroughs with live side-by-side interactive cluster terminals, topologies, and telemetry.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none text-left">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              id={`project-tab-${idx}`}
              onClick={() => {
                setActiveProjectIndex(idx);
                setActivePreviewTab('terminal');
              }}
              className={`px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                activeProjectIndex === idx
                  ? 'bg-crimson-600 text-white shadow-glow-crimson-sm border border-crimson-400/50'
                  : 'bg-charcoal-800/80 text-slate-300 hover:text-white hover:bg-charcoal-750 border border-charcoal-700/80'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-crimson-400"></span>
              <span className="truncate">{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Main 2-Column Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Details, Architecture, SRE Metrics & Links */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 flex flex-col justify-between text-left">
            <div>
              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-crimson-950/90 text-crimson-400 border border-crimson-800/50 text-xs font-mono font-medium">
                  {currentProject.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Live in Production
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                {currentProject.title}
              </h3>
              <p className="text-sm font-medium text-crimson-400/90 mb-4 font-mono">
                {currentProject.tagline}
              </p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-crimson-400" />
                  <span>Architecture Specifications</span>
                </h4>
                <ul className="space-y-2">
                  {currentProject.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-crimson-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key SRE Metrics */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Reliability & SRE Metrics</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {currentProject.sreMetrics.map((metric, i) => (
                    <div key={i} className="bg-charcoal-900/90 rounded-lg p-2.5 border border-charcoal-700/60">
                      <div className="text-[10px] font-mono text-slate-400 truncate">{metric.label}</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5 text-crimson-300">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {currentProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-charcoal-800 text-slate-300 border border-charcoal-700 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-charcoal-800 flex flex-wrap items-center gap-4">
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-link-${activeProjectIndex}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium text-sm border border-charcoal-600/80 hover:border-crimson-500/60 transition-all shadow-sm"
              >
                <GitHubIcon className="w-4 h-4 text-crimson-400" />
                <span>View Repository</span>
              </a>

              <a
                href={currentProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-demo-link-${activeProjectIndex}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-medium text-sm border border-crimson-400/40 shadow-glow-crimson-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Infrastructure Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Mock Browser/Terminal Frame with Interactive Preview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative h-full rounded-2xl bg-charcoal-950 border border-charcoal-700/90 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Mock Window Top Navigation */}
              <div className="px-4 py-3 bg-charcoal-850/90 border-b border-charcoal-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-crimson-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">
                    terminal-agent://cluster-node-01
                  </span>
                </div>

                {/* Switch between Live Tabs */}
                <div className="flex items-center gap-1 bg-charcoal-900 rounded-lg p-1 border border-charcoal-700/60 text-xs font-mono">
                  <button
                    id="preview-tab-terminal"
                    onClick={() => setActivePreviewTab('terminal')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreviewTab === 'terminal'
                        ? 'bg-crimson-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    id="preview-tab-topology"
                    onClick={() => setActivePreviewTab('topology')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreviewTab === 'topology'
                        ? 'bg-crimson-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Topology
                  </button>
                  <button
                    id="preview-tab-metrics"
                    onClick={() => setActivePreviewTab('metrics')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreviewTab === 'metrics'
                        ? 'bg-crimson-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Metrics
                  </button>
                </div>
              </div>

              {/* Interactive Panel Content */}
              <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto min-h-[360px]">
                
                {/* TAB 1: TERMINAL EXECUTION LOGS */}
                {activePreviewTab === 'terminal' && (
                  <div className="font-mono text-xs space-y-2 text-left">
                    <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-charcoal-800">
                      <span>Live Cluster Event Stream — {currentProject.title}</span>
                      <span className="text-emerald-400 text-[10px]">● LIVE STREAM</span>
                    </div>

                    {currentProject.terminalLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-slate-600 select-none">[{idx + 1}]</span>
                        <span
                          className={`break-all ${
                            log.type === 'command'
                              ? 'text-cyan-400 font-semibold'
                              : log.type === 'success'
                              ? 'text-emerald-400'
                              : log.type === 'warning'
                              ? 'text-amber-400'
                              : 'text-slate-300'
                          }`}
                        >
                          {log.type === 'command' ? `$ ${log.text}` : log.text}
                        </span>
                      </div>
                    ))}

                    <div className="flex items-center gap-2 pt-3 text-crimson-400 font-mono">
                      <span>devops@prod-runner:~$</span>
                      <span className="w-2.5 h-4 bg-crimson-500 animate-terminal-blink inline-block"></span>
                    </div>
                  </div>
                )}

                {/* TAB 2: TOPOLOGY MAP */}
                {activePreviewTab === 'topology' && (
                  <div className="space-y-4 text-center my-auto">
                    <div className="text-xs font-mono text-slate-400">High Availability Infrastructure Topology</div>
                    
                    <div className="grid grid-cols-3 gap-3 max-w-md mx-auto items-center">
                      <div className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700 text-center">
                        <Network className="w-5 h-5 text-crimson-400 mx-auto mb-1 animate-pulse" />
                        <div className="text-[11px] font-mono text-white">AWS ALB / Ingress</div>
                        <div className="text-[9px] text-emerald-400">443 / SSL Term</div>
                      </div>

                      <div className="text-slate-600 font-mono text-xs">➔ ➔ ➔</div>

                      <div className="p-3 rounded-xl bg-charcoal-900 border border-crimson-500/60 shadow-glow-crimson-sm text-center">
                        <Boxes className="w-5 h-5 text-crimson-400 mx-auto mb-1 animate-bounce" />
                        <div className="text-[11px] font-mono text-white">Istio Envoy Mesh</div>
                        <div className="text-[9px] text-amber-400">Weight 90 / 10</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                      <div className="p-3 rounded-xl bg-charcoal-900/90 border border-charcoal-700 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span className="text-xs font-bold text-white font-mono">Stable Pods (v2.8.3)</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">10 Replicas • 90% Traffic</div>
                      </div>

                      <div className="p-3 rounded-xl bg-crimson-950/40 border border-crimson-600/70 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-crimson-400 animate-ping"></span>
                          <span className="text-xs font-bold text-white font-mono">Canary Pods (v2.8.4)</span>
                        </div>
                        <div className="text-[10px] text-crimson-300 font-mono">2 Replicas • 10% Traffic</div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-emerald-400 pt-2 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Zero packet loss detected during failover simulation</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: SRE GRAFANA METRICS */}
                {activePreviewTab === 'metrics' && (
                  <div className="space-y-4 my-auto text-left">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-charcoal-800 pb-2">
                      <span>SRE Prometheus Telemetry Monitor</span>
                      <span className="text-emerald-400">STATUS: NOMINAL</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                          <span>Cluster CPU Utilization</span>
                          <span className="text-crimson-400 font-bold">28.4%</span>
                        </div>
                        <div className="w-full bg-charcoal-800 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-crimson-500 h-full w-[28.4%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                          <span>Memory Working Set</span>
                          <span className="text-amber-400 font-bold">42.1%</span>
                        </div>
                        <div className="w-full bg-charcoal-800 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-amber-500 h-full w-[42.1%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                          <span>HTTP 5xx Error Budget Burn Rate</span>
                          <span className="text-emerald-400 font-bold">0.002% (Target &lt; 0.05%)</span>
                        </div>
                        <div className="w-full bg-charcoal-800 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[4%] rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                          <span>p99 Latency (ms)</span>
                          <span className="text-emerald-400 font-bold">24.6 ms</span>
                        </div>
                        <div className="w-full bg-charcoal-800 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-[20%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Interactive Simulation Trigger Bar */}
              <div className="px-4 py-3 bg-charcoal-900 border-t border-charcoal-800 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Interactive Preview Mode</span>
                </div>

                <button
                  onClick={handleSimulateAction}
                  disabled={isSimulating}
                  id={`project-simulate-btn-${activeProjectIndex}`}
                  className="px-3 py-1.5 rounded-lg bg-crimson-600/30 hover:bg-crimson-600 text-crimson-300 hover:text-white font-mono text-xs border border-crimson-500/50 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isSimulating ? 'Simulating Traffic...' : 'Run Chaos Probe'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
