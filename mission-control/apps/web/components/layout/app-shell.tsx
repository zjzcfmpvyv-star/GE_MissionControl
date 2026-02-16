'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  Bot,
  ChartNoAxesCombined,
  Clock3,
  FileText,
  KanbanSquare,
  Settings,
  ShieldAlert,
  Workflow
} from 'lucide-react';
import { ReactNode } from 'react';

const nav = [
  { href: '/overview', label: 'Dashboard', icon: ChartNoAxesCombined },
  { href: '/agents', label: 'Agents', icon: Bot },
  { href: '/models', label: 'API Usage', icon: Activity },
  { href: '/agile', label: 'Sprint Board', icon: KanbanSquare },
  { href: '/security', label: 'Risk Monitor', icon: ShieldAlert },
  { href: '/automation', label: 'Cron Jobs', icon: Clock3 },
  { href: '/logs', label: 'Journal', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/strategy', label: 'Strategy', icon: Workflow }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 p-4 bg-grid">
      <aside className="glass-strong p-4 h-fit lg:sticky lg:top-4">
        <div className="glass p-3 mb-4">
          <div className="text-sm opacity-80">Mission Control</div>
          <div className="text-xs opacity-60 mt-1">Jarvis • online</div>
        </div>

        <div className="text-[11px] tracking-[0.18em] uppercase opacity-50 mb-2">Navigation</div>
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition border ${
                  active
                    ? 'bg-accent/20 border-accent/40 text-white'
                    : 'border-transparent hover:bg-white/10 hover:border-white/10 text-white/80'
                }`}
              >
                <Icon size={15} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="text-[11px] tracking-[0.16em] uppercase opacity-50 mb-2">Recent</div>
          <div className="text-sm opacity-80">index</div>
        </div>
      </aside>

      <main className="space-y-4">{children}</main>
    </div>
  );
}
