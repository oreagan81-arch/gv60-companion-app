import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, Chip, ImagePlaceholder } from "@/components/guide";
import { imageChecklist, type ImagePriority } from "@/data/imageChecklist";

export const Route = createFileRoute("/images")({
  head: () => ({ meta: [
    { title: "Image Production Checklist — Owen's GV60 Companion" },
    { name: "description", content: "Photos needed to complete the GV60 companion guide." },
  ]}),
  component: ImagesPage,
});

function priorityClass(p: ImagePriority) {
  if (p === "High") return "bg-primary/15 text-primary";
  if (p === "Medium") return "bg-amber-500/15 text-amber-400";
  return "bg-muted text-muted-foreground";
}

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
          <li key={c.id} className="card-glass p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-semibold text-sm">{c.title}</h3>
              <span className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${priorityClass(c.priority)}`}>{c.priority}</span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Chapter: {c.chapter}</p>
            <ImagePlaceholder caption={c.description} />
            <dl className="mt-2 space-y-1 text-xs">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Suggested caption</dt>
                <dd className="text-muted-foreground italic">{c.suggestedCaption}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Alt text</dt>
                <dd className="text-muted-foreground">{c.altText}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
