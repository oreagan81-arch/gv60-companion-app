import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip } from "@/components/guide";

export const Route = createFileRoute("/guide/phone-carplay")({
  head: () => ({
    meta: [
      { title: "Phone & CarPlay — GV60 Full Guide" },
      { name: "description", content: "Pairing Owen's iPhone, using CarPlay natively, and adding secondary phones the right way." },
      { property: "og:title", content: "Phone & CarPlay — GV60" },
      { property: "og:description", content: "Native first. Primary phone first. Then everything else." },
    ],
  }),
  component: Chapter,
});

function Chapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div><Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link></div>
      <SectionHeader
        eyebrow="Chapter 02"
        title="Phone & CarPlay"
        description="A calm, layered approach: get one phone right, then think about adding more."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">At a glance</h2>
        <SettingTable rows={[
          ["CarPlay", "Use native setup first"],
          ["Primary phone", "Owen's iPhone — pair first"],
          ["Secondary phones", "Add after primary is reliable"],
          ["Bluetooth audio", "Default to CarPlay path"],
        ]} />
      </section>

      <FeatureCard
        title="CarPlay — native first"
        whatItDoes="Wireless CarPlay lets Owen's iPhone drive maps, music, messages, and calls through the GV60's screen."
        recommendation="Use the native setup path before buying any dongles or adapters."
        bestFor={["Daily driving", "Navigation", "Music & podcasts", "Calls & messages"]}
        changeWhen={["Only add hardware if the native path truly fails after multiple clean pairings"]}
        ownerNote="The car does this well. Don't add hardware you don't need."
        troubleshoot="CarPlay flaky? Unpair, restart the phone, remove other paired devices, and re-pair fresh."
        image="Center screen — CarPlay home"
      />

      <FeatureCard
        title="Primary phone pairing"
        whatItDoes="A single, reliable phone connection that just works every time Owen sits down."
        recommendation="Pair Owen's primary iPhone first, and only that phone, until it's rock-solid."
        bestFor={["A predictable in-car experience", "Fewer 'why won't it connect' moments"]}
        changeWhen={["If the primary connection ever gets flaky, remove other devices first"]}
        ownerNote="One clean pairing beats three glitchy ones every time."
      />

      <FeatureCard
        title="Adding secondary phones"
        whatItDoes="Household or work phones can share the car — but only once the primary is solid."
        recommendation="Add secondary phones only after the primary phone works reliably. Test each addition on a real drive."
        bestFor={["Shared household use", "Work + personal split"]}
        changeWhen={["Connection weirdness after adding → remove the new device and rebuild"]}
        ownerNote="One phone at a time. Verify before adding the next."
      />

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 02</Chip>
        <Link to="/owen#carplay" className="text-xs text-primary self-center">Owen's phone defaults →</Link>
      </div>
    </div>
  );
}
