const certifications = [
  "AWS Certified Security – Specialty",
  "AWS Solutions Architect – Associate (SAA-C03) Training",
  "Cloud Infrastructure Engineering — AQskill",
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Cloud Infrastructure Engineer
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Victory Arikpo
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
        I design, provision, and stress-test AWS infrastructure — then document what
        actually broke and why. Based in Nigeria, open to remote work worldwide.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/Vcthriee"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          View GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/victory-arikpo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
        >
          Connect on LinkedIn ↗
        </a>
        <span className="font-mono text-sm text-text-secondary">arikpovictory@gmail.com</span>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-secondary"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
