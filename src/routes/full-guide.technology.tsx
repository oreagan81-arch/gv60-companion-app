import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/full-guide/technology")({
  head: () => ({ meta: [
    { title: "Complete Technology Guide — GV60 Full Guide" },
    { name: "description", content: "Infotainment, cluster, HUD, voice, profiles, and OTA updates." },
  ]}),
  component: Page,
});

const areas = [
  "Infotainment layout & home screen",
  "Driver cluster views & customization",
  "Head-up display (HUD) options",
  "Voice control & natural language commands",
  "Driver profiles & fingerprint login",
  "OTA software updates",
  "Bluelink connected services",
  "Native navigation basics",
];

function Page() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div><Link to="/full-guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 04"
        title="Complete Technology Guide"
        description="How the screens, voice, and connected features fit together."
      />
      <div className="flex gap-2 flex-wrap"><Chip>Needs content</Chip></div>

      <div className="card-glass p-5 space-y-3">
        <h2 className="text-lg font-display font-semibold">Planned sections</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          {areas.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </div>
  );
}
