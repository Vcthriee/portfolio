import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Projects</p>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        Cloud & DevOps work
      </h2>
      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {project.name}
              </h3>
              {project.status && (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent">
                  {project.status}
                </span>
              )}
            </div>
            <p className="mt-2 font-mono text-xs text-text-secondary">{project.tag}</p>
            <p className="mt-4 text-text-secondary">{project.summary}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border-strong bg-surface-2 px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
