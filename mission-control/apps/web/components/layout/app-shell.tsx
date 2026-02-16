import { ReactNode } from 'react';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[280px_1fr]">
      <aside className="glass m-4 p-4">Mission Control</aside>
      <main className="p-4">{children}</main>
    </div>
  );
}
