import { createFileRoute } from "@tanstack/react-router";
import { FullGuideChapterPage } from "@/components/guide/FullGuideChapterPage";

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
  return <FullGuideChapterPage chapterId="apple" />;
}
