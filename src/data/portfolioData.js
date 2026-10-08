export const personalInfo = {
  name: "Ansh Upadhayay",
  role: "DevOps & Cloud Engineer",
  tagline: "Automating cloud infrastructure, building reliable CI/CD pipelines, and orchestrating container workloads.",
  location: "India",
  status: "Open to DevOps / Cloud Internships & Roles",
  education: {
    institution: "Parul University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 – 2026",
    focus: "Cloud Computing, DevOps, Operating Systems & Distributed Systems"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ansh-upadhayay-011b77310/",
    github: "https://github.com/anshu706",
    leetcode: "https://leetcode.com/u/Ansh270/",
    email: "anshupadhayay212@gmail.com"
  },
  summary: `I'm a Computer Science student at Parul University and an aspiring DevOps & Cloud Engineer. I love removing manual friction from software delivery by writing declarative Terraform configurations, building multi-stage container pipelines, and managing Kubernetes workloads. When I'm not configuring cloud services or writing bash scripts, I practice data structures and algorithms on LeetCode.`
};

export const keyHighlights = [
  {
    label: "Hands-on DevOps Repos",
    value: "15+",
    description: "Hands-on repositories covering Docker, Kubernetes, CI/CD, and Terraform",
    badge: "Open Source"
  },
  {
    label: "Infrastructure as Code",
    value: "Terraform",
    description: "Modular AWS VPC, subnets, EC2, IAM, and remote state with DynamoDB",
    badge: "IaC"
  },
  {
    label: "Container Orchestration",
    value: "Kubernetes",
    description: "Deployments, services, ingress routing, ConfigMaps, and Helm packages",
    badge: "K8s & Docker"
  },
  {
    label: "Automated Pipelines",
    value: "GitHub Actions",
    description: "Automated testing, container builds, security scans, and GitOps sync",
    badge: "CI/CD"
  }
];

export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud & Linux Core",
    description: "Core cloud infrastructure, virtualization, Linux administration, and networking",
    skills: [
      { name: "AWS", level: "Hands-on", icon: "Cloud", details: "VPC, EC2, S3, IAM, Route53, RDS, CloudWatch", command: "aws ec2 describe-instances --output table" },
      { name: "Linux / Ubuntu", level: "Proficient", icon: "TerminalSquare", details: "Systemd, SSH hardening, user permissions, networking, process management", command: "htop && journalctl -u nginx -f" },
      { name: "Networking & DNS", level: "Comfortable", icon: "Server", details: "CIDR subnets, NAT gateways, TCP/IP, DNS records, reverse proxies (Nginx)", command: "dig +short mydomain.com A" }
    ]
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    description: "Packaging microservices, lightweight base images, and container orchestration",
    skills: [
      { name: "Docker", level: "Advanced", icon: "Container", details: "Multi-stage builds, Alpine/Distroless bases, Docker Compose, caching layers", command: "docker build -t app:v1 . --no-cache" },
      { name: "Kubernetes", level: "Hands-on", icon: "Boxes", details: "Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, Namespaces", command: "kubectl get pods -A -o wide" },
      { name: "Helm", level: "Comfortable", icon: "Anchor", details: "Packaging applications into reusable charts, values.yaml configuration", command: "helm template ./my-chart" }
    ]
  },
  {
    id: "cicd",
    title: "CI/CD & GitOps",
    description: "Automating builds, security checks, tests, and automated releases",
    skills: [
      { name: "GitHub Actions", level: "Advanced", icon: "GitBranch", details: "Multi-job workflows, caching dependencies, container build & push, secrets", command: "gh run list --workflow=ci.yml" },
      { name: "Git & GitOps", level: "Proficient", icon: "GitPullRequest", details: "Branching strategies, semantic versioning, pull request gates, ArgoCD basics", command: "git log --oneline --graph -n 5" },
      { name: "Jenkins", level: "Comfortable", icon: "Cpu", details: "Declarative Jenkinsfile pipelines, automated test stages, webhooks", command: "systemctl status jenkins" }
    ]
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    description: "Writing declarative infrastructure code that is auditable and reproducible",
    skills: [
      { name: "Terraform", level: "Hands-on", icon: "Code2", details: "Modular architecture, S3 remote backend, state locking with DynamoDB, variables", command: "terraform plan -out=tfplan" },
      { name: "Ansible", level: "Familiar", icon: "Terminal", details: "Idempotent playbooks, inventory configuration, automated package installs", command: "ansible-playbook -i hosts setup.yml" }
    ]
  },
  {
    id: "observability",
    title: "Monitoring & Observability",
    description: "Collecting system metrics and visualizing server health in real-time",
    skills: [
      { name: "Prometheus", level: "Comfortable", icon: "Activity", details: "Metrics scraping, Node Exporter integration, PromQL basic queries", command: "curl http://localhost:9090/-/healthy" },
      { name: "Grafana", level: "Comfortable", icon: "BarChart3", details: "Custom dashboards for CPU, memory, network traffic, and alerting rules", command: "docker-compose up -d grafana" }
    ]
  },
  {
    id: "scripting",
    title: "Scripting & Programming",
    description: "Languages and tools used for automating repetitive operations",
    skills: [
      { name: "Bash / Shell", level: "Advanced", icon: "TerminalSquare", details: "Automation scripts, pipe handling, error traps (set -euo pipefail), cron jobs", command: "bash -n deploy.sh" },
      { name: "Python", level: "Proficient", icon: "FileCode2", details: "Automation scripts, REST API integrations, CLI utilities", command: "python3 -m unittest discover" },
      { name: "C++", level: "Proficient", icon: "Binary", details: "Data Structures & Algorithms problem solving on LeetCode", command: "g++ -O2 solution.cpp -o solution" },
      { name: "YAML & JSON", level: "Advanced", icon: "FileText", details: "K8s manifests, GitHub Actions syntax, docker-compose configs", command: "yamllint .github/workflows/*.yml" }
    ]
  }
];

export const projects = [
  {
    id: "devops-pipeline",
    title: "Real-World Cloud & DevOps Pipeline",
    tagline: "End-to-End Microservice Automation with Docker, GitHub Actions & Kubernetes",
    badge: "Core DevOps Project",
    summary: "Built a production-style delivery pipeline for containerized microservices. Every Git push automatically runs automated linting, security scans, builds optimized multi-stage Docker images, pushes to registry, and deploys manifests into Kubernetes.",
    problemSolved: "Eliminated manual SSH deployments and inconsistent build environments by enforcing deterministic Docker containers and automated CI/CD checks.",
    architecture: [
      "Multi-stage Docker builds creating lightweight (<50MB) container images",
      "GitHub Actions workflow for linting, automated testing, and security scanning",
      "Automated push to Docker Hub with commit SHA tagging",
      "Kubernetes deployment manifests with RollingUpdate strategy, readiness/liveness probes, and ConfigMaps"
    ],
    takeaways: [
      "Optimized Docker layer caching to reduce pipeline runtime by over 60%",
      "Handled secret management securely using GitHub Encrypted Secrets rather than hardcoded environment variables",
      "Configured proper CPU/memory limits in Kubernetes manifests to prevent OOM kills"
    ],
    tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux", "Bash"],
    githubUrl: "https://github.com/anshu706/DevOps-Projects",
    liveDemoUrl: "https://github.com/anshu706/DevOps-Projects",
    terminalLogs: [
      { type: "command", text: "git push origin main" },
      { type: "info", text: "Triggering GitHub Actions workflow: .github/workflows/deploy.yml" },
      { type: "info", text: "Stage 1: Linting & Unit Testing..." },
      { type: "success", text: "✓ All unit tests passed (14/14)" },
      { type: "info", text: "Stage 2: Building multi-stage Docker image..." },
      { type: "info", text: "Using BuildKit cache for node:alpine base layer" },
      { type: "success", text: "✓ Image built: ansh706/app:c41b8a (Size: 42.8 MB)" },
      { type: "info", text: "Stage 3: Running vulnerability audit (Trivy)..." },
      { type: "success", text: "✓ Zero critical or high vulnerabilities detected" },
      { type: "command", text: "kubectl apply -f k8s/deployment.yaml" },
      { type: "success", text: "✓ deployment.apps/web-service updated (RollingUpdate)" },
      { type: "success", text: "✓ Pods healthy: 3/3 ready in default namespace" }
    ]
  },
  {
    id: "terraform-aws-infra",
    title: "Modular AWS Infrastructure with Terraform",
    tagline: "Reproducible Multi-Tier Cloud Environment with Remote State & State Locking",
    badge: "Infrastructure as Code",
    summary: "Architected and provisioned a modular AWS infrastructure blueprint using Terraform. Features a custom VPC, public and private subnets across multiple Availability Zones, NAT gateway routing, secure security groups, and an EC2 application tier.",
    problemSolved: "Avoided configuration drift and manual errors by replacing AWS Management Console clicks with version-controlled, auditable Terraform code.",
    architecture: [
      "VPC with isolated public subnets (for ALB/bastion) and private subnets (for app compute)",
      "Internet Gateway and NAT Gateway routing tables with strict CIDR ingress rules",
      "Remote state storage in Amazon S3 with server-side AES-256 encryption",
      "Distributed state locking via DynamoDB table to prevent concurrent apply conflicts"
    ],
    takeaways: [
      "Built reusable Terraform modules for VPC and compute layers",
      "Implemented variable validation and outputs for clean integration",
      "Practiced zero-drift enforcement using terraform plan checks"
    ],
    tags: ["Terraform", "AWS VPC", "AWS EC2", "AWS S3", "DynamoDB", "IaC"],
    githubUrl: "https://github.com/anshu706/DevOps-Projects",
    liveDemoUrl: "https://github.com/anshu706/DevOps-Projects",
    terminalLogs: [
      { type: "command", text: "terraform init" },
      { type: "info", text: "Initializing the backend: S3 bucket 'ansh-terraform-state-prod'..." },
      { type: "success", text: "✓ Successfully configured backend 's3' with DynamoDB state locking" },
      { type: "command", text: "terraform plan -out=tfplan" },
      { type: "info", text: "Acquiring state lock on DynamoDB 'terraform-locks'..." },
      { type: "info", text: "Plan: 16 to add, 0 to change, 0 to destroy." },
      { type: "command", text: "terraform apply tfplan" },
      { type: "info", text: "aws_vpc.main: Creating... [CIDR: 10.0.0.0/16]" },
      { type: "info", text: "aws_subnet.public_1a: Created (ID: subnet-0498a)" },
      { type: "info", text: "aws_nat_gateway.gw: Creating NAT gateway..." },
      { type: "success", text: "✓ Apply complete! Resources: 16 added, 0 changed, 0 destroyed." }
    ]
  },
  {
    id: "monitoring-observability",
    title: "Prometheus & Grafana Observability Stack",
    tagline: "Full-Stack Server Health Telemetry, Custom Dashboards & Alerting",
    badge: "Monitoring & Reliability",
    summary: "Set up a complete monitoring ecosystem to collect real-time system metrics (CPU, RAM utilization, disk I/O, network traffic) using Prometheus and Node Exporter, visualizing server health via interactive Grafana dashboards.",
    problemSolved: "Gave full visibility into system bottlenecks, memory leaks, and traffic spikes before service disruptions happen.",
    architecture: [
      "Node Exporter running as a daemon collecting host-level Linux kernel metrics",
      "Prometheus scraping targets at 15s intervals with configured scrape pools",
      "Grafana multi-panel dashboards tracking CPU spikes, disk saturation, and load averages",
      "Pre-configured alerting thresholds for high memory and disk space warnings"
    ],
    takeaways: [
      "Mastered writing custom PromQL expressions like rate() and irate() for CPU metrics",
      "Understood time-series database storage characteristics and retention policies",
      "Connected alerts to webhook channels for fast notification"
    ],
    tags: ["Prometheus", "Grafana", "Node Exporter", "Docker Compose", "Linux"],
    githubUrl: "https://github.com/anshu706/DevOps-Projects",
    liveDemoUrl: "https://github.com/anshu706/DevOps-Projects",
    terminalLogs: [
      { type: "command", text: "docker-compose up -d" },
      { type: "info", text: "Starting node-exporter on port 9100..." },
      { type: "info", text: "Starting prometheus on port 9090..." },
      { type: "info", text: "Starting grafana on port 3000..." },
      { type: "success", text: "✓ All 3 services started successfully" },
      { type: "command", text: "curl -s localhost:9090/api/v1/targets | jq .data.activeTargets[].health" },
      { type: "success", text: "\"up\" (Node Exporter scrape successful in 12ms)" },
      { type: "info", text: "Grafana dashboard loaded: 'Linux Host Overview' [24 panels]" },
      { type: "success", text: "✓ Telemetry live and streaming metrics smoothly" }
    ]
  },
  {
    id: "threat-zone",
    title: "Threat-Zone & DevSecOps Scanning",
    tagline: "Automated Security Auditing, Secrets Detection & Container Vulnerability Checks",
    badge: "DevSecOps & Security",
    summary: "Integrated security gates directly into the development workflow to shift security left. Automatically scans pull requests for committed credentials, audits Terraform configurations for security misconfigurations, and scans Docker container images.",
    problemSolved: "Prevents accidental API key leaks and insecure container configurations from ever reaching production environments.",
    architecture: [
      "Gitleaks pre-commit and CI scanner preventing API key and token leaks",
      "Trivy scanner auditing Docker images for known CVEs in OS packages and dependencies",
      "Checkov & tfsec policies validating Terraform IaC against security best practices"
    ],
    takeaways: [
      "Understood how to configure severity thresholds (FAIL on Critical / High CVEs)",
      "Learned how to generate and interpret SARIF security reports in GitHub Security tab"
    ],
    tags: ["DevSecOps", "Trivy", "Checkov", "Gitleaks", "Security", "GitHub Actions"],
    githubUrl: "https://github.com/anshu706/Threat-Zone",
    liveDemoUrl: "https://github.com/anshu706/Threat-Zone",
    terminalLogs: [
      { type: "command", text: "gitleaks detect --source . --verbose" },
      { type: "success", text: "✓ No leaks found across 42 commits" },
      { type: "command", text: "trivy image ansh706/app:latest --severity HIGH,CRITICAL" },
      { type: "info", text: "Scanning OS packages (Alpine 3.19)..." },
      { type: "success", text: "✓ 0 High, 0 Critical vulnerabilities discovered" },
      { type: "command", text: "tfsec ./terraform" },
      { type: "success", text: "✓ 18/18 checks passed. No unrestricted 0.0.0.0/0 SSH rules found." }
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    status: "Preparation & Practical Labs",
    badgeColor: "from-amber-500 to-yellow-600",
    skills: ["VPC Architecture", "EC2 Auto-Scaling", "IAM Security", "S3 Storage Classes", "Route 53", "Cost Governance"],
    description: "Hands-on experience architecting resilient, fault-tolerant, and scalable multi-tier architectures on AWS."
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    status: "Hands-on Lab Curriculum",
    badgeColor: "from-blue-500 to-cyan-600",
    skills: ["Cluster Architecture", "Pod & Service Networking", "Troubleshooting Nodes", "RBAC & ServiceAccounts", "StorageClasses"],
    description: "Deep dive into Kubernetes core components, etcd backups, network policies, and debugging failing pods."
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    status: "Practical Implementation",
    badgeColor: "from-purple-500 to-indigo-600",
    skills: ["IaC Workflow", "Module Development", "State Management", "Remote Backends", "Terraform CLI"],
    description: "Writing declarative, reusable cloud infrastructure with version control, state locking, and lifecycle management."
  },
  {
    title: "Red Hat Linux & Shell Administration",
    issuer: "Linux Foundation / RHCSA Curriculum",
    status: "Practical Core Skill",
    badgeColor: "from-red-600 to-rose-700",
    skills: ["Systemd Services", "File Permissions", "Shell Scripting", "Process Monitoring", "Storage & LVM", "Networking"],
    description: "Solid foundation in Linux operating system internals, bash automation, and service troubleshooting."
  }
];

export const engineeringValues = [
  {
    title: "Automate Repetitive Work",
    desc: "If I find myself running the same set of commands more than twice, I turn it into a shell script or an automated workflow."
  },
  {
    title: "Infrastructure Belongs in Git",
    desc: "No manual changes through web dashboards. Every VPC, security group, and cluster manifest must be version-controlled in Git."
  },
  {
    title: "Fast & Reliable Feedback",
    desc: "A good CI/CD pipeline should tell developers in under 5 minutes whether their code compiles, passes tests, and builds cleanly."
  },
  {
    title: "Measure Before Guessing",
    desc: "When debugging an issue, rely on metrics, logs, and reproducible tests rather than assumptions."
  }
];
