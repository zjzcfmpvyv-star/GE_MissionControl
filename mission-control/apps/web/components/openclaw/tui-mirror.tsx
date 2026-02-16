'use client';

import { useEffect, useState } from 'react';

type Payload = {
  ok: boolean;
  status?: any;
  usage?: any;
  error?: string;
};

function Row({ k, v }: { k: string; v: unknown }) {
  const value = typeof v === 'object' ? JSON.stringify(v) : String(v);
  return (
    <div className="flex justify-between gap-3 text-xs py-1 border-b border-white/5">
      <span className="opacity-60">{k}</span>
      <span className="text-right opacity-90 max-w-[70%] truncate">{value}</span>
    </div>
  );
}

export function TuiMirror() {
  const [data, setData] = useState<Payload | null>(null);

  async function load() {
    const res = await fetch('/api/openclaw/status');
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, []);

  if (!data) return <section className="glass p-4">Loading OpenClaw TUI mirror...</section>;
  if (!data.ok) return <section className="glass p-4 text-sm text-danger">TUI mirror error: {data.error}</section>;

  const status = data.status ?? {};
  const overview = status.overview ?? status.summary ?? {};
  const channels = status.channels ?? [];
  const sessions = status.sessions ?? [];
  const security = status.securityAudit ?? status.security ?? {};

  return (
    <div className="space-y-4">
      <section className="glass p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">OpenClaw TUI Mirror</h3>
          <button className="glass px-3 py-1 text-xs" onClick={load}>Refresh</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass p-3">
            <div className="text-xs uppercase tracking-[0.12em] opacity-60 mb-2">Overview</div>
            {Object.entries(overview).slice(0, 16).map(([k, v]) => (
              <Row key={k} k={k} v={v} />
            ))}
          </div>
          <div className="glass p-3">
            <div className="text-xs uppercase tracking-[0.12em] opacity-60 mb-2">Security / Usage</div>
            {Object.entries(security).slice(0, 16).map(([k, v]) => (
              <Row key={k} k={k} v={v} />
            ))}
            {data.usage && (
              <div className="mt-3 text-xs opacity-80">Usage snapshot available</div>
            )}
          </div>
        </div>
      </section>

      <section className="glass p-4">
        <div className="text-xs uppercase tracking-[0.12em] opacity-60 mb-2">Channels</div>
        <div className="space-y-2">
          {(channels as any[]).slice(0, 12).map((c, i) => (
            <div className="glass p-3 text-xs" key={i}>
              <div className="font-medium">{c.channel ?? c.name ?? `channel-${i}`}</div>
              <div className="opacity-70">{JSON.stringify(c)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-4">
        <div className="text-xs uppercase tracking-[0.12em] opacity-60 mb-2">Sessions</div>
        <div className="space-y-2">
          {(sessions as any[]).slice(0, 10).map((s, i) => (
            <div className="glass p-3 text-xs" key={i}>
              <div className="font-medium">{s.key ?? s.id ?? `session-${i}`}</div>
              <div className="opacity-70">{JSON.stringify(s)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
