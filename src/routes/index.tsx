import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const liveAppUrl = import.meta.env.VITE_PUBLIC_APP_URL as string | undefined;

  return (
    <div className="container-app py-8 space-y-10">
      <section className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Owner Companion</p>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-[1.05]">
          Owen's <span className="text-primary">GV60</span> Companion
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A personalized guide for Owen Reagan's 2023 Genesis GV60 Performance. Two ways in — a fast
          checklist for sitting in the car, or the full chapter-by-chapter owner guide.
        </p>
        <div className="copper-rule" />
        <p className="text-xs text-muted-foreground">
          2023 Genesis GV60 Performance · Exterior target:{" "}
          <span className="text-primary">Atacama Copper / Atacama Copper Matte</span>
        </p>
        {liveAppUrl && (
          <p className="text-[11px] text-muted-foreground">
            <a href={liveAppUrl} className="text-primary underline underline-offset-2">
              Live app
            </a>
          </p>
        )}

      </section>

      <section className="grid gap-4">
        <ModeCard
          to="/in-car"
          eyebrow="Right now"
          title="In the Car Now"
          description="Big-button dashboard for the moments you're actually sitting in the driver's seat — pair the phone, fix CarPlay, set regen, prep for winter."
          cta="Open dashboard"
          badge="One-hand"
          featured
        />
        <ModeCard
          to="/quick-start"
          eyebrow="Mode 1"
          title="Quick Start"
          description="A short guided checklist to use while sitting in the GV60 — walk through the essentials in about 10 minutes."
          cta="Start checklist"
          badge="~10 min"
        />
        <ModeCard
          to="/guide"
          eyebrow="Mode 2"
          title="Full Guide"
          description="Every chapter — settings, driver assistance, charging, troubleshooting, and Owen's tuned recommendations across the vehicle."
          cta="Open guide"
          badge="Complete"
        />
        <ModeCard
          to="/owen"
          eyebrow="Personalized"
          title="Recommended Settings for Owen Reagan"
          description="Owen's tuned defaults for daily drive mode, regen, weather setups, phone pairing, charging, navigation, and more."
          cta="View Owen's setup"
          badge="For Owen"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-display font-semibold">Jump to</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <QuickLink to="/guide/safety" label="Safety & Driver Assist" />
          <QuickLink to="/guide/charging" label="Charging & Range" />
          <QuickLink to="/guide/drive-modes" label="Drive Modes & Regen" />
          <QuickLink to="/guide/phone-carplay" label="Phone & CarPlay" />
          <QuickLink to="/guide/navigation" label="Navigation" />
          <QuickLink to="/guide/maintenance" label="Maintenance & Kit" />
          <QuickLink to="/troubleshooting" label="Troubleshooting" />
          <QuickLink to="/owen" label="For Owen" />
          <QuickLink to="/favorites" label="★ Favorites" />
          <QuickLink to="/in-car" label="In the Car Now" />
        </div>
      </section>
    </div>
  );
}

function ModeCard({
  to,
  eyebrow,
  title,
  description,
  cta,
  badge,
  featured,
}: {
  to: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  badge: string;
  featured?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`card-glass block p-5 transition hover:border-primary/60 active:scale-[0.99] ${featured ? "ring-1 ring-primary/40" : ""}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        <span className="text-[10px] uppercase tracking-wider bg-primary/15 text-primary rounded-full px-2 py-0.5">
          {badge}
        </span>
      </div>
      <h3 className="text-2xl font-display font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <p className="mt-4 text-sm font-medium text-primary">{cta} →</p>
    </Link>
  );
}

function QuickLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-lg border border-border bg-card/50 px-3 py-3 hover:border-primary/50 transition"
    >
      {label} <span className="text-primary">→</span>
    </Link>
  );
}
