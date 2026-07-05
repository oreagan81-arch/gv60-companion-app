import { createFileRoute } from "@tanstack/react-router";
import { FullGuideChapterPage } from "@/components/guide/FullGuideChapterPage";

export const Route = createFileRoute("/full-guide/technology")({
  head: () => ({
    meta: [
      { title: "Complete Technology Guide — GV60 Full Guide" },
      {
        name: "description",
        content: "Infotainment, cluster, HUD, voice, profiles, and OTA updates.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <FullGuideChapterPage chapterId="technology" />;
}
