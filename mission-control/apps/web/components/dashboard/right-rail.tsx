export function RightRail() {
  return (
    <div className="space-y-3">
      <section className="glass p-4">
        <h4 className="text-sm font-semibold mb-2">Bandwidth</h4>
        <div className="text-xs opacity-70">Available for new tasks</div>
      </section>

      <section className="glass p-4">
        <h4 className="text-sm font-semibold mb-2">Recent Documents</h4>
        <div className="text-xs opacity-60">No documents yet</div>
      </section>

      <section className="glass p-4">
        <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
        <ul className="text-xs space-y-1 opacity-80">
          <li>• Workflow Queue</li>
          <li>• Client Intelligence</li>
          <li>• Cron Jobs</li>
        </ul>
      </section>
    </div>
  );
}
