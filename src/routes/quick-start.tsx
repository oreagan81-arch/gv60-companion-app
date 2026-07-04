import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SectionHeader, Chip } from "@/components/guide";

export const Route = createFileRoute("/quick-start")({
  head: () => ({
    meta: [
      { title: "Quick Start Checklist — Owen's GV60 Companion" },
      { name: "description", content: "A short guided in-car checklist for the 2023 Genesis GV60 Performance, tuned for Owen Reagan." },
      { property: "og:title", content: "GV60 Quick Start Checklist" },
      { property: "og:description", content: "10-minute in-car setup for Owen's Genesis GV60 Performance." },
    ],
  }),
  component: QuickStart,
});

type Item = { id: string; title: string; detail: string; link?: { to: string; label: string } };

const steps: { section: string; items: Item[] }[] = [
  {
    section: "Sit down & sign in",
    items: [
      { id: "profile", title: "Select Owen's driver profile", detail: "Loads seat, mirror, HUD, and climate presets." },
      { id: "phone", title: "Pair primary iPhone via Bluetooth", detail: "Add secondary phones only after this one connects reliably.", link: { to: "/guide/phone-carplay", label: "Phone & CarPlay guide" } },
      { id: "carplay", title: "Connect CarPlay (native first)", detail: "Try the built-in setup before buying dongles or adapters." },
    ],
  },
  {
    section: "Driving essentials",
    items: [
      { id: "mode", title: "Set drive mode to Comfort", detail: "Owen's daily default. Sport / Sport+ only in safe dry conditions." },
      { id: "regen", title: "Set regen to Auto or Level 2", detail: "Level 1–2 when passengers are aboard." },
      { id: "cruise", title: "Confirm Smart Cruise following distance", detail: "Medium-long as your default." },
    ],
  },
  {
    section: "Safety & awareness",
    items: [
      { id: "alerts", title: "Keep all safety alerts ON", detail: "Learn each warning before disabling anything.", link: { to: "/guide/safety", label: "Safety chapter" } },
      { id: "cameras", title: "Open the 360 camera once", detail: "Get used to it early — use cameras for parking often." },
    ],
  },
  {
    section: "Navigation & audio",
    items: [
      { id: "nav", title: "Pick a nav app for today", detail: "Apple Maps daily · Google Maps for search · Waze for alerts · Built-in as backup.", link: { to: "/guide/navigation", label: "Navigation guide" } },
    ],
  },
  {
    section: "Charging & range",
    items: [
      { id: "target", title: "Confirm daily charge target", detail: "Moderate for daily. Raise before longer trips.", link: { to: "/guide/charging", label: "Charging guide" } },
      { id: "climate", title: "Precondition while plugged in", detail: "Use remote climate before you unplug." },
    ],
  },
  {
    section: "Before you drive",
    items: [
      { id: "tires", title: "Glance at tire pressure", detail: "Weekly check. Sensors and cameras should be clear too." },
      { id: "kit", title: "Confirm in-car kit is stocked", detail: "Microfiber, towel, gloves, charging cards, tire gauge, backup cable." },
    ],
  },
];

function QuickStart() {
  const total = steps.reduce((n, s) => n + s.items.length, 0);
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem("qs-done") || "{}")); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("qs-done", JSON.stringify(done)); } catch {}
  }, [done]);

  const count = Object.values(done).filter(Boolean).length;
  const pct = Math.round((count / total) * 100);

  return (
    <div className="container-app py-8 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Mode 1 · Quick Start"
        title="In-Car Checklist"
        description="Sit in Owen's GV60 and tick these off. Progress saves on this device."
      />

      <div className="card-glass p-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">{count} of {total} complete</span>
          <span className="text-primary font-medium">{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
        </div>
        {count > 0 && (
          <button onClick={() => setDone({})} className="mt-3 text-xs text-muted-foreground underline">Reset checklist</button>
        )}
      </div>

      {steps.map((section) => (
        <section key={section.section} className="space-y-3">
          <h2 className="text-lg font-display font-semibold">{section.section}</h2>
          <ul className="space-y-2">
            {section.items.map((item) => {
              const isDone = !!done[item.id];
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setDone((d) => ({ ...d, [item.id]: !d[item.id] }))}
                    className={`w-full text-left card-glass p-4 flex gap-3 items-start transition ${isDone ? "opacity-60" : ""}`}
                  >
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${isDone ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/50"}`}>
                      {isDone && <span className="text-xs">✓</span>}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-medium ${isDone ? "line-through" : ""}`}>{item.title}</span>
                      <span className="block text-xs text-muted-foreground mt-1">{item.detail}</span>
                      {item.link && (
                        <Link to={item.link.to} onClick={(e) => e.stopPropagation()} className="mt-2 inline-block text-xs text-primary">
                          {item.link.label} →
                        </Link>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <div className="card-glass p-4 text-sm text-muted-foreground">
        Ready for depth? <Link to="/owen" className="text-primary">Open Owen's Recommended Settings</Link> or the <Link to="/guide" className="text-primary">Full Guide</Link>.
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Owen's defaults</Chip>
        <Chip>Mobile-first</Chip>
        <Chip tone="success">Saves locally</Chip>
      </div>
    </div>
  );
}
