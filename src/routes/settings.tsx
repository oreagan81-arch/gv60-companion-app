import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";
import { OwenPage } from "./owen";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Recommended Settings for Owen Reagan — 2023 Genesis GV60 Performance" },
    { name: "description", content: "Owen's personalized recommended settings for the 2023 Genesis GV60 Performance." },
    { property: "og:title", content: "Recommended Settings for Owen Reagan" },
    { property: "og:description", content: "Personalized defaults across driving, comfort, weather, Apple, charging, safety, and maintenance." },
  ]}),
  component: SettingsHub,
});

const scenarios = [
  { id: "everyday", title: "Everyday Driving", blurb: "Comfort mode, regen level 2, Auto Hold on. The daily baseline.", tag: "Baseline" },
  { id: "efficiency", title: "Efficiency", blurb: "Eco mode, higher regen, climate tuned for range on longer trips.", tag: "Range" },
  { id: "comfort", title: "Passenger Comfort", blurb: "Smoother regen, gentler climate, quieter cabin choices.", tag: "Guests" },
  { id: "performance", title: "Performance", blurb: "Sport mode, sharper throttle. Boost saved for the right moment.", tag: "Fun" },
  { id: "rain", title: "Rain", blurb: "Softer regen, more following distance, headlights on, ADAS relaxed.", tag: "Weather" },
  { id: "winter", title: "Winter", blurb: "Preconditioning, tire pressure checks, gentler acceleration, higher charge floor.", tag: "Weather" },
  { id: "roadtrip", title: "Road Trip", blurb: "Charge to 90–100%, plan DC stops, precondition before fast charging.", tag: "Long haul" },
  { id: "shared", title: "Shared Vehicle", blurb: "Guest driver profile, valet-friendly defaults, secondary phone rules.", tag: "Household" },
  { id: "carplay", title: "Apple / CarPlay", blurb: "Owen's iPhone paired first. Native path only. One phone at a time.", tag: "Phone" },
  { id: "charging", title: "Charging", blurb: "Daily 60–80%, road-trip 90–100%. Precondition. Plug in for climate.", tag: "Battery" },
  { id: "safety", title: "Safety", blurb: "ADAS on with sensible sensitivities. Learn each system before disabling.", tag: "ADAS" },
  { id: "maintenance", title: "Maintenance", blurb: "Weekly walkaround, gentle cleaning, tire rotations, in-car kit.", tag: "Care" },
];

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
        {scenarios.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="card-glass block p-4 hover:border-primary/60 transition">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-semibold">{s.title}</h3>
              <span className="text-[10px] uppercase tracking-wider bg-primary/15 text-primary rounded-full px-2 py-0.5">{s.tag}</span>
            </div>
            <p className="text-sm text-muted-foreground">{s.blurb}</p>
          </a>
        ))}
      </section>

      <div className="copper-rule" />

      <section className="space-y-3">
        <h2 className="text-2xl font-display font-semibold">Full recommended settings</h2>
        <p className="text-sm text-muted-foreground">
          The complete list of Owen-specific defaults follows, grouped by system.
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
