const commits = [
  'feat(design): Transform Mission Control to Liquid Glass UI',
  'feat(mvp): Token tracker with soft/hard limits',
  'feat(board): Agile lanes with persistent moves',
  'chore(recovery): Add changelog + recovery notes'
];

export function RecentCommits() {
  return (
    <section className="glass p-4">
      <h3 className="text-base font-semibold mb-3">Recent Commits</h3>
      <div className="space-y-2">
        {commits.map((c) => (
          <div key={c} className="glass p-3">
            <div className="text-sm">{c}</div>
            <div className="text-xs opacity-60 mt-1">Jarvis Mac</div>
          </div>
        ))}
      </div>
    </section>
  );
}
