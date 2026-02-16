# TOOLS.md — Local Ops Notes (GoldenEra)

## Core Runtime
- Workspace root: `/Users/jarvisjoseph/.openclaw/workspace`
- Primary project repo: `git@github.com:zjzcfmpvyv-star/GE_MissionControl.git`
- Local Mission Control dev URL: `http://localhost:3000`
- LAN preview URL: `http://10.0.0.231:3000`

## OpenClaw Notes
- Gateway is local-loopback by default (`127.0.0.1:18789`)
- Telegram bot configured and owner-paired
- Owner telegram id allowlisted: `6520714298`
- iMessage currently blocked by macOS permission (chat.db Full Disk Access)

## Git / SSH
- SSH remote preferred (not HTTPS)
- Active key path: `~/.ssh/id_ed25519`
- Key currently passphrase-protected

## Mission Control Implementation Notes
- Keep frequent commits during active build loops
- Maintain `CHANGELOG.md` + `RECOVERY_NOTES.md`
- Avoid brittle dev cache: if Next runtime chunks break, clear `.next` and restart
- Prioritize high-signal pages first: Overview, Ops, Office, Org, Protocol

## Security Defaults
- Keep Telegram policies strict (`allowlist`)
- Do not expose secrets in docs or commit history
- Prefer explicit controls with audit trails

## UX Direction
- Apple liquid-glass aesthetic
- Dark, premium, minimal clutter
- Motion is subtle and functional
- Data density without chaos
