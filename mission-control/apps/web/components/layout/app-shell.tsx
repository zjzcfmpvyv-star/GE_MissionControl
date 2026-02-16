import Link from 'next/link';
import { Activity, Bot, ChartNoAxesCombined, KanbanSquare, ShieldAlert, Workflow } from 'lucide-react';
import { ReactNode } from 'react';

const nav = [
  { href: '/overview', label: 'Overview', icon: ChartNoAxesCombined },
  { href: '/agents', label: 'Agents', icon: Bot },
  { href: '/models', label: 'Tokens', icon: Activity },
  { href: '/agile', label: 'Agile', icon: KanbanSquare },
  { href: '/security', label: 'Security', icon: ShieldAlert },
  { href: '/automation', label: 'Automation', icon: Workflow }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 p-4">
      <aside className="glass p-4 h-fit md:sticky md:top-4">
        <div className="text-lg font-semibold mb-4">GoldenEra Mission Control</div>
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition">
                <Icon size={16} /> {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="space-y-4">{children}</main>
    </div>
  );
}
