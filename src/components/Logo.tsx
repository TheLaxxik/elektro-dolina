type Props = {
  tone?: "dark" | "light";
  className?: string;
};

/** Značka: blesk vo volt štvorci + kondenzované kapitálky. */
export function Logo({ tone = "dark", className = "" }: Props) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="2" fill="#ffd400" />
        <path d="M18.5 4 8 18.5h7.2L13 28l11-15.2h-7.4L18.5 4Z" fill="#111210" />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-extrabold uppercase leading-none tracking-[0.04em] ${text}`}
      >
        Elektro <span className="font-semibold">Dolina</span>
      </span>
    </span>
  );
}
