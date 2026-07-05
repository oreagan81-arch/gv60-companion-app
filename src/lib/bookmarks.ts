import { useCallback, useEffect, useState } from "react";

export type BookmarkType = "guide" | "setting" | "troubleshooting";

export type Bookmark = {
  /** Stable id: `${type}:${key}` */
  id: string;
  type: BookmarkType;
  title: string;
  /** Chapter or category label, shown as context. */
  category: string;
  /** Route to open. */
  to: string;
  /** Optional in-page hash target. */
  hash?: string;
  /** When it was saved (ms since epoch). */
  savedAt: number;
};

const KEY = "gv60.bookmarks.v1";

function storageAvailable(): boolean {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const t = "__gv60_probe__";
    window.localStorage.setItem(t, "1");
    window.localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

function read(): Bookmark[] {
  if (!storageAvailable()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Bookmark[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(list: Bookmark[]) {
  if (!storageAvailable()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // Quota or serialization — fail silently.
  }
}

/** In-memory subscriber list so multiple hook instances stay in sync. */
const listeners = new Set<() => void>();
function emit() {
  listeners.forEach((l) => l());
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBookmarks(read());
    setReady(true);
    const l = () => setBookmarks(read());
    listeners.add(l);
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) l();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(l);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const isBookmarked = useCallback((id: string) => bookmarks.some((b) => b.id === id), [bookmarks]);

  const toggle = useCallback((b: Omit<Bookmark, "savedAt">) => {
    const current = read();
    const exists = current.some((x) => x.id === b.id);
    const next = exists
      ? current.filter((x) => x.id !== b.id)
      : [...current, { ...b, savedAt: Date.now() }];
    write(next);
    emit();
  }, []);

  const remove = useCallback((id: string) => {
    write(read().filter((x) => x.id !== id));
    emit();
  }, []);

  return { bookmarks, isBookmarked, toggle, remove, ready, available: storageAvailable() };
}
