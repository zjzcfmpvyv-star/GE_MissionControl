# Recovery Notes (Session Continuity)

If connection drops or context runs out:
1. Resume from latest git commit (`git log --oneline -n 5`).
2. Check `CHANGELOG.md` for completed milestones.
3. Check `MVP_CHECKLIST.md` for remaining tasks.
4. Inspect persistent runtime data at `apps/web/data/store.json`.

Current MVP scope status:
- Dashboard: complete (v1)
- Token tracker: complete (v1 + limits display + event ingestion)
- Agile board: complete (v1 movement + persistence)
- Agent panel: complete (v1)
