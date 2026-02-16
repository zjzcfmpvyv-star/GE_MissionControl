import { readStore } from '@/lib/store';

export async function GET() {
  const store = readStore();
  const events = [
    ...store.tokenEvents.slice(0, 10).map((e) => ({ ts: e.ts, type: 'token.event', detail: `${e.model}: ${e.totalTokens} tokens` })),
    ...store.tasks.slice(0, 10).map((t) => ({ ts: t.updatedAt, type: 'task.update', detail: `${t.title} -> ${t.column}` }))
  ].sort((a, b) => (a.ts < b.ts ? 1 : -1));
  return Response.json({ events: events.slice(0, 20) });
}
