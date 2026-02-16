import { execSync } from 'node:child_process';

type Action = 'gatewayStart' | 'gatewayStop' | 'gatewayRestart' | 'doctorFix' | 'statusDeep' | 'logsTail';

const commands: Record<Action, string> = {
  gatewayStart: 'openclaw gateway start',
  gatewayStop: 'openclaw gateway stop',
  gatewayRestart: 'openclaw gateway restart',
  doctorFix: 'openclaw doctor --fix',
  statusDeep: 'openclaw status --deep',
  logsTail: 'openclaw logs --limit 120 --plain'
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const action = body?.action as Action;

    if (!action || !(action in commands)) {
      return Response.json({ ok: false, error: 'Unsupported action' }, { status: 400 });
    }

    const output = execSync(commands[action], {
      cwd: '/Users/jarvisjoseph/.openclaw/workspace',
      timeout: action === 'doctorFix' ? 120000 : 40000,
      encoding: 'utf-8'
    });

    return Response.json({ ok: true, action, output });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Control action failed';
    return Response.json({ ok: false, error: msg }, { status: 500 });
  }
}
