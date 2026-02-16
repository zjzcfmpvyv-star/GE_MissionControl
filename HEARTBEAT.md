# HEARTBEAT.md — GoldenEra Minimal Ops Loop

If heartbeat runs, do **only** these checks (fast + high-signal):

1. Mission Control repo health
   - `git status --short`
   - detect uncommitted critical work

2. OpenClaw runtime health
   - gateway reachable?
   - channel errors?
   - obvious crash/restart loops?

3. Token/cost risk scan
   - unusual token spikes
   - repeated failing loops causing waste

4. Immediate action rule
   - If urgent issue found: report concise alert with exact fix suggestion
   - If nothing meaningful changed: `HEARTBEAT_OK`

Constraints:
- No broad exploratory tasks during heartbeat
- No non-essential long-running jobs
- Keep heartbeat response short unless alerting
