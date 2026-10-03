import { useState } from "react";

export type RunResult = {
  ok: boolean;
  exitCode: number;
  stdout: string;
  stderr: string;
  tests?: { name: string; status: string; message?: string }[];
  error?: string;
};

type Props = {
  session: string;
  exercise: string;
  showSolution: boolean;
  solutionText: string | null;
  isReading: boolean;
};

export function JavaWorkspace({
  session,
  exercise,
  showSolution,
  solutionText,
  isReading,
}: Props) {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RunResult | null>(null);
  const [runnerDown, setRunnerDown] = useState(false);

  async function runTests(mode: "starter" | "solution") {
    setRunning(true);
    setRunnerDown(false);
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session, exercise, mode }),
      });
      if (!res.ok) {
        setRunnerDown(true);
        setResult({
          ok: false,
          exitCode: res.status,
          stdout: "",
          stderr: await res.text(),
          error: "Runner HTTP error",
        });
        return;
      }
      setResult((await res.json()) as RunResult);
    } catch {
      setRunnerDown(true);
      setResult(null);
    } finally {
      setRunning(false);
    }
  }

  if (isReading) {
    return (
      <p className="text-sm text-[var(--muted)]">
        No live coding for this step. Capture interviewer questions in your notes.
      </p>
    );
  }

  return (
    <div className="space-y-3 text-sm">
      <p className="text-[var(--muted)]">
        Tests run in Docker (Java/Maven). The React app only displays results.
      </p>
      {runnerDown ? (
        <div className="rounded border border-amber-600/50 bg-amber-950/20 p-3">
          Runner unreachable. Start the stack:{" "}
          <code className="text-xs">docker compose up</code> (or run the runner
          on :8089).
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={running}
          className="rounded border border-[var(--border)] px-3 py-1.5"
          onClick={() => void runTests("starter")}
        >
          {running ? "Running…" : "Run tests (starter)"}
        </button>
        {showSolution ? (
          <button
            type="button"
            disabled={running}
            className="rounded border border-[var(--border)] px-3 py-1.5"
            onClick={() => void runTests("solution")}
          >
            Run tests (solution)
          </button>
        ) : null}
      </div>
      {showSolution && solutionText ? (
        <pre className="max-h-64 overflow-auto rounded bg-black/30 p-3 text-xs whitespace-pre-wrap">
          {solutionText}
        </pre>
      ) : null}
      {result ? (
        <div className="space-y-2">
          <p className={result.ok ? "text-emerald-400" : "text-rose-400"}>
            exit {result.exitCode} — {result.ok ? "green" : "red"}
          </p>
          {result.tests?.length ? (
            <ul className="list-disc pl-5">
              {result.tests.map((t) => (
                <li key={t.name}>
                  {t.status}: {t.name}
                  {t.message ? ` — ${t.message}` : ""}
                </li>
              ))}
            </ul>
          ) : null}
          {result.stdout ? (
            <pre className="max-h-40 overflow-auto text-xs whitespace-pre-wrap opacity-80">
              {result.stdout}
            </pre>
          ) : null}
          {result.stderr ? (
            <pre className="max-h-40 overflow-auto text-xs whitespace-pre-wrap text-rose-300/90">
              {result.stderr}
            </pre>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
