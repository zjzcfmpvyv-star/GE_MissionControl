# Local Development Runbook

## Start
```bash
cd mission-control
npm install
npm run dev
```

Open http://localhost:3000

## Build check
```bash
npm run build
```

## Data persistence
- Runtime store: `apps/web/data/store.json`
- This file persists token events and board movements.

## Recovery
1. `git log --oneline -n 10`
2. `cat CHANGELOG.md`
3. `cat MVP_CHECKLIST.md`
4. resume from last unchecked item.
