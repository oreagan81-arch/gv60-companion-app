import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/full-guide/driving")({
  head: () => ({ meta: [
    { title: "Driving Like a Pro — GV60 Full Guide" },
    { name: "description", content: "Drive modes, regen, one-pedal, Boost, and smooth long-distance habits." },
  ]}),
  component: Page,
});

function Page() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div><Link to="/full-guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 03"
        title="Driving Like a Pro"
        description="Smooth inputs, right mode for the moment, and using Boost with respect."
      />
      <div className="flex gap-2 flex-wrap"><Chip tone="primary">Draft</Chip></div>

      <div className="card-glass p-5 space-y-3">
        <h2 className="text-lg font-display font-semibold">Draft coverage</h2>
        <p className="text-sm text-muted-foreground">
          For now, the deep chapter on drive modes and regen lives in the
          original guide. It will fold into this chapter in the next pass.
        </p>
        <Link to="/guide/drive-modes" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Read the existing Drive Modes & Regen chapter →
        </Link>
      </div>

      <div className="card-glass p-5 space-y-2">
        <h3 className="font-display font-semibold">Planned sub-sections</h3>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>Comfort, Eco, Sport, and My Mode — when to use each</li>
          <li>Regen levels and one-pedal driving</li>
          <li>Boost — when it's appropriate, and when it isn't</li>
          <li>Highway habits, lane discipline, and following distance</li>
          <li>Bad weather adjustments</li>
        </ul>
      </div>
    </div>
  );
}
