import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Full Guide — Owen's GV60 Companion" },
      {
        name: "description",
        content: "The complete owner guide for Owen Reagan's 2023 Genesis GV60 Performance.",
      },
      { property: "og:title", content: "GV60 Full Guide" },
      { property: "og:description", content: "Complete chapter-by-chapter owner guide." },
    ],
  }),
  component: GuideLayout,
});

const chapters = [
  {
    to: "/guide/drive-modes",
    num: "01",
    title: "Drive Modes & Regen",
    blurb: "Comfort by default, Sport with intent, Boost with respect.",
  },
  {
    to: "/guide/phone-carplay",
    num: "02",
    title: "Phone & CarPlay",
    blurb: "Native first. Primary phone first. Then everything else.",
  },
  {
    to: "/guide/navigation",
    num: "03",
    title: "Navigation",
    blurb: "Apple Maps · Google Maps · Waze · Built-in — each for its moment.",
  },
  {
    to: "/guide/charging",
    num: "04",
    title: "Charging & Range",
    blurb: "Moderate daily, higher pre-trip, plug in for climate.",
  },
  {
    to: "/guide/safety",
    num: "05",
    title: "Safety & Driver Assistance",
    blurb: "Support, not self-driving. Learn each system before disabling it.",
  },
  {
    to: "/guide/maintenance",
    num: "06",
    title: "Maintenance & In-Car Kit",
    blurb: "Weekly checks, gentle cleaning, the kit that saves you.",
  },
  {
    to: "/troubleshooting",
    num: "07",
    title: "Troubleshooting",
    blurb: "Sensors, weather, signals, and the four usual suspects.",
  },
];

function GuideLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/guide" || pathname === "/guide/";
  if (!isIndex) return <Outlet />;

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Mode 2</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold">The Full Guide</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every chapter of Owen's GV60 companion. Each section carries the same structure: what it
          does, recommended setting, best for, change it when, Owen's suggestion, and related
          troubleshooting.
        </p>
        <div className="copper-rule" />
      </div>

      <ul className="grid gap-3">
        {chapters.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className="card-glass block p-4 hover:border-primary/60 transition">
              <div className="flex items-start gap-4">
                <span className="text-primary font-display text-2xl leading-none pt-1">
                  {c.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg font-display font-semibold">{c.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{c.blurb}</p>
                </div>
                <span className="text-primary self-center">→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Prefer the personalized version? Open{" "}
        <Link to="/owen" className="text-primary">
          Recommended Settings for Owen Reagan
        </Link>
        .
      </div>
    </div>
  );
}
