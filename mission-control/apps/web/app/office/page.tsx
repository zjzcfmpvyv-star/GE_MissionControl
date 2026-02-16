import { AppShell } from '@/components/layout/app-shell';
import { readStore } from '@/lib/store';
import network from '@/data/agent-network.json';

export default function OfficePage() {
  const store = readStore();
  return (
    <AppShell>
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold">The Office</h1>
          <p className="text-sm opacity-70">AI team headquarters — live view</p>
        </header>

        <section className="glass p-4 grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
          <button className="glass p-2">All Working</button>
          <button className="glass p-2">Gather</button>
          <button className="glass p-2">Run Meeting</button>
          <button className="glass p-2">Watercooler</button>
          <button className="glass p-2">Pause Non-Critical</button>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
          <section className="glass p-4">
            <h3 className="text-base font-semibold mb-3">Agent Floor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {network.map((a) => (
                <div key={a.name} className="glass p-3">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{a.name}</div>
                    <span className={a.status === 'online' ? 'badge-ok' : 'badge-danger'}>{a.status}</span>
                  </div>
                  <div className="text-xs opacity-70">{a.role}</div>
                  <div className="text-xs opacity-60 mt-1">{a.division}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass p-4">
            <h3 className="text-base font-semibold mb-3">Live Activity</h3>
            <div className="space-y-2 text-xs">
              {store.tokenEvents.slice(0, 8).map((e) => (
                <div key={e.id} className="glass p-2">
                  <div className="font-medium">{e.model}</div>
                  <div className="opacity-70">{e.totalTokens.toLocaleString()} tokens • ${e.estimatedCost.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
