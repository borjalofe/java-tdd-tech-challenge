import { Link, createFileRoute } from "@tanstack/react-router";
import { navigationData } from "@/components/internal/navigation-data";

export const Route = createFileRoute("/bootcamp/")({
  component: BootcampHome,
});

function BootcampHome() {
  return (
    <div className="max-w-2xl space-y-4">
      <h2 className="text-xl font-semibold">Sessions (~1h each)</h2>
      <p className="text-sm text-[var(--muted)]">
        Start with <strong>Session 1</strong> (demo / talk-script). Continue in
        order; each session assumes the previous is done. No homework track.
        Do not peek <code>kata/.../domain</code> until you finish a session.
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <Link
            to="/bootcamp/challenge/$day/$exercise"
            params={{ day: "session-1", exercise: "exercise-00" }}
          >
            Start Session 1 →
          </Link>
        </li>
      </ul>
      <ol className="list-decimal pl-5 text-sm space-y-1 text-[var(--muted)]">
        {navigationData.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ol>
    </div>
  );
}
