export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        Let's talk infrastructure
      </h2>
      <p className="mt-4 max-w-xl text-text-secondary">
        Open to remote cloud infrastructure and DevOps roles. The fastest way to reach me
        is email.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full border border-border-strong bg-surface px-5 py-2.5 font-mono text-sm text-text">
          arikpovictory@gmail.com
        </span>
        <a
          href="https://github.com/Vcthriee"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/victory-arikpo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
