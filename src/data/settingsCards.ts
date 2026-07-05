export type SettingsItem = {
  feature: string;
  setting: string;
  why: string;
  changeWhen: string;
  bestFor?: string;
  related?: { to: string; label: string };
};

export type SettingsCard = {
  id: string;
  title: string;
  summary: string;
  tag?: string;
  items: SettingsItem[];
};

/**
 * Owen Reagan's tuned defaults for the 2023 Genesis GV60 Performance.
 * Every card here is the single source of truth for both /settings and /owen.
 */
export const settingsCards: SettingsCard[] = [
  {
    id: "everyday",
    title: "Everyday Driving",
    tag: "Baseline",
    summary: "Comfort mode, moderate regen, Auto Hold on. The daily baseline.",
    items: [
      {
        feature: "Daily default drive mode",
        setting: "Comfort",
        why: "Owen's baseline. Everything else is a purposeful switch.",
        changeWhen: "Snow → Snow mode. Dry canyon / track day → Sport or Sport+.",
        bestFor: "Daily commuting, mixed roads, passengers on board.",
        related: { to: "/full-guide/driving", label: "Drive modes & regen" },
      },
      {
        feature: "Daily regen starting point",
        setting: "Auto Regen or Level 2",
        why: "Auto is a great learner. Level 2 gives Owen predictable feel.",
        changeWhen: "Passengers → Level 1–2. Downhill / heavy traffic → step higher.",
        bestFor: "Efficient daily driving without being harsh on lift-off.",
      },
      {
        feature: "Auto Hold",
        setting: "On",
        why: "Keeps the brakes applied at stops so Owen's foot can rest — smoother, calmer city driving.",
        changeWhen: "Off only for parade-crawl traffic or precision maneuvering.",
        bestFor: "Stop-and-go traffic, red lights, drive-thrus.",
      },
    ],
  },
  {
    id: "efficiency",
    title: "Efficiency",
    tag: "Range",
    summary: "Eco mode, higher regen, climate tuned for range on longer trips.",
    items: [
      {
        feature: "Drive mode",
        setting: "Eco",
        why: "Softens throttle and climate draw. Range headroom without drama.",
        changeWhen: "Merging traffic or steep grades → step up to Comfort.",
        bestFor: "Longer drives, hot days, low battery cushion.",
      },
      {
        feature: "Regen",
        setting: "Auto or Level 3",
        why: "Recaptures more energy in slowdowns without full one-pedal drama.",
        changeWhen: "Passengers or unfamiliar roads → step down.",
        bestFor: "Highway rolling traffic, mountain descents.",
      },
    ],
  },
  {
    id: "comfort",
    title: "Passenger Comfort",
    tag: "Guests",
    summary: "Smoother regen, gentler climate, quieter cabin choices.",
    items: [
      {
        feature: "Passenger comfort regen",
        setting: "Level 1–2",
        why: "Regen is where guests feel EV harshness first. Lower it for them.",
        changeWhen: "Solo commute → step up to Auto / Level 3.",
        bestFor: "Kids, older riders, dinner-party mode, pets.",
      },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    tag: "Fun",
    summary: "Sport or Sport+, sharper throttle. Boost saved for the right moment.",
    items: [
      {
        feature: "Performance setup",
        setting: "Sport or Sport+ (dry & safe only)",
        why: "GV60 Performance has the goods. Respect the road first.",
        changeWhen: "Anytime traction, visibility, or passenger comfort is a factor.",
        bestFor: "Empty on-ramps, dry canyon runs, track events.",
      },
      {
        feature: "Boost Mode",
        setting: "Special-use only",
        why: "Boost is a party trick, not a driving style. Use it deliberately.",
        changeWhen: "Never as a casual daily-use button. Treat it like a tool.",
        bestFor: "Safe, dry, open on-ramps and demonstrations.",
      },
    ],
  },
  {
    id: "rain",
    title: "Rain",
    tag: "Weather",
    summary: "Softer regen, more following distance, headlights on, ADAS relaxed.",
    items: [
      {
        feature: "Rain setup",
        setting: "Eco or Comfort · low-to-moderate regen",
        why: "Smoothness is safety. Lower regen so lift-off doesn't upset the rear.",
        changeWhen: "Stops raining and roads dry → return to daily default.",
        bestFor: "Wet commutes, downpours, standing water.",
        related: { to: "/full-guide/safety", label: "Rain safety card" },
      },
    ],
  },
  {
    id: "winter",
    title: "Winter",
    tag: "Weather",
    summary: "Preconditioning, tire pressure, gentler acceleration, higher charge floor.",
    items: [
      {
        feature: "Winter setup",
        setting: "Snow, Eco, or Comfort · low-to-moderate regen",
        why: "Precondition while plugged in. Clean sensors. Add distance.",
        changeWhen: "Roads clear and dry → daily default.",
        bestFor: "Snow, ice, cold mornings, salted roads.",
      },
    ],
  },
  {
    id: "roadtrip",
    title: "Road Trip",
    tag: "Long haul",
    summary: "Charge to 90–100%, plan DC stops, precondition before fast charging.",
    items: [
      {
        feature: "Charging target",
        setting: "Moderate daily · higher before trips",
        why: "Charge for tomorrow's drive, not just tomorrow's percentage.",
        changeWhen: "Road trip tomorrow → raise the night before.",
        bestFor: "Battery longevity + everyday range headroom.",
        related: { to: "/full-guide/charging", label: "Charging guide" },
      },
      {
        feature: "Range mindset",
        setting: "Battery percentage first, range estimate second",
        why: "Percentages don't lie. Estimates guess.",
        changeWhen: "Estimate is a helpful sanity check, not a promise.",
        bestFor: "Steady, calm long-drive planning.",
      },
    ],
  },
  {
    id: "shared",
    title: "Shared Vehicle",
    tag: "Household",
    summary: "Guest driver profile, valet-friendly defaults, secondary phone rules.",
    items: [
      {
        feature: "Multiple phones",
        setting: "Add secondary phones only after primary works reliably",
        why: "One at a time. Test each addition on a real drive.",
        changeWhen: "If primary connection gets glitchy, remove secondaries and rebuild.",
        bestFor: "Household or work phone as a secondary device.",
      },
    ],
  },
  {
    id: "carplay",
    title: "Apple / CarPlay",
    tag: "Phone",
    summary: "Owen's iPhone paired first. Native path only. One phone at a time.",
    items: [
      {
        feature: "CarPlay",
        setting: "Use native setup first",
        why: "The car does this well. Don't add hardware you don't need.",
        changeWhen: "Only buy dongles / adapters if the native path truly fails.",
        bestFor: "Wireless CarPlay right out of the box.",
        related: { to: "/full-guide/apple", label: "Phone & CarPlay" },
      },
      {
        feature: "Phone setup",
        setting: "Pair Owen's primary iPhone first",
        why: "Extra phones on top of a flaky connection just multiply problems.",
        changeWhen: "Never add multiple phones before the primary is rock-solid.",
        bestFor: "One clean, reliable connection that just works.",
      },
      {
        feature: "Navigation",
        setting: "Apple Maps daily · Google for search · Waze for alerts · Built-in as backup",
        why: "Owen doesn't need one winner — he needs the right tool for the trip.",
        changeWhen: "No signal or CarPlay dropout → built-in navigation.",
        bestFor: "Apple ecosystem daily; other apps for their strengths.",
        related: { to: "/full-guide/apple", label: "Navigation guide" },
      },
    ],
  },
  {
    id: "charging",
    title: "Charging",
    tag: "Battery",
    summary: "Daily 60–80%, road-trip 90–100%. Precondition. Plug in for climate.",
    items: [
      {
        feature: "Home charging",
        setting: "Level 2 if possible",
        why: "The single biggest lifestyle upgrade in EV ownership.",
        changeWhen: "Level 1 only if L2 install isn't practical.",
        bestFor: "Overnight full charge, cheaper electricity, easier preconditioning.",
      },
      {
        feature: "Remote climate",
        setting: "Use while plugged in",
        why: "Climate on shore power = free comfort.",
        changeWhen: "Unplugged → use sparingly to protect range.",
        bestFor: "Warm/cool the cabin without spending battery.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    tag: "ADAS",
    summary: "ADAS on with sensible sensitivities. Learn each system before disabling.",
    items: [
      {
        feature: "Driver assistance alerts",
        setting: "Keep alerts ON at first · learn each one before disabling",
        why: "Don't turn off a warning just because it surprised you once.",
        changeWhen: "Only after you truly know what an alert is telling you.",
        bestFor: "Building trust and understanding of each system.",
        related: { to: "/full-guide/safety", label: "Safety chapter" },
      },
      {
        feature: "Smart Cruise following distance",
        setting: "Medium–long",
        why: "If cruise feels abrupt, distance is almost always the answer.",
        changeWhen: "Rain / fatigue / passengers → longer.",
        bestFor: "Smoother braking, comfortable passengers, wet-road margin.",
      },
      {
        feature: "Parking",
        setting: "Use cameras early and often",
        why: "Easier to avoid a curb than correct after you've kissed it.",
        changeWhen: "Never — open the camera before you're already in trouble.",
        bestFor: "Curbs, garages, chargers, tight parallel spots.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    tag: "Care",
    summary: "Weekly walkaround, gentle cleaning, tire rotations, in-car kit.",
    items: [
      {
        feature: "Weekly maintenance",
        setting: "Tires · cameras/sensors · charge port · charging cable",
        why: "Five minutes weekly saves whole afternoons later.",
        changeWhen: "After storms, road trips, or salty winter roads → check sooner.",
        bestFor: "Catching small issues before they become expensive ones.",
        related: { to: "/full-guide/maintenance", label: "Maintenance guide" },
      },
      {
        feature: "In-car kit",
        setting: "Microfiber, towel, gloves, charging cards, tire gauge, backup cable",
        why: "The stuff you don't have is the stuff you'll need.",
        changeWhen: "Restock immediately after using anything from it.",
        bestFor: "Every real EV owner situation you actually run into.",
      },
      {
        feature: "Cleaning",
        setting: "Avoid harsh chemicals on screens, gloss trim, cameras, sensors",
        why: "Clean often, clean gently. Aggressive cleaners cost more than dirt.",
        changeWhen: "Damaged trim can't be un-damaged. Use gentle products, always.",
        bestFor: "Keeping interior finishes, screens, and detection surfaces intact.",
      },
    ],
  },
];

/** A short "at-a-glance" quick reference derived from the settings cards. */
export const atAGlance: [string, string][] = [
  ["Drive mode (daily)", "Comfort"],
  ["Regen (daily)", "Auto or Level 2"],
  ["Regen (passengers)", "Level 1–2"],
  ["Rain", "Eco / Comfort · low-mod regen"],
  ["Winter", "Snow / Eco / Comfort · low-mod regen"],
  ["Performance", "Sport / Sport+ · dry & safe only"],
  ["Boost", "Special-use only"],
  ["Smart Cruise distance", "Medium–long"],
  ["Charging target", "Moderate daily · higher pre-trip"],
  ["Primary nav", "Apple Maps"],
];

export function getSettingsCard(id: string): SettingsCard | undefined {
  return settingsCards.find((c) => c.id === id);
}
