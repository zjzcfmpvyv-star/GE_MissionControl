'use client';

import { useEffect, useMemo, useState } from 'react';

type Event = {
  id: string;
  ts: string;
  model: string;
  totalTokens: number;
  estimatedCost: number;
};

type TokenResponse = {
  events: Event[];
  byModel: { model: string; tokens: number; cost: number }[];
  limits: { dailySoft: number; dailyHard: number; monthlySoft: number; monthlyHard: number };
};

export function TokenTracker() {
  const [data, setData] = useState<TokenResponse | null>(null);

  async function refresh() {
    const res = await fetch('/api/tokens');
    setData(await res.json());
  }

  useEffect(() => {
    refresh();
  }, []);

  const totals = useMemo(() => {
    const events = data?.events ?? [];
    return {
      tokens: events.reduce((a, b) => a + b.totalTokens, 0),
      cost: events.reduce((a, b) => a + b.estimatedCost, 0)
    };
  }, [data]);

  async function addSampleEvent() {
    await fetch('/api/tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        agentId: 'jarvis',
        project: 'Mission Control',
        model: 'openai-codex/gpt-5.3-codex',
        promptTokens: 2200,
        completionTokens: 900,
        estimatedCost: 0.74
      })
    });
    refresh();
  }

  if (!data) return <div className="glass p-4">Loading token tracker...</div>;

  const soft = Math.round((totals.tokens / data.limits.dailySoft) * 100);
  const hard = Math.round((totals.tokens / data.limits.dailyHard) * 100);

  return (
    <div className="glass p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Model & Token Management</h3>
        <button onClick={addSampleEvent} className="px-3 py-2 rounded-lg bg-accent/20 hover:bg-accent/30">Add test token event</button>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="glass p-3"><div className="text-xs opacity-70">Tokens Used (today)</div><div className="text-xl font-semibold">{totals.tokens.toLocaleString()}</div></div>
        <div className="glass p-3"><div className="text-xs opacity-70">Cost Estimate</div><div className="text-xl font-semibold">${totals.cost.toFixed(2)}</div></div>
        <div className="glass p-3"><div className="text-xs opacity-70">Limits</div><div className="text-sm">Soft {soft}% · Hard {hard}%</div></div>
      </div>
      <div className="text-sm">
        <div className="font-medium mb-1">Top token burners</div>
        <ul className="space-y-1">
          {data.byModel.map((m) => (
            <li key={m.model} className="flex justify-between"><span>{m.model}</span><span>{m.tokens.toLocaleString()} tok · ${m.cost.toFixed(2)}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
