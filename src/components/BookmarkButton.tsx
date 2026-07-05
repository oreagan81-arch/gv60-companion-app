import type { MouseEvent } from "react";
import { useBookmarks, type Bookmark, type BookmarkType } from "@/lib/bookmarks";

type Props = {
  id: string;
  type: BookmarkType;
  title: string;
  category: string;
  to: string;
  hash?: string;
  /** Compact icon-only style vs. labelled pill. */
  variant?: "icon" | "pill";
  className?: string;
};

export function BookmarkButton({ id, type, title, category, to, hash, variant = "icon", className = "" }: Props) {
  const { isBookmarked, toggle, available } = useBookmarks();
  if (!available) return null;
  const on = isBookmarked(id);

  const handle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const b: Omit<Bookmark, "savedAt"> = { id, type, title, category, to, hash };
    toggle(b);
  };

  const label = on ? "Bookmarked" : "Bookmark";
  const icon = on ? "★" : "☆";

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handle}
        aria-pressed={on}
        aria-label={label}
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
          on ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground hover:text-foreground"
        } ${className}`}
      >
        <span aria-hidden>{icon}</span>
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-pressed={on}
      aria-label={label}
      title={label}
      className={`shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full transition ${
        on ? "text-primary bg-primary/15" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
      } ${className}`}
    >
      <span aria-hidden className="text-lg leading-none">{icon}</span>
    </button>
  );
}
