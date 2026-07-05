import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/full-guide/apple")({
  head: () => ({ meta: [
    { title: "Apple Ecosystem Guide — GV60 Full Guide" },
    { name: "description", content: "iPhone pairing, CarPlay, Apple Maps, AirPods handoff, and Apple Watch use." },
  ]}),
  component: Page,
});

function Page() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <div><Link to="/full-guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 05"
        title="Apple Ecosystem Guide"
        description="Use the iPhone, CarPlay, and Apple services with the GV60 the calm way."
      />
      <div className="flex gap-2 flex-wrap"><Chip tone="primary">Draft</Chip></div>

      <div className="card-glass p-5 space-y-3">
        <h2 className="text-lg font-display font-semibold">Draft coverage</h2>
        <p className="text-sm text-muted-foreground">
          Detailed CarPlay and phone-pairing steps currently live in the Phone
          & CarPlay chapter. They'll fold into this Apple-first chapter next.
        </p>
        <Link to="/guide/phone-carplay" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Read the existing Phone & CarPlay chapter →
        </Link>
      </div>

      <div className="card-glass p-5 space-y-2">
        <h3 className="font-display font-semibold">Planned sub-sections</h3>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>Primary iPhone pairing (do this first)</li>
          <li>Wireless CarPlay setup and reliability</li>
          <li>Apple Maps vs Google Maps vs Waze — when to use each</li>
          <li>AirPods handoff etiquette in the car</li>
          <li>Apple Watch: navigation prompts, charging &amp; app notifications — a subtle support device, not a primary driving interface</li>
          <li>Siri from the wheel</li>
        </ul>
      </div>
    </div>
  );
}
