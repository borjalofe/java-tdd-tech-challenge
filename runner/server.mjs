import { spawn } from "node:child_process";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KATA = process.env.KATA_DIR || path.resolve(__dirname, "../kata");
const PORT = Number(process.env.PORT || 8089);

const app = express();
app.use(express.json({ limit: "32kb" }));

function runMvnw(args) {
  return new Promise((resolve) => {
    const bin = process.env.MVN_BIN || "mvn";
    const child = spawn(bin, args, {
      cwd: KATA,
      env: { ...process.env },
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => {
      stdout += d.toString();
    });
    child.stderr.on("data", (d) => {
      stderr += d.toString();
    });
    child.on("close", (code) => {
      resolve({ exitCode: code ?? 1, stdout, stderr });
    });
  });
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/run", async (req, res) => {
  const { session, exercise, mode = "starter" } = req.body || {};
  if (!session || !exercise) {
    res.status(400).json({
      ok: false,
      exitCode: 2,
      stdout: "",
      stderr: "session and exercise required",
    });
    return;
  }

  const num = String(exercise).replace("exercise-", "");
  const sessionNum = String(session).replace("session-", "");
  const profile = mode === "solution" ? "solutions" : "starters";
  const testClass =
    mode === "solution" ? `Exercise${num}EndTest` : `Exercise${num}Test`;

  // Scoped surefire run for one exercise class
  const args = [
    "-q",
    `test`,
    `-P${profile}`,
    `-Dtest=${testClass}`,
  ];

  const result = await runMvnw(args);
  const ok = result.exitCode === 0;
  res.json({
    ok,
    exitCode: result.exitCode,
    stdout: result.stdout,
    stderr: result.stderr,
    session,
    exercise,
    mode,
    tests: [
      {
        name: testClass,
        status: ok ? "PASSED" : "FAILED",
        message: ok ? undefined : "see stderr",
      },
    ],
    note: `session=${sessionNum}`,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`geardesk runner on :${PORT} kata=${KATA}`);
});
