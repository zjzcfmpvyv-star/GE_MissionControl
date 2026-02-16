import { execSync } from 'node:child_process';

export async function GET() {
  try {
    const cwd = '/Users/jarvisjoseph/.openclaw/workspace';
    const statusRaw = execSync('openclaw status --all --json', {
      cwd,
      timeout: 15000,
      encoding: 'utf-8'
    });

    let usage: unknown = null;
    try {
      const usageRaw = execSync('openclaw status --usage --json', {
        cwd,
        timeout: 10000,
        encoding: 'utf-8'
      });
      usage = JSON.parse(usageRaw);
    } catch {
      usage = null;
    }

    const status = JSON.parse(statusRaw);
    return Response.json({ ok: true, status, usage });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Failed to read OpenClaw status'
      },
      { status: 500 }
    );
  }
}
