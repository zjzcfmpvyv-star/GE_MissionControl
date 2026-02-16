'use client';

import { useEffect, useState } from 'react';

type EventItem = { ts: string; type: string; detail: string };

export function Workstream24x7() {
  const [events, setEvents] = useState<EventItem[]>([]);

  async function load() {
    const res = await fetch('/api/events');
    const json = await res.json();
    setEvents(json.events ?? []);
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="glass p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">24/7 Workstream</h3>
        <span className="text-xs opacity-60">auto timeline</span>
      </div>
      <div className="space-y-2 max-h-[360px] overflow-auto pr-1">
        {events.map((e, i) => (
          <div key={i} className="glass p-3">
            <div className="text-xs opacity-60">{new Date(e.ts).toLocaleString()}</div>
            <div className="text-sm mt-1">{e.type}</div>
            <div className="text-xs opacity-70 mt-1">{e.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
