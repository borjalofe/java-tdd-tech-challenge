# GearDesk

**Java + TDD tech interview**

Self-paced bootcamp: put Java interview skills on rails (scope, TDD, pure domain, Maven suites, test levels, security, hypermedia). The case study is **GearDesk** — an AV gear lending desk (kinds, brands, kits, borrowers, checkouts).

| Piece | Role |
|-------|------|
| `web/` | React bootcamp shell (instructions, progress, Run tests UI) |
| `kata/` | Java 21 + Maven + JUnit — student work + solutions + domain |
| `runner/` | Docker service that runs Maven and returns Surefire JSON |

## Quick start

```bash
# Shell
pnpm install
pnpm dev

# Or full stack (shell + Java runner)
docker compose up --build
```

Open `/bootcamp`. Prefer **Session 1** first (~1h). Talk-script: [`docs/talk-script.md`](docs/talk-script.md).

Tests:

```bash
pnpm test           # domain reference + solutions (green)
pnpm test:starters  # starters (red on purpose)
```

## Tracks

Curriculum is **sessions ~1h** (`session-1` … `session-45`), exercises **E00–E59**. No short/full, no homework track.

Order: catalog → borrowers → checkout rules → structure → queries → REST → Maven/CI → TDD levels → security (JWT → Spring Session) → HATEOAS → Affordances → Siren.

## Remotes (tipo 2)

- Primary: GitHub (issues/PRs)
- Mirror: Forgejo pull-mirror LAN
- Local remotes: `github` + `forgejo` (never `origin`)

See [`docs/homelab-bootstrap.md`](docs/homelab-bootstrap.md).

## License

Apache-2.0
