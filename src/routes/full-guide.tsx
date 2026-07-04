import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/full-guide")({
  head: () => ({
    meta: [
      { title: "Full Guide — Owen's GV60 Companion" },
      { name: "description", content: "The complete chapter-by-chapter owner guide for the 2023 Genesis GV60 Performance." },
      { property: "og:title", content: "GV60 Full Guide" },
      { property: "og:description", content: "Chapter-by-chapter owner companion." },
    ],
  }),
  component: FullGuideLayout,
});

type Status = "Expanded" | "Draft" | "Needs content";

const chapters: { to: string; num: string; title: string; blurb: string; status: Status }[] = [
  { to: "/full-guide/quick-start", num: "01", title: "First Week Quick Start Guide", blurb: "The essentials to know in your first seven days with the car.", status: "Expanded" },
  { to: "/full-guide/cabin-tour", num: "02", title: "Complete Cabin Tour", blurb: "Every control, screen, storage nook, and interior feature.", status: "Needs content" },
  { to: "/full-guide/driving", num: "03", title: "Driving Like a Pro", blurb: "Drive modes, regen, one-pedal, Boost, and smooth long-distance habits.", status: "Draft" },
  { to: "/full-guide/technology", num: "04", title: "Complete Technology Guide", blurb: "Infotainment, cluster, HUD, voice, profiles, and OTA updates.", status: "Needs content" },
  { to: "/full-guide/apple", num: "05", title: "Apple Ecosystem Guide", blurb: "iPhone pairing, CarPlay, Apple Maps, AirPods, and handoff patterns.", status: "Draft" },
  { to: "/full-guide/charging", num: "06", title: "Charging, Battery, and Range Guide", blurb: "Home L2, DC fast, preconditioning, limits, and road-trip planning.", status: "Expanded" },
  { to: "/full-guide/safety", num: "07", title: "Safety and Driver Assistance Guide", blurb: "Every ADAS system, recommended sensitivities, and Owen's defaults.", status: "Expanded" },
  { to: "/full-guide/maintenance", num: "08", title: "Maintenance, Cleaning, and Care Guide", blurb: "Weekly checks, gentle cleaning, tires, and the in-car kit.", status: "Expanded" },
];

function statusClass(s: Status) {
  if (s === "Expanded") return "bg-primary/15 text-primary";
  if (s === "Draft") return "bg-amber-500/15 text-amber-400";
  return "bg-muted text-muted-foreground";
}

function FullGuideLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/full-guide" || pathname === "/full-guide/";
  if (!isIndex) return <Outlet />;

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Full Guide</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold">Chapter index</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Eight chapters covering the GV60 end-to-end. Chapters marked <em>Expanded</em> have full
          content today; others are being written.
        </p>
        <div className="copper-rule" />
      </div>

      <ul className="grid gap-3">
        {chapters.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className="card-glass block p-4 hover:border-primary/60 transition">
              <div className="flex items-start gap-4">
                <span className="text-primary font-display text-2xl leading-none pt-1">{c.num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-display font-semibold">{c.title}</h2>
                    <span className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${statusClass(c.status)}`}>{c.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{c.blurb}</p>
                  <p className="mt-2 text-xs text-primary">Open chapter →</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Looking for the personalized version? See{" "}
        <Link to="/settings" className="text-primary">Recommended Settings for Owen Reagan</Link>.
      </div>
    </div>
  );
}
