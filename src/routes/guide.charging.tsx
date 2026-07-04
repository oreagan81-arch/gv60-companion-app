import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip } from "@/components/guide";

export const Route = createFileRoute("/guide/charging")({
  head: () => ({
    meta: [
      { title: "Charging & Range — GV60 Full Guide" },
      { name: "description", content: "Charging targets, home charging, remote climate, and the range mindset Owen should keep." },
      { property: "og:title", content: "Charging & Range — GV60" },
      { property: "og:description", content: "Moderate daily target, higher pre-trip, plug in for climate." },
    ],
  }),
  component: Chapter,
});

function Chapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div><Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 04"
        title="Charging & Range"
        description="Charge for tomorrow's drive, not just tomorrow's percentage."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">At a glance</h2>
        <SettingTable rows={[
          ["Daily charge target", "Moderate"],
          ["Pre-trip target", "Higher (raise the night before)"],
          ["Home charging", "Level 2 if possible"],
          ["Remote climate", "Use while plugged in"],
          ["Range mindset", "Percentage first, estimate second"],
        ]} />
      </section>

      <FeatureCard
        title="Daily charge target"
        whatItDoes="Sets how full the GV60 charges each night."
        recommendation="Moderate daily target. Raise the night before a longer trip."
        bestFor={["Battery longevity", "Everyday range headroom", "Predictable morning starts"]}
        changeWhen={["Road trip tomorrow → raise target the night before, not the morning of"]}
        ownerNote="Percentages don't lie. Estimates guess. Plan by battery %."
      />

      <FeatureCard
        title="Home charging — Level 2"
        whatItDoes="A 240V home charger delivers a full overnight charge with off-peak electricity."
        recommendation="Install Level 2 at home if practical."
        bestFor={["Full overnight recovery", "Cheaper electricity", "Easy preconditioning"]}
        changeWhen={["Level 1 only if L2 isn't feasible — expect much slower recovery"]}
        ownerNote="The single biggest lifestyle upgrade in EV ownership."
      />

      <FeatureCard
        title="Remote climate — plugged in"
        whatItDoes="Warms or cools the cabin (and the battery) using shore power before Owen drives off."
        recommendation="Use remote climate while plugged in."
        bestFor={["Cold mornings", "Hot afternoons", "Winter range protection"]}
        changeWhen={["Unplugged → use sparingly to protect range"]}
        ownerNote="Climate on shore power = free comfort."
      />

      <FeatureCard
        title="Range mindset"
        whatItDoes="How to think about how far the GV60 will actually go."
        recommendation="Read battery percentage first, then range estimate as a sanity check."
        bestFor={["Calm long-drive planning", "Avoiding range anxiety"]}
        changeWhen={["Cold weather, high speeds, headwinds → discount the estimate further"]}
        ownerNote="Estimates guess based on recent driving. Percentage is the truth."
      />

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 04</Chip>
        <Link to="/owen#target" className="text-xs text-primary self-center">Owen's charging defaults →</Link>
      </div>
    </div>
  );
}
