# HEARTBEAT.md — GoldenEra Focused Maintenance

When heartbeat runs, perform only these checks:

1) Mission Control code health
- `git status --short`
- detect unfinished critical work

2) Runtime health
- `openclaw status --deep`
- watch for gateway/channel failures

3) Token/cost risk
- check unusual spikes or repeated loops
- flag potential waste

4) Alert rule
- If urgent issue exists: send concise alert + fix
- If nothing material changed: `HEARTBEAT_OK`

Constraints:
- no broad exploration
- no long-running nonessential jobs
- keep heartbeat concise unless alerting
