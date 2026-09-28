export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud Infrastructure",
    items: [
      "AWS Infrastructure",
      "VPC Networking",
      "Compute & Storage",
      "IAM & Access Control",
      "Load Balancing",
      "High Availability",
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Git",
      "Bash",
      "Python",
    ],
  },
  {
    title: "Systems & Reliability",
    items: [
      "Linux Administration",
      "Production Troubleshooting",
      "Root Cause Analysis",
      "Incident Response",
      "Monitoring & Observability",
      "Logging",
    ],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "Subnetting", "DNS", "Routing & Switching", "VLANs", "NAT", "VPNs"],
  },
  {
    title: "Security",
    items: [
      "AWS IAM",
      "Security Groups",
      "Least Privilege",
      "Vulnerability Scanning (Trivy)",
      "CI/CD Security",
    ],
  },
];
