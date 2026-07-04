import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [
    { title: "Search — Owen's GV60 Companion" },
    { name: "description", content: "Search Owen's GV60 companion by feature, setting, or topic." },
  ]}),
  component: SearchPage,
});

const examples = [
  "CarPlay", "regen", "Boost", "charging limit", "winter range",
  "tire pressure", "Auto Hold", "Smart Cruise", "Apple Maps",
  "clean sensors", "valet mode",
];

function SearchPage() {
  const [q, setQ] = useState("");

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Find anything"
        title="Search"
        description="Search across chapters, settings, and troubleshooting entries."
      />

      <div className="card-glass p-4">
        <label htmlFor="q" className="text-xs uppercase tracking-wider text-muted-foreground">Search</label>
        <input
          id="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try 'CarPlay' or 'winter range'…"
          className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-base outline-none focus:border-primary"
        />
      </div>

      {q.trim() === "" ? (
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
            Full-content search is coming in the next pass — right now this is the search shell.
          </p>
        </div>
      ) : (
        <div className="card-glass p-5">
          <div className="flex gap-2 flex-wrap mb-3">
            <Chip tone="primary">Query</Chip>
            <Chip>{q}</Chip>
          </div>
          <p className="text-sm text-muted-foreground">
            Search results will appear here once indexing is wired up. For now,
            try the chapter pages directly.
          </p>
        </div>
      )}
    </div>
  );
}
