export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  tag: string;
  summary: string;
  bullets: string[];
}

// Separate from projects.ts on purpose — this is a real job with a real
// team and real production stakes, not a personal project, so it gets
// its own section rather than sitting in the Projects grid next to solo
// work. No external links here: the infrastructure repo is private,
// company-owned, not something to link publicly. Update the period
// below as the role continues.
export const experience: ExperienceEntry[] = [
  {
    title: "Cloud Infrastructure & DevOps Engineer",
    company: "Neohouse (Trybb)",
    period: "Oct 2026 — Present",
    tag: "AWS · Terraform · Cloudflare · GitHub Actions · Grafana",
    summary:
      "Own the AWS infrastructure and security posture for a venture-backed startup's production app — architecture, CI/CD, monitoring, and incident response, for a real team and real users.",
    bullets: [
      "Designed and provisioned the production infrastructure from scratch: a self-hosted backend and database on EC2 (staging and production), Cloudflare for DNS, WAF, and edge routing with zero open inbound ports on any server, and a multi-module Terraform codebase covering networking, compute, data, and monitoring.",
      "Built CI/CD with GitHub Actions authenticating to AWS via OIDC — no long-lived AWS keys stored anywhere — with an automatic path to staging and a gated, approval-required path to production.",
      "Implemented backup and disaster recovery: continuous database replication to S3, daily disk snapshots, and nightly application-level exports — then ran a real restore drill that passed.",
      "Hardened the account end to end: removed SSH entirely in favor of session-based access, enforced instance metadata protections, moved every externally reachable service behind HTTPS, and wired security-finding alerts into the team's monitoring.",
      "Diagnosed and fixed real production incidents under live conditions: an authentication outage traced to a misconfigured environment variable, backups silently failing from a missing IAM permission, a monitoring panel going blank from a metrics-label mismatch, and a cross-environment secret leak between staging and production.",
      "Led a live data migration off a managed cloud backend onto the self-hosted infrastructure, verifying data integrity before cutover.",
    ],
  },
];
