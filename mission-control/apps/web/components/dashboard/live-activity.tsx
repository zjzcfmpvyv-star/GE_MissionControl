import { readStore } from '@/lib/store';

export function LiveActivity() {
  const store = readStore();

  const lines = [
    ...store.tokenEvents.slice(0, 4).map((e) => ({
      id: e.id,
      status: 'In Progress',
      detail: `${e.model} • ${e.totalTokens.toLocaleString()} tokens`,
      ts: e.ts
    })),
    {
      id: 'system',
      status: 'Online',
      detail: 'Mission Control runtime healthy',
      ts: new Date().toISOString()
    }
  ];

  return (
    <section className="glass p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">Live Activity</h3>
        <span className="text-xs opacity-60">View workflow →</span>
      </div>
      <div className="space-y-2">
        {lines.map((line) => (
          <div key={line.id} className="glass p-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{line.status}</div>
              <div className="text-xs opacity-70">{line.detail}</div>
            </div>
            <div className="text-xs opacity-60">{new Date(line.ts).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
