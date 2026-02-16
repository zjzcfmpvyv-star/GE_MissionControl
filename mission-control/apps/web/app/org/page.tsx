import { AppShell } from '@/components/layout/app-shell';
import network from '@/data/agent-network.json';

const divisions = ['Research', 'Content', 'Development', 'Design', 'User Success', 'Product'] as const;

export default function OrgPage() {
  const jarvis = network.find((n) => n.code === 'JA');
  return (
    <AppShell>
      <div className="space-y-5">
        <header>
          <h1 className="text-2xl font-semibold">Organizational Agent Graph</h1>
          <p className="text-sm opacity-70">Scales as new agents are added to the network model.</p>
        </header>

        <section className="glass p-4 max-w-3xl mx-auto">
          <div className="text-xs opacity-60">CEO / Founder</div>
          <div className="text-xl font-semibold">Pharaoh Brazy</div>
        </section>

        {jarvis && (
          <section className="glass p-4 max-w-3xl mx-auto">
            <div className="text-xs opacity-60">Lead Intelligence Orchestrator</div>
            <div className="text-xl font-semibold">{jarvis.name}</div>
            <div className="text-sm opacity-70">{jarvis.role}</div>
          </section>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {divisions.map((division) => (
            <section className="glass p-4" key={division}>
              <h3 className="text-sm uppercase tracking-[0.16em] opacity-70 mb-2">{division}</h3>
              <div className="space-y-2">
                {network
                  .filter((n) => n.division === division)
                  .map((n) => (
                    <div className="glass p-3" key={n.name}>
                      <div className="flex justify-between">
                        <div className="font-semibold">{n.name}</div>
                        <span className={n.status === 'online' ? 'badge-ok' : 'badge-danger'}>{n.status}</span>
                      </div>
                      <div className="text-xs opacity-70">{n.role}</div>
                      <div className="text-[10px] mt-1 opacity-60">{n.tags.join(' • ')}</div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
