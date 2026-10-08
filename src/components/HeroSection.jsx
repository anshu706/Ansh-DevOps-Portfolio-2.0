import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  CornerDownLeft,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const defaultTerminalHistory = [
  { type: 'system', text: "Welcome to Ansh's Interactive Shell. Type 'help' to see available commands." },
  { type: 'input', text: "whoami" },
  { type: 'output', text: `${personalInfo.name} — Computer Science Student @ Parul University & Aspiring DevOps Engineer` },
  { type: 'input', text: "cat tech-stack.txt" },
  { type: 'output', text: "AWS • Docker • Kubernetes • GitHub Actions • Terraform • Linux • Python • Bash" },
  { type: 'system', text: "Tip: Try typing 'skills', 'projects', or 'contact' below, or click any command badge." }
];

export const HeroSection = ({ onOpenResume }) => {
  const [terminalHistory, setTerminalHistory] = useState(defaultTerminalHistory);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef(null);

  const scrollToTerminalBottom = () => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToTerminalBottom();
  }, [terminalHistory]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const newEntries = [{ type: 'input', text: raw }];

    if (lower === 'help') {
      newEntries.push({
        type: 'output',
        text: `Available commands:
  • whoami       : Quick bio & introduction
  • skills       : Core tools and technologies
  • projects     : Featured DevOps & cloud projects
  • contact      : Email, LinkedIn, and GitHub links
  • resume       : Open resume overview
  • education    : University details & degree
  • clear        : Clear this terminal window`
      });
    } else if (lower === 'whoami') {
      newEntries.push({
        type: 'output',
        text: `${personalInfo.name}: ${personalInfo.summary}`
      });
    } else if (lower === 'skills') {
      newEntries.push({
        type: 'output',
        text: `Cloud: AWS (VPC, EC2, S3, IAM)
Containers: Docker, Kubernetes, Helm
CI/CD: GitHub Actions, Jenkins, GitOps
IaC: Terraform, Ansible
Observability: Prometheus, Grafana
Languages: Bash, Python, C++, YAML`
      });
    } else if (lower === 'projects') {
      newEntries.push({
        type: 'output',
        text: `Featured Projects:
1. DevOps-Pipeline: Docker + GitHub Actions + K8s continuous delivery
2. Terraform-AWS: Modular VPC, EC2, S3 remote state + DynamoDB locks
3. Observability-Stack: Prometheus + Grafana real-time metrics
4. Threat-Zone: DevSecOps CI scanning (Trivy, tfsec, Gitleaks)
(Scroll down to the Projects section to explore interactive walkthroughs!)`
      });
    } else if (lower === 'contact') {
      newEntries.push({
        type: 'output',
        text: `Email: ${personalInfo.socialLinks.email}
GitHub: ${personalInfo.socialLinks.github}
LinkedIn: ${personalInfo.socialLinks.linkedin}
LeetCode: ${personalInfo.socialLinks.leetcode}`
      });
    } else if (lower === 'education') {
      newEntries.push({
        type: 'output',
        text: `${personalInfo.education.institution} (${personalInfo.education.period})
Degree: ${personalInfo.education.degree}
Focus: ${personalInfo.education.focus}`
      });
    } else if (lower === 'resume') {
      onOpenResume();
      newEntries.push({
        type: 'output',
        text: "Opening resume modal..."
      });
    } else if (lower === 'clear') {
      setTerminalHistory([]);
      setInputValue('');
      return;
    } else {
      newEntries.push({
        type: 'error',
        text: `bash: command not found: "${raw}". Type 'help' to see available commands.`
      });
    }

    setTerminalHistory((prev) => [...prev, ...newEntries]);
    setInputValue('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-crimson-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authentic Human Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-charcoal-700 text-xs font-mono mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Open to Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-crimson-400 font-medium">Internships & Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm <span className="text-white">{personalInfo.name}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 via-rose-400 to-amber-300">
                DevOps & Cloud Engineer
              </span>
            </h1>

            {/* Sub-headline */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-6 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-crimson-400" />
                Parul University
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-crimson-400" />
                India
              </span>
            </div>

            {/* Natural, honest human bio */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              I'm an engineer who enjoys building reliable cloud infrastructure, turning manual multi-step deployments into fast CI/CD pipelines, and writing clean Terraform and Kubernetes manifests that work on day two.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-medium text-sm sm:text-base shadow-glow-crimson transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-charcoal-700 hover:border-crimson-500/50 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-crimson-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Media & Real Profiles */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-charcoal-800 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Find me on:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-700 transition-all duration-200 flex items-center gap-2 text-xs font-mono"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-700 transition-all duration-200 flex items-center gap-2 text-xs font-mono"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-leetcode"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/60 hover:bg-charcoal-700 transition-all duration-200 flex items-center gap-2 text-xs font-mono"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Interactive Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Subtle ambient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-crimson-600/30 to-amber-500/20 rounded-2xl blur-sm opacity-60"></div>

              {/* Main Terminal Frame */}
              <div className="relative rounded-2xl bg-charcoal-900 border border-charcoal-700 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-charcoal-800/90 border-b border-charcoal-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-crimson-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 font-mono text-xs text-slate-400">ansh@portfolio: ~</span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400">
                    interactive terminal
                  </div>
                </div>

                {/* Quick Command Suggestion Buttons */}
                <div className="px-4 py-2.5 bg-charcoal-850 border-b border-charcoal-700/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[10px] font-mono text-slate-400 uppercase shrink-0">Try:</span>
                  {['whoami', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-charcoal-800 hover:bg-crimson-600 hover:text-white text-slate-300 text-xs font-mono border border-charcoal-700 transition-colors cursor-pointer shrink-0"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Content Stream */}
                <div className="p-4 font-mono text-xs text-left min-h-[260px] max-h-[320px] overflow-y-auto space-y-2 bg-charcoal-950/90">
                  {terminalHistory.map((item, index) => (
                    <div key={index} className="leading-relaxed">
                      {item.type === 'system' && (
                        <p className="text-slate-400 italic">{item.text}</p>
                      )}
                      {item.type === 'input' && (
                        <p className="text-slate-300">
                          <span className="text-crimson-400">ansh@devops:~$</span> {item.text}
                        </p>
                      )}
                      {item.type === 'output' && (
                        <pre className="text-emerald-300 whitespace-pre-wrap font-mono mt-0.5 pl-2 border-l border-emerald-500/30">
                          {item.text}
                        </pre>
                      )}
                      {item.type === 'error' && (
                        <p className="text-rose-400 pl-2 border-l border-rose-500/30">
                          {item.text}
                        </p>
                      )}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Terminal Input Form */}
                <form
                  onSubmit={handleFormSubmit}
                  className="px-3 py-2.5 bg-charcoal-900 border-t border-charcoal-800 flex items-center gap-2"
                >
                  <span className="text-crimson-400 font-mono text-xs shrink-0">ansh@devops:~$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="type a command (e.g. skills, contact)..."
                    className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-500"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="p-1 rounded bg-charcoal-800 text-slate-400 hover:text-white hover:bg-crimson-600 transition-colors cursor-pointer"
                    title="Send Command"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
