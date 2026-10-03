import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, #3d5a40 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, #1a3a4a 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 py-20 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          Case study
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          GearDesk
        </h1>
        <p className="text-xl text-[var(--muted)] max-w-xl">
          Java + TDD tech interview
        </p>
        <p className="text-sm max-w-xl leading-relaxed">
          Self-paced sessions (~1h): catalog, borrowers, checkout rules, Maven
          suites, test levels, security (JWT → Spring Session), then hypermedia.
          The React app is chrome only — you write Java in{" "}
          <code>kata/</code>.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/bootcamp/challenge/$day/$exercise"
            params={{ day: "session-1", exercise: "exercise-00" }}
            className="rounded border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium no-underline text-[var(--fg)]"
          >
            Start Session 1 →
          </Link>
          <Link
            to="/bootcamp"
            className="rounded border border-[var(--border)] px-4 py-2 text-sm no-underline text-[var(--fg)]"
          >
            All sessions
          </Link>
        </div>
        <p className="text-xs text-[var(--muted)]">
          Spoiler: do not open <code>kata/.../domain</code> until you finish the
          session — see AGENTS.md. Instructor:{" "}
          <code>?instructor=1</code>
        </p>
      </div>
    </main>
  );
}
