# Mission Control Blueprint (Day-1)

## Core Domains
1. Executive Overview
2. Agent Control
3. Model/Token Governance
4. Agile Workspace
5. Ops Health
6. Security & Risk
7. Automation Hub

## Service Boundaries
- `api-gateway`: query composition + command dispatch
- `agent-service`: state machine + control actions
- `usage-service`: token ingestion + cost rollups
- `agile-service`: boards, sprints, task history
- `risk-service`: score computation + alerts
- `automation-service`: rules + triggers + schedules

## Realtime Channels
- `agent.status.*`
- `usage.tokens.*`
- `risk.alerts.*`
- `ops.health.*`

## State Model (Agent)
`IDLE -> WORKING -> BLOCKED|ERROR|UPDATING -> IDLE`

## MVP Acceptance
- Dashboard loads with seeded data
- Agent status updates in realtime
- Token usage daily/monthly rollup visible
- Kanban board supports drag/drop + audit history
- Role-based auth enforced for control actions
