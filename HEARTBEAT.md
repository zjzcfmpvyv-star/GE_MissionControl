# HEARTBEAT.md — Core Operator Maintenance

Heartbeat checks should stay lightweight and high-value:

1. Runtime health
- gateway/channel status
- obvious failures/restart loops

2. Cost discipline
- unusual token spikes
- repeated error loops wasting budget

3. Strategic continuity
- unresolved critical tasks
- stale decisions that need capture in memory/docs

If no meaningful issue exists, reply:
`HEARTBEAT_OK`
