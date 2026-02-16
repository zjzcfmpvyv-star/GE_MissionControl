# MVP Build Checklist (Execution)

## Foundation
- [x] Monorepo folder scaffold
- [x] Architecture blueprint draft
- [x] DB schema draft
- [x] API contract starter
- [x] Frontend route skeleton

## Next 48 hours
- [x] Initialize Next.js app + Tailwind + glass UI primitives
- [ ] Add auth (OIDC) and role middleware
- [ ] Add Prisma/Drizzle migrations from `db/schema.sql`
- [x] Implement `/api/overview` read model endpoint
- [ ] Implement realtime WS channel for `agent.status.*`
- [x] Build Overview cards with seeded JSON
- [x] Add task board CRUD + move with audit trail-ready schema
- [x] Add token rollup worker baseline (API aggregation)
- [x] Add limit alerts display (soft/hard percentages)
- [x] Add deploy/runbook docs baseline
