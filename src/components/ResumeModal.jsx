import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  Copy, 
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate clean, authentic, human resume format
    const resumeContent = `========================================================================
ANSH UPADHAYAY — DEVOPS & CLOUD INFRASTRUCTURE ENGINEER
========================================================================
Location: Vadodara / Gujarat, India
Email:    ${personalInfo.socialLinks.email}
GitHub:   ${personalInfo.socialLinks.github}
LinkedIn: ${personalInfo.socialLinks.linkedin}
LeetCode: ${personalInfo.socialLinks.leetcode}
========================================================================

EDUCATION:
• Parul University (2022 – 2026)
  Bachelor of Technology (B.Tech) in Computer Science & Engineering
  Focus: Cloud Computing, DevOps, Operating Systems, Computer Networks

TECHNICAL SKILLS:
• Cloud & Platforms:  AWS (VPC, EC2, S3, IAM, Route53, RDS, CloudWatch)
• Containerization:   Docker (Multi-stage builds, Compose), Kubernetes, Helm
• CI/CD & Automation: GitHub Actions, Git, GitOps (ArgoCD), Jenkins
• Infrastructure as Code: Terraform (Modular architecture, S3 backend, DynamoDB locks), Ansible
• Monitoring:         Prometheus, Grafana, Node Exporter
• OS & Scripting:     Linux (Ubuntu), Bash Shell Scripting, Python, C++ (DSA), YAML

HANDS-ON PROJECTS:
1. Real-World Cloud & DevOps Pipeline
   GitHub: https://github.com/anshu706/DevOps-Projects
   - Designed automated CI/CD pipeline using GitHub Actions to lint, test, and package microservices.
   - Built optimized multi-stage Docker images (<50MB) and pushed to container registry.
   - Deployed manifests to Kubernetes with rolling update strategies and liveness/readiness probes.

2. Modular AWS Infrastructure with Terraform
   GitHub: https://github.com/anshu706/DevOps-Projects
   - Provisioned reproducible multi-tier AWS VPC, public/private subnets, and NAT gateways.
   - Configured remote state storage in Amazon S3 with DynamoDB distributed state locking.
   - Implemented reusable Terraform modules with input validation and security group rules.

3. Prometheus & Grafana Observability Stack
   GitHub: https://github.com/anshu706/DevOps-Projects
   - Deployed Prometheus and Node Exporter to capture host-level metrics and container telemetry.
   - Designed custom Grafana dashboards tracking CPU, memory saturation, and network bandwidth.

4. Threat-Zone & DevSecOps CI Automation
   GitHub: https://github.com/anshu706/Threat-Zone
   - Integrated Trivy for container image vulnerability scanning and Gitleaks for secret detection.

AREAS OF INTEREST:
• Cloud Native Architecture, Platform Engineering, Site Reliability Engineering
========================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ansh_Upadhayay_DevOps_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const resumeText = `Ansh Upadhayay - DevOps & Cloud Infrastructure Engineer
Student @ Parul University (B.Tech CSE)
Email: ${personalInfo.socialLinks.email}
GitHub: ${personalInfo.socialLinks.github}
LinkedIn: ${personalInfo.socialLinks.linkedin}
Skills: AWS, Docker, Kubernetes, Terraform, GitHub Actions, Prometheus, Grafana, Linux, Bash, Python`;
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
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-crimson-600/20 border border-crimson-500/50 flex items-center justify-center text-crimson-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Ansh Upadhayay</h3>
            <p className="text-xs font-mono text-slate-400">
              DevOps & Cloud Engineer • Parul University (2022–2026)
            </p>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div className="bg-charcoal-950 rounded-xl p-5 border border-charcoal-800 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm text-slate-300 flex-1 my-2 leading-relaxed">
          
          {/* Education */}
          <div className="border-b border-charcoal-800 pb-3">
            <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-crimson-400" />
              <span>Education</span>
            </h4>
            <div className="text-xs text-slate-300">
              <div className="font-semibold text-white">Parul University</div>
              <div className="text-slate-400">B.Tech in Computer Science & Engineering (2022 – 2026)</div>
              <div className="text-slate-500 text-[11px] mt-0.5">Focus: Cloud Computing, DevOps, Operating Systems & System Architecture</div>
            </div>
          </div>

          {/* Core Summary */}
          <div className="border-b border-charcoal-800 pb-3">
            <h4 className="font-bold text-white text-sm mb-1">Professional Profile</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aspiring DevOps engineer with practical experience designing CI/CD delivery pipelines, containerizing applications with Docker, orchestrating clusters with Kubernetes, and managing cloud resources on AWS using Terraform.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="border-b border-charcoal-800 pb-3">
            <h4 className="font-bold text-white text-sm mb-2">Technical Core</h4>
            <div className="space-y-1 text-xs">
              <div><strong className="text-slate-300">Cloud & IaC:</strong> <span className="text-slate-400">AWS (VPC, EC2, S3, IAM), Terraform, Ansible</span></div>
              <div><strong className="text-slate-300">Containers:</strong> <span className="text-slate-400">Docker, Docker Compose, Kubernetes, Helm</span></div>
              <div><strong className="text-slate-300">CI/CD & Git:</strong> <span className="text-slate-400">GitHub Actions, GitOps (ArgoCD), Git, Jenkins</span></div>
              <div><strong className="text-slate-300">Monitoring:</strong> <span className="text-slate-400">Prometheus, Grafana, Node Exporter</span></div>
              <div><strong className="text-slate-300">Languages:</strong> <span className="text-slate-400">Bash Shell, Python, C++ (DSA), YAML</span></div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h4 className="font-bold text-white text-sm mb-2">Featured Repositories</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• <strong className="text-slate-200">DevOps-Projects:</strong> Real-world microservice pipelines with Docker, K8s & GitHub Actions.</li>
              <li>• <strong className="text-slate-200">Modular AWS Terraform:</strong> Multi-tier VPC architecture with S3 remote state and DynamoDB locks.</li>
              <li>• <strong className="text-slate-200">Threat-Zone:</strong> Security auditing, container vulnerability scans & secrets detection.</li>
            </ul>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal-800">
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-300 hover:text-white text-xs font-mono border border-charcoal-700 flex items-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Summary' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handleDownload}
            id="resume-modal-download-trigger"
            className="px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-medium text-xs sm:text-sm font-mono flex items-center gap-2 shadow-glow-crimson-sm transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (.txt)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
