import { createFileRoute } from "@tanstack/react-router";
import { FullGuideChapterPage } from "@/components/guide/FullGuideChapterPage";

export const Route = createFileRoute("/full-guide/cabin-tour")({
  head: () => ({
    meta: [
      { title: "Complete Cabin Tour — GV60 Full Guide" },
      {
        name: "description",
        content: "Every control, screen, and interior feature of the 2023 Genesis GV60.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <FullGuideChapterPage chapterId="cabin-tour" />;
}
