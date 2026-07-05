import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/full-guide/quick-start")({
  head: () => ({
    meta: [
      { title: "First Week Quick Start Guide — GV60 Full Guide" },
      { name: "description", content: "The essentials to know in your first week with the GV60." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div>
        <Link to="/full-guide" className="text-xs text-muted-foreground">
          ← Full Guide
        </Link>
      </div>
      <SectionHeader
        eyebrow="Chapter 01"
        title="First Week Quick Start Guide"
        description="Not the full manual — just the moves you need in the first seven days so the car feels familiar quickly."
      />

      <div className="flex gap-2 flex-wrap">
        <Chip tone="primary">Expanded</Chip>
        <Chip>~10 min</Chip>
      </div>

      <div className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">Run the interactive checklist</h2>
        <p className="text-sm text-muted-foreground">
          The Quick Start mode walks Owen through the essentials with saved progress, so it can be
          paused and resumed while sitting in the car.
        </p>
        <Link
          to="/quick-start"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Open Quick Start →
        </Link>
      </div>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Once the checklist is comfortable, jump to{" "}
        <Link to="/full-guide/driving" className="text-primary">
          Driving Like a Pro
        </Link>{" "}
        or{" "}
        <Link to="/settings" className="text-primary">
          Owen's recommended settings
        </Link>
        .
      </div>
    </div>
  );
}
