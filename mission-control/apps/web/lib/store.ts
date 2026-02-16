import fs from 'node:fs';
import path from 'node:path';
import { seed } from '@/data/seed';
import { Store, TokenEvent } from './types';

const STORE_PATH = path.join(process.cwd(), 'data', 'store.json');

export function readStore(): Store {
  if (!fs.existsSync(STORE_PATH)) {
    fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true });
    fs.writeFileSync(STORE_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }
  return JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8')) as Store;
}

export function writeStore(next: Store) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(next, null, 2));
}

export function addTokenEvent(event: Omit<TokenEvent, 'id' | 'ts' | 'totalTokens'>) {
  const store = readStore();
  const totalTokens = event.promptTokens + event.completionTokens;
  const nextEvent: TokenEvent = {
    ...event,
    id: crypto.randomUUID(),
    ts: new Date().toISOString(),
    totalTokens
  };
  store.tokenEvents.unshift(nextEvent);
  writeStore(store);
  return nextEvent;
}

export function moveTask(taskId: string, column: Store['tasks'][number]['column']) {
  const store = readStore();
  const task = store.tasks.find((t) => t.id === taskId);
  if (!task) return null;
  task.column = column;
  task.updatedAt = new Date().toISOString();
  writeStore(store);
  return task;
}
