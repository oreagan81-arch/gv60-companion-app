export type ChapterStatus = "Expanded" | "Draft" | "Needs content";

export type ChapterSection = {
  id: string;
  title: string;
  body?: string;
  recommendedSetting?: string;
  bestFor?: string[];
  changeItWhen?: string[];
  ownerSuggestion?: string;
  troubleshooting?: string;
  imagePlaceholder?: string;
  relatedLinks?: { to: string; label: string }[];
};

export type Chapter = {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  summary: string;
  status: ChapterStatus;
  route: string;
  /** Optional pointer to an existing detailed chapter to reuse content from. */
  legacyRoute?: string;
  sections: ChapterSection[];
};

export const chapters: Chapter[] = [
  {
    id: "quick-start",
    num: "01",
    title: "First Week Quick Start Guide",
    subtitle: "The essentials for your first seven days",
    summary: "The essentials to know in your first seven days with the car.",
    status: "Expanded",
    route: "/full-guide/quick-start",
    legacyRoute: "/quick-start",
    sections: [],
  },
  {
    id: "cabin-tour",
    num: "02",
    title: "Complete Cabin Tour",
    subtitle: "Every control, screen, and storage nook",
    summary: "Every control, screen, storage nook, and interior feature.",
    status: "Needs content",
    route: "/full-guide/cabin-tour",
    sections: [
      { id: "wheel", title: "Steering wheel controls & paddles" },
      { id: "cluster", title: "Cluster display (behind the wheel)" },
      { id: "center", title: "Center touchscreen & rotary controller" },
      { id: "sphere", title: "Crystal Sphere & Start-Stop" },
      { id: "climate", title: "Climate controls & row of hard keys" },
      { id: "console", title: "Center console storage & wireless charging" },
      { id: "doors", title: "Doors: mirrors, memory seats, windows" },
      { id: "overhead", title: "Overhead: sunroof, SOS, mic" },
      { id: "rear", title: "Rear seat: climate, USB, seat controls" },
      { id: "cargo", title: "Cargo area: cover, hooks, sub-trunk" },
    ],
  },
  {
    id: "driving",
    num: "03",
    title: "Driving Like a Pro",
    subtitle: "Modes, regen, Boost, and smooth habits",
    summary: "Drive modes, regen, one-pedal, Boost, and smooth long-distance habits.",
    status: "Draft",
    route: "/full-guide/driving",
    legacyRoute: "/guide/drive-modes",
    sections: [
      { id: "modes", title: "Comfort, Eco, Sport, My Mode — when to use each" },
      { id: "regen", title: "Regen levels and one-pedal driving" },
      { id: "boost", title: "Boost — when it's appropriate, when it isn't" },
      { id: "highway", title: "Highway habits, lane discipline, following distance" },
      { id: "weather", title: "Bad weather adjustments" },
    ],
  },
  {
    id: "technology",
    num: "04",
    title: "Complete Technology Guide",
    subtitle: "Screens, voice, profiles, updates",
    summary: "Infotainment, cluster, HUD, voice, profiles, and OTA updates.",
    status: "Needs content",
    route: "/full-guide/technology",
    sections: [
      { id: "info", title: "Infotainment layout & home screen" },
      { id: "cluster", title: "Driver cluster views & customization" },
      { id: "hud", title: "Head-up display (HUD) options" },
      { id: "voice", title: "Voice control & natural language commands" },
      { id: "profiles", title: "Driver profiles & fingerprint login" },
      { id: "ota", title: "OTA software updates" },
      { id: "bluelink", title: "Bluelink connected services" },
      { id: "nav", title: "Native navigation basics" },
    ],
  },
  {
    id: "apple",
    num: "05",
    title: "Apple Ecosystem Guide",
    subtitle: "iPhone, CarPlay, Maps, AirPods, Watch",
    summary: "iPhone pairing, CarPlay, Apple Maps, AirPods, and handoff patterns.",
    status: "Draft",
    route: "/full-guide/apple",
    legacyRoute: "/guide/phone-carplay",
    sections: [
      { id: "primary", title: "Primary iPhone pairing (do this first)" },
      { id: "carplay", title: "Wireless CarPlay setup and reliability" },
      { id: "maps", title: "Apple Maps vs Google Maps vs Waze" },
      { id: "airpods", title: "AirPods handoff etiquette in the car" },
      { id: "watch", title: "Apple Watch as a spare key idea" },
      { id: "siri", title: "Siri from the wheel" },
    ],
  },
  {
    id: "charging",
    num: "06",
    title: "Charging, Battery, and Range Guide",
    subtitle: "Home L2, DC fast, preconditioning",
    summary: "Home L2, DC fast, preconditioning, limits, and road-trip planning.",
    status: "Expanded",
    route: "/full-guide/charging",
    legacyRoute: "/guide/charging",
    sections: [],
  },
  {
    id: "safety",
    num: "07",
    title: "Safety and Driver Assistance Guide",
    subtitle: "Every ADAS system, tuned",
    summary: "Every ADAS system, recommended sensitivities, and Owen's defaults.",
    status: "Expanded",
    route: "/full-guide/safety",
    legacyRoute: "/guide/safety",
    sections: [],
  },
  {
    id: "maintenance",
    num: "08",
    title: "Maintenance, Cleaning, and Care Guide",
    subtitle: "Weekly checks, gentle cleaning, kit",
    summary: "Weekly checks, gentle cleaning, tires, and the in-car kit.",
    status: "Expanded",
    route: "/full-guide/maintenance",
    legacyRoute: "/guide/maintenance",
    sections: [],
  },
];

export function getChapter(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
