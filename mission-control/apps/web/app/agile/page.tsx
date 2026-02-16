import { AgileBoard } from '@/components/agile/board';
import { AppShell } from '@/components/layout/app-shell';

export default function AgilePage() {
  return (
    <AppShell>
      <div className="glass p-4 mb-4">
        <h2 className="text-lg font-semibold">Agile Workspace (Scrum + Kanban)</h2>
        <p className="text-sm opacity-70">WIP limits and audit trail hooks are scaffolded in schema. Agent-created tasks are labeled.</p>
      </div>
      <AgileBoard />
    </AppShell>
  );
}
