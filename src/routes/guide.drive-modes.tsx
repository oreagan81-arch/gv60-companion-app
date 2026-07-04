import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip } from "@/components/guide";

export const Route = createFileRoute("/guide/drive-modes")({
  head: () => ({
    meta: [
      { title: "Drive Modes & Regen — GV60 Full Guide" },
      { name: "description", content: "GV60 drive modes, regen levels, and Boost — with Owen's recommended defaults." },
      { property: "og:title", content: "Drive Modes & Regen — GV60" },
      { property: "og:description", content: "Comfort, Sport, Snow, and how to think about regen and Boost." },
    ],
  }),
  component: Chapter,
});

function Chapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div><Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 01"
        title="Drive Modes & Regen"
        description="How the GV60 Performance behaves — and how Owen tunes it day-to-day."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">At a glance</h2>
        <SettingTable rows={[
          ["Daily default", "Comfort"],
          ["Daily regen", "Auto or Level 2"],
          ["With passengers", "Regen Level 1–2"],
          ["Rain", "Eco or Comfort · low–moderate regen"],
          ["Winter", "Snow / Eco / Comfort · low–moderate regen"],
          ["Performance", "Sport or Sport+ · dry & safe only"],
          ["Boost", "Special-use only"],
        ]} />
      </section>

      <FeatureCard
        title="Comfort — the daily default"
        whatItDoes="Balanced throttle, steering, and suspension feel for daily driving."
        recommendation="Owen's baseline for commuting, errands, mixed roads, and passengers."
        bestFor={["Everyday driving", "Passengers", "Long trips", "Mixed weather"]}
        changeWhen={["Snow → Snow mode", "Dry canyon / track → Sport / Sport+"]}
        ownerNote="Start every drive here. Change modes with intent, not out of habit."
        troubleshoot="Feels sluggish? You're comparing to Sport. Comfort is the point."
        image="Drive mode selector — Comfort highlighted"
      />

      <FeatureCard
        title="Sport & Sport+"
        whatItDoes="Sharper throttle, firmer steering feel, more aggressive powertrain calibration."
        recommendation="Use only in safe, dry conditions."
        bestFor={["Empty on-ramps", "Dry canyon runs", "Track events"]}
        changeWhen={["Wet roads, snow, poor visibility, passengers who dislike snap acceleration"]}
        ownerNote="Sport+ is a mood. Weather, road, and passengers still get final say."
        image="Drive mode selector — Sport/Sport+"
      />

      <FeatureCard
        title="Snow mode"
        whatItDoes="Softens throttle and adjusts vehicle behavior for low-traction surfaces."
        recommendation="Use when roads are snow-covered, icy, or slick."
        bestFor={["Snow", "Ice", "Slush", "Cold-morning parking lots"]}
        changeWhen={["Roads dry and clear → return to Comfort"]}
        ownerNote="Snow mode + winter tires + smoothness = a very confident GV60."
      />

      <FeatureCard
        title="Regen levels"
        whatItDoes="Controls how strongly the vehicle recovers energy when you lift off the accelerator."
        recommendation="Auto or Level 2 daily. Level 1–2 with passengers."
        bestFor={["Efficient daily driving", "Passenger comfort", "One-pedal-adjacent feel"]}
        changeWhen={["Downhill or heavy traffic → step up", "Rain / snow → keep low–moderate"]}
        ownerNote="Regen is where guests feel EV harshness first. Lower it for them."
        image="Steering wheel paddle regen indicator"
      />

      <FeatureCard
        title="Boost Mode"
        whatItDoes="Temporarily unlocks the GV60 Performance's peak output for a limited window."
        recommendation="Special-use performance feature — not a daily-use button."
        bestFor={["Demonstrations", "Safe, dry, open on-ramps", "Deliberate performance moments"]}
        changeWhen={["Never casually. Never in traffic. Never as a habit."]}
        ownerNote="Boost is a party trick. Respect it, and it stays fun."
      />

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 01</Chip>
        <Link to="/owen#drive-mode" className="text-xs text-primary self-center">Owen's drive-mode defaults →</Link>
      </div>
    </div>
  );
}
