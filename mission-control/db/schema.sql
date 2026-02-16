-- Mission Control initial schema (PostgreSQL)

create table if not exists ventures (
  id uuid primary key,
  name text not null unique,
  owner text,
  created_at timestamptz default now()
);

create table if not exists agents (
  id uuid primary key,
  name text not null unique,
  type text not null,
  owner text,
  default_model text not null,
  status text not null,
  created_at timestamptz default now()
);

create table if not exists agent_state_events (
  id bigserial primary key,
  agent_id uuid not null references agents(id),
  from_state text,
  to_state text not null,
  reason text,
  ts timestamptz default now()
);

create table if not exists token_events (
  id bigserial primary key,
  ts timestamptz not null default now(),
  agent_id uuid references agents(id),
  venture_id uuid references ventures(id),
  model text not null,
  prompt_tokens int not null default 0,
  completion_tokens int not null default 0,
  total_tokens int not null default 0,
  duration_ms int,
  provider_req_id text
);

create table if not exists model_pricing (
  id bigserial primary key,
  provider text not null,
  model text not null,
  input_per_1k numeric(12,6) not null,
  output_per_1k numeric(12,6) not null,
  effective_from timestamptz not null default now(),
  unique(provider, model, effective_from)
);

create table if not exists boards (
  id uuid primary key,
  venture_id uuid not null references ventures(id),
  name text not null,
  created_at timestamptz default now()
);

create table if not exists board_columns (
  id uuid primary key,
  board_id uuid not null references boards(id),
  name text not null,
  position int not null,
  wip_limit int,
  unique(board_id, position)
);

create table if not exists tasks (
  id uuid primary key,
  board_id uuid not null references boards(id),
  column_id uuid not null references board_columns(id),
  title text not null,
  description text,
  owner_type text not null,
  owner_id text,
  priority text not null default 'medium',
  estimate_points int,
  blocked_reason text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists task_history (
  id bigserial primary key,
  task_id uuid not null references tasks(id),
  event_type text not null,
  from_val text,
  to_val text,
  actor text not null,
  ts timestamptz default now()
);

create table if not exists automation_rules (
  id uuid primary key,
  name text not null,
  condition_json jsonb not null,
  action_json jsonb not null,
  enabled boolean not null default true,
  cooldown_sec int not null default 300,
  created_at timestamptz default now()
);

create table if not exists audit_logs (
  id bigserial primary key,
  actor_id text not null,
  actor_role text not null,
  action text not null,
  resource text not null,
  resource_id text,
  before_json jsonb,
  after_json jsonb,
  ip inet,
  ts timestamptz default now()
);
