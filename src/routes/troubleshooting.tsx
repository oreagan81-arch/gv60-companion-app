import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";
import { BookmarkButton } from "@/components/BookmarkButton";
import { troubleshootingCards, type TroubleshootingCategory } from "@/data/troubleshootingCards";

export const Route = createFileRoute("/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — Owen's GV60 Companion" },
      { name: "description", content: "Common GV60 issues and where to look first." },
      { property: "og:title", content: "GV60 Troubleshooting" },
      {
        property: "og:description",
        content: "The four usual suspects and how to work through them.",
      },
    ],
  }),
  component: Troubleshooting,
});

const categoryOrder: TroubleshootingCategory[] = [
  "Driver Assistance",
  "Cameras & Sensors",
  "Phone & CarPlay",
  "Charging",
  "Range",
  "Profiles & Settings",
  "Climate",
  "Maintenance",
];

function Troubleshooting() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Reference"
        title="Troubleshooting"
        description="Most complaints fall into four buckets — dirty sensors, bad weather, unclear road markings, or a setting you haven't learned yet."
      />

      {categoryOrder.map((cat) => {
        const cards = troubleshootingCards.filter((c) => c.category === cat);
        if (!cards.length) return null;
        return (
          <section key={cat} className="space-y-2">
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary">{cat}</h2>
            <div className="grid gap-2">
              {cards.map((c) => (
                <div key={c.id} className="card-glass p-4">
                  <div className="flex items-start justify-between gap-2">
                    <details className="flex-1 min-w-0">
                      <summary className="cursor-pointer font-medium">{c.problem}</summary>
                      <div className="mt-3 space-y-3 text-sm">
                        <p>
                          <span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-0.5">
                            First check
                          </span>
                          {c.firstCheck}
                        </p>
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-1">
                            Steps
                          </span>
                          <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                            {c.steps.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ol>
                        </div>
                        {c.relatedSections?.length ? (
                          <p className="text-xs">
                            {c.relatedSections.map((r) => (
                              <Link key={r.to} to={r.to} className="text-primary mr-3">
                                Related: {r.label} →
                              </Link>
                            ))}
                          </p>
                        ) : null}
                      </div>
                    </details>
                    <BookmarkButton
                      id={`trouble:${c.id}`}
                      type="troubleshooting"
                      title={c.problem}
                      category={c.category}
                      to="/troubleshooting"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Still stuck? Cross-check the{" "}
        <Link to="/guide/safety" className="text-primary">
          Safety chapter
        </Link>{" "}
        or Owen's{" "}
        <Link to="/settings" className="text-primary">
          Recommended Settings
        </Link>
        .
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip tone="primary">Fast reference</Chip>
        <Chip>Mobile-friendly</Chip>
      </div>
    </div>
  );
}
