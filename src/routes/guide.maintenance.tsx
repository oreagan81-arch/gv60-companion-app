import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip } from "@/components/guide";

export const Route = createFileRoute("/guide/maintenance")({
  head: () => ({
    meta: [
      { title: "Maintenance & In-Car Kit — GV60 Full Guide" },
      { name: "description", content: "Weekly checks, gentle cleaning, and the in-car kit that saves you." },
      { property: "og:title", content: "Maintenance & Kit — GV60" },
      { property: "og:description", content: "Five minutes weekly saves whole afternoons." },
    ],
  }),
  component: Chapter,
});

export function Chapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div><Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 06"
        title="Maintenance & In-Car Kit"
        description="A small weekly habit keeps the GV60 feeling brand-new."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">Weekly checks</h2>
        <SettingTable rows={[
          ["Tire pressure", "Weekly — cold, before driving"],
          ["Cameras & sensors", "Wipe clean, especially after weather"],
          ["Charge port", "Inspect for debris or damage"],
          ["Charging cable", "Check connector, jacket, and strain reliefs"],
        ]} />
        <p className="text-sm italic text-primary">Owner: five minutes weekly saves whole afternoons later.</p>
      </section>

      <FeatureCard
        title="In-car kit"
        whatItDoes="A small go-bag for the everyday things EV owners actually run into."
        recommendation="Keep: microfiber cloth, towel, gloves, charging cards, tire-pressure gauge, backup cable."
        bestFor={["Public charging", "Weather", "Roadside surprises", "Long drives"]}
        changeWhen={["Restock immediately after using anything from it"]}
        ownerNote="The stuff you don't have is the stuff you'll need."
      />

      <FeatureCard
        title="Cleaning"
        whatItDoes="Keeping interior finishes and detection surfaces intact over years."
        recommendation="Avoid harsh chemicals on screens, gloss trim, touch controls, cameras, and sensors."
        bestFor={["Long-term interior condition", "Reliable sensor performance"]}
        changeWhen={["When in doubt, use less product and softer cloths"]}
        ownerNote="Damaged trim can't be un-damaged. Clean gently, always."
      />

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 06</Chip>
        <Link to="/owen#maint" className="text-xs text-primary self-center">Owen's maintenance defaults →</Link>
      </div>
    </div>
  );
}
