import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";
import { BookmarkButton } from "@/components/BookmarkButton";
import { OwenPage } from "./owen";
import { settingsCards } from "@/data/settingsCards";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Recommended Settings for Owen Reagan — 2023 Genesis GV60 Performance" },
    { name: "description", content: "Owen's personalized recommended settings for the 2023 Genesis GV60 Performance." },
    { property: "og:title", content: "Recommended Settings for Owen Reagan" },
    { property: "og:description", content: "Personalized defaults across driving, comfort, weather, Apple, charging, safety, and maintenance." },
  ]}),
  component: SettingsHub,
});

function SettingsHub() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <SectionHeader
        eyebrow="Personalized"
        title="Recommended Settings for Owen Reagan"
        description="The tuned defaults for Owen's 2023 Genesis GV60 Performance — organized by the moment you're in."
      />

      <div className="flex gap-2 flex-wrap">
        <Chip tone="primary">For Owen</Chip>
        <Chip>Tap a scenario</Chip>
      </div>

      <section className="grid gap-3 sm:grid-cols-2">
        {settingsCards.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="card-glass block p-4 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-semibold">{s.title}</h3>
              {s.tag && (
                <span className="text-[10px] uppercase tracking-wider bg-primary/15 text-primary rounded-full px-2 py-0.5">{s.tag}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{s.summary}</p>
          </a>
        ))}
      </section>

      <div className="copper-rule" />

      <section className="space-y-3">
        <h2 className="text-2xl font-display font-semibold">Full recommended settings</h2>
        <p className="text-sm text-muted-foreground">
          The complete list of Owen-specific defaults follows, grouped by scenario.
        </p>
      </section>

      <OwenPage />

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Ready to apply them in the car? Use{" "}
        <Link to="/quick-start" className="text-primary">Quick Start</Link> for the guided checklist.
      </div>
    </div>
  );
}
