import { AppShell } from '@/components/layout/app-shell';
import { readStore } from '@/lib/store';

const teams = [
  {
    name: 'Research',
    agents: [
      { code: 'AT', name: 'ATLAS', role: 'Senior Research Analyst', tags: ['Deep Research', 'Web Search'], online: true },
      { code: 'TR', name: 'TRENDY', role: 'Viral Scout', tags: ['Trend Detection', 'Signal Scan'], online: true }
    ]
  },
  {
    name: 'Content',
    agents: [{ code: 'SC', name: 'SCRIBE', role: 'Content Director', tags: ['Content Creation', 'Voice Analysis'], online: true }]
  },
  {
    name: 'Development',
    agents: [
      { code: 'CL', name: 'CLAWD', role: 'Senior Software Engineer', tags: ['Full-stack', 'Agent Review'], online: false },
      { code: 'SE', name: 'SENTINEL', role: 'QA & Business Monitor', tags: ['Uptime Monitor', 'Code Review'], online: true }
    ]
  }
];

export default function AgentsPage() {
  const store = readStore();

  return (
    <AppShell>
      <div className="space-y-4">
        <section className="glass p-4">
          <div className="text-xs opacity-60">Chief Strategy Officer</div>
          <div className="text-2xl font-semibold">JARVIS</div>
          <div className="text-sm opacity-70">Strategic Planning • Task Orchestration</div>
          <div className="text-xs mt-2 opacity-60">Current runtime status: {store.agents[0]?.status ?? 'UNKNOWN'}</div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {teams.map((team) => (
            <section key={team.name} className="glass p-4">
              <h3 className="text-sm uppercase tracking-[0.16em] opacity-70 mb-3">{team.name}</h3>
              <div className="space-y-3">
                {team.agents.map((agent) => (
                  <article key={agent.name} className="glass p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center text-xs font-semibold">{agent.code}</div>
                        <div>
                          <div className="font-semibold">{agent.name}</div>
                          <div className="text-xs opacity-70">{agent.role}</div>
                        </div>
                      </div>
                      <span className={agent.online ? 'badge-ok' : 'badge-danger'}>{agent.online ? 'online' : 'issue'}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {agent.tags.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/10">{t}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
