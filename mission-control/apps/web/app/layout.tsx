import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'GoldenEra Mission Control',
  description: 'Operational cockpit for GoldenEra Empire'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
