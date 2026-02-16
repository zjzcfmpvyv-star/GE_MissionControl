'use client';

import { useEffect, useState } from 'react';

type Overview = {
  healthScore: number;
  activeAgents: number;
  dailyTokens: number;
  dailyCost: number;
  limits: { dailySoft: number; dailyHard: number };
};

export function OverviewCards() {
  const [data, setData] = useState<Overview | null>(null);

  useEffect(() => {
    fetch('/api/overview').then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="kpi">Loading...</div>;

  const usagePct = Math.round((data.dailyTokens / data.limits.dailyHard) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="kpi"><div className="text-xs opacity-70">Empire Health</div><div className="text-2xl font-semibold">{data.healthScore}%</div></div>
      <div className="kpi"><div className="text-xs opacity-70">Active Agents</div><div className="text-2xl font-semibold">{data.activeAgents}</div></div>
      <div className="kpi"><div className="text-xs opacity-70">Daily Tokens</div><div className="text-2xl font-semibold">{data.dailyTokens.toLocaleString()}</div></div>
      <div className="kpi"><div className="text-xs opacity-70">Daily Cost</div><div className="text-2xl font-semibold">${data.dailyCost.toFixed(2)}</div><div className="text-xs mt-1">{usagePct}% of hard limit</div></div>
    </div>
  );
}
