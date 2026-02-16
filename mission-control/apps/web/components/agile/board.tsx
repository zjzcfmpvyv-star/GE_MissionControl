'use client';

import { useEffect, useState } from 'react';

type Task = {
  id: string;
  title: string;
  venture: string;
  priority: 'P0' | 'P1' | 'P2';
  ownerType: 'human' | 'agent';
  owner: string;
  column: 'Backlog' | 'Sprint Ready' | 'In Progress' | 'Review' | 'Testing' | 'Blocked' | 'Done';
};

const columns: Task['column'][] = ['Backlog', 'Sprint Ready', 'In Progress', 'Review', 'Testing', 'Blocked', 'Done'];

export function AgileBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function refresh() {
    const res = await fetch('/api/board');
    const data = await res.json();
    setTasks(data.tasks);
  }

  async function move(taskId: string, column: Task['column']) {
    await fetch('/api/board', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId, column })
    });
    refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-7 gap-3">
      {columns.map((col) => (
        <div key={col} className="glass p-3 min-h-48">
          <div className="font-medium text-sm mb-2">{col}</div>
          <div className="space-y-2">
            {tasks.filter((t) => t.column === col).map((task) => (
              <div key={task.id} className="glass p-2 text-xs space-y-1">
                <div className="font-medium">{task.title}</div>
                <div className="opacity-70">{task.venture} · {task.priority}</div>
                <div className="opacity-70">{task.ownerType === 'agent' ? '🤖' : '👤'} {task.owner}</div>
                <select className="w-full mt-1 bg-transparent border rounded p-1" value={task.column} onChange={(e) => move(task.id, e.target.value as Task['column'])}>
                  {columns.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
