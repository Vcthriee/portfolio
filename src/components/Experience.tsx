import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
        Professional work
      </h2>
      <div className="mt-10 flex flex-col gap-6">
        {experience.map((entry) => (
          <article
            key={entry.title + entry.company}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {entry.title}
              </h3>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-0.5 font-mono text-xs text-accent">
                {entry.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-text-secondary">{entry.company}</p>
            <p className="mt-2 font-mono text-xs text-text-secondary">{entry.tag}</p>
            <p className="mt-4 text-text-secondary">{entry.summary}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
