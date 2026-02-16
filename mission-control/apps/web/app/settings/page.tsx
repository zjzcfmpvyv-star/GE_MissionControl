import { AppShell } from '@/components/layout/app-shell';

export default function Page() {
  return (
    <AppShell>
      <div className="glass p-4">
        <h2 className="text-lg font-semibold">Module online</h2>
        <p className="text-sm opacity-70">Phase 1 scaffold complete. Next: deep integrations and realtime streams.</p>
      </div>
    </AppShell>
  );
}
