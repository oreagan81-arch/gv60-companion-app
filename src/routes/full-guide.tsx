import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { chapters, type ChapterStatus } from "@/data/chapters";
import { BookmarkButton } from "@/components/BookmarkButton";

export const Route = createFileRoute("/full-guide")({
  head: () => ({
    meta: [
      { title: "Full Guide — Owen's GV60 Companion" },
      { name: "description", content: "The complete chapter-by-chapter owner guide for the 2023 Genesis GV60 Performance." },
      { property: "og:title", content: "GV60 Full Guide" },
      { property: "og:description", content: "Chapter-by-chapter owner companion." },
    ],
  }),
  component: FullGuideLayout,
});

function statusClass(s: ChapterStatus) {
  if (s === "Expanded") return "bg-primary/15 text-primary";
  if (s === "Draft") return "bg-amber-500/15 text-amber-400";
  return "bg-muted text-muted-foreground";
}

function FullGuideLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/full-guide" || pathname === "/full-guide/";
  if (!isIndex) return <Outlet />;

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Full Guide</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold">Chapter index</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Eight chapters covering the GV60 end-to-end. Chapters marked <em>Expanded</em> have full
          content today; others are being written.
        </p>
        <div className="copper-rule" />
      </div>

      <ul className="grid gap-3">
        {chapters.map((c) => (
          <li key={c.id} className="card-glass p-4 hover:border-primary/60 transition">
            <div className="flex items-start gap-4">
              <Link to={c.route} className="flex items-start gap-4 flex-1 min-w-0">
                <span className="text-primary font-display text-2xl leading-none pt-1">{c.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-display font-semibold">{c.title}</h2>
                    <span className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${statusClass(c.status)}`}>{c.status}</span>
                  </div>
                  {c.subtitle && (
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{c.subtitle}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{c.summary}</p>
                  <p className="mt-2 text-xs text-primary">Open chapter →</p>
                </div>
              </Link>
              <BookmarkButton
                id={`chapter:${c.id}`}
                type="guide"
                title={c.title}
                category="Full Guide"
                to={c.route}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Looking for the personalized version? See{" "}
        <Link to="/settings" className="text-primary">Recommended Settings for Owen Reagan</Link>.
      </div>
    </div>
  );
}
