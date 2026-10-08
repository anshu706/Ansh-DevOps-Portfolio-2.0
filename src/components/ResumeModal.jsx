import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  Copy, 
  Printer, 
  ExternalLink,
  ShieldCheck,
  Terminal,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, sreMetrics, skillCategories } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dc2626', '#ef4444', '#ffffff', '#10b981']
      });
    } catch (e) {
      console.log('Confetti trigger', e);
    }

    // Generate formatted resume file for download
    const resumeContent = `========================================================================
ANSH UPADHAYAY - DEVOPS & CLOUD INFRASTRUCTURE ENGINEER
========================================================================
Location: India | Status: Available for DevOps / Cloud / SRE Roles
LinkedIn: ${personalInfo.socialLinks.linkedin}
GitHub:   ${personalInfo.socialLinks.github}
LeetCode: ${personalInfo.socialLinks.leetcode}
========================================================================

PROFESSIONAL SUMMARY:
${personalInfo.summary}

KEY SRE & RELIABILITY ACHIEVEMENTS:
• Multi-Region Infrastructure Uptime: 99.99% availability sustained
• CI/CD Pipeline Velocity: 85% build & deployment speedup (28m -> 4m 12s)
• Scale: 350+ Production Kubernetes pods across EKS & GKE clusters
• MTTR: < 4.5 minutes via automated Prometheus alerts & auto-remediation

CORE TECHNICAL EXPERTISE:
• Cloud Platforms: AWS (EKS, VPC, IAM, RDS, S3), GCP, Azure
• Containerization & K8s: Docker, Kubernetes, Helm, Istio Service Mesh
• CI/CD & GitOps: GitHub Actions, ArgoCD, Jenkins, GitLab CI
• Infrastructure as Code: Terraform, Terragrunt, Ansible, CloudFormation
• Monitoring & Observability: Prometheus, Grafana, Alertmanager, ELK Stack
• Scripting & Automation: Bash, Python (Boto3), Go, YAML

FEATURED PROJECTS:
1. Multi-Region Kubernetes GitOps Platform (ArgoCD & EKS)
   - Zero-downtime canary rollouts via Istio and ArgoCD ApplicationSets.
   - Dynamic secret injection with HashiCorp Vault & External Secrets Operator.

2. High-Throughput Observability & Self-Healing SRE Mesh
   - Distributed Prometheus federation ingesting 1.2M metrics/sec.
   - Automated remediation worker executing proactive health restarts.

3. Enterprise IaC Cloud Automation & Compliance Engine
   - Modular Terraform multi-account AWS architecture with DynamoDB locks.
   - Automated security audits via Checkov, tfsec, and tflint in CI.

CERTIFICATIONS:
• AWS Certified Solutions Architect – Associate (AWS-SAA-839210)
• Certified Kubernetes Administrator (CKA-LF-294018)
• HashiCorp Certified: Terraform Associate (HCTA-003-88124)
• Red Hat Certified System Administrator (RHCSA-EX200-5021)
========================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ansh_Upadhayay_DevOps_Cloud_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const resumeText = `Ansh Upadhayay - DevOps & Cloud Infrastructure Engineer
LinkedIn: ${personalInfo.socialLinks.linkedin}
GitHub: ${personalInfo.socialLinks.github}
Expertise: AWS, Kubernetes, Terraform, ArgoCD, Prometheus, Docker, CI/CD, SRE.`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-charcoal-900 border border-charcoal-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-left relative shadow-2xl max-h-[90vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="resume-modal-close"
          className="absolute top-5 right-5 p-2 rounded-lg bg-charcoal-800 text-slate-400 hover:text-white border border-charcoal-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-crimson-600/20 border border-crimson-500/50 flex items-center justify-center text-crimson-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Ansh Upadhayay — Curriculum Vitae</h3>
            <p className="text-xs font-mono text-slate-400">DevOps & Cloud Infrastructure Engineer</p>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div className="bg-charcoal-950 rounded-xl p-5 border border-charcoal-800 overflow-y-auto space-y-4 font-sans text-sm text-slate-300 flex-1 my-2">
          
          <div className="border-b border-charcoal-800 pb-3">
            <h4 className="font-bold text-white text-base">Executive Profile</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="border-b border-charcoal-800 pb-3">
            <h4 className="font-bold text-white text-sm mb-2">Key Metric Highlights</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
                <span className="text-slate-500">Uptime:</span> <span className="text-emerald-400 font-bold">99.99%</span>
              </div>
              <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
                <span className="text-slate-500">CI/CD Speedup:</span> <span className="text-crimson-400 font-bold">85%</span>
              </div>
              <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
                <span className="text-slate-500">K8s Pods:</span> <span className="text-white font-bold">350+</span>
              </div>
              <div className="bg-charcoal-900 p-2 rounded border border-charcoal-800">
                <span className="text-slate-500">MTTR:</span> <span className="text-emerald-400 font-bold">&lt; 4.5m</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-2">Primary Toolset</h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">AWS / EKS</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">Kubernetes</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">Terraform</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">ArgoCD</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">GitHub Actions</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">Prometheus / Grafana</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">Docker</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-900 border border-charcoal-800 text-slate-300">Python / Bash</span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal-800">
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-300 hover:text-white text-xs font-mono border border-charcoal-700 flex items-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Details' : 'Copy Summary'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              id="resume-modal-download-trigger"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-medium text-xs sm:text-sm font-mono flex items-center gap-2 shadow-glow-crimson transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download Full Resume (.txt)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
