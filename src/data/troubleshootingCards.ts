export type TroubleshootingCategory =
  | "Driver Assistance"
  | "Cameras & Sensors"
  | "Phone & CarPlay"
  | "Charging"
  | "Range";

export type TroubleshootingCard = {
  id: string;
  problem: string;
  category: TroubleshootingCategory;
  firstCheck: string;
  steps: string[];
  relatedSections?: { to: string; label: string }[];
};

export const troubleshootingCards: TroubleshootingCard[] = [
  {
    id: "forward-warn",
    problem: "Forward warnings happen too often",
    category: "Driver Assistance",
    firstCheck: "Following distance — it's almost always the answer.",
    steps: [
      "Increase Smart Cruise following distance one notch.",
      "Notice your own driving style: are you closing gaps aggressively?",
      "Adjust warning sensitivity only after two calmer drives.",
      "Clean the front radar/camera area.",
    ],
    relatedSections: [{ to: "/full-guide/safety", label: "Safety chapter" }],
  },
  {
    id: "blind-spot",
    problem: "Blind-spot warning seems inconsistent",
    category: "Driver Assistance",
    firstCheck: "Rear and side sensor cleanliness.",
    steps: [
      "Wipe sensor zones on rear bumper and side mirrors.",
      "Expect different behavior in rain, spray, and fast-approaching vehicles.",
      "Re-verify after a wash.",
    ],
    relatedSections: [{ to: "/full-guide/safety", label: "Safety chapter" }],
  },
  {
    id: "lane-confused",
    problem: "Lane system feels confused",
    category: "Driver Assistance",
    firstCheck: "Lane markings and the windshield camera area.",
    steps: [
      "Check for construction zones or faded paint.",
      "Wipe the windshield camera area from outside.",
      "Watch for status icons in the cluster to see what the car sees.",
    ],
  },
  {
    id: "cruise-brakes-hard",
    problem: "Smart Cruise brakes too hard",
    category: "Driver Assistance",
    firstCheck: "Increase following distance.",
    steps: [
      "Set distance to medium-long as your baseline.",
      "Re-test in lighter traffic before touching sensitivity.",
      "Change sensitivity only as a last resort.",
    ],
  },
  {
    id: "park-sensors",
    problem: "Parking sensors beep too much",
    category: "Cameras & Sensors",
    firstCheck: "Real proximity to curbs, walls, poles, bikes, snow.",
    steps: [
      "Clean the front and rear sensor areas.",
      "Check for snow, ice, or road grime.",
      "Confirm the surroundings are actually clear.",
    ],
  },
  {
    id: "camera-blur",
    problem: "Camera view is blurry",
    category: "Cameras & Sensors",
    firstCheck: "Lens surface — dirt, water beads, film residue.",
    steps: [
      "Wipe gently with a clean microfiber cloth.",
      "Avoid harsh chemicals or abrasive cloths.",
      "Retest after the surface dries.",
    ],
  },
  {
    id: "rct-miss",
    problem: "Rear cross-traffic warning fails to alert",
    category: "Cameras & Sensors",
    firstCheck: "Back out more slowly and clean the sensors.",
    steps: [
      "Reverse slowly out of tight spots.",
      "Remember: parked vehicles can block the sensor's view.",
      "Wipe rear sensor zones after any wet or dusty drive.",
    ],
  },
  {
    id: "driver-assist-unavail",
    problem: "Driver assistance unavailable",
    category: "Driver Assistance",
    firstCheck: "Sensor and camera obstruction.",
    steps: [
      "Look for snow, mud, glare, or heavy rain.",
      "Clean the front camera area behind the windshield.",
      "Wait until conditions clear — some systems self-recover.",
    ],
  },
  {
    id: "carplay-drop",
    problem: "CarPlay keeps dropping",
    category: "Phone & CarPlay",
    firstCheck: "Do a clean re-pair of only the primary phone.",
    steps: [
      "Remove other paired devices from the car.",
      "Unpair the primary phone, restart it, then pair fresh.",
      "Use the native CarPlay path first — no adapters.",
      "Only add secondary phones once the primary is solid.",
    ],
    relatedSections: [{ to: "/full-guide/apple", label: "Phone & CarPlay" }],
  },
  {
    id: "range-est",
    problem: "Range estimate looks wrong",
    category: "Range",
    firstCheck: "Read the battery percentage first.",
    steps: [
      "Compare percentage to your usual per-mile use.",
      "Remember the estimate is based on recent driving.",
      "Use percentage for planning; estimate as a sanity check.",
    ],
    relatedSections: [{ to: "/full-guide/charging", label: "Charging & range" }],
  },
  {
    id: "slow-charge",
    problem: "Slower than expected charging",
    category: "Charging",
    firstCheck: "Battery temperature — precondition before fast charging.",
    steps: [
      "Precondition on the way to the DC fast charger.",
      "Inspect connector cleanliness and cable condition.",
      "Try a different stall or station.",
    ],
    relatedSections: [{ to: "/full-guide/charging", label: "Charging & range" }],
  },
  {
    id: "no-l2",
    problem: "Car won't take a home L2 charge",
    category: "Charging",
    firstCheck: "Breaker and EVSE fault lights.",
    steps: [
      "Reset the breaker feeding the EVSE.",
      "Check for debris in the charge port.",
      "Reseat the connector firmly.",
      "Try a scheduled charge later — sometimes the handshake needs a retry.",
    ],
  },
  {
    id: "wrong-phone",
    problem: "Wrong phone connects when I get in",
    category: "Phone & CarPlay",
    firstCheck: "Device Connections list — the last-connected phone usually wins.",
    steps: [
      "Open Device Connections on the center screen.",
      "Disconnect the phone you don't want to use right now.",
      "Turn Bluetooth off on the secondary phone before you enter the car.",
      "For a permanent fix: clean pair — remove all phones and re-add the primary iPhone first.",
    ],
    relatedSections: [{ to: "/full-guide/apple", label: "Apple Ecosystem" }],
  },
  {
    id: "clean-pair",
    problem: "CarPlay is glitchy — need a clean pair",
    category: "Phone & CarPlay",
    firstCheck: "Remove every paired device and start over with just the primary iPhone.",
    steps: [
      "Device Connections → remove every phone.",
      "On the iPhone: Settings → General → CarPlay → forget the car.",
      "Restart the iPhone.",
      "Pair the primary iPhone fresh, native path only — no adapters.",
      "Only add a secondary phone after two clean drives.",
    ],
    relatedSections: [{ to: "/full-guide/apple", label: "Apple Ecosystem" }],
  },
  {
    id: "software-update",
    problem: "Software update won't install",
    category: "Phone & CarPlay",
    firstCheck: "Wi-Fi connection + battery state + parked with ignition off.",
    steps: [
      "Confirm the car is on strong Wi-Fi.",
      "Battery should be comfortably above 20% or plugged in.",
      "Park, close doors, and leave the car alone during the update.",
      "If it stalls, try again overnight while plugged in.",
    ],
  },
  {
    id: "tire-pressure",
    problem: "Tire pressure warning is on",
    category: "Cameras & Sensors",
    firstCheck: "Check all four tires cold with a real gauge.",
    steps: [
      "Inflate to the door-jamb sticker pressure (cold).",
      "Cold snaps drop pressure ~1 psi per 10°F — this is the most common cause.",
      "Inspect tread and sidewalls for damage.",
      "Reset TPMS after inflating and drive a few miles.",
    ],
    relatedSections: [{ to: "/full-guide/maintenance", label: "Maintenance" }],
  },
];

