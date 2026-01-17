export default function TerminalCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-950/60 shadow-lg shadow-black/30">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-neutral-500">terminal</span>
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}
