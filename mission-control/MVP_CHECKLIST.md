# MVP Build Checklist (Execution)

## Foundation
- [x] Monorepo folder scaffold
- [x] Architecture blueprint draft
- [x] DB schema draft
- [x] API contract starter
- [x] Frontend route skeleton

## Next 48 hours
- [ ] Initialize Next.js app + Tailwind + shadcn/ui
- [ ] Add auth (OIDC) and role middleware
- [ ] Add Prisma/Drizzle migrations from `db/schema.sql`
- [ ] Implement `/api/overview` read model endpoint
- [ ] Implement realtime WS channel for `agent.status.*`
- [ ] Build Overview cards with seeded JSON
- [ ] Add task board CRUD + move with audit trail
- [ ] Add token rollup worker (daily/monthly)
- [ ] Add limit alerts (soft 70/85/95, hard 100)
- [ ] Add deploy/runbook docs
