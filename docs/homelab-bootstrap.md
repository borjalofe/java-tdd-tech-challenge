# Homelab / Git bootstrap

Tipo **2**: GitHub is the primary (issues, PRs, wiki). Forgejo is a **pull-mirror** (LAN).

| Item | Value |
|------|--------|
| GitHub | `https://github.com/borjalofe/java-tdd-tech-challenge` (**public**) |
| Forgejo | `borja/java-tdd-tech-challenge` (pull-mirror, interval `8h0m0s`, wiki) |
| Local remotes | `github` (upstream), `forgejo` (mirror) — never `origin` |
| Branch protection (`main`) | Require PR; no force-push (GitHub) |
| Issues | **GitHub only** |

## Checklist

- [x] GitHub public repo created
- [x] Initial `main` pushed to `github`
- [ ] Forgejo pull-mirror configured (`8h`, wiki on) — do on LAN
- [x] Local remotes `github` + `forgejo`
- [x] Branch protection on `main`
- [x] Labels + milestones + issue templates

## Labels

| Label | Role |
|-------|------|
| `status:needs-review` / `approved` / `in-progress` / `blocked` / `done` | Workflow |
| `type:epic` / `type:task` / `type:review` | Epic vs atomic vs deferred review |
| `category:infra` / `docs` / `feature` / `chore` | Category |
| `milestone-slice` | Counts toward milestone |

## Milestones

| Milestone | Deliverable |
|-----------|-------------|
| **W-M1** | Tipo 2 bootstrap |
| **W-M2** | Bootcamp shell `web/` |
| **W-M3** | Domain + Docker runner |
| **W-M4** | Session 1 + talk-script |
| **W-M5** | Catalog + Borrower |
| **W-M6** | Checkout rules + domain structure |
| **W-M7** | Queries + REST + trade-offs + smoke CI |
| **W-M8** | Maven suites + CI jobs |
| **W-M9** | TDD levels (+ JPA at Integration) |
| **W-M10** | Security + hypermedia |
| **deferred** | OneCompiler, Judge0/Piston, public runner, Framer S2 |

## Forgejo pull-mirror (when on LAN)

1. New Migration from `https://github.com/borjalofe/java-tdd-tech-challenge.git`
2. Pull-mirror `8h0m0s`, wiki on; no issues sync required
3. `git remote add forgejo forgejo:borja/java-tdd-tech-challenge.git`

## Seed tracker

```bash
node scripts/bootstrap-github.mjs
```

Already run once (epics, `[UPDATE]` E00–E59, deferred `[review]`).
