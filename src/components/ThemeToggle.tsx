interface ThemeToggleProps {
  theme: "dark" | "light";
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2 rounded-full border border-border-strong bg-surface-2 px-1 py-1 transition-colors hover:border-accent"
    >
      <span className="relative h-6 w-11 shrink-0 rounded-full bg-surface-2">
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-accent transition-[left] duration-150 ease-out"
          style={{ left: isDark ? "22px" : "2px" }}
        />
      </span>
      <span className="pr-2 font-mono text-xs text-text-secondary">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
