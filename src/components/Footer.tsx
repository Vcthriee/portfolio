export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <span>Built alongside the infrastructure it documents.</span>
        <span className="font-mono text-xs">© {new Date().getFullYear()} Victory Arikpo</span>
      </div>
    </footer>
  );
}
