import { addTokenEvent, readStore } from '@/lib/store';

export async function GET() {
  const store = readStore();
  const byModel = Object.values(
    store.tokenEvents.reduce((acc, event) => {
      if (!acc[event.model]) acc[event.model] = { model: event.model, tokens: 0, cost: 0 };
      acc[event.model].tokens += event.totalTokens;
      acc[event.model].cost += event.estimatedCost;
      return acc;
    }, {} as Record<string, { model: string; tokens: number; cost: number }>)
  );
  return Response.json({ events: store.tokenEvents, byModel, limits: store.limits });
}

export async function POST(req: Request) {
  const body = await req.json();
  const event = addTokenEvent({
    agentId: body.agentId,
    project: body.project,
    model: body.model,
    promptTokens: Number(body.promptTokens ?? 0),
    completionTokens: Number(body.completionTokens ?? 0),
    estimatedCost: Number(body.estimatedCost ?? 0)
  });
  return Response.json({ event }, { status: 201 });
}
