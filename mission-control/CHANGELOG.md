# Mission Control Changelog

## 2026-02-15
- Initialized monorepo and Next.js app scaffold.
- Added architecture docs and Postgres schema draft.
- Implemented MVP data store with JSON persistence (`apps/web/data/store.json`).
- Implemented APIs:
  - `GET /api/overview`
  - `GET/POST /api/tokens`
  - `GET/PATCH /api/board`
  - `GET /api/events`
- Built MVP UI pages:
  - Overview with KPI cards and token tracker
  - Agile board with column move workflow
  - Agent control center summary panel
- Added token limit guard display (soft/hard usage percentages).
- Added persistent change tracking files for recovery after token/session loss.
