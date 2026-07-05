import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeader, Chip } from "@/components/guide";
import { search, type SearchResult, type SearchSource } from "@/lib/search";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [
    { title: "Search — Owen's GV60 Companion" },
    { name: "description", content: "Search Owen's GV60 companion by feature, setting, or topic." },
  ]}),
  component: SearchPage,
});

const examples = [
  "CarPlay", "wrong phone connects", "regen", "Boost",
  "charging limit", "winter range", "tire pressure",
  "Auto Hold", "Smart Cruise", "Apple Maps",
  "clean sensors", "valet mode",
];

function sourceClass(s: SearchSource) {
  switch (s) {
    case "Troubleshooting": return "bg-amber-500/15 text-amber-400";
    case "Setting": return "bg-primary/15 text-primary";
    case "Chapter": return "bg-primary/15 text-primary";
    case "Section": return "bg-muted text-muted-foreground";
    case "Image": return "bg-muted text-muted-foreground";
  }
}

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const words = Array.from(new Set(q.split(/\s+/).filter(Boolean)));
  if (!words.length) return text;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const splitRe = new RegExp(`(${escaped.join("|")})`, "gi");
  const testRe = new RegExp(`^(?:${escaped.join("|")})$`, "i");
  const parts = text.split(splitRe);
  return parts.map((p, i) =>
    testRe.test(p) ? <mark key={i} className="bg-primary/25 text-foreground rounded-sm px-0.5">{p}</mark> : <span key={i}>{p}</span>
  );
}

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => search(q), [q]);
  const hasQuery = q.trim() !== "";

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Find anything"
        title="Search"
        description="Search across chapters, settings, troubleshooting, and image notes."
      />

      <div className="card-glass p-4 sticky top-14 z-30 bg-background/95 backdrop-blur">
        <label htmlFor="q" className="text-[10px] uppercase tracking-[0.2em] text-primary">Search</label>
        <div className="mt-1 flex items-center gap-2">
          <input
            id="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try 'CarPlay' or 'winter range'…"
            autoFocus
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-base outline-none focus:border-primary"
          />
          {hasQuery && (
            <button onClick={() => setQ("")} className="text-xs text-muted-foreground underline">Clear</button>
          )}
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">
          {hasQuery
            ? `${results.length} ${results.length === 1 ? "result" : "results"}`
            : "Client-side search across all in-app content."}
        </p>
      </div>

      {!hasQuery ? (
        <div className="card-glass p-5 space-y-3">
          <h2 className="font-display font-semibold">Try one of these</h2>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setQ(ex)}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs hover:border-primary/60 hover:text-primary transition"
              >
                {ex}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            Or browse the{" "}
            <Link to="/full-guide" className="text-primary">Full Guide</Link>,{" "}
            <Link to="/settings" className="text-primary">Recommended Settings</Link>, or{" "}
            <Link to="/troubleshooting" className="text-primary">Troubleshooting</Link>.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="card-glass p-5 space-y-3">
          <div className="flex gap-2 flex-wrap"><Chip>No exact match found</Chip></div>
          <p className="text-sm text-muted-foreground">
            Nothing matched <span className="italic">"{q}"</span>. Try a shorter word, or check:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Link to="/troubleshooting" className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground">Troubleshooting</Link>
            <Link to="/full-guide" className="rounded-md border border-border px-3 py-2 text-xs">Full Guide</Link>
            <Link to="/settings" className="rounded-md border border-border px-3 py-2 text-xs">Recommended Settings</Link>
          </div>
        </div>
      ) : (
        <ul className="grid gap-2">
          {results.map((r) => (
            <ResultCard key={r.id} r={r} query={q} />
          ))}
        </ul>
      )}
    </div>
  );
}

function ResultCard({ r, query }: { r: SearchResult; query: string }) {
  const href = r.hash ? `${r.to}#${r.hash}` : r.to;
  return (
    <li className="card-glass p-4">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-display font-semibold text-base leading-snug">{highlight(r.title, query)}</h3>
        <span className={`shrink-0 text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${sourceClass(r.source)}`}>
          {r.source}
        </span>
      </div>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">{r.category}</p>
      <p className="text-sm text-muted-foreground">{highlight(r.excerpt, query)}</p>
      <div className="mt-3">
        <a href={href} className="inline-flex items-center rounded-md bg-primary/15 text-primary px-3 py-1.5 text-xs font-medium hover:bg-primary/25 transition">
          Open →
        </a>
      </div>
    </li>
  );
}
