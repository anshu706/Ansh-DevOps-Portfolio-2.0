export const personalInfo = {
  name: "Ansh Upadhayay",
  role: "DevOps & Cloud Engineer",
  tagline: "Automating Infrastructure, Optimizing CI/CD Pipelines, & Scaling Cloud Systems",
  location: "India",
  status: "Available for Senior / Mid DevOps & Cloud Roles",
  systemStatus: "All Systems Operational (99.99% SLO)",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ansh-upadhayay-011b77310/",
    github: "https://github.com/anshu706",
    leetcode: "https://leetcode.com/u/Ansh270/",
    email: "anshu.upadhayay.dev@gmail.com"
  },
  summary: `Passionate DevOps & Cloud Engineer focused on designing enterprise-grade cloud architectures, container orchestration at scale, and bulletproof CI/CD pipelines. Experienced in automating complex multi-cloud topologies with Terraform, orchestrating microservices on Kubernetes, and enforcing strict Site Reliability Engineering (SRE) standards with automated observability.`
};

export const sreMetrics = [
  {
    label: "Infrastructure Uptime",
    value: "99.99%",
    description: "Multi-region high availability & active health probes",
    trend: "+0.04% YoY"
  },
  {
    label: "CI/CD Pipeline Speedup",
    value: "85%",
    description: "Caching layers, parallel runners & artifact optimization",
    trend: "28m → 4m 12s"
  },
  {
    label: "Containers Orchestrated",
    value: "350+",
    description: "Production Kubernetes pods across EKS & GKE clusters",
    trend: "Zero-Downtime Rollouts"
  },
  {
    label: "Mean Time to Recover",
    value: "< 4.5m",
    description: "Automated Prometheus alerts & auto-remediation runbooks",
    trend: "62% MTTR Reduction"
  }
];

export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud Platforms",
    description: "Multi-cloud architecture, IAM security, VPC networking & cost governance",
    skills: [
      { name: "AWS", level: "Advanced", icon: "Cloud", details: "EKS, EC2, S3, RDS, IAM, Route53, CloudWatch, Lambda", command: "aws sts get-caller-identity" },
      { name: "GCP", level: "Proficient", icon: "CloudSun", details: "GKE, Compute Engine, Cloud Storage, IAM, VPC Peering", command: "gcloud compute instances list" },
      { name: "Azure", level: "Intermediate", icon: "Server", details: "AKS, Azure Blob, Resource Groups, Azure DevOps", command: "az account show" }
    ]
  },
  {
    id: "containers",
    title: "Containerization & Orchestration",
    description: "Cluster scheduling, service meshes, zero-downtime rollouts, and multi-stage Docker builds",
    skills: [
      { name: "Docker", level: "Expert", icon: "Container", details: "Multi-stage builds, Distroless images, Docker Compose, BuildKit caching", command: "docker buildx bake --push" },
      { name: "Kubernetes", level: "Advanced", icon: "Boxes", details: "Ingress-NGINX, StatefulSets, HPA, RBAC, NetworkPolicies, CRDs", command: "kubectl get nodes -o wide" },
      { name: "Helm", level: "Advanced", icon: "Anchor", details: "Custom chart packaging, umbrella charts, values override schemas", command: "helm upgrade --install prod ./chart" }
    ]
  },
  {
    id: "cicd",
    title: "CI/CD & Automation",
    description: "Declarative GitOps pipelines, canary deployments, and continuous security scanning",
    skills: [
      { name: "GitHub Actions", level: "Expert", icon: "GitBranch", details: "Matrix workflows, custom composite actions, OIDC AWS authentication", command: "gh workflow run deploy-prod.yml" },
      { name: "Jenkins", level: "Advanced", icon: "Cpu", details: "Declarative Jenkinsfiles, shared groovy libraries, ephemeral k8s agents", command: "jenkins-cli build deploy-pipeline" },
      { name: "GitLab CI", level: "Proficient", icon: "GitPullRequest", details: "Multi-project pipelines, DAG dependencies, container registry cache", command: "gitlab-runner exec docker test" },
      { name: "ArgoCD", level: "Advanced", icon: "RefreshCw", details: "ApplicationSets, automated self-healing, sync waves, canary rollouts", command: "argocd app sync root-app" }
    ]
  },
  {
    id: "iac",
    title: "Infrastructure as Code (IaC)",
    description: "Deterministic, declarative infrastructure state management with automated drift detection",
    skills: [
      { name: "Terraform", level: "Expert", icon: "Code2", details: "Remote S3 backend, state locking, reusable modules, tfsec audits", command: "terraform apply -auto-approve" },
      { name: "Ansible", level: "Advanced", icon: "Terminal", details: "Idempotent playbooks, dynamic inventories, Ansible Vault secrets", command: "ansible-playbook -i hosts site.yml" },
      { name: "CloudFormation", level: "Proficient", icon: "Layers", details: "AWS CDK integration, nested stacks, drift status checking", command: "aws cloudformation deploy" }
    ]
  },
  {
    id: "observability",
    title: "Monitoring & Observability",
    description: "Full-stack telemetry, distributed tracing, alerting SLAs, and synthetic traffic probes",
    skills: [
      { name: "Prometheus", level: "Advanced", icon: "Activity", details: "PromQL queries, custom ServiceMonitors, recording rules, Alertmanager", command: "promtool check rules alerts.yml" },
      { name: "Grafana", level: "Advanced", icon: "BarChart3", details: "Interactive SRE dashboards, Loki log queries, tempo tracing links", command: "grafana-cli plugins install" },
      { name: "ELK Stack", level: "Proficient", icon: "Database", details: "Elasticsearch indexing, Logstash filters, Filebeat daemons, Kibana spaces", command: "curl -X GET 'localhost:9200/_cluster/health'" }
    ]
  },
  {
    id: "scripting",
    title: "Scripting & Tooling",
    description: "Automating operational workflows, CLI tooling, and Kubernetes operator extensions",
    skills: [
      { name: "Bash / Shell", level: "Expert", icon: "TerminalSquare", details: "POSIX compliance, automation utilities, pipe fail handling, cron jobs", command: "#!/usr/bin/env bash set -euo pipefail" },
      { name: "Python", level: "Advanced", icon: "FileCode2", details: "Boto3 AWS SDK, Kubernetes Python client, automated backup scripts", command: "python3 -m pytest tests/cloud_test.py" },
      { name: "Go (Golang)", level: "Intermediate", icon: "Binary", details: "Kubernetes client-go, custom lightweight CLI utilities, REST endpoints", command: "go run cmd/infra-doctor/main.go" },
      { name: "YAML", level: "Expert", icon: "FileText", details: "Strict schema validation, anchors/aliases, Kustomize overlays", command: "yamllint -c .yamllint.yml ." }
    ]
  }
];

export const projects = [
  {
    id: "gitops-k8s",
    title: "Multi-Region Kubernetes GitOps Platform",
    tagline: "Zero-Downtime Continuous Deployment with ArgoCD & Istio Service Mesh",
    badge: "Enterprise GitOps Architecture",
    description: "Engineered an end-to-end GitOps delivery system on AWS EKS spanning two active AWS regions. Integrated ArgoCD with HashiCorp Vault for dynamic secret injection and Istio service mesh for automated canary rollouts with automated rollbacks on HTTP 5xx error spikes.",
    architecture: [
      "AWS EKS clusters with managed node groups across us-east-1 and eu-west-1",
      "ArgoCD ApplicationSet with automated sync waves and health checks",
      "Istio ingress gateway with automated weight-shifting canary traffic distribution",
      "External Secrets Operator retrieving encrypted credentials from HashiCorp Vault"
    ],
    sreMetrics: [
      { label: "Availability", value: "99.99%" },
      { label: "Deploy Time", value: "< 2m 40s" },
      { label: "Rollback Time", value: "< 12s" },
      { label: "Target SLO", value: "99.95%" }
    ],
    tags: ["Kubernetes", "AWS EKS", "ArgoCD", "Istio", "Helm", "Vault", "Terraform"],
    githubUrl: "https://github.com/anshu706",
    liveDemoUrl: "https://github.com/anshu706",
    terminalLogs: [
      { type: "info", text: "Connecting to EKS cluster 'prod-us-east-1-cluster'..." },
      { type: "info", text: "Targeting namespace 'production-payment-api'..." },
      { type: "success", text: "✓ OIDC Authentication validated with AWS IAM" },
      { type: "command", text: "argocd app sync payments-service --prune" },
      { type: "info", text: "Fetching target revision 'v2.8.4' [commit: a7b49ef]..." },
      { type: "info", text: "Sync wave 1: Applying ExternalSecrets & ConfigMaps..." },
      { type: "success", text: "✓ 4 secrets synced from HashiCorp Vault [app-role]" },
      { type: "info", text: "Sync wave 2: Initiating Istio Canary rollout (10% traffic)..." },
      { type: "warning", text: "⚡ Evaluating Prometheus metric 'istio_requests_total{status=500}'..." },
      { type: "success", text: "✓ Error rate: 0.001% (Threshold < 0.1%). Promoting to 50% traffic..." },
      { type: "success", text: "✓ Promotion to 100% stable traffic complete." },
      { type: "success", text: "🎉 Deployment rolled out smoothly across 12 replicas. Zero downtime!" }
    ]
  },
  {
    id: "observability-mesh",
    title: "High-Throughput Observability & Self-Healing SRE Mesh",
    tagline: "Real-time Telemetry, Automated Incident Remediation & SLO Tracing",
    badge: "Cloud SRE & Observability",
    description: "Designed a centralized telemetry infrastructure ingesting millions of metrics daily using Prometheus federation, Grafana alerting, and Loki log aggregation. Programmed automated remediation scripts triggered by Alertmanager webhooks to heal unresponsive microservice pods before customers notice.",
    architecture: [
      "Prometheus Federated Cluster scraping custom Kubernetes ServiceMonitors",
      "Grafana dashboard suite with multi-tenant RBAC and synthetic user journey tests",
      "Alertmanager routing high-severity incidents to PagerDuty and automated webhook listeners",
      "Self-healing worker microservice executing health verifications and pod restarts"
    ],
    sreMetrics: [
      { label: "Telemetry Rate", value: "1.2M metrics/s" },
      { label: "MTTR Reduction", value: "62%" },
      { label: "Alert Latency", value: "< 3.5s" },
      { label: "Uptime SLA", value: "99.98%" }
    ],
    tags: ["Prometheus", "Grafana", "Alertmanager", "Loki", "Docker", "Python", "Bash"],
    githubUrl: "https://github.com/anshu706",
    liveDemoUrl: "https://github.com/anshu706",
    terminalLogs: [
      { type: "info", text: "Scraping 48 ServiceMonitors across 6 k8s nodes..." },
      { type: "info", text: "Calculating p99 latency over 5m sliding window..." },
      { type: "warning", text: "⚠ Alert [PodHighLatency]: pod 'auth-svc-78bd' latency > 450ms" },
      { type: "command", text: "alertmanager dispatch -> webhook://sre-autoheal:8080/remediate" },
      { type: "info", text: "AutoHeal daemon received event: Triggering diagnostic dump..." },
      { type: "info", text: "Memory profile captured and archived to s3://sre-diagnostics/" },
      { type: "command", text: "kubectl rollout restart deployment/auth-svc -n core" },
      { type: "success", text: "✓ New replacement replica healthy and answering probes in 3.8s" },
      { type: "success", text: "✓ P99 latency dropped back to 38ms. Alert cleared automatically." }
    ]
  },
  {
    id: "iac-compliance",
    title: "Enterprise IaC Cloud Automation & Compliance Engine",
    tagline: "Modular Terraform Architecture with Automated Security Audits & Drift Control",
    badge: "Infrastructure as Code",
    description: "Created modular, immutable multi-environment Terraform modules for AWS that power development, staging, and production tiers. Implemented GitHub Actions CI checks that enforce security linting via Checkov and tfsec, run Terragrunt plans on Pull Requests, and automatically alert on infrastructure drift.",
    architecture: [
      "Terragrunt DRY multi-account AWS architecture (Networking, Security, Compute, Data)",
      "Automated state locking via AWS DynamoDB and versioned S3 backend with server encryption",
      "CI/CD security gatekeeper running tfsec, tflint, and Checkov policy-as-code",
      "Scheduled drift detection cron job comparing live AWS state against master state"
    ],
    sreMetrics: [
      { label: "Provisioning Speed", value: "3m 42s" },
      { label: "Security Compliance", value: "100% CIS" },
      { label: "Drift Detection", value: "Continuous" },
      { label: "State Locks", value: "DynamoDB" }
    ],
    tags: ["Terraform", "Terragrunt", "AWS", "Checkov", "GitHub Actions", "Ansible"],
    githubUrl: "https://github.com/anshu706",
    liveDemoUrl: "https://github.com/anshu706",
    terminalLogs: [
      { type: "command", text: "terragrunt run-all init -reconfigure" },
      { type: "info", text: "Acquiring state lock on AWS DynamoDB 'tf-locks-table'..." },
      { type: "success", text: "✓ Backend S3 'prod-tf-state-vault' initialized with KMS encryption" },
      { type: "command", text: "checkov -d . --framework terraform --compact" },
      { type: "success", text: "✓ Passed 142/142 CIS Benchmark & AWS Foundational Security checks" },
      { type: "command", text: "terraform apply -input=false tfplan.binary" },
      { type: "info", text: "aws_vpc.main: Creating... [CIDR: 10.100.0.0/16]" },
      { type: "info", text: "aws_subnet.private_subnets[0]: Created (ID: subnet-0f488e2)" },
      { type: "info", text: "aws_nat_gateway.gw: Creation complete after 1m 15s" },
      { type: "success", text: "Apply complete! Resources: 48 added, 0 changed, 0 destroyed." }
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    credentialId: "AWS-SAA-839210",
    badgeColor: "from-amber-500 to-yellow-600",
    verified: true,
    skills: ["VPC Peering", "EKS Architecture", "IAM Governance", "Auto-Scaling", "Route 53", "Cost Optimization"],
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    issueDate: "2024",
    credentialId: "CKA-LF-294018",
    badgeColor: "from-blue-500 to-cyan-600",
    verified: true,
    skills: ["Cluster Architecture", "Troubleshooting", "ETCD Backups", "NetworkPolicies", "RBAC", "StorageClasses"],
    verifyUrl: "https://www.cncf.io/certification/cka/"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    issueDate: "2024",
    credentialId: "HCTA-003-88124",
    badgeColor: "from-purple-500 to-indigo-600",
    verified: true,
    skills: ["IaC Principles", "Terraform Cloud", "State Management", "Module Design", "Drift Control"],
    verifyUrl: "https://www.hashicorp.com/certification"
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat Linux",
    issueDate: "2023",
    credentialId: "RHCSA-EX200-5021",
    badgeColor: "from-red-600 to-rose-700",
    verified: true,
    skills: ["Linux Kernel", "Systemd Services", "SELinux", "Storage & LVM", "Shell Automation", "Firewalld"],
    verifyUrl: "https://www.redhat.com/en/services/certification"
  }
];
