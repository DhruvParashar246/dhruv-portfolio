import TerminalCard from "@/components/TerminalCard";
import Terminal from "@/components/Terminal";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <p className="text-sm text-neutral-400">dhruv@portfolio ~</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Dhruv Parashar
            </h1>
            <p className="text-neutral-300 max-w-3xl">
              CS @ Rutgers (Math minor). I build ML + web products: computer vision pipelines,
              automation agents, and full-stack apps.
            </p>
          </header>

          <TerminalCard>
            <Terminal />
          </TerminalCard>

          <footer className="pt-6 text-sm text-neutral-500">
            Tip: try commands <span className="text-neutral-300">help</span>,{" "}
            <span className="text-neutral-300">projects</span>,{" "}
            <span className="text-neutral-300">experience</span>,{" "}
            <span className="text-neutral-300">contact</span>.
          </footer>
        </div>
      </div>
    </main>
  );
}
