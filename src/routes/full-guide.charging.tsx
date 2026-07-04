import { createFileRoute, Link } from "@tanstack/react-router";
import { Chip } from "@/components/guide";
import { Chapter as ChargingChapter } from "./guide.charging";

export const Route = createFileRoute("/full-guide/charging")({
  head: () => ({ meta: [
    { title: "Charging, Battery & Range — GV60 Full Guide" },
    { name: "description", content: "Home L2, DC fast charging, preconditioning, and road-trip strategy for the GV60." },
  ]}),
  component: Page,
});

function Page() {
  return (
    <div>
      <div className="container-app pt-6">
        <Link to="/full-guide" className="text-xs text-muted-foreground">← Full Guide</Link>
        <div className="mt-3 flex gap-2 flex-wrap"><Chip tone="primary">Expanded</Chip></div>
      </div>
      <ChargingChapter />
    </div>
  );
}
