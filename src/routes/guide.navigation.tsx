import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip } from "@/components/guide";

export const Route = createFileRoute("/guide/navigation")({
  head: () => ({
    meta: [
      { title: "Navigation — GV60 Full Guide" },
      { name: "description", content: "Apple Maps, Google Maps, Waze, and built-in navigation — how Owen uses each." },
      { property: "og:title", content: "Navigation — GV60" },
      { property: "og:description", content: "The right nav app for the right moment." },
    ],
  }),
  component: Chapter,
});

function Chapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div><Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 03"
        title="Navigation"
        description="Four apps, four jobs. Owen doesn't need one winner — he needs the right tool for the trip."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">At a glance</h2>
        <SettingTable rows={[
          ["Daily Apple ecosystem use", "Apple Maps"],
          ["Search-heavy trips", "Google Maps"],
          ["Alerts / unfamiliar highways", "Waze"],
          ["Backup / no signal", "Built-in navigation"],
        ]} />
      </section>

      <FeatureCard
        title="Apple Maps — the daily default"
        whatItDoes="Native, calm, and deeply integrated with Owen's iPhone and CarPlay."
        recommendation="Use for daily driving in the Apple ecosystem."
        bestFor={["Commutes", "Familiar routes", "Clean CarPlay experience", "Handoff from phone → car"]}
        changeWhen={["Hunting for a specific business → Google Maps", "Heavy traffic / cops / hazards → Waze"]}
        ownerNote="Apple Maps is the quietest default. Let it be."
      />

      <FeatureCard
        title="Google Maps — for search"
        whatItDoes="Best-in-class place data — reviews, hours, photos, obscure businesses."
        recommendation="Use for search-heavy trips and unfamiliar destinations."
        bestFor={["Finding places", "Reviews and hours", "Travel", "Restaurants and services"]}
        changeWhen={["Familiar commute → Apple Maps handles it fine"]}
        ownerNote="You're paying Google in attention for its data. Worth it when the data matters."
      />

      <FeatureCard
        title="Waze — for alerts"
        whatItDoes="Crowd-sourced hazards, speed traps, closures, and traffic reports."
        recommendation="Use on unfamiliar highways and long drives."
        bestFor={["Road trips", "Unknown highways", "Traffic-heavy commutes"]}
        changeWhen={["Short local errands → Apple/Google is enough"]}
        ownerNote="Waze is loud on purpose. Turn the chirps down before you turn the app off."
      />

      <FeatureCard
        title="Built-in navigation — the backup"
        whatItDoes="Works without phone signal or CarPlay; integrates with vehicle systems."
        recommendation="Use when phone signal drops, CarPlay disconnects, or on remote routes."
        bestFor={["Cell dead zones", "Rural driving", "CarPlay glitches"]}
        changeWhen={["Signal returns → CarPlay + Apple/Google Maps"]}
        ownerNote="Keep it in mind, not in daily rotation."
      />

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 03</Chip>
        <Link to="/owen#nav" className="text-xs text-primary self-center">Owen's nav defaults →</Link>
      </div>
    </div>
  );
}
