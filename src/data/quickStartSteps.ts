export type QuickStartItem = {
  id: string;
  title: string;
  detail: string;
  link?: { to: string; label: string };
};

export type QuickStartSection = {
  section: string;
  items: QuickStartItem[];
};

export const quickStartSteps: QuickStartSection[] = [
  {
    section: "Sit down & sign in",
    items: [
      {
        id: "profile",
        title: "Select Owen's driver profile",
        detail: "Loads seat, mirror, HUD, and climate presets.",
      },
      {
        id: "phone",
        title: "Pair primary iPhone via Bluetooth",
        detail: "Add secondary phones only after this one connects reliably.",
        link: { to: "/guide/phone-carplay", label: "Phone & CarPlay guide" },
      },
      {
        id: "carplay",
        title: "Connect CarPlay (native first)",
        detail: "Try the built-in setup before buying dongles or adapters.",
      },
    ],
  },
  {
    section: "Driving essentials",
    items: [
      {
        id: "mode",
        title: "Set drive mode to Comfort",
        detail: "Owen's daily default. Sport / Sport+ only in safe dry conditions.",
      },
      {
        id: "regen",
        title: "Set regen to Auto or Level 2",
        detail: "Level 1–2 when passengers are aboard.",
      },
      {
        id: "cruise",
        title: "Confirm Smart Cruise following distance",
        detail: "Medium-long as your default.",
      },
    ],
  },
  {
    section: "Safety & awareness",
    items: [
      {
        id: "alerts",
        title: "Keep all safety alerts ON",
        detail: "Learn each warning before disabling anything.",
        link: { to: "/guide/safety", label: "Safety chapter" },
      },
      {
        id: "cameras",
        title: "Open the 360 camera once",
        detail: "Get used to it early — use cameras for parking often.",
      },
    ],
  },
  {
    section: "Navigation & audio",
    items: [
      {
        id: "nav",
        title: "Pick a nav app for today",
        detail: "Apple Maps daily · Google Maps for search · Waze for alerts · Built-in as backup.",
        link: { to: "/guide/navigation", label: "Navigation guide" },
      },
    ],
  },
  {
    section: "Charging & range",
    items: [
      {
        id: "target",
        title: "Confirm daily charge target",
        detail: "Moderate for daily. Raise before longer trips.",
        link: { to: "/guide/charging", label: "Charging guide" },
      },
      {
        id: "climate",
        title: "Precondition while plugged in",
        detail: "Use remote climate before you unplug.",
      },
    ],
  },
  {
    section: "Before you drive",
    items: [
      {
        id: "tires",
        title: "Glance at tire pressure",
        detail: "Weekly check. Sensors and cameras should be clear too.",
      },
      {
        id: "kit",
        title: "Confirm in-car kit is stocked",
        detail: "Microfiber, towel, gloves, charging cards, tire gauge, backup cable.",
      },
    ],
  },
];
