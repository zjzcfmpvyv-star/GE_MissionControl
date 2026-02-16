import { Store } from '@/lib/types';

export const seed: Store = {
  agents: [
    {
      id: 'jarvis',
      name: 'Jarvis',
      status: 'WORKING',
      model: 'openai-codex/gpt-5.3-codex',
      contextWindow: 272000,
      task: 'Mission Control MVP build',
      eta: 'High confidence · today',
      tokenDay: 48210,
      costDay: 13.2
    },
    {
      id: 'security',
      name: 'Security Agent',
      status: 'IDLE',
      model: 'anthropic/claude-sonnet-4-5',
      contextWindow: 200000,
      task: 'Waiting for vulnerability scan',
      eta: 'N/A',
      tokenDay: 9320,
      costDay: 2.4
    }
  ],
  tokenEvents: [
    {
      id: 'e1',
      ts: new Date().toISOString(),
      agentId: 'jarvis',
      project: 'Mission Control',
      model: 'openai-codex/gpt-5.3-codex',
      promptTokens: 4000,
      completionTokens: 1800,
      totalTokens: 5800,
      estimatedCost: 1.4
    }
  ],
  tasks: [
    {
      id: 't1',
      title: 'Initialize Next.js + Tailwind + route shell',
      venture: 'Mission Control',
      priority: 'P0',
      ownerType: 'agent',
      owner: 'Jarvis',
      column: 'Done',
      updatedAt: new Date().toISOString()
    },
    {
      id: 't2',
      title: 'Token tracking API + usage cards',
      venture: 'Mission Control',
      priority: 'P0',
      ownerType: 'agent',
      owner: 'Jarvis',
      column: 'In Progress',
      updatedAt: new Date().toISOString()
    }
  ],
  limits: {
    dailySoft: 120000,
    dailyHard: 180000,
    monthlySoft: 2200000,
    monthlyHard: 3000000
  }
};
