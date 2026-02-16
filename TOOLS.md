# TOOLS.md — GoldenEra Runtime Notes

## Workspace + Repo
- Workspace root: `/Users/jarvisjoseph/.openclaw/workspace`
- Mission Control repo: `git@github.com:zjzcfmpvyv-star/GE_MissionControl.git`
- Local preview: `http://localhost:3000`
- LAN preview: `http://10.0.0.231:3000`

## OpenClaw Runtime
- Gateway endpoint: `127.0.0.1:18789`
- Main health check: `openclaw status --deep`
- Full diagnosis: `openclaw status --all`
- Logs: `openclaw logs --plain --limit 200`

## Channel State
- Telegram is configured and owner-paired
- Owner Telegram ID: `6520714298`
- Telegram policy: owner allowlist only
- iMessage currently blocked by macOS privacy permissions

## Git / SSH
- Use SSH, not HTTPS
- Key: `~/.ssh/id_ed25519` (passphrase protected)
- Standard push flow:
  1) `ssh-add ~/.ssh/id_ed25519`
  2) `git push`

## Stability Playbook
When Next.js throws missing chunk/module errors:
1. stop dev server
2. `rm -rf apps/web/.next`
3. restart dev server
4. if persistent, reinstall deps and restart

## Build Hygiene
- Commit frequently during active build loops
- Update `CHANGELOG.md` and `RECOVERY_NOTES.md` after major work blocks
- Keep architecture notes current with implementation
