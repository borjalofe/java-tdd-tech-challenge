#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const EXERCISES = [
  { id: "exercise-00", title: "0 · Read & scope the brief", type: "reading", session: 1, concern: "Scope GearDesk brief; foreshadow Maven/CI, TDD levels, Security" },
  { id: "exercise-01", title: "1 · Create GearKind", type: "exercise", session: 1, concern: "Create GearKind" },
  { id: "exercise-02", title: "2 · List GearKinds", type: "exercise", session: 2, concern: "List GearKinds (simple)" },
  { id: "exercise-03", title: "3 · Update GearKind", type: "exercise", session: 2, concern: "Update GearKind" },
  { id: "exercise-04", title: "4 · Delete GearKind (FK guard)", type: "exercise", session: 3, concern: "Delete GearKind; reject if kits reference it" },
  { id: "exercise-05", title: "5 · Create Brand", type: "exercise", session: 4, concern: "Create Brand" },
  { id: "exercise-06", title: "6 · List Brands (paged)", type: "exercise", session: 4, concern: "List Brands paginated" },
  { id: "exercise-07", title: "7 · Update Brand", type: "exercise", session: 5, concern: "Update Brand" },
  { id: "exercise-08", title: "8 · Delete Brand (FK guard)", type: "exercise", session: 5, concern: "Delete Brand; reject if kits reference it" },
  { id: "exercise-09", title: "9 · Create Kit", type: "exercise", session: 6, concern: "Create Kit (refs Kind+Brand)" },
  { id: "exercise-10", title: "10 · List Kits", type: "exercise", session: 6, concern: "List Kits" },
  { id: "exercise-11", title: "11 · Filter Kits by title", type: "exercise", session: 7, concern: "Filter Kits by title contains" },
  { id: "exercise-12", title: "12 · Filter Kits by GearKind", type: "exercise", session: 7, concern: "Filter Kits by GearKind" },
  { id: "exercise-13", title: "13 · Update Kit", type: "exercise", session: 8, concern: "Update Kit" },
  { id: "exercise-14", title: "14 · Kit no-delete policy", type: "exercise", session: 8, concern: "Kit delete rejected / not exposed" },
  { id: "exercise-15", title: "15 · Create Borrower", type: "exercise", session: 9, concern: "Create Borrower" },
  { id: "exercise-16", title: "16 · List Borrowers (admin)", type: "exercise", session: 9, concern: "List Borrowers full fields" },
  { id: "exercise-17", title: "17 · Update Borrower", type: "exercise", session: 10, concern: "Update Borrower" },
  { id: "exercise-18", title: "18 · Delete Borrower (guard)", type: "exercise", session: 10, concern: "Delete Borrower if no active checkouts" },
  { id: "exercise-19", title: "19 · Unique borrower names", type: "exercise", session: 11, concern: "Borrower names unique" },
  { id: "exercise-20", title: "20 · Checkout end >= start", type: "exercise", session: 12, concern: "end >= start" },
  { id: "exercise-21", title: "21 · Max 14 days", type: "exercise", session: 13, concern: "Max checkout 14 days" },
  { id: "exercise-22", title: "22 · Kit overlap rule", type: "exercise", session: 14, concern: "Same kit no overlapping borrowers" },
  { id: "exercise-23", title: "23 · Borrower max 2 kits", type: "exercise", session: 15, concern: "Borrower <= 2 overlapping kits" },
  { id: "exercise-24", title: "24 · Parse ≠ apply", type: "exercise", session: 16, concern: "Invalid parse separated from typed apply" },
  { id: "exercise-25", title: "25 · Extract pure domain", type: "exercise", session: 16, concern: "Extract pure domain" },
  { id: "exercise-26", title: "26 · Inventory vs Checkout", type: "exercise", session: 17, concern: "Separate Inventory vs Checkout" },
  { id: "exercise-27", title: "27 · Result failures", type: "exercise", session: 17, concern: "Business failures via Result" },
  { id: "exercise-28", title: "28 · List checkouts display", type: "exercise", session: 18, concern: "CLI/text list checkouts" },
  { id: "exercise-29", title: "29 · Filter checkouts by kit", type: "exercise", session: 19, concern: "Filter checkouts by kit" },
  { id: "exercise-30", title: "30 · Filter by borrower", type: "exercise", session: 19, concern: "Filter checkouts by borrower" },
  { id: "exercise-31", title: "31 · Filter by date", type: "exercise", session: 19, concern: "Filter checkouts by date in range" },
  { id: "exercise-32", title: "32 · Paginate checkouts", type: "exercise", session: 20, concern: "Paginate checkouts" },
  { id: "exercise-33", title: "33 · Day view", type: "exercise", session: 20, concern: "Checkouts by day view" },
  { id: "exercise-34", title: "34 · REST linkable resources", type: "exercise", session: 21, concern: "REST resources kits/borrowers/checkouts" },
  { id: "exercise-35", title: "35 · REST profile + create checkout", type: "exercise", session: 21, concern: "Borrower profile + create checkout HTTP (anonymous)" },
  { id: "exercise-36", title: "36 · Domain trade-offs", type: "exercise", session: 22, concern: "Trade-offs + honest TODOs" },
  { id: "exercise-37", title: "37 · Surefire vs Failsafe", type: "exercise", session: 23, concern: "Maven Surefire vs Failsafe conventions" },
  { id: "exercise-38", title: "38 · Profiles + evidence", type: "exercise", session: 24, concern: "Profiles/suites + reports per level" },
  { id: "exercise-39", title: "39 · CI jobs per suite", type: "exercise", session: 25, concern: "GH Actions jobs + artifacts per suite" },
  { id: "exercise-40", title: "40 · Unit tests", type: "exercise", session: 26, concern: "Unit suite (no Spring)" },
  { id: "exercise-41", title: "41 · Integration + JPA", type: "exercise", session: 27, concern: "Integration tests; JPA enters here" },
  { id: "exercise-42", title: "42 · Functional tests", type: "exercise", session: 28, concern: "Functional multi-endpoint feature tests" },
  { id: "exercise-43", title: "43 · E2E tests", type: "exercise", session: 29, concern: "E2E against compose.e2e topology" },
  { id: "exercise-44", title: "44 · SAST", type: "exercise", session: 30, concern: "SpotBugs + Dependency-Check reports" },
  { id: "exercise-45", title: "45 · DAST", type: "exercise", session: 31, concern: "ZAP baseline; compose.dast topology" },
  { id: "exercise-46", title: "46 · a11y fixes", type: "exercise", session: 32, concern: "axe findings fixed on web + Spring HTML" },
  { id: "exercise-47", title: "47 · Threat modeling", type: "exercise", session: 33, concern: "Threat model GearDesk" },
  { id: "exercise-48", title: "48 · OWASP mapping", type: "exercise", session: 34, concern: "OWASP Top 10 inventory map" },
  { id: "exercise-49", title: "49 · Authn JWT", type: "exercise", session: 35, concern: "Authentication with JWT" },
  { id: "exercise-50", title: "50 · JWT → Spring Session", type: "exercise", session: 36, concern: "Evolve JWT to opaque Spring Session" },
  { id: "exercise-51", title: "51 · Authorization", type: "exercise", session: 37, concern: "Roles BORROWER / DESK" },
  { id: "exercise-52", title: "52 · Need-to-know DTOs", type: "exercise", session: 38, concern: "Admin list ≠ form options for Borrower/Kit" },
  { id: "exercise-53", title: "53 · Secrets", type: "exercise", session: 39, concern: "Secrets via env, not repo" },
  { id: "exercise-54", title: "54 · Session hijacking", type: "exercise", session: 40, concern: "Session hijacking mitigations" },
  { id: "exercise-55", title: "55 · Reject mass assignment", type: "exercise", session: 41, concern: "Reject extra request fields" },
  { id: "exercise-56", title: "56 · Least-privilege responses", type: "exercise", session: 42, concern: "Response DTOs without excess data" },
  { id: "exercise-57", title: "57 · Spring HATEOAS", type: "exercise", session: 43, concern: "Spring HATEOAS links" },
  { id: "exercise-58", title: "58 · Affordances", type: "exercise", session: 44, concern: "Affordances by permission" },
  { id: "exercise-59", title: "59 · Siren", type: "exercise", session: 45, concern: "Siren entities/links/actions" },
];

function sessionId(n) {
  return `session-${n}`;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function write(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content);
}

const bySession = new Map();
for (const ex of EXERCISES) {
  if (!bySession.has(ex.session)) bySession.set(ex.session, []);
  bySession.get(ex.session).push(ex);
}

const navEntries = [...bySession.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([n, exs]) => {
    const exercises = exs
      .map(
        (e) =>
          `      { id: "${e.id}", title: ${JSON.stringify(e.title)}, type: "${e.type}" },`,
      )
      .join("\n");
    return `  {
    id: "${sessionId(n)}",
    title: "Session ${n} (~1h)",
    exercises: [
${exercises}
    ],
  },`;
  })
  .join("\n");

write(
  path.join(ROOT, "web/src/components/internal/navigation-data.ts"),
  `import type { Day } from "@/types/challenge";

export const navigationData: Day[] = [
${navEntries}
];
`,
);

for (const ex of EXERCISES) {
  const sid = sessionId(ex.session);
  const webBase = path.join(ROOT, "web/src/challenges", sid);
  const num = ex.id.replace("exercise-", "");
  const className = `Exercise${num}`;
  const javaPkg = `dev.borjalofe.geardesk.challenges.s${ex.session}.e${num}`;
  const pkgPath = javaPkg.replace(/\./g, "/");

  write(
    path.join(webBase, "instructions", `${ex.id}.md`),
    `# ${ex.title}

## Goal

${ex.concern}.

## Why

GearDesk trains interview-grade Java: scope, TDD, pure domain, then Maven suites, test levels, security, and hypermedia.

## Foreshadow

Later: Maven/CI evidence, TDD levels (unit → a11y), security (JWT → Spring Session), HATEOAS → Affordances → Siren.

## Requirements

- Focus only on: **${ex.concern}**
- Spoiler: do not open \`kata/src/main/java/.../domain\` until this session is done.
${
  ex.type === "reading"
    ? "- No coding. Write interviewer questions and in/out notes.\n"
    : `- Implement under \`kata/src/challenges/exercises/${pkgPath}/\`.
- Run tests via **Run tests** or \`./mvnw -f kata test -Pstarters -Dtest=${className}Test\`.
`
}
`,
  );

  if (ex.type !== "exercise") continue;

  write(
    path.join(webBase, "coding-steps", `${ex.id}-steps.md`),
    `# Coding steps — ${ex.id}

1. Open \`kata/src/challenges/exercises/${pkgPath}/${className}.java\`.
2. Read the failing test \`${className}Test\`.
3. Implement the smallest change for **${ex.concern}** only.
4. Mark complete when green.
`,
  );

  const starterJava = `package ${javaPkg};

/** Starter — ${ex.concern} */
public final class ${className} {
  private ${className}() {}

  public static String concern() {
    return "${ex.concern}";
  }

  public static boolean done() {
    return false;
  }
}
`;

  const solutionJava = `package ${javaPkg};

/** Solution — ${ex.concern} */
public final class ${className}End {
  private ${className}End() {}

  public static String concern() {
    return "${ex.concern}";
  }

  public static boolean done() {
    return true;
  }
}
`;

  write(
    path.join(ROOT, "kata/src/challenges/exercises", pkgPath, `${className}.java`),
    starterJava,
  );
  write(
    path.join(ROOT, "kata/src/challenges/exercises", pkgPath, `${className}Test.java`),
    `package ${javaPkg};

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ${className}Test {
  @Test
  void implementsConcern() {
    assertTrue(${className}.done(), "Implement: ${ex.concern}");
  }
}
`,
  );
  write(
    path.join(ROOT, "kata/src/challenges/solutions", pkgPath, `${className}End.java`),
    solutionJava,
  );
  write(
    path.join(ROOT, "kata/src/challenges/solutions", pkgPath, `${className}EndTest.java`),
    `package ${javaPkg};

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ${className}EndTest {
  @Test
  void solutionImplementsConcern() {
    assertTrue(${className}End.done());
  }
}
`,
  );
  write(path.join(webBase, "solutions", `${ex.id}-end.java.txt`), solutionJava);
}

console.log(`Generated ${EXERCISES.length} exercises / ${bySession.size} sessions`);
