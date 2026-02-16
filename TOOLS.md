# TOOLS.md — GoldenEra Core Runtime Notes

## Workspace
- Root: `/Users/jarvisjoseph/.openclaw/workspace`

## Core Operational Commands
- Health: `openclaw status --deep`
- Full diagnosis: `openclaw status --all`
- Logs: `openclaw logs --plain --limit 200`

## Channels
- Telegram configured (owner-paired)
- Owner ID: `6520714298`
- Policy: owner-only access for commands
- iMessage blocked until macOS privacy permissions are fixed

## Git / SSH
- Use SSH remotes
- Key: `~/.ssh/id_ed25519`
- Standard flow:
  1) `ssh-add ~/.ssh/id_ed25519`
  2) `git push`

## Stability Playbook (Next.js)
If missing chunk/module errors appear:
1. Stop dev server
2. Clear `.next`
3. Restart dev server
4. Reinstall deps if needed

## Documentation Hygiene
After major work blocks, update:
- `MEMORY.md`
- daily memory note
- recovery/checklist files if relevant
