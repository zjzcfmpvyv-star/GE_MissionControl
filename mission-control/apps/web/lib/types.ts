export type AgentStatus = 'IDLE' | 'WORKING' | 'BLOCKED' | 'ERROR' | 'UPDATING';

export type Agent = {
  id: string;
  name: string;
  status: AgentStatus;
  model: string;
  contextWindow: number;
  task: string;
  eta: string;
  tokenDay: number;
  costDay: number;
};

export type TokenEvent = {
  id: string;
  ts: string;
  agentId: string;
  project: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCost: number;
};

export type BoardTask = {
  id: string;
  title: string;
  venture: string;
  priority: 'P0' | 'P1' | 'P2';
  ownerType: 'human' | 'agent';
  owner: string;
  column: 'Backlog' | 'Sprint Ready' | 'In Progress' | 'Review' | 'Testing' | 'Blocked' | 'Done';
  updatedAt: string;
};

export type Store = {
  agents: Agent[];
  tokenEvents: TokenEvent[];
  tasks: BoardTask[];
  limits: {
    dailySoft: number;
    dailyHard: number;
    monthlySoft: number;
    monthlyHard: number;
  };
};
