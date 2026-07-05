import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, Chip, ImagePlaceholder } from "@/components/guide";
import { imageSources, imageSourcePreferences } from "@/data/imageSources";

export const Route = createFileRoute("/images")({
  head: () => ({
    meta: [
      { title: "Image Source Checklist — Owen's GV60 Companion" },
      {
        name: "description",
        content: "Source-safe image references and photo needs for the GV60 companion guide.",
      },
    ],
  }),
  component: ImagesPage,
});

function ImagesPage() {
  const needsReview = imageSources.filter((image) => image.reviewRequired).length;
  const needsReplacement = imageSources.filter((image) => image.replacementNeeded).length;

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Production"
        title="Image Source Checklist"
        description="Source-safe visual references for replacing guide placeholders without copying unclear third-party images into the repo."
      />
      <div className="flex gap-2 flex-wrap">
        <Chip tone="primary">{imageSources.length} image needs</Chip>
        <Chip>{needsReplacement} replacements</Chip>
        <Chip>{needsReview} need review</Chip>
      </div>

      <section className="card-glass p-4 space-y-3 text-sm">
        <h2 className="font-display font-semibold">Source rules</h2>
        <p className="text-muted-foreground leading-relaxed">{imageSourcePreferences.usageNote}</p>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary mb-1">
            Exterior color target
          </p>
          <p className="font-medium">{imageSourcePreferences.targetExteriorColor}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-primary mb-1">
            Fallback order
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
            {imageSourcePreferences.fallbackOrder.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <ul className="grid gap-4 sm:grid-cols-2">
        {imageSources.map((c) => (
          <li key={c.id} className="card-glass p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1 px-1">
              {c.category} · Chapter: {c.chapterId}
              {c.sectionId ? ` · ${c.sectionId}` : ""}
            </p>
            <ImagePlaceholder
              image={{
                id: c.id,
                title: c.title,
                description: c.description,
                desiredImage: c.desiredImage,
                altText: c.altText,
                priority: c.priority,
                chapter: c.chapterId,
                category: c.category,
                sourceUrl: c.sourceUrl,
                sourceName: c.sourceName,
                licenseNotes: c.licenseNotes,
                usageStatus: c.usageStatus,
                preferredSourceType: c.preferredSourceType,
                replacementNeeded: c.replacementNeeded,
                reviewRequired: c.reviewRequired,
                notes: c.notes,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
