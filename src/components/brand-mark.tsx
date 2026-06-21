export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M18 6.5v7.25M18 22.25v7.25M7.5 12.25l6.25 3.6M22.25 20.15l6.25 3.6M7.5 23.75l6.25-3.6M22.25 15.85l6.25-3.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="4.35" stroke="currentColor" strokeWidth="1.6" />
        <circle className="brand-mark-node" cx="18" cy="6.5" r="1.8" fill="currentColor" />
        <circle className="brand-mark-node" cx="28.5" cy="12.25" r="1.8" fill="currentColor" />
        <circle className="brand-mark-node" cx="28.5" cy="23.75" r="1.8" fill="currentColor" />
        <circle className="brand-mark-node" cx="18" cy="29.5" r="1.8" fill="currentColor" />
        <circle className="brand-mark-node" cx="7.5" cy="23.75" r="1.8" fill="currentColor" />
        <circle className="brand-mark-node" cx="7.5" cy="12.25" r="1.8" fill="currentColor" />
      </svg>
    </span>
  );
}
