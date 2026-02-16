import { AppShell } from '@/components/layout/app-shell';
import { readStore } from '@/lib/store';

export default function AgentsPage() {
  const store = readStore();
  return (
    <AppShell>
      <div className="glass p-4">
        <h2 className="text-lg font-semibold mb-3">Agent Control Center</h2>
        <div className="space-y-2 text-sm">
          {store.agents.map((a) => (
            <div key={a.id} className="glass p-3 flex flex-wrap justify-between gap-2">
              <div>
                <div className="font-medium">{a.name} · {a.status}</div>
                <div className="opacity-70">{a.task}</div>
              </div>
              <div className="opacity-80">{a.model} · ctx {a.contextWindow.toLocaleString()}</div>
              <div>${a.costDay.toFixed(2)} / day · {a.tokenDay.toLocaleString()} tokens</div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
