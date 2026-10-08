import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  FileCode,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { projects } from '../data/portfolioData';

// Realistic sample configuration snippets for interviewers to see real code
const projectCodeSnippets = {
  "devops-pipeline": {
    filename: ".github/workflows/deploy.yml",
    language: "yaml",
    code: `name: Build, Scan & Deploy
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Build and Cache Image
        uses: docker/build-push-action@v5
        with:
          context: .
          tags: ansh706/app:\${{ github.sha }}
          load: true
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Run Trivy Security Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: ansh706/app:\${{ github.sha }}
          severity: 'CRITICAL,HIGH'
          exit-code: '0'`
  },
  "terraform-aws-infra": {
    filename: "terraform/modules/vpc/main.tf",
    language: "hcl",
    code: `terraform {
  required_version = ">= 1.5.0"
  backend "s3" {
    bucket         = "ansh-tf-state-storage"
    key            = "prod/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-state-locks"
    encrypt        = true
  }
}

resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "prod-vpc"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}`
  },
  "monitoring-observability": {
    filename: "docker-compose.monitoring.yml",
    language: "yaml",
    code: `version: '3.8'

services:
  prometheus:
    image: prom/prometheus:v2.48.0
    container_name: prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=15d'
    ports:
      - "9090:9090"
    restart: unless-stopped

  node-exporter:
    image: prom/node-exporter:v1.7.0
    container_name: node-exporter
    restart: unless-stopped
    ports:
      - "9100:9100"`
  },
  "threat-zone": {
    filename: ".github/workflows/security-audit.yml",
    language: "yaml",
    code: `name: DevSecOps Shift-Left Scan
on: [pull_request]

jobs:
  security-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Scan for Leaked Secrets (Gitleaks)
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      - name: IaC Security Scan (tfsec)
        uses: aquasecurity/tfsec-action@v1.0.0
        with:
          soft_fail: false`
  }
};

export const ProjectsSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activePreviewTab, setActivePreviewTab] = useState('workflow'); // 'workflow' | 'code' | 'architecture'

  const currentProject = projects[activeProjectIndex];
  const snippet = projectCodeSnippets[currentProject.id] || projectCodeSnippets["devops-pipeline"];

  return (
    <section id="projects" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-crimson-950/60 border border-crimson-800/60 text-xs font-mono text-crimson-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
            <span>HANDS-ON PROJECTS & LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured DevOps & Cloud Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Practical architectures and automation workflows built to solve real deployment problems.
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
                setActivePreviewTab('workflow');
              }}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 cursor-pointer shrink-0 ${
                activeProjectIndex === idx
                  ? 'bg-crimson-600 text-white shadow-glow-crimson-sm border border-crimson-400/50'
                  : 'bg-charcoal-800/80 text-slate-300 hover:text-white hover:bg-charcoal-750 border border-charcoal-700/80'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProjectIndex === idx ? 'bg-white' : 'bg-crimson-500'}`}></span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Main 2-Column Split-Screen Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Details & Honest Learnings */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-charcoal-700 flex flex-col justify-between text-left">
            <div>
              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-crimson-950/90 text-crimson-400 border border-crimson-800/50 text-xs font-mono font-medium">
                  {currentProject.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tested & Verified
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-crimson-400/90 mb-4 font-mono">
                {currentProject.tagline}
              </p>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {currentProject.summary}
              </p>

              {/* Why I Built It / The Problem */}
              <div className="mb-6 p-3.5 rounded-xl bg-charcoal-950/80 border border-charcoal-800 text-xs">
                <span className="font-mono text-crimson-400 font-semibold uppercase tracking-wider block mb-1">
                  Why I built this:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {currentProject.problemSolved}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-crimson-400" />
                  <span>Key Architecture Components</span>
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

              {/* Key Takeaways */}
              {currentProject.takeaways && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Lessons & Optimization</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {currentProject.takeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium text-xs sm:text-sm border border-charcoal-700 hover:border-crimson-500 transition-all shadow-sm"
              >
                <GitHubIcon className="w-4 h-4 text-crimson-400" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Snippet & Realistic Workflow Logs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative h-full rounded-2xl bg-charcoal-950 border border-charcoal-700 shadow-xl overflow-hidden flex flex-col justify-between">
              
              {/* Tab Navigation */}
              <div className="px-4 py-3 bg-charcoal-850/90 border-b border-charcoal-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-crimson-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline">
                    inspect: {snippet.filename}
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-charcoal-900 rounded-lg p-1 border border-charcoal-700 text-xs font-mono">
                  <button
                    id="preview-tab-workflow"
                    onClick={() => setActivePreviewTab('workflow')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreviewTab === 'workflow'
                        ? 'bg-crimson-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Workflow
                  </button>
                  <button
                    id="preview-tab-code"
                    onClick={() => setActivePreviewTab('code')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreviewTab === 'code'
                        ? 'bg-crimson-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Config Snippet
                  </button>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto min-h-[360px]">
                
                {/* TAB 1: WORKFLOW COMMAND STREAM */}
                {activePreviewTab === 'workflow' && (
                  <div className="font-mono text-xs space-y-2 text-left">
                    <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-charcoal-800">
                      <span>Execution sequence • {currentProject.title}</span>
                      <span className="text-emerald-400 text-[10px]">● AUTOMATED</span>
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
                      <span>ansh@runner:~$</span>
                      <span className="w-2.5 h-4 bg-crimson-500 animate-terminal-blink inline-block"></span>
                    </div>
                  </div>
                )}

                {/* TAB 2: CODE SNIPPET */}
                {activePreviewTab === 'code' && (
                  <div className="text-left font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-charcoal-800 text-slate-400">
                      <span className="flex items-center gap-2">
                        <FileCode className="w-3.5 h-3.5 text-crimson-400" />
                        <span>{snippet.filename}</span>
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase">{snippet.language}</span>
                    </div>
                    <pre className="text-slate-200 overflow-x-auto p-3 rounded-lg bg-charcoal-900 border border-charcoal-800 leading-relaxed font-mono">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                )}

              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-2.5 bg-charcoal-900 border-t border-charcoal-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Tested locally & on GitHub Actions</span>
                </div>
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-400 hover:text-crimson-300 flex items-center gap-1"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
