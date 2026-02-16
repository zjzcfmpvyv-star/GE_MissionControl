'use client';

import { useEffect, useState } from 'react';

type Payload = {
  ok: boolean;
  status?: any;
  usage?: any;
  error?: string;
};

type Action =
  | 'gatewayStart'
  | 'gatewayStop'
  | 'gatewayRestart'
  | 'doctorFix'
  | 'statusDeep'
  | 'statusUsage'
  | 'channelsStatus'
  | 'gatewayProbe'
  | 'logsTail';

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
  const [busy, setBusy] = useState(false);
  const [controlOutput, setControlOutput] = useState<string>('');

  async function load() {
    const res = await fetch('/api/openclaw/status');
    const json = await res.json();
    setData(json);
  }

  async function run(action: Action) {
    setBusy(true);
    setControlOutput('Running: ' + action + ' ...');
    try {
      const res = await fetch('/api/openclaw/control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const json = await res.json();
      setControlOutput(json.ok ? json.output || 'Done.' : `Error: ${json.error}`);
      await load();
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, []);

  if (!data) return <section className="glass p-4">Loading OpenClaw TUI mirror...</section>;
  if (!data.ok) return <section className="glass p-4 text-sm text-danger">TUI mirror error: {data.error}</section>;

  const status = data.status ?? {};
  const overview = status && typeof status === 'object' ? (status.overview ?? status.summary ?? {}) : {};
  const channelsRaw = status && typeof status === 'object' ? status.channels ?? [] : [];
  const sessionsRaw = status && typeof status === 'object' ? status.sessions ?? [] : [];
  const channels = Array.isArray(channelsRaw) ? channelsRaw : [];
  const sessions = Array.isArray(sessionsRaw) ? sessionsRaw : [];
  const security = status && typeof status === 'object' ? (status.securityAudit ?? status.security ?? {}) : {};

  return (
    <div className="space-y-4">
      <section className="glass p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">OpenClaw TUI Mirror + Controls</h3>
          <button className="glass px-3 py-1 text-xs" onClick={load}>Refresh</button>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('gatewayStart')}>Gateway Start</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('gatewayStop')}>Gateway Stop</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('gatewayRestart')}>Gateway Restart</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('doctorFix')}>Doctor Fix</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('statusDeep')}>Deep Status</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('statusUsage')}>Usage</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('channelsStatus')}>Channels</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('gatewayProbe')}>Gateway Probe</button>
          <button disabled={busy} className="glass px-3 py-1 text-xs" onClick={() => run('logsTail')}>Tail Logs</button>
        </div>

        <div className="glass p-3 text-xs whitespace-pre-wrap max-h-48 overflow-auto">{controlOutput || 'Control output will appear here.'}</div>

        <div className="grid md:grid-cols-2 gap-4 mt-3">
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
            {data.usage && <div className="mt-3 text-xs opacity-80">Usage snapshot available</div>}
          </div>
        </div>
      </section>

      <section className="glass p-4">
        <div className="text-xs uppercase tracking-[0.12em] opacity-60 mb-2">Channels</div>
        <div className="space-y-2">
          {channels.slice(0, 12).map((c: any, i: number) => (
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
          {sessions.slice(0, 10).map((s: any, i: number) => (
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
