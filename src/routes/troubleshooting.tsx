import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — Owen's GV60 Companion" },
      { name: "description", content: "Common GV60 issues and where to look first." },
      { property: "og:title", content: "GV60 Troubleshooting" },
      { property: "og:description", content: "The four usual suspects and how to work through them." },
    ],
  }),
  component: Troubleshooting,
});

const items = [
  { q: "Forward warnings happen too often", a: "Check following distance, driving style, warning sensitivity, traffic, and sensor cleanliness. Distance is usually the answer." },
  { q: "Blind-spot warning seems inconsistent", a: "Clean rear/side sensor areas. Weather and fast-approaching vehicles behave differently — expect it." },
  { q: "Lane system feels confused", a: "Check lane markings, the windshield camera area, weather, construction, and status icons in the driver display." },
  { q: "Smart Cruise brakes too hard", a: "Increase following distance and retest in lighter traffic. Sensitivity is a last resort." },
  { q: "Parking sensors beep too much", a: "Check proximity to curbs, walls, poles, bikes, snow, and sensor dirt." },
  { q: "Camera view is blurry", a: "Clean the lens gently with a microfiber cloth. Avoid harsh chemicals." },
  { q: "Rear cross-traffic warning fails to alert", a: "Back out slower. Clean the sensors. Remember: parked vehicles can block detection." },
  { q: "Driver assistance unavailable", a: "Check whether cameras or sensors are blocked by snow, mud, glare, rain, or road conditions." },
  { q: "CarPlay keeps dropping", a: "Unpair the phone, restart it, remove other paired devices, and re-pair fresh. Native path first." },
  { q: "Range estimate looks wrong", a: "Estimate is based on recent driving. Read battery percentage first, then estimate as a sanity check." },
  { q: "Slower than expected charging", a: "Check connector cleanliness, cable condition, battery temperature (precondition!), and the station itself." },
  { q: "Car won't take a home L2 charge", a: "Check breaker, EVSE fault lights, connector seating, and charge-port debris. Try a scheduled charge later." },
];

function Troubleshooting() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Reference"
        title="Troubleshooting"
        description="Most complaints fall into four buckets — dirty sensors, bad weather, unclear road markings, or a setting you haven't learned yet."
      />

      <div className="grid gap-2">
        {items.map((it) => (
          <details key={it.q} className="card-glass p-4">
            <summary className="cursor-pointer font-medium">{it.q}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{it.a}</p>
          </details>
        ))}
      </div>

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Still stuck? Cross-check the{" "}
        <Link to="/guide/safety" className="text-primary">Safety chapter</Link> or Owen's{" "}
        <Link to="/owen" className="text-primary">Recommended Settings</Link>.
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip tone="primary">Fast reference</Chip>
        <Chip>Mobile-friendly</Chip>
      </div>
    </div>
  );
}
