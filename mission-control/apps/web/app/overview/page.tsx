import { LiveActivity } from '@/components/dashboard/live-activity';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RecentCommits } from '@/components/dashboard/recent-commits';
import { RightRail } from '@/components/dashboard/right-rail';
import { AppShell } from '@/components/layout/app-shell';
import { TokenTracker } from '@/components/tokens/token-tracker';

export default function OverviewPage() {
  return (
    <AppShell>
      <div className="space-y-4">
        <header>
          <h1 className="text-2xl font-semibold">Mission Control</h1>
          <p className="text-sm opacity-70">Real-time overview of all systems</p>
        </header>

        <OverviewCards />

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4">
          <div className="space-y-4">
            <LiveActivity />
            <RecentCommits />
            <TokenTracker />
          </div>
          <RightRail />
        </div>
      </div>
    </AppShell>
  );
}
