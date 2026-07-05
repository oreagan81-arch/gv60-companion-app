import { createFileRoute, Link } from "@tanstack/react-router";
import { InfographicCard } from "@/components/InfographicCard";
import { SectionHeader, Chip } from "@/components/guide";
import { gv60Infographics } from "@/data/infographics";

export const Route = createFileRoute("/in-car")({
  head: () => ({
    meta: [
      { title: "In the Car Now — Owen's GV60 Companion" },
      {
        name: "description",
        content: "One-tap actions for using the guide while sitting in the GV60.",
      },
    ],
  }),
  component: InCarPage,
});

type Action = {
  icon: string;
  title: string;
  hint: string;
  to: string;
  hash?: string;
  tone?: "primary" | "amber" | "default";
};

const actions: Action[] = [
  {
    icon: "📱",
    title: "Pair my iPhone",
    hint: "Primary phone first, then extras",
    to: "/guide/phone-carplay",
  },
  {
    icon: "🔧",
    title: "Fix CarPlay",
    hint: "Clean re-pair, native path only",
    to: "/troubleshooting",
    tone: "amber",
  },
  {
    icon: "🛞",
    title: "Set daily drive mode",
    hint: "Comfort baseline",
    to: "/settings",
    hash: "everyday",
  },
  {
    icon: "🌀",
    title: "Set regen",
    hint: "Auto or Level 2 for daily",
    to: "/settings",
    hash: "everyday",
  },
  {
    icon: "🔋",
    title: "Check charging target",
    hint: "Daily vs road-trip target",
    to: "/settings",
    hash: "charging",
  },
  {
    icon: "⬆️",
    title: "Check software update",
    hint: "OTA & Bluelink basics",
    to: "/full-guide/technology",
  },
  {
    icon: "🅿️",
    title: "Cameras for parking",
    hint: "Open the camera early",
    to: "/settings",
    hash: "safety",
  },
  {
    icon: "🧘",
    title: "Passenger comfort mode",
    hint: "Lower regen, gentler drive",
    to: "/settings",
    hash: "comfort",
  },
  {
    icon: "❄️",
    title: "Winter setup",
    hint: "Precondition, add distance",
    to: "/settings",
    hash: "winter",
  },
  {
    icon: "🛣️",
    title: "Road trip setup",
    hint: "Charge target, DC strategy",
    to: "/settings",
    hash: "roadtrip",
  },
  {
    icon: "🧼",
    title: "Clean sensors & cameras",
    hint: "Gentle, microfiber only",
    to: "/settings",
    hash: "maintenance",
  },
  {
    icon: "🛠",
    title: "Troubleshoot a problem",
    hint: "Common GV60 fixes",
    to: "/troubleshooting",
    tone: "amber",
  },
];

const toneClass: Record<NonNullable<Action["tone"]>, string> = {
  primary: "border-primary/50",
  amber: "border-amber-500/40",
  default: "border-border",
};

function InCarPage() {
  return (
    <div className="container-app py-6 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Right now"
        title="In the Car Now"
        description="Big buttons. One hand. Tap the thing you actually need this minute."
      />

      <div className="flex flex-wrap gap-2">
        <Chip tone="primary">Mobile-first</Chip>
        <Chip>Large tap targets</Chip>
      </div>

      <InfographicCard
        title={gv60Infographics.keyControls.title}
        description="Keep this visual nearby for the controls Owen is most likely to need from the driver's seat."
        imageSrc={gv60Infographics.keyControls.imageSrc}
        alt={gv60Infographics.keyControls.alt}
        to="/images"
        linkLabel="Open visuals"
      />

      <div className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <Link
            key={a.title}
            to={a.to as never}
            hash={a.hash}
            className={`card-glass flex flex-col justify-between min-h-[124px] p-4 border ${toneClass[a.tone ?? "default"]} hover:border-primary/60 active:scale-[0.98] transition`}
          >
            <div className="text-3xl" aria-hidden>
              {a.icon}
            </div>
            <div>
              <p className="font-display font-semibold leading-tight">{a.title}</p>
              <p className="mt-1 text-[11px] text-muted-foreground leading-snug">{a.hint}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Not what you need? Try{" "}
        <Link to="/search" className="text-primary">
          Search
        </Link>{" "}
        or open the{" "}
        <Link to="/full-guide" className="text-primary">
          Full Guide
        </Link>
        .
      </div>
    </div>
  );
}
