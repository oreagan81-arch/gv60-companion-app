import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip, ImagePlaceholder } from "@/components/guide";
import { BookmarkButton } from "@/components/BookmarkButton";
import { getChapter, type ChapterSection } from "@/data/chapters";

export const Route = createFileRoute("/full-guide/apple")({
  head: () => ({
    meta: [
      { title: "Apple Ecosystem Guide — GV60 Full Guide" },
      {
        name: "description",
        content:
          "iPhone pairing, wireless CarPlay, Apple Maps vs Google Maps vs Waze, Siri, Apple Music, Apple Watch, Driving Focus, and CarPlay troubleshooting for the GV60.",
      },
      { property: "og:title", content: "Apple Ecosystem Guide — GV60" },
      {
        property: "og:description",
        content: "The calm, Apple-first playbook for the Genesis GV60.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const chapter = getChapter("apple");
  if (!chapter) return null;

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div>
        <Link to="/full-guide" className="text-xs text-muted-foreground">
          ← Full Guide
        </Link>
      </div>

      <SectionHeader
        eyebrow={`Chapter ${chapter.num}`}
        title={chapter.title}
        description={chapter.summary}
      />

      <div className="flex gap-2 flex-wrap items-center">
        <Chip tone="primary">Expanded</Chip>
        {chapter.subtitle && <Chip>{chapter.subtitle}</Chip>}
      </div>

      {/* Quick jump */}
      <nav aria-label="Sections" className="card-glass p-4">
        <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-2">In this chapter</p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
          {chapter.sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-foreground/90 hover:text-primary">
                • {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-5">
        {chapter.sections.map((s) => (
          <SectionCard key={s.id} chapterTitle={chapter.title} section={s} />
        ))}
      </div>

      <p className="text-[11px] italic text-muted-foreground leading-relaxed pt-2">
        Details, menu paths, and behavior may vary by software version, region, and equipment.
        Confirm in your exact vehicle and official Genesis materials.
      </p>
    </div>
  );
}

function SectionCard({ chapterTitle, section }: { chapterTitle: string; section: ChapterSection }) {
  return (
    <article id={section.id} className="card-glass p-5 space-y-4 scroll-mt-24">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-display font-semibold leading-snug">{section.title}</h2>
          <div
            className="copper-rule mt-2 w-16 !bg-primary"
            style={{ background: "var(--primary)" }}
          />
        </div>
        <BookmarkButton
          id={`section:apple:${section.id}`}
          type="guide"
          title={section.title}
          category={chapterTitle}
          to="/full-guide/apple"
          hash={section.id}
        />
      </header>

      {section.body && (
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">What it does</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
        </div>
      )}

      {section.recommendedSetting && (
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">
            Recommended setting
          </p>
          <p className="text-base font-medium text-foreground">{section.recommendedSetting}</p>
        </div>
      )}

      {section.bestFor && section.bestFor.length > 0 && (
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">Best for</p>
          <ul className="text-sm space-y-0.5 text-muted-foreground">
            {section.bestFor.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      )}

      {section.changeItWhen && section.changeItWhen.length > 0 && (
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">
            Change it when
          </p>
          <ul className="text-sm space-y-0.5 text-muted-foreground">
            {section.changeItWhen.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>
      )}

      {section.ownerSuggestion && (
        <blockquote className="border-l-2 border-primary pl-3 py-1 text-sm italic text-foreground/90">
          <span className="not-italic text-[10px] uppercase tracking-[0.15em] text-primary block mb-1">
            Owner suggestion
          </span>
          {section.ownerSuggestion}
        </blockquote>
      )}

      {section.troubleshooting && (
        <details className="text-sm rounded-md bg-muted/40 border border-border/50">
          <summary className="cursor-pointer px-3 py-2 text-primary font-medium">
            Related troubleshooting
          </summary>
          <p className="px-3 pb-3 pt-1 text-muted-foreground">{section.troubleshooting}</p>
        </details>
      )}

      {section.relatedLinks && section.relatedLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {section.relatedLinks.map((l) => (
            <Link
              key={l.to + (l.label ?? "")}
              to={l.to}
              className="inline-flex items-center rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/25"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      )}

      {section.imagePlaceholder && <ImagePlaceholder caption={section.imagePlaceholder} />}
      {section.imagePlaceholders?.map((caption) => (
        <ImagePlaceholder key={caption} caption={caption} />
      ))}
    </article>
  );
}
