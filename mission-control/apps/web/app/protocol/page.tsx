import { AppShell } from '@/components/layout/app-shell';

const principles = [
  'Real agents, not theater — each one must produce measurable business output.',
  'Operational efficiency first — reduce founder load and increase execution velocity.',
  'Zero redundancy — no duplicate agents without specialization and ROI.'
];

const required = [
  { file: 'SOUL.md', text: 'Operational directives, communication style, constraints, boundaries.' },
  { file: 'TOOLS.md', text: 'Local tools, API endpoints, credentials references, infrastructure notes.' },
  { file: 'MEMORY.md', text: 'Curated long-term memory and distilled lessons.' },
  { file: 'IDENTITY.md', text: 'Name, role, voice, emoji, and behavior profile.' },
  { file: 'HEARTBEAT.md', text: 'Autonomous checks and proactive routines during heartbeat polls.' }
];

const process = [
  'Define clear scope and objective for each agent.',
  'Provision baseline files and operating rules.',
  'Test in isolation, verify output quality, then promote to production.',
  'Attach to event bus and telemetry (status, tokens, errors).',
  'Review weekly and optimize for compounding leverage.'
];

export default function ProtocolPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold">Agent Creation Protocol</h1>
          <p className="text-sm opacity-70">Standards for scaling the GoldenEra agent fleet 24/7.</p>
        </header>

        <section className="glass p-4">
          <h3 className="font-semibold mb-2">Core Philosophy</h3>
          <ul className="space-y-1 text-sm">
            {principles.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </section>

        <section className="glass p-4">
          <h3 className="font-semibold mb-2">Required Agent Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {required.map((r) => (
              <div className="glass p-3 text-sm" key={r.file}>
                <div className="font-semibold">{r.file}</div>
                <div className="opacity-70 text-xs mt-1">{r.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-4">
          <h3 className="font-semibold mb-2">Training Process</h3>
          <ol className="space-y-1 text-sm list-decimal pl-5">
            {process.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </section>
      </div>
    </AppShell>
  );
}
