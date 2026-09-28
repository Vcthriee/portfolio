export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text">
          Cloud infrastructure and DevOps engineer with hands-on experience designing,
          deploying, securing, and operating AWS infrastructure end-to-end — from
          Terraform-provisioned VPCs and compute to deliberate failure testing on live
          systems. Strong foundation in networking, Linux systems, and cloud security,
          currently deepening expertise in site reliability engineering and infrastructure
          automation.
        </p>
      </div>
    </section>
  );
}
