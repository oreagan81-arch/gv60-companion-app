import { createFileRoute } from "@tanstack/react-router";
import { FullGuideChapterPage } from "@/components/guide/FullGuideChapterPage";

export const Route = createFileRoute("/full-guide/driving")({
  head: () => ({
    meta: [
      { title: "Driving Like a Pro — GV60 Full Guide" },
      {
        name: "description",
        content: "Drive modes, regen, one-pedal, Boost, and smooth long-distance habits.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <FullGuideChapterPage chapterId="driving" />;
}
