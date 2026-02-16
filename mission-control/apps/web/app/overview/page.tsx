import { AppShell } from '../../components/layout/app-shell';

export default function OverviewPage() {
  return (
    <AppShell>
      <div className="grid grid-cols-12 gap-4">
        <section className="glass p-4 col-span-8">Empire Health + KPIs</section>
        <section className="glass p-4 col-span-4">Risk Alerts</section>
        <section className="glass p-4 col-span-6">Revenue / Burn</section>
        <section className="glass p-4 col-span-6">Agent Activity</section>
      </div>
    </AppShell>
  );
}
