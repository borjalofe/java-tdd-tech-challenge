#!/usr/bin/env node
/**
 * One-shot: labels, milestones, epics + [UPDATE] tasks for GearDesk curriculum.
 * Requires: gh auth, repo already created.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const REPO = "borjalofe/java-tdd-tech-challenge";

function gh(args) {
  return execFileSync("gh", args, { encoding: "utf8" }).trim();
}

const labels = [
  ["status:needs-review", "Awaiting approval", "FBCA04"],
  ["status:approved", "Ready to start", "0E8A16"],
  ["status:in-progress", "Work started", "1D76DB"],
  ["status:blocked", "Blocked", "B60205"],
  ["status:done", "Finished", "0E8A16"],
  ["type:epic", "Epic tracker (no PR)", "5319E7"],
  ["type:task", "Atomic task", "C5DEF5"],
  ["type:review", "Deferred review / cajon", "D4C5F9"],
  ["category:infra", "Infra", "006B75"],
  ["category:docs", "Docs", "0075CA"],
  ["category:feature", "Feature", "A2EEEF"],
  ["category:chore", "Chore", "FEF2C0"],
  ["milestone-slice", "Counts toward milestone", "BFDADC"],
];

for (const [name, desc, color] of labels) {
  try {
    gh([
      "label",
      "create",
      name,
      "--repo",
      REPO,
      "--description",
      desc,
      "--color",
      color,
      "--force",
    ]);
    console.log("label", name);
  } catch (e) {
    console.warn("label fail", name, String(e.stderr || e.message));
  }
}

const milestones = [
  ["W-M1", "Tipo 2 bootstrap (LICENSE, remotes, labels, templates)"],
  ["W-M2", "Bootcamp shell web/ — nav S1–S45, JavaWorkspace, Run tests, instructor"],
  ["W-M3", "Domain in-memory + Docker runner + landing"],
  ["W-M4", "Session 1 (E00+E01) demo + talk-script"],
  ["W-M5", "Catalog Kind/Brand/Kit + Borrower MECE"],
  ["W-M6", "Checkout rules + parse/domain/API/Result"],
  ["W-M7", "Display/queries + REST linkable/profile + trade-offs + smoke CI"],
  ["W-M8", "Maven suites + evidence + CI jobs per suite"],
  ["W-M9", "TDD levels unit→a11y; JPA at Integration; a11y fixes"],
  ["W-M10", "Security JWT→Spring Session + HATEOAS→Affordances→Siren"],
  ["deferred", "OneCompiler / Judge0 / public runner / Framer S2"],
];

for (const [title, desc] of milestones) {
  try {
    gh([
      "api",
      `repos/${REPO}/milestones`,
      "-f",
      `title=${title}`,
      "-f",
      `description=${desc}`,
      "-f",
      "state=open",
    ]);
    console.log("milestone", title);
  } catch {
    console.warn("milestone exists?", title);
  }
}

function createIssue({ title, body, labels: labs, milestone }) {
  const tmp = path.join(os.tmpdir(), `gh-body-${process.pid}-${Date.now()}.md`);
  fs.writeFileSync(tmp, body);
  const args = [
    "issue",
    "create",
    "--repo",
    REPO,
    "--title",
    title,
    "--body-file",
    tmp,
  ];
  for (const l of labs) {
    args.push("--label", l);
  }
  if (milestone) args.push("--milestone", milestone);
  try {
    const url = gh(args);
    console.log(url);
    return url;
  } finally {
    fs.unlinkSync(tmp);
  }
}

const exercises = [
  ["W-M4", "E00", "Reading: GearDesk brief + foreshadow Maven/CI, TDD levels, Security"],
  ["W-M4", "E01", "Create GearKind"],
  ["W-M5", "E02", "List GearKinds"],
  ["W-M5", "E03", "Update GearKind"],
  ["W-M5", "E04", "Delete GearKind (FK guard)"],
  ["W-M5", "E05", "Create Brand"],
  ["W-M5", "E06", "List Brands (paged)"],
  ["W-M5", "E07", "Update Brand"],
  ["W-M5", "E08", "Delete Brand (FK guard)"],
  ["W-M5", "E09", "Create Kit"],
  ["W-M5", "E10", "List Kits"],
  ["W-M5", "E11", "Filter Kits by title"],
  ["W-M5", "E12", "Filter Kits by GearKind"],
  ["W-M5", "E13", "Update Kit"],
  ["W-M5", "E14", "Kit no-delete policy"],
  ["W-M5", "E15", "Create Borrower"],
  ["W-M5", "E16", "List Borrowers (admin)"],
  ["W-M5", "E17", "Update Borrower"],
  ["W-M5", "E18", "Delete Borrower (active checkout guard)"],
  ["W-M5", "E19", "Borrower names unique"],
  ["W-M6", "E20", "Checkout: end >= start"],
  ["W-M6", "E21", "Checkout: max 14 days"],
  ["W-M6", "E22", "Checkout: kit no overlap"],
  ["W-M6", "E23", "Checkout: borrower ≤ 2 overlapping kits"],
  ["W-M6", "E24", "Parse invalid ≠ typed apply"],
  ["W-M6", "E25", "Extract pure domain"],
  ["W-M6", "E26", "Separate Inventory vs Checkout"],
  ["W-M6", "E27", "Failures via Result"],
  ["W-M7", "E28", "Display checkout list"],
  ["W-M7", "E29", "Filter checkouts by kit"],
  ["W-M7", "E30", "Filter checkouts by borrower"],
  ["W-M7", "E31", "Filter checkouts by date"],
  ["W-M7", "E32", "Paginate checkouts"],
  ["W-M7", "E33", "Day view"],
  ["W-M7", "E34", "REST linkable resources (kits, borrowers, checkouts)"],
  ["W-M7", "E35", "REST Borrower profile + create checkout HTTP (still anonymous)"],
  ["W-M7", "E36", "Domain trade-offs / TODOs"],
  ["W-M8", "E37", "Surefire vs Failsafe + *Test / *IT conventions"],
  ["W-M8", "E38", "Profiles/suites + evidence per level"],
  ["W-M8", "E39", "GH Actions job per suite + artifacts"],
  ["W-M9", "E40", "TDD unit (pure domain)"],
  ["W-M9", "E41", "TDD integration — JPA/DB enters; one endpoint or screen"],
  ["W-M9", "E42", "TDD functional (multi endpoint/screen only)"],
  ["W-M9", "E43", "TDD E2E — compose e2e topology"],
  ["W-M9", "E44", "SAST SpotBugs + OWASP Dependency-Check"],
  ["W-M9", "E45", "DAST ZAP — compose dast topology"],
  ["W-M9", "E46", "a11y axe — fix findings"],
  ["W-M10", "E47", "Threat modeling GearDesk"],
  ["W-M10", "E48", "OWASP Top 10 mapping"],
  ["W-M10", "E49", "Authn JWT (Bearer; secret via env)"],
  ["W-M10", "E50", "Authn Spring Session (opaque; tower-sessions semantics)"],
  ["W-M10", "E51", "Authorization roles BORROWER / DESK"],
  ["W-M10", "E52", "Need-to-know DTOs (admin list ≠ form options)"],
  ["W-M10", "E53", "Secrets out of repo"],
  ["W-M10", "E54", "Session hijacking mitigations (Spring Session)"],
  ["W-M10", "E55", "Mass assignment: reject extra fields"],
  ["W-M10", "E56", "Responses without excess data"],
  ["W-M10", "E57", "Hypermedia Spring HATEOAS"],
  ["W-M10", "E58", "Affordances on HATEOAS"],
  ["W-M10", "E59", "Siren entities/links/actions"],
];

const epics = [
  ["W-M1", "Epic: W-M1 tipo 2 bootstrap"],
  ["W-M2", "Epic: W-M2 bootcamp shell"],
  ["W-M3", "Epic: W-M3 domain + runner"],
  ["W-M4", "Epic: W-M4 Session 1 demo"],
  ["W-M5", "Epic: W-M5 catalog + Borrower"],
  ["W-M6", "Epic: W-M6 checkout rules + structure"],
  ["W-M7", "Epic: W-M7 queries + REST + smoke"],
  ["W-M8", "Epic: W-M8 Maven suites + CI"],
  ["W-M9", "Epic: W-M9 TDD levels"],
  ["W-M10", "Epic: W-M10 security + hypermedia"],
];

for (const [ms, title] of epics) {
  createIssue({
    title,
    body: `Tracker epic for **${ms}**. No single PR. Children are \`[UPDATE]\` tasks.\n`,
    labels: ["type:epic", "status:needs-review", "milestone-slice"],
    milestone: ms,
  });
}

createIssue({
  title: "[UPDATE] create GH public repo + remotes github/forgejo",
  body: "Tipo 2: public GH primary; Forgejo pull-mirror on LAN; local remotes `github` + `forgejo` (never `origin`).\n",
  labels: [
    "type:task",
    "status:approved",
    "category:infra",
    "milestone-slice",
  ],
  milestone: "W-M1",
});

createIssue({
  title: "[UPDATE] LICENSE Apache-2.0 + README hybrid + AGENTS + homelab-bootstrap",
  body: "Brand GearDesk + subtitle Java + TDD tech interview. Docs EN. Fingerprints: no CCA/Ludoteca.\n",
  labels: ["type:task", "status:needs-review", "category:docs", "milestone-slice"],
  milestone: "W-M1",
});

createIssue({
  title: "[UPDATE] labels + milestones + issue templates",
  body: "status:*, type:epic|task|review, category:*, milestone-slice. Milestones W-M1…W-M10 + deferred.\n",
  labels: ["type:task", "status:needs-review", "category:infra", "milestone-slice"],
  milestone: "W-M1",
});

createIssue({
  title: "[UPDATE] shell nav S1–S45 + JavaWorkspace + Run tests + instructor",
  body: "React chrome only. Framer S1 transitions. No homework routes.\n",
  labels: [
    "type:task",
    "status:needs-review",
    "category:feature",
    "milestone-slice",
  ],
  milestone: "W-M2",
});

createIssue({
  title: "[UPDATE] kata in-memory domain + docker compose runner + landing",
  body: "Package `dev.borjalofe.geardesk`. Runner :8089. Landing hero GearDesk.\n",
  labels: [
    "type:task",
    "status:needs-review",
    "category:feature",
    "milestone-slice",
  ],
  milestone: "W-M3",
});

createIssue({
  title: "[UPDATE] S1 talk-script + E00/E01 demo path",
  body: "Talk-script EN ~60 min. E00 foreshadow. E01 red→green.\n",
  labels: ["type:task", "status:needs-review", "category:docs", "milestone-slice"],
  milestone: "W-M4",
});

for (const [ms, id, concern] of exercises) {
  createIssue({
    title: `[UPDATE] ${id} — ${concern}`,
    body: `Curriculum exercise **${id}**.\n\nConcern: ${concern}\n\nOne PR. Starter red / solution green under Maven profiles.\n`,
    labels: [
      "type:task",
      "status:needs-review",
      "category:feature",
      "milestone-slice",
    ],
    milestone: ms,
  });
}

createIssue({
  title: "[review] OneCompiler / Judge0-Piston / public runner / Framer S2",
  body: `Deferred platform (not CCA leftovers).\n\n- OneCompiler embed path\n- Judge0 / Piston if Docker runner insufficient\n- Public hosted runner\n- Framer Motion S2 (complete/solution animations)\n\nNo work until this review is opened intentionally.\n`,
  labels: ["type:review", "status:needs-review", "category:chore"],
  milestone: "deferred",
});

console.log("done");
