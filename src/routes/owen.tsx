import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, SettingTable, Chip, ImagePlaceholder } from "@/components/guide";

export const Route = createFileRoute("/owen")({
  head: () => ({
    meta: [
      { title: "Recommended Settings for Owen Reagan — 2023 Genesis GV60 Performance" },
      { name: "description", content: "Personalized recommended settings for Owen Reagan's 2023 Genesis GV60 Performance: drive modes, regen, weather setups, phone, charging, navigation, and more." },
      { property: "og:title", content: "Recommended Settings for Owen Reagan" },
      { property: "og:description", content: "Owen's tuned defaults for the 2023 Genesis GV60 Performance." },
    ],
  }),
  component: OwenPage,
});

type Rec = {
  id: string;
  title: string;
  recommendation: string;
  bestFor: string;
  changeWhen: string;
  note: string;
  related?: { to: string; label: string };
};

const groups: { name: string; recs: Rec[] }[] = [
  {
    name: "Driving",
    recs: [
      {
        id: "drive-mode",
        title: "Daily default drive mode",
        recommendation: "Comfort",
        bestFor: "Daily commuting, mixed roads, passengers on board.",
        changeWhen: "Snow → Snow mode. Dry canyon / track day → Sport or Sport+.",
        note: "Comfort is Owen's baseline. Everything else is a purposeful switch.",
        related: { to: "/guide/drive-modes", label: "Drive modes & regen" },
      },
      {
        id: "regen-daily",
        title: "Daily regen starting point",
        recommendation: "Auto Regen or Level 2",
        bestFor: "Efficient daily driving without being harsh on lift-off.",
        changeWhen: "Passengers → Level 1–2. Downhill / heavy traffic → step higher.",
        note: "Auto is a great learner. Level 2 gives Owen predictable feel.",
      },
      {
        id: "regen-pax",
        title: "Passenger comfort regen",
        recommendation: "Level 1–2",
        bestFor: "Kids, older riders, dinner-party mode, pets.",
        changeWhen: "Solo commute → step up to Auto / Level 3.",
        note: "Regen is where guests feel EV harshness first. Lower it for them.",
      },
      {
        id: "boost",
        title: "Boost Mode",
        recommendation: "Special-use only",
        bestFor: "Safe, dry, open on-ramps and demonstrations.",
        changeWhen: "Never as a casual daily-use button. Treat it like a tool.",
        note: "Boost is a party trick, not a driving style. Use it deliberately.",
      },
    ],
  },
  {
    name: "Weather setups",
    recs: [
      {
        id: "rain",
        title: "Rain setup",
        recommendation: "Eco or Comfort · low-to-moderate regen",
        bestFor: "Wet commutes, downpours, standing water.",
        changeWhen: "Stops raining and roads dry → return to daily default.",
        note: "Smoothness is safety. Lower regen so lift-off doesn't upset the rear.",
        related: { to: "/guide/safety", label: "Rain safety card" },
      },
      {
        id: "winter",
        title: "Winter setup",
        recommendation: "Snow, Eco, or Comfort · low-to-moderate regen",
        bestFor: "Snow, ice, cold mornings, salted roads.",
        changeWhen: "Roads clear and dry → daily default.",
        note: "Precondition while plugged in. Clean sensors. Add distance.",
      },
      {
        id: "perf",
        title: "Performance setup",
        recommendation: "Sport or Sport+ (dry & safe only)",
        bestFor: "Empty on-ramps, dry canyon runs, track events.",
        changeWhen: "Anytime traction, visibility, or passenger comfort is a factor.",
        note: "GV60 Performance has the goods. Respect the road first.",
      },
    ],
  },
  {
    name: "Phone, CarPlay & Nav",
    recs: [
      {
        id: "carplay",
        title: "CarPlay",
        recommendation: "Use native setup first",
        bestFor: "Wireless CarPlay right out of the box.",
        changeWhen: "Only buy dongles / adapters if the native path truly fails.",
        note: "The car does this well. Don't add hardware you don't need.",
        related: { to: "/guide/phone-carplay", label: "Phone & CarPlay" },
      },
      {
        id: "phone-primary",
        title: "Phone setup",
        recommendation: "Pair Owen's primary iPhone first",
        bestFor: "One clean, reliable connection that just works.",
        changeWhen: "Never add multiple phones before the primary is rock-solid.",
        note: "Extra phones on top of a flaky connection just multiply problems.",
      },
      {
        id: "phone-secondary",
        title: "Multiple phones",
        recommendation: "Add secondary phones only after primary works reliably",
        bestFor: "Household or work phone as a secondary device.",
        changeWhen: "If primary connection gets glitchy, remove secondaries and rebuild.",
        note: "One at a time. Test each addition on a real drive.",
      },
      {
        id: "nav",
        title: "Navigation",
        recommendation: "Apple Maps daily · Google Maps for search · Waze for alerts · Built-in as backup",
        bestFor: "Apple ecosystem daily, Google when you're hunting a place, Waze on unfamiliar highways.",
        changeWhen: "No signal or CarPlay dropout → built-in navigation.",
        note: "Owen doesn't need one winner — he needs the right tool for the trip.",
        related: { to: "/guide/navigation", label: "Navigation guide" },
      },
    ],
  },
  {
    name: "Charging & range",
    recs: [
      {
        id: "target",
        title: "Charging target",
        recommendation: "Moderate daily target · higher before trips",
        bestFor: "Battery longevity + everyday range headroom.",
        changeWhen: "Road trip tomorrow → raise the night before.",
        note: "Charge for tomorrow's drive, not just tomorrow's percentage.",
        related: { to: "/guide/charging", label: "Charging guide" },
      },
      {
        id: "home",
        title: "Home charging",
        recommendation: "Level 2 if possible",
        bestFor: "Overnight full charge, cheaper electricity, easier preconditioning.",
        changeWhen: "Level 1 only if L2 install isn't practical.",
        note: "The single biggest lifestyle upgrade in EV ownership.",
      },
      {
        id: "climate",
        title: "Remote climate",
        recommendation: "Use while plugged in",
        bestFor: "Warm/cool the cabin without spending battery.",
        changeWhen: "Unplugged → use sparingly to protect range.",
        note: "Climate on shore power = free comfort.",
      },
      {
        id: "range",
        title: "Range mindset",
        recommendation: "Battery percentage first, range estimate second",
        bestFor: "Steady, calm long-drive planning.",
        changeWhen: "Estimate is a helpful sanity check, not a promise.",
        note: "Percentages don't lie. Estimates guess.",
      },
    ],
  },
  {
    name: "Driver assistance",
    recs: [
      {
        id: "alerts",
        title: "Driver assistance alerts",
        recommendation: "Keep alerts ON at first · learn each one before disabling",
        bestFor: "Building trust and understanding of each system.",
        changeWhen: "Only after you truly know what an alert is telling you.",
        note: "Don't turn off a warning just because it surprised you once.",
        related: { to: "/guide/safety", label: "Safety chapter" },
      },
      {
        id: "cruise",
        title: "Smart Cruise following distance",
        recommendation: "Medium–long",
        bestFor: "Smoother braking, comfortable passengers, wet-road margin.",
        changeWhen: "Rain / fatigue / passengers → longer.",
        note: "If cruise feels abrupt, distance is almost always the answer.",
      },
      {
        id: "parking",
        title: "Parking",
        recommendation: "Use cameras early and often",
        bestFor: "Curbs, garages, chargers, tight parallel spots.",
        changeWhen: "Never — open the camera before you're already in trouble.",
        note: "Easier to avoid a curb than correct after you've kissed it.",
      },
    ],
  },
  {
    name: "Maintenance & kit",
    recs: [
      {
        id: "maint",
        title: "Weekly maintenance",
        recommendation: "Tires · cameras/sensors · charge port · charging cable",
        bestFor: "Catching small issues before they become expensive ones.",
        changeWhen: "After storms, road trips, or salty winter roads → check sooner.",
        note: "Five minutes weekly saves whole afternoons later.",
        related: { to: "/guide/maintenance", label: "Maintenance guide" },
      },
      {
        id: "kit",
        title: "In-car kit",
        recommendation: "Microfiber, towel, gloves, charging cards, tire gauge, backup cable",
        bestFor: "Every real EV owner situation you actually run into.",
        changeWhen: "Restock immediately after using anything from it.",
        note: "The stuff you don't have is the stuff you'll need.",
      },
      {
        id: "clean",
        title: "Cleaning",
        recommendation: "Avoid harsh chemicals on screens, gloss trim, touch controls, cameras, sensors",
        bestFor: "Keeping interior finishes, screens, and detection surfaces intact.",
        changeWhen: "Damaged trim can't be un-damaged. Use gentle products, always.",
        note: "Clean often, clean gently. Aggressive cleaners cost more than dirt.",
      },
    ],
  },
];

export function OwenPage() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Personalized</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold leading-tight">
          Recommended Settings for <span className="text-primary">Owen Reagan</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A tuned default setup for Owen's 2023 Genesis GV60 Performance. These
          are opinionated starting points — safe, comfortable, and easy to
          revisit when conditions change.
        </p>
        <div className="copper-rule" />
        <div className="flex flex-wrap gap-2">
          <Chip tone="primary">2023 GV60 Performance</Chip>
          <Chip>Owen's baseline</Chip>
          <Chip tone="success">Reviewable anytime</Chip>
        </div>
      </div>

      <section className="card-glass p-4">
        <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3">At a glance</h2>
        <SettingTable
          rows={[
            ["Drive mode (daily)", "Comfort"],
            ["Regen (daily)", "Auto or Level 2"],
            ["Regen (passengers)", "Level 1–2"],
            ["Rain", "Eco / Comfort · low-mod regen"],
            ["Winter", "Snow / Eco / Comfort · low-mod regen"],
            ["Performance", "Sport / Sport+ · dry & safe only"],
            ["Boost", "Special-use only"],
            ["Smart Cruise distance", "Medium–long"],
            ["Charging target", "Moderate daily · higher pre-trip"],
            ["Primary nav", "Apple Maps"],
          ]}
        />
      </section>

      {groups.map((g) => (
        <section key={g.name} className="space-y-4">
          <h2 className="text-lg font-display font-semibold">{g.name}</h2>
          <div className="grid gap-3">
            {g.recs.map((r) => (
              <article key={r.id} id={r.id} className="card-glass p-4 space-y-3">
                <header className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{r.title}</h3>
                </header>
                <div className="rounded-md bg-primary/10 border border-primary/30 px-3 py-2 text-sm">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-primary block">Recommended</span>
                  <span className="font-medium">{r.recommendation}</span>
                </div>
                <div className="grid gap-2 text-sm">
                  <p><span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-0.5">Best for</span><span className="text-muted-foreground">{r.bestFor}</span></p>
                  <p><span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-0.5">Change it when</span><span className="text-muted-foreground">{r.changeWhen}</span></p>
                </div>
                <blockquote className="border-l-2 border-primary pl-3 text-sm italic">
                  <span className="not-italic text-[10px] uppercase tracking-[0.15em] text-primary block mb-1">Owen suggestion</span>
                  {r.note}
                </blockquote>
                {r.related && (
                  <Link to={r.related.to} className="text-xs text-primary">
                    Related: {r.related.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      <ImagePlaceholder caption="Owen's GV60 Performance — hero exterior, 3/4 front" />

      <div className="card-glass p-4 text-sm">
        <p className="text-muted-foreground">
          Ready to try these in the car? Open the{" "}
          <Link to="/quick-start" className="text-primary">Quick Start checklist</Link>{" "}
          or dig into the{" "}
          <Link to="/guide" className="text-primary">Full Guide</Link>.
        </p>
      </div>
    </div>
  );
}
