"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { data } from "@/lib/data";


type Line = { kind: "in" | "out"; text: string };

const PROMPT = "dhruv@portfolio ~ %";

function formatBlock(title: string, lines: string[]) {
  return [
    `\n${title}`,
    ...lines.map((l) => `  ${l}`),
    ""
  ].join("\n");
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState<number | null>(null);
  const [lines, setLines] = useState<Line[]>(() => [
    {
      kind: "out",
      text:
        "Welcome.\nType `help` to see commands.\n",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const commands = useMemo(() => {
    return {
      help: () =>
        [
          "Commands:",
          "  help        show this list",
          "  about       quick intro",
          "  projects    featured work",
          "  experience  internships + research",
          "  skills      tools & stack",
          "  contact     links",
          "  clear       clear terminal",
        ].join("\n"),

      about: () =>
        formatBlock("ABOUT", [
          `${data.name} — ${data.headline}`,
          data.summary,
        ]),

      projects: () => {
        const blocks = data.projects.map((p) =>
          [
            `• ${p.name} (${p.stack})`,
            `  - ${p.oneLiner}`,
            ...p.bullets.map((b) => `  - ${b}`),
            `  Links: ${p.links.join(" | ")}`,
            "",
          ].join("\n")
        );
        return `\nPROJECTS\n${blocks.join("")}`;
      },

      experience: () => {
        const blocks = data.experience.map((e) =>
          [
            `• ${e.org} — ${e.title} (${e.when})`,
            ...e.bullets.map((b) => `  - ${b}`),
            "",
          ].join("\n")
        );
        return `\nEXPERIENCE\n${blocks.join("")}`;
      },

      skills: () =>
        formatBlock("SKILLS", [
          `Languages: ${data.skills.languages.join(", ")}`,
          `Frameworks: ${data.skills.frameworks.join(", ")}`,
          `Tools: ${data.skills.tools.join(", ")}`,
        ]),

      contact: () =>
        formatBlock("CONTACT", [
          `Email: ${data.contact.email}`,
          `LinkedIn: ${data.contact.linkedin}`,
          `GitHub: ${data.contact.github}`,
        ]),

      clear: () => "__CLEAR__",
    } as const;
  }, []);

  function run(cmdRaw: string) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    setLines((prev) => [...prev, { kind: "in", text: `${PROMPT} ${cmd}` }]);

    const [name] = cmd.split(/\s+/);
    const fn = (commands as any)[name];

    if (!fn) {
      setLines((prev) => [
        ...prev,
        { kind: "out", text: `Command not found: ${name}\nType \`help\`.\n` },
      ]);
      return;
    }

    const out = fn();
    if (out === "__CLEAR__") {
      setLines([{ kind: "out", text: "" }]);
      return;
    }

    setLines((prev) => [...prev, { kind: "out", text: out }]);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    run(input);
    setHistory((h) => [...h, input]);
    setHistIndex(null);
    setInput("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      setHistIndex((idx) => {
        const next = idx === null ? history.length - 1 : Math.max(0, idx - 1);
        setInput(history[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;
      setHistIndex((idx) => {
        if (idx === null) return null;
        const next = Math.min(history.length - 1, idx + 1);
        setInput(history[next] ?? "");
        return next;
      });
    } else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      run(input);
      setHistory((h) => [...h, input]);
      setHistIndex(null);
      setInput("");
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  return (
    <div className="font-mono text-sm">
      <div
        ref={scrollRef}
        className="h-[420px] overflow-auto rounded-xl border border-neutral-800 bg-black/40 p-3"
      >
        {lines.map((l, i) => (
          <pre
            key={i}
            className={
              l.kind === "in"
                ? "text-neutral-200 whitespace-pre-wrap"
                : "text-neutral-300 whitespace-pre-wrap"
            }
          >
            {l.text}
          </pre>
        ))}

        <form onSubmit={onSubmit} className="mt-2 flex items-center gap-2">
          <span className="text-neutral-400">{PROMPT}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoFocus
            spellCheck={false}
            className="w-full bg-transparent outline-none text-neutral-100 placeholder:text-neutral-600"
            placeholder="help"
          />
        </form>

        <p className="mt-2 text-xs text-neutral-600">
          Enter to run • Ctrl/Cmd+Enter also runs • ↑/↓ for history
        </p>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {["help", "projects", "experience", "contact"].map((c) => (
          <button
            key={c}
            onClick={() => run(c)}
            className="rounded-xl border border-neutral-800 bg-neutral-950/60 px-3 py-2 text-left text-neutral-200 hover:bg-neutral-900"
          >
            <span className="text-neutral-400">$</span> {c}
          </button>
        ))}
      </div>
    </div>
  );
}
