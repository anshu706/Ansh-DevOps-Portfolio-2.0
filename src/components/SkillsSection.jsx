import React, { useState } from 'react';
import { 
  Cloud, 
  Boxes, 
  GitBranch, 
  Layers, 
  Activity, 
  TerminalSquare, 
  Check, 
  Copy, 
  ExternalLink,
  Sparkles,
  Server,
  Cpu,
  RefreshCw,
  Code2,
  BarChart3,
  Database,
  FileCode2,
  FileText,
  Anchor,
  Binary
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Cloud: Cloud,
  CloudSun: Cloud,
  Server: Server,
  Container: Boxes,
  Boxes: Boxes,
  Anchor: Anchor,
  GitBranch: GitBranch,
  Cpu: Cpu,
  GitPullRequest: GitBranch,
  RefreshCw: RefreshCw,
  Code2: Code2,
  Terminal: TerminalSquare,
  Layers: Layers,
  Activity: Activity,
  BarChart3: BarChart3,
  Database: Database,
  TerminalSquare: TerminalSquare,
  FileCode2: FileCode2,
  Binary: Binary,
  FileText: FileText
};

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCommand, setCopiedCommand] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'cloud', label: 'Cloud Platforms' },
    { id: 'containers', label: 'Containers & K8s' },
    { id: 'cicd', label: 'CI/CD & GitOps' },
    { id: 'iac', label: 'IaC & Automation' },
    { id: 'observability', label: 'Observability' },
    { id: 'scripting', label: 'Scripting & CLI' },
  ];

  const handleCopyCommand = (command, skillName) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(skillName);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-charcoal-950 border-t border-charcoal-800 relative overflow-hidden">
      {/* Background Subtle Red Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-crimson-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>TECHNICAL PROFICIENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            DevOps & Cloud Technology Stack
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Battle-tested toolchains and platforms utilized for architecting scalable, self-healing cloud ecosystems.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none text-left">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-crimson-600 text-white shadow-glow-crimson-sm border border-crimson-400/50'
                  : 'bg-charcoal-850 text-slate-300 hover:text-white hover:bg-charcoal-700/80 border border-charcoal-700/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="text-left">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-charcoal-800">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson-500"></span>
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  — {category.description}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Cloud;
                  const isCopied = copiedCommand === skill.name;

                  return (
                    <div
                      key={skill.name}
                      className="group relative rounded-xl bg-charcoal-800/60 backdrop-blur-md border border-charcoal-700/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/80 hover:shadow-glow-crimson-sm hover:bg-charcoal-800/90 text-left flex flex-col justify-between"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Top Row: Icon, Name & Level */}
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-crimson-400 group-hover:text-crimson-300 group-hover:border-crimson-500/50 transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white group-hover:text-crimson-300 transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[11px] font-mono text-emerald-400">
                                {skill.level}
                              </span>
                            </div>
                          </div>

                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-charcoal-900 border border-charcoal-700 text-slate-400">
                            Production
                          </span>
                        </div>

                        {/* Skill Details */}
                        <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
                          {skill.details}
                        </p>
                      </div>

                      {/* Bottom Terminal Snippet with Copy Option */}
                      <div className="mt-2 pt-3 border-t border-charcoal-700/60">
                        <div className="flex items-center justify-between bg-charcoal-950/80 rounded-lg px-2.5 py-1.5 border border-charcoal-700/60">
                          <span className="font-mono text-[11px] text-slate-400 truncate max-w-[200px]" title={skill.command}>
                            $ {skill.command}
                          </span>
                          <button
                            onClick={() => handleCopyCommand(skill.command, skill.name)}
                            className="p-1 rounded text-slate-400 hover:text-white hover:bg-charcoal-800 transition-colors ml-2"
                            title="Copy command"
                            aria-label={`Copy ${skill.name} command`}
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
