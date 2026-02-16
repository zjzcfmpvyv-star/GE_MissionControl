import { AppShell } from '@/components/layout/app-shell';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { TokenTracker } from '@/components/tokens/token-tracker';

export default function OverviewPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <OverviewCards />
        <TokenTracker />
      </div>
    </AppShell>
  );
}
