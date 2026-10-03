# AGENTS.md

## Layers

| Path | Role |
|------|------|
| `kata/src/challenges/session-N/exercises/*` | **Student work** (Java) |
| `kata/src/challenges/session-N/solutions/*` | Spoiler solutions (Show Solution) |
| `kata/src/main/java/.../domain` | Instructor reference domain (spoiler) |
| `web/` | Bootcamp chrome only — **no** GearDesk business logic in TypeScript |
| `runner/` | Docker Maven HTTP shim; React only displays results |
| `/bootcamp` | Pedagogical shell |

## Spoiler policy

Do **not** open `kata/src/main/java/.../domain` or solutions until you finish the session you are on (Mark Complete).

## Instructor mode

- Query `?instructor=1` overrides the persisted switch (hides Show Solution).
- Chrome switch toggles instructor mode when the query is absent.

## Animation

Framer **S1**: route/panel transitions only. Complete/Solution motion is deferred (S2).

## Out of this repo

- Rust tower-sessions (semantics only; Java uses Spring Session later)
- Front codegen from OpenAPI + Siren (parallel research, not this project)
