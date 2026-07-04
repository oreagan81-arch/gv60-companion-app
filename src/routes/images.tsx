import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, Chip, ImagePlaceholder } from "@/components/guide";

export const Route = createFileRoute("/images")({
  head: () => ({ meta: [
    { title: "Image Production Checklist — Owen's GV60 Companion" },
    { name: "description", content: "Photos needed to complete the GV60 companion guide." },
  ]}),
  component: ImagesPage,
});

const categories = [
  { id: "hero", label: "Exterior hero image", note: "Three-quarter front. Golden hour ideal." },
  { id: "dash", label: "Dashboard overview", note: "Both screens visible, powered on." },
  { id: "wheel", label: "Steering wheel controls", note: "Left and right cluster of buttons." },
  { id: "center", label: "Center screen", note: "Home layout with tiles visible." },
  { id: "devices", label: "Device Connections", note: "Bluetooth / device pairing menu." },
  { id: "carplay", label: "Apple CarPlay", note: "CarPlay home on the center screen." },
  { id: "port", label: "Charging port", note: "Open door, connector visible." },
  { id: "ev-screen", label: "EV charging screen", note: "During an active session, kW shown." },
  { id: "drive-mode", label: "Drive mode selector", note: "Rotary + mode indicator." },
  { id: "boost", label: "Boost button", note: "Wheel-mounted Boost button close-up." },
  { id: "regen", label: "Regen paddles", note: "Behind the wheel, both paddles." },
  { id: "adas", label: "Driver assistance display", note: "Cluster view with lane + car icons." },
  { id: "cam-360", label: "360 camera", note: "Overhead + side blended view." },
  { id: "climate", label: "Climate controls", note: "Hard keys + touch row." },
  { id: "sensors", label: "Sensor cleaning zones", note: "Front radar, side mirrors, rear cams." },
  { id: "kit", label: "Maintenance kit", note: "Owen's in-car essentials laid out." },
  { id: "roadtrip", label: "Road trip charging screen", note: "Route with charging stops overlaid." },
];

function ImagesPage() {
  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Production"
        title="Image Production Checklist"
        description="The photos still needed to bring the guide to full visual polish."
      />
      <div className="flex gap-2 flex-wrap">
        <Chip tone="primary">{categories.length} shots</Chip>
        <Chip>Placeholder</Chip>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {categories.map((c) => (
          <li key={c.id} className="card-glass p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-semibold text-sm">{c.label}</h3>
              <span className="text-[10px] uppercase tracking-wider bg-muted text-muted-foreground rounded-full px-2 py-0.5">Todo</span>
            </div>
            <ImagePlaceholder caption={c.note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
