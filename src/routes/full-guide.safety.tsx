import { createFileRoute, Link } from "@tanstack/react-router";
import { Chip } from "@/components/guide";
import { SafetyChapter } from "./guide.safety";

export const Route = createFileRoute("/full-guide/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Driver Assistance — GV60 Full Guide" },
      {
        name: "description",
        content:
          "Every ADAS system on the GV60 with recommended sensitivities and Owen's defaults.",
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
      <SafetyChapter />
    </div>
  );
}
