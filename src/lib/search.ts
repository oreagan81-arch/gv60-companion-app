import { chapters } from "@/data/chapters";
import { settingsCards } from "@/data/settingsCards";
import { troubleshootingCards } from "@/data/troubleshootingCards";
import { imageChecklist } from "@/data/imageChecklist";

export type SearchSource = "Chapter" | "Section" | "Setting" | "Troubleshooting" | "Image";

export type SearchDoc = {
  id: string;
  source: SearchSource;
  title: string;
  category: string;
  excerpt: string;
  /** Concatenated haystack, lowercased. */
  haystack: string;
  to: string;
  hash?: string;
};

function build(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  // Chapters + their sections
  for (const ch of chapters) {
    docs.push({
      id: `chapter:${ch.id}`,
      source: "Chapter",
      title: ch.title,
      category: "Full Guide",
      excerpt: ch.summary,
      haystack: [ch.title, ch.subtitle ?? "", ch.summary].join(" \n ").toLowerCase(),
      to: ch.route,
    });
    for (const s of ch.sections) {
      const parts = [
        s.title,
        s.body ?? "",
        s.recommendedSetting ?? "",
        ...(s.bestFor ?? []),
        ...(s.changeItWhen ?? []),
        s.ownerSuggestion ?? "",
        s.troubleshooting ?? "",
      ];
      const excerpt = s.body ?? s.recommendedSetting ?? `Section of ${ch.title}`;
      docs.push({
        id: `section:${ch.id}:${s.id}`,
        source: "Section",
        title: s.title,
        category: ch.title,
        excerpt,
        haystack: parts.join(" \n ").toLowerCase(),
        to: ch.route,
        hash: s.id,
      });
    }
  }

  // Settings cards + items
  for (const card of settingsCards) {
    docs.push({
      id: `setting-card:${card.id}`,
      source: "Setting",
      title: card.title,
      category: "Recommended Settings",
      excerpt: card.summary,
      haystack: [card.title, card.tag ?? "", card.summary].join(" \n ").toLowerCase(),
      to: "/settings",
      hash: card.id,
    });
    for (const item of card.items) {
      const excerpt = `${item.setting} — ${item.why}`;
      docs.push({
        id: `setting:${card.id}:${item.feature}`,
        source: "Setting",
        title: item.feature,
        category: `Settings · ${card.title}`,
        excerpt,
        haystack: [item.feature, item.setting, item.why, item.changeWhen, item.bestFor ?? ""]
          .join(" \n ")
          .toLowerCase(),
        to: "/settings",
        hash: card.id,
      });
    }
  }

  // Troubleshooting
  for (const t of troubleshootingCards) {
    docs.push({
      id: `trouble:${t.id}`,
      source: "Troubleshooting",
      title: t.problem,
      category: t.category,
      excerpt: t.firstCheck,
      haystack: [t.problem, t.category, t.firstCheck, ...t.steps].join(" \n ").toLowerCase(),
      to: "/troubleshooting",
    });
  }

  // Image checklist
  for (const img of imageChecklist) {
    docs.push({
      id: `image:${img.id}`,
      source: "Image",
      title: img.title,
      category: `Image · ${img.chapter}`,
      excerpt: img.description,
      haystack: [img.title, img.description, img.suggestedCaption, img.altText, img.chapter]
        .join(" \n ")
        .toLowerCase(),
      to: "/images",
    });
  }

  return docs;
}

export const searchIndex: SearchDoc[] = build();

export type SearchResult = SearchDoc & { score: number };

/**
 * Very small ranked substring search. Splits the query into words, requires
 * every word to appear somewhere in the doc's haystack, and boosts matches
 * that land in the title or at the start of words.
 */
export function search(query: string, limit = 40): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = [];
  for (const doc of searchIndex) {
    const title = doc.title.toLowerCase();
    let score = 0;
    let matchedAll = true;

    for (const w of words) {
      if (!doc.haystack.includes(w)) {
        matchedAll = false;
        break;
      }
      if (title.includes(w)) score += 5;
      if (title.startsWith(w)) score += 3;
      // word-boundary bump
      if (new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(doc.haystack))
        score += 1;
      score += 1;
    }

    if (!matchedAll) continue;
    // Exact phrase bonus
    if (words.length > 1 && doc.haystack.includes(q)) score += 4;

    // Source priors — troubleshooting first when it matches; then settings.
    if (doc.source === "Troubleshooting") score += 1;
    if (doc.source === "Setting") score += 0.5;

    results.push({ ...doc, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
