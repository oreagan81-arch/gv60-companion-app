import { createFileRoute, Link } from "@tanstack/react-router";
import { Chip } from "@/components/guide";
import { Chapter as MaintenanceChapter } from "./guide.maintenance";

export const Route = createFileRoute("/full-guide/maintenance")({
  head: () => ({
    meta: [
      { title: "Maintenance, Cleaning & Care — GV60 Full Guide" },
      {
        name: "description",
        content: "Weekly checks, gentle cleaning, tires, and the in-car kit for the GV60.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <div className="container-app pt-6">
        <Link to="/full-guide" className="text-xs text-muted-foreground">
          ← Full Guide
        </Link>
        <div className="mt-3 flex gap-2 flex-wrap">
          <Chip tone="primary">Expanded</Chip>
        </div>
      </div>
      <MaintenanceChapter />
    </div>
  );
}
