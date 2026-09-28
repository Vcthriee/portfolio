export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  status?: string;
  tag: string;
  summary: string;
  bullets: string[];
  links: ProjectLink[];
}

// Update this file as work progresses — the page re-renders straight from here.
export const projects: Project[] = [
  {
    name: "Nexa — Cloud Infrastructure",
    status: "Ongoing",
    tag: "AWS · Terraform · EC2 · RDS · CloudFront · ALB",
    summary:
      "An AWS infrastructure project grown in deliberate, evidence-driven stages — each addition justified by a real, proven problem, not by what tooling exists.",
    bullets: [
      "Reorganized a full-stack app (React, Fastify, PostgreSQL) into a clean app/infrastructure boundary, then provisioned a single-AZ AWS architecture in Terraform — VPC, EC2, RDS, S3, CloudFront, Route 53 — deliberately without a load balancer or Auto Scaling until a real need justified them.",
      "Deliberately broke the live environment: killed the running process, exhausted disk space, rebooted under load, and ran a full network-exposure scan. Found one real gap — no process supervisor — fixed it with systemd, then proved the fix by killing the process again and watching it recover unassisted.",
      "Escalated to sustained, high-concurrency load testing and found the real capacity ceiling: the instance held up when traffic ran through CloudFront, but the same load sent directly to the origin caused genuine timeouts — direct, reproducible evidence for adding a load balancer and a second instance across two Availability Zones.",
      "Every decision recorded as a formal Architecture Decision Record, with a running evolution log from the original design to what's live today.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Vcthriee/NEXA_COMPANY" }],
  },
  {
    name: "Ecommerce Platform — Terraform Modules, ECS, and Migration to EKS",
    tag: "AWS · Terraform · ECS Fargate · EKS · Docker · Helm · GitHub Actions",
    summary:
      "A reusable Terraform module library consumed as a versioned dependency, carrying a real application through both ECS Fargate and a migration to EKS.",
    bullets: [
      "Built a reusable, production-grade Terraform module library (networking, security, database, compute) — consumed as a versioned dependency by downstream projects, not copy-pasted per environment.",
      "Networking module provisions a multi-AZ VPC with dual NAT Gateways and VPC endpoints; database module provisions Multi-AZ RDS PostgreSQL with a read replica, RDS Proxy, and ElastiCache Redis, with all credentials in Secrets Manager.",
      "CI/CD via GitHub Actions using OIDC federation — no long-lived AWS credentials stored in the pipeline at any point.",
      "Deployed a real Node.js/Express API on ECS Fargate, then migrated the same application to EKS — provisioning a managed cluster in Terraform and moving deployment to Helm — to evaluate the operational tradeoffs firsthand rather than choosing one on reputation alone.",
    ],
    links: [
      { label: "Infra Modules", url: "https://github.com/Vcthriee/ECS-infra-modules" },
      { label: "Ecommerce Infra", url: "https://github.com/Vcthriee/ecommerce-infra" },
      { label: "App", url: "https://github.com/Vcthriee/ecommerce-app" },
      { label: "EKS Modules", url: "https://github.com/Vcthriee/k8s-infra-modules-test" },
    ],
  },
  {
    name: "Ansible — Host Update & Backup Automation",
    tag: "Ansible · Linux · Ansible Vault",
    summary:
      "A configuration-management complement to the Terraform work above, with real secrets handling.",
    bullets: [
      "Wrote a playbook that safely updates package caches and backs up key configuration files on a managed Ubuntu host.",
      "Used Ansible Vault to encrypt host-specific variables instead of storing them in plaintext inventory files — first hands-on exposure to secrets management in configuration management, distinct from Secrets Manager's role above.",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Vcthriee/vcthriee-ansible-network-atomation-test",
      },
    ],
  },
];
