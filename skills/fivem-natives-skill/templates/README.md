# FiveM Natives Skill

A Claude Code skill providing a complete reference for FiveM native functions, auto-updated from [cfxnatives.dev](https://cfxnatives.dev).

## What's included

- **Namespace files** — one `.md` per namespace (PED, VEHICLE, NETWORK, etc.) with all native signatures, descriptions, parameters, and examples
- **Types Reference** — all native types explained (Ped, Vehicle, Entity, Vector3, etc.)
- **Best Practices** — FiveM development patterns, performance tips, and common pitfalls

## Adding this skill to Claude Code

Add the following to your `.claude/settings.json` or project `CLAUDE.md`:

```json
{
  "skills": [
    "path/to/skill-fivem-natives/docs"
  ]
}
```

Or reference specific files in your `CLAUDE.md`:

```markdown
## Context
- See @docs/index.md for FiveM native function reference
- See @docs/best-practices.md for FiveM development guidelines
```

## Versioning

The version format is `{generator-version}+natives.{YYYYMMDD}`:

- **Generator version** (semver) bumps when the skill generator code changes
- **Natives date** updates automatically every time the natives API has new data

Example: `1.0.0+natives.20260324`

## Updating manually

```bash
bun run build         # fetch and rebuild if natives changed
bun run build:force   # always rebuild regardless of changes
```

## Data source

All native data is sourced from [cfxnatives.dev](https://cfxnatives.dev), which aggregates the official FiveM native reference.
