import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, Chip, ImagePlaceholder } from "@/components/guide";
import { imageChecklist } from "@/data/imageChecklist";

export const Route = createFileRoute("/images")({
  head: () => ({ meta: [
    { title: "Image Production Checklist — Owen's GV60 Companion" },
    { name: "description", content: "Photos needed to complete the GV60 companion guide." },
  ]}),
  component: ImagesPage,
});

function ImagesPage() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Production"
        title="Image Production Checklist"
        description="The photos still needed to bring the guide to full visual polish."
      />
      <div className="flex gap-2 flex-wrap">
        <Chip tone="primary">{imageChecklist.length} shots</Chip>
        <Chip>Placeholder</Chip>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {imageChecklist.map((c) => (
          <li key={c.id} className="card-glass p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 px-1">
              Chapter: {c.chapter}
            </p>
            <ImagePlaceholder image={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

