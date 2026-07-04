import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/full-guide/cabin-tour")({
  head: () => ({ meta: [
    { title: "Complete Cabin Tour — GV60 Full Guide" },
    { name: "description", content: "Every control, screen, and interior feature of the 2023 Genesis GV60." },
  ]}),
  component: Page,
});

const areas = [
  "Steering wheel controls & paddles",
  "Cluster display (behind the wheel)",
  "Center touchscreen & rotary controller",
  "Crystal Sphere & Start-Stop",
  "Climate controls & row of hard keys",
  "Center console storage & wireless charging",
  "Doors: mirrors, memory seats, window controls",
  "Overhead: sunroof, SOS button, mic",
  "Rear seat: climate, USB, seat controls",
  "Cargo area: cover, hooks, sub-trunk",
];

function Page() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div><Link to="/full-guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 02"
        title="Complete Cabin Tour"
        description="A walk-through of every switch, screen, and storage nook in the GV60 cabin."
      />
      <div className="flex gap-2 flex-wrap"><Chip>Needs content</Chip></div>

      <div className="card-glass p-5 space-y-3">
        <h2 className="text-lg font-display font-semibold">Planned sections</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          {areas.map((a) => <li key={a}>{a}</li>)}
        </ul>
        <p className="text-xs text-muted-foreground pt-2">
          Full text and photos will be imported in the next content pass.
        </p>
      </div>
    </div>
  );
}
