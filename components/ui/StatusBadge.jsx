/**
 * Status badge — displays project status with optional live dot.
 *
 * Props:
 *  - status: "Live in production" | "Client build" | "Personal project"
 */
export default function StatusBadge({ status }) {
  const isLive = status === 'Live in production';

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent-ink">
      {isLive && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
          aria-hidden="true"
        />
      )}
      {status}
    </span>
  );
}
