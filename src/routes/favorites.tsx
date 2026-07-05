import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";
import { useBookmarks, type BookmarkType } from "@/lib/bookmarks";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites — Owen's GV60 Companion" },
      {
        name: "description",
        content: "Owen's saved guide sections, settings, and troubleshooting cards.",
      },
    ],
  }),
  component: FavoritesPage,
});

const typeLabel: Record<BookmarkType, string> = {
  guide: "Guide",
  setting: "Setting",
  troubleshooting: "Troubleshoot",
};

const typeTone: Record<BookmarkType, string> = {
  guide: "bg-primary/15 text-primary",
  setting: "bg-primary/15 text-primary",
  troubleshooting: "bg-amber-500/15 text-amber-400",
};

function FavoritesPage() {
  const { bookmarks, remove, ready, available } = useBookmarks();

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Saved"
        title="Favorites"
        description="Tap the star on any card to save it here for one-tap access in the car."
      />

      {!available && (
        <div className="card-glass p-4 text-sm text-muted-foreground">
          Bookmarks need local storage, which is unavailable in this browser or private mode.
          Everything else in the app still works — you just won't be able to save favorites.
        </div>
      )}

      {available && ready && bookmarks.length === 0 && (
        <div className="card-glass p-5 space-y-3">
          <p className="text-sm text-muted-foreground">No favorites yet.</p>
          <p className="text-sm text-muted-foreground">
            Look for the <span className="text-primary">☆</span> button on{" "}
            <Link to="/settings" className="text-primary">
              Settings
            </Link>
            ,{" "}
            <Link to="/troubleshooting" className="text-primary">
              Troubleshooting
            </Link>
            , and{" "}
            <Link to="/full-guide" className="text-primary">
              Full Guide
            </Link>{" "}
            cards.
          </p>
        </div>
      )}

      {available && bookmarks.length > 0 && (
        <ul className="grid gap-3">
          {bookmarks
            .slice()
            .sort((a, b) => b.savedAt - a.savedAt)
            .map((b) => (
              <li key={b.id} className="card-glass p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${typeTone[b.type]}`}
                      >
                        {typeLabel[b.type]}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{b.category}</span>
                    </div>
                    <h3 className="font-display font-semibold leading-snug break-words">
                      {b.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Link
                      to={b.to as never}
                      hash={b.hash}
                      className="rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-medium"
                    >
                      Open →
                    </Link>
                    <button
                      onClick={() => remove(b.id)}
                      className="text-[11px] text-muted-foreground hover:text-foreground"
                      aria-label={`Remove ${b.title}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        <Chip tone="primary">Local to this device</Chip>
        <Chip>Private</Chip>
      </div>
    </div>
  );
}
