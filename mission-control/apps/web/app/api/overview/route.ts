import { readStore } from '@/lib/store';

export async function GET() {
  const store = readStore();
  const dailyTokens = store.tokenEvents.reduce((acc, e) => acc + e.totalTokens, 0);
  const dailyCost = store.tokenEvents.reduce((acc, e) => acc + e.estimatedCost, 0);
  const activeAgents = store.agents.filter((a) => a.status === 'WORKING').length;
  const blockedTasks = store.tasks.filter((t) => t.column === 'Blocked').length;

  const healthScore = Math.max(
    35,
    100 - blockedTasks * 10 - (dailyTokens > store.limits.dailySoft ? 15 : 0) - (dailyTokens > store.limits.dailyHard ? 25 : 0)
  );

  return Response.json({
    healthScore,
    activeAgents,
    dailyTokens,
    dailyCost,
    limits: store.limits,
    agents: store.agents,
    tasks: store.tasks
  });
}
