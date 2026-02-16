import { Workstream24x7 } from '@/components/dashboard/workstream-24x7';
import { AppShell } from '@/components/layout/app-shell';
import { TuiMirror } from '@/components/openclaw/tui-mirror';

export default function OpsPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold">Ops Command</h1>
          <p className="text-sm opacity-70">Full OpenClaw TUI observability mirrored in Mission Control</p>
        </header>
        <TuiMirror />
        <Workstream24x7 />
      </div>
    </AppShell>
  );
}
