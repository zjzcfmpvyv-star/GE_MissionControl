import { moveTask, readStore } from '@/lib/store';

export async function GET() {
  return Response.json({ tasks: readStore().tasks });
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const task = moveTask(body.taskId, body.column);
  if (!task) return Response.json({ error: 'Task not found' }, { status: 404 });
  return Response.json({ task });
}
