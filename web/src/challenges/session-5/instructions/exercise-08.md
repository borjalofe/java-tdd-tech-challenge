# 8 · Delete Brand (FK guard)

## Goal

Delete Brand; reject if kits reference it.

## Why

GearDesk trains interview-grade Java: scope, TDD, pure domain, then Maven suites, test levels, security, and hypermedia.

## Foreshadow

Later: Maven/CI evidence, TDD levels (unit → a11y), security (JWT → Spring Session), HATEOAS → Affordances → Siren.

## Requirements

- Focus only on: **Delete Brand; reject if kits reference it**
- Spoiler: do not open `kata/src/main/java/.../domain` until this session is done.
- Implement under `kata/src/challenges/exercises/dev/borjalofe/geardesk/challenges/s5/e08/`.
- Run tests via **Run tests** or `./mvnw -f kata test -Pstarters -Dtest=Exercise08Test`.

