'use client';

import { useEffect, useState } from 'react';

type Overview = {
  healthScore: number;
  activeAgents: number;
  dailyTokens: number;
  dailyCost: number;
  limits: { dailySoft: number; dailyHard: number };
};

function statState(health: number) {
  if (health >= 80) return { label: 'Online', cls: 'badge-ok' };
  if (health >= 60) return { label: 'Degraded', cls: 'badge-warn' };
  return { label: 'Risk', cls: 'badge-danger' };
}

export function OverviewCards() {
  const [data, setData] = useState<Overview | null>(null);

  useEffect(() => {
    fetch('/api/overview').then((r) => r.json()).then(setData);
  }, []);

  if (!data) return <div className="kpi">Loading...</div>;

  const usagePct = Math.round((data.dailyTokens / data.limits.dailyHard) * 100);
  const state = statState(data.healthScore);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      <div className="kpi">
        <div className="text-xs opacity-60 mb-2">STATUS</div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">{state.label}</div>
          <span className={state.cls}>Health {data.healthScore}%</span>
        </div>
        <div className="text-xs opacity-70 mt-2">Ready and waiting for tasks</div>
      </div>

      <div className="kpi">
        <div className="text-xs opacity-60 mb-2">WORKSHOP</div>
        <div className="text-xl font-semibold">{data.activeAgents} active</div>
        <div className="text-xs opacity-70 mt-2">Mission Control agents online</div>
      </div>

      <div className="kpi">
        <div className="text-xs opacity-60 mb-2">TOKEN FLOW</div>
        <div className="text-xl font-semibold">{data.dailyTokens.toLocaleString()}</div>
        <div className="text-xs opacity-70 mt-2">{usagePct}% of daily hard limit</div>
      </div>

      <div className="kpi">
        <div className="text-xs opacity-60 mb-2">COST TODAY</div>
        <div className="text-xl font-semibold">${data.dailyCost.toFixed(2)}</div>
        <div className="text-xs opacity-70 mt-2">Burn tracked across model routes</div>
      </div>
    </div>
  );
}
