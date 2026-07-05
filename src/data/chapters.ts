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
  imagePlaceholders?: string[];
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
    subtitle: "iPhone, CarPlay, Maps, Siri, Watch",
    summary:
      "Full playbook for using an iPhone, CarPlay, Apple Maps, Siri, Apple Music, and Apple Watch calmly with the GV60.",
    status: "Expanded",
    route: "/full-guide/apple",
    legacyRoute: "/guide/phone-carplay",
    sections: [
      {
        id: "philosophy",
        title: "Apple setup philosophy",
        body: "Treat the iPhone as the single source of truth for navigation, audio, messages, and Siri. Let CarPlay be the driving surface; keep the native GV60 UI for vehicle-only tasks (climate, drive modes, charging, ADAS).",
        recommendedSetting:
          "One primary iPhone. CarPlay for anything the phone does better than the car.",
        bestFor: [
          "Owen's daily driving",
          "Consistent Siri and Apple Maps",
          "AirPods and Apple Watch continuity",
        ],
        changeItWhen: [
          "A second driver has their own Apple ID",
          "You need Genesis native nav for EV routing on a long trip",
        ],
        ownerSuggestion:
          "Pick one iPhone as 'primary' in the car and never let a second phone auto-connect ahead of it.",
        troubleshooting:
          "If CarPlay does not appear after startup, confirm the primary iPhone is unlocked, Bluetooth and Wi-Fi are on, and no other paired phone has taken the wireless CarPlay session.",
        imagePlaceholder: "CarPlay home screen on the GV60 center display",
        relatedLinks: [{ to: "/guide/phone-carplay", label: "Phone & CarPlay basics" }],
      },
      {
        id: "software-check",
        title: "Check software before troubleshooting",
        body: "Before chasing any CarPlay or Bluetooth issue, confirm both sides are current: iPhone iOS and the GV60 infotainment / connectivity software. Most 'CarPlay is broken' reports are a stale pairing on out-of-date software, so treat software update status as the first diagnostic step.",
        recommendedSetting:
          "iPhone on latest iOS. GV60 infotainment updated via Settings -> Vehicle -> Software Info / Update.",
        bestFor: [
          "Fixing intermittent CarPlay",
          "New iPhone in the car",
          "After a major iOS release",
        ],
        changeItWhen: ["Never — always check software first"],
        ownerSuggestion:
          "Rule of thumb: update, reboot the phone, then re-pair. Do not skip step one.",
        troubleshooting:
          "If CarPlay does not appear, update iOS and the car, forget the pairing on both sides, and start clean before assuming hardware trouble.",
        imagePlaceholder: "GV60 software information / update screen",
        relatedLinks: [{ to: "/settings", label: "Recommended software settings" }],
      },
      {
        id: "native-vs-accessory",
        title: "Native CarPlay vs accessories",
        body: "The GV60 supports wireless CarPlay natively. Third-party adapters ('CarlinKit'-style dongles) can work but add a failure point, delay Siri, and occasionally break with iOS updates. For a car this well integrated, native is the answer.",
        recommendedSetting: "Native wireless CarPlay only. No dongles.",
        bestFor: ["Reliability", "Fast Siri response", "Clean cabin, no extra hardware"],
        changeItWhen: ["Only if native CarPlay hardware fails and a repair is pending"],
        ownerSuggestion:
          "Skip the adapters. If wireless is flaky, use a good USB-C cable — that's the real backup.",
        troubleshooting:
          "If an adapter is installed and wireless CarPlay acts flaky, remove the accessory and retest native CarPlay before changing phone settings.",
      },
      {
        id: "clean-pair",
        title: "Clean iPhone pairing (the reset that fixes 90% of issues)",
        body: "A 'clean pair' means removing the car from the phone AND the phone from the car, rebooting both, and starting over. Do this whenever CarPlay keeps launching the wrong phone, wireless CarPlay stalls, or the car refuses to connect.",
        recommendedSetting:
          "iPhone -> Settings -> Bluetooth -> GV60 -> Forget This Device. Then iPhone -> Settings -> General -> CarPlay -> GV60 -> Forget This Car. GV60 -> Device Connections -> remove the phone. Reboot both. Re-pair.",
        bestFor: [
          "Wrong phone connects first",
          "Wireless CarPlay stuck on 'Connecting'",
          "Audio routes but CarPlay UI never loads",
        ],
        changeItWhen: ["First-time pairing works fine — no need"],
        ownerSuggestion:
          "Do the clean pair from the driver's seat with the car in Park and the phone unlocked. It fails less that way.",
        troubleshooting:
          "If clean pairing still fails, use a USB-C backup cable for one successful CarPlay session, then remove and re-add wirelessly.",
        imagePlaceholders: [
          "iPhone Bluetooth 'Forget This Device'",
          "iPhone CarPlay 'Forget This Car'",
        ],
        relatedLinks: [{ to: "/troubleshooting", label: "Clean pairing troubleshooting" }],
      },
      {
        id: "pairing",
        title: "Pairing the iPhone (step-by-step)",
        body: "Park. Turn the car on. iPhone: Settings -> General -> CarPlay -> Available Cars -> tap GV60 (or use the GV60's Device Connections -> Add New). Confirm the passkey on both screens. Allow contacts, messages, and Siri when prompted.",
        recommendedSetting:
          "Allow all CarPlay permissions on first pair (contacts, messages, Siri, notifications). Trim later if needed.",
        bestFor: ["First iPhone in the car", "Replacement iPhone", "After a factory reset"],
        changeItWhen: ["A guest phone — pair via Bluetooth for calls only, do NOT add to CarPlay"],
        ownerSuggestion:
          "Say 'yes' to every permission on first pair. It's easier to remove one later than to hunt for why Siri can't read a text.",
        troubleshooting:
          "If the car cannot see the iPhone, open Device Connections again, toggle iPhone Bluetooth off and on, and keep the phone unlocked until the passkey appears.",
        imagePlaceholder: "Device Connections screen",
      },
      {
        id: "first-carplay",
        title: "First CarPlay test",
        body: "After pairing, CarPlay should launch automatically within ~10 seconds of the car powering on with the iPhone in the cabin. Try: (1) Apple Maps to a saved place, (2) 'Hey Siri, play [artist]', (3) send a message via Siri.",
        recommendedSetting:
          "Auto-launch CarPlay on. Test the three flows above once before you rely on them.",
        bestFor: ["Confirming the pair is healthy", "Before a road trip"],
        changeItWhen: ["Never skip the first test — that's when problems are cheapest to fix"],
        ownerSuggestion:
          "If any of the three flows fails, do a clean pair before driving. Don't debug at 70 mph.",
        troubleshooting:
          "If CarPlay does not appear during the first test, make sure the phone is the only active paired iPhone, then repeat the clean pairing flow.",
        imagePlaceholder: "CarPlay home screen",
      },
      {
        id: "apple-maps",
        title: "Apple Maps",
        body: "Apple Maps is the default on CarPlay and integrates best with Siri, Messages ('I'm on my way'), and the Apple Watch. Turn-by-turn is clean; lane guidance and junction views are strong in metros.",
        recommendedSetting: "Apple Maps as primary navigation on CarPlay. Voice guidance: Normal.",
        bestFor: ["Everyday driving", "Siri-initiated routes", "Apple Watch wrist taps for turns"],
        changeItWhen: [
          "Heavy traffic routing (use Waze)",
          "Long EV road trip (use Genesis native nav for charger-aware routing)",
        ],
        ownerSuggestion:
          "Default to Apple Maps. It's the calmest option and plays nicest with the rest of your Apple gear.",
        troubleshooting:
          "If Apple Maps opens on the phone but not CarPlay, unlock the iPhone, reopen Maps from the CarPlay screen, and confirm Screen Time or CarPlay app restrictions are not hiding it.",
        imagePlaceholder: "Apple Maps route view in CarPlay",
        relatedLinks: [{ to: "/guide/navigation", label: "Navigation guide" }],
      },
      {
        id: "google-maps",
        title: "Google Maps",
        body: "Google Maps has the deepest POI database and strong traffic. Available on CarPlay. Slight lag vs Apple Maps for Siri hand-offs.",
        recommendedSetting: "Installed as a backup. Use for unfamiliar POIs and business hours.",
        bestFor: ["Finding a specific business", "Reviews and hours en route"],
        changeItWhen: ["You want Siri-native routing — switch back to Apple Maps"],
        ownerSuggestion:
          "Keep it on the second CarPlay page. Reach for it when Apple Maps doesn't know a place.",
        troubleshooting:
          "If Google Maps is missing from CarPlay, check iPhone -> Settings -> General -> CarPlay -> GV60 -> Customize and make sure it is enabled.",
        relatedLinks: [{ to: "/guide/navigation", label: "Navigation guide" }],
      },
      {
        id: "waze",
        title: "Waze",
        body: "Waze wins in dense traffic and for police/hazard alerts. Louder UI than Apple Maps — fine on a commute, tiring on a long drive.",
        recommendedSetting:
          "Use for known-bad commutes and construction zones. Not the everyday default.",
        bestFor: ["Rush-hour commutes", "Unfamiliar cities with heavy traffic"],
        changeItWhen: ["Highway cruising — swap back to Apple Maps for calm"],
        ownerSuggestion: "Waze is a tool, not a default. Turn it on for the drive, off after.",
        troubleshooting:
          "If Waze audio is too chatty, reduce alert volume inside Waze rather than changing the whole car audio setup.",
        relatedLinks: [{ to: "/guide/navigation", label: "Navigation guide" }],
      },
      {
        id: "native-vs-apple-nav",
        title: "Built-in navigation vs Apple navigation",
        body: "Genesis native nav is EV-aware: it can route around charge stops, precondition the battery for DC fast charging, and show range arcs. Apple Maps does none of that yet on the GV60. For anything under battery range, Apple Maps is fine. For a trip that needs a charge stop, use native.",
        recommendedSetting:
          "Apple Maps for local. Genesis native nav for any drive that includes a planned DC fast charge.",
        bestFor: ["Road trips >200 mi", "Winter trips where preconditioning matters"],
        changeItWhen: ["Short local trips — Apple Maps is easier"],
        ownerSuggestion:
          "The rule: if you'll plug in mid-trip, use native nav so the car preconditions. Otherwise, Apple Maps.",
        troubleshooting:
          "If Apple Maps is giving good directions but the HUD has no turn arrows, that is expected: use built-in navigation when you need driver display or HUD guidance.",
        relatedLinks: [{ to: "/full-guide/charging", label: "Charging chapter — preconditioning" }],
      },
      {
        id: "siri",
        title: "Siri in the GV60",
        body: "Siri runs through CarPlay via the steering-wheel voice button (long-press) or 'Hey Siri' if enabled on the phone. Use it for navigation, messages, calls, music, and reminders. Do not confuse it with the GV60's built-in voice assistant — that one controls the car (climate, windows, sunroof).",
        recommendedSetting:
          "Long-press wheel voice button = Siri. Short-press = phone dial or car voice (depending on config).",
        bestFor: ["Hands-free everything Apple", "Sending messages while driving"],
        changeItWhen: [
          "You need to change cabin temperature or open the sunroof — use the car's native voice assistant",
        ],
        ownerSuggestion:
          "Learn the two-voice split: 'Hey Siri' for phone stuff, the car button for car stuff.",
        troubleshooting:
          "If Siri answers on the phone instead of CarPlay, reconnect CarPlay and confirm Siri is allowed while locked on the iPhone.",
        imagePlaceholder: "Siri / steering wheel voice button",
      },
      {
        id: "apple-music",
        title: "Apple Music",
        body: "Apple Music is the smoothest audio source on CarPlay — lossless streaming, Siri requests by song/artist/mood, and clean handoff from AirPods to car speakers.",
        recommendedSetting:
          "Apple Music as primary. Cellular streaming on. Lossless: on Wi-Fi only if data is a concern.",
        bestFor: ["Everyday listening", "Siri-driven requests", "AirPods → car handoff"],
        changeItWhen: [
          "You want podcasts (use Apple Podcasts or Overcast) or a shared playlist someone made in Spotify",
        ],
        ownerSuggestion:
          "Pin a couple of stations to the CarPlay dock so they're one tap from cold-start.",
        troubleshooting:
          "If music starts on the iPhone speaker, switch the audio output back to CarPlay from Control Center or reconnect the phone.",
      },
      {
        id: "spotify",
        title: "Spotify",
        body: "Works well on CarPlay. Siri support is second-class — you can say 'play [song] on Spotify' but hand-offs from AirPods aren't as tight as Apple Music.",
        recommendedSetting: "Use when a specific playlist or podcast lives only on Spotify.",
        bestFor: ["Shared playlists", "Podcast subscriptions on Spotify"],
        changeItWhen: ["You want the cleanest Siri experience — stay in Apple Music"],
        ownerSuggestion:
          "Keep Spotify installed; don't make it the default. Siri gets confused when both are set to primary.",
        troubleshooting:
          "If Siri opens Apple Music instead, say 'on Spotify' at the end of the request or start playback once from Spotify's CarPlay app.",
      },
      {
        id: "podcasts",
        title: "Podcasts and audiobooks",
        body: "Apple Podcasts, Overcast, Pocket Casts, and Audible all work on CarPlay. Downloads on the phone play offline through the car with no drama.",
        recommendedSetting:
          "Download episodes over Wi-Fi the night before. Chapter-skip via wheel controls.",
        bestFor: ["Commutes", "Long drives with weak cell coverage"],
        changeItWhen: ["Streaming a live show — use cellular"],
        ownerSuggestion:
          "Auto-download your top 3 shows overnight. You'll never hit dead air in a dead zone.",
        troubleshooting:
          "If an episode will not start in the car, check that it downloaded to the iPhone and is not waiting on cellular permission.",
      },
      {
        id: "messages",
        title: "Messages",
        body: "Siri reads incoming messages aloud (if enabled) and dictates replies. Group threads work; photos are announced but not shown while driving.",
        recommendedSetting:
          "Announce Messages via CarPlay: on. Announce for: Favorites only (starts calmer; widen later).",
        bestFor: ["Solo commutes", "Quick 'on my way' replies"],
        changeItWhen: [
          "Passengers in the car — mute announcements to avoid reading personal messages aloud",
        ],
        ownerSuggestion:
          "Start with Favorites only. It's less noise than 'Everyone' and less rude to passengers.",
        troubleshooting:
          "If Siri can't read messages, re-check CarPlay permissions on iPhone -> Settings -> Notifications -> Announce Notifications.",
      },
      {
        id: "calls",
        title: "Phone calls",
        body: "Incoming calls route through CarPlay audio. Answer/end via the wheel. Contacts and Favorites appear in the CarPlay Phone app.",
        recommendedSetting:
          "Favorites populated on the iPhone. Call audio: Automatic (CarPlay when connected).",
        bestFor: ["Hands-free calling", "Quick dial from Favorites"],
        changeItWhen: ["Sensitive call — route to iPhone earpiece or AirPods for privacy"],
        ownerSuggestion:
          "Curate Favorites on the phone. That list is your one-tap call surface in the car.",
        troubleshooting:
          "If call audio stays on the iPhone, tap the call audio button and choose CarPlay, then confirm Bluetooth is connected to the GV60.",
      },
      {
        id: "calendar",
        title: "Calendar integration",
        body: "Today's Apple Calendar events surface in Apple Maps and CarPlay Dashboard with a 'Directions' shortcut. Location must be a real address in the event for this to work.",
        recommendedSetting: "Add real addresses to calendar events, not just place names.",
        bestFor: ["Meetings with a physical address", "Recurring appointments"],
        changeItWhen: ["Virtual meetings — no benefit"],
        ownerSuggestion:
          "Get in the habit of pasting the full address into every calendar event. The car does the rest.",
        troubleshooting:
          "If Calendar does not offer directions, edit the event location on the iPhone so it resolves to a full street address.",
      },
      {
        id: "watch",
        title: "Apple Watch as a subtle support device",
        body: "Apple Watch can support navigation prompts (wrist taps for turns), charging and app notifications, calendar reminders, and subtle awareness. It should not be treated as the primary driving interface, and it is not a verified vehicle key on the GV60 — do not rely on it as a spare key unless Genesis officially supports it in your region and software version.",
        recommendedSetting:
          "Notifications: mirrored from iPhone, quiet-hours honored. Maps on Watch: on for wrist taps.",
        bestFor: [
          "Subtle turn prompts without glancing at the screen",
          "Charging session notifications",
          "Calendar nudges",
        ],
        changeItWhen: ["Long highway drives — mute the Watch to reduce wrist buzz fatigue"],
        ownerSuggestion: "Let the Watch be the quiet co-pilot. Never a control surface.",
        troubleshooting:
          "If Watch taps become distracting, turn off Maps haptics for driving or let Driving Focus silence nonessential notifications.",
      },
      {
        id: "driving-focus",
        title: "Driving Focus",
        body: "iOS Driving Focus silences non-essential notifications while the car is moving or connected to CarPlay. Set it to auto-activate on CarPlay connection.",
        recommendedSetting:
          "Focus → Driving → Activate: Automatically When Connected to Car Bluetooth. Allow: Favorites + time-sensitive.",
        bestFor: ["Reducing screen distractions", "Fewer wrist buzzes on the Watch"],
        changeItWhen: ["Expecting an urgent call from a non-Favorite — temporarily allow all"],
        ownerSuggestion:
          "Turn Driving Focus on once and forget it. It's the biggest single quality-of-life setting you'll set.",
        troubleshooting:
          "If Driving Focus does not activate, check Focus -> Driving -> Activate and confirm CarPlay or vehicle Bluetooth activation is enabled.",
        imagePlaceholder: "Driving Focus settings",
        relatedLinks: [{ to: "/settings", label: "Recommended Settings" }],
      },
      {
        id: "multi-iphone",
        title: "Multiple iPhones",
        body: "The GV60 remembers multiple paired phones but only one CarPlay session at a time. Whichever phone connects first wins. That's usually why 'the wrong phone connects.'",
        recommendedSetting:
          "Set your iPhone as the top-priority device in GV60 -> Device Connections. Ask other household phones to disable auto-connect.",
        bestFor: ["Two-driver households", "Kids' phones that keep hijacking audio"],
        changeItWhen: [
          "Handing the car to another driver — let their phone connect first, then remove yours from priority temporarily",
        ],
        ownerSuggestion: "Own the priority list. Every other 'wrong phone' problem starts here.",
        troubleshooting:
          "If the wrong phone still connects, disable Bluetooth on the other phone for one drive, connect yours, then re-enable.",
        imagePlaceholder: "Device Connections screen showing paired iPhones",
        relatedLinks: [{ to: "/troubleshooting", label: "Wrong phone connects" }],
      },
      {
        id: "shared-vehicle",
        title: "Shared vehicle Apple setup",
        body: "For a shared GV60, use driver profiles on the car (fingerprint / profile switch) alongside separate Apple pairings. Each driver's CarPlay preferences, Siri voice, and Maps history stay on their own phone.",
        recommendedSetting:
          "One Genesis driver profile per human. One iPhone pair per profile. Don't share Apple IDs.",
        bestFor: ["Couples, family shares"],
        changeItWhen: ["A one-off guest — pair Bluetooth for calls only, skip CarPlay"],
        ownerSuggestion: "Profiles + individual Apple IDs = zero settings arguments.",
        troubleshooting:
          "If a driver keeps inheriting another driver's phone, switch the GV60 profile first, then connect CarPlay from Device Connections.",
        relatedLinks: [{ to: "/settings", label: "Shared vehicle settings" }],
      },
      {
        id: "hud-caveat",
        title: "Apple Maps in driver display / HUD — caveat",
        body: "The GV60 driver cluster and HUD show turn-by-turn from the native Genesis navigation system, not from Apple Maps. Apple Maps directions appear on the center CarPlay screen only. Plan accordingly on unfamiliar routes.",
        recommendedSetting:
          "For HUD turn arrows: use Genesis native nav. For CarPlay-screen guidance: Apple Maps is fine.",
        bestFor: ["Knowing which screen to look at"],
        changeItWhen: ["Never — this is a car limitation, not a setting"],
        ownerSuggestion:
          "If you want turn arrows in the HUD, you have to use native nav. Pick your route accordingly.",
        troubleshooting:
          "If the HUD is blank while Apple Maps is routing, nothing is broken. Start the route in built-in navigation if you need HUD prompts.",
      },
      {
        id: "best-nav-setup",
        title: "Best Apple navigation setup",
        body: "Apple Maps as default. Google Maps and Waze installed as tools. Genesis native nav reserved for EV road trips that need preconditioning.",
        recommendedSetting:
          "CarPlay dock: Apple Maps first, Music second, Phone third. Google Maps and Waze on page 2.",
        bestFor: ["Everyday driving that stays inside battery range"],
        changeItWhen: ["Long EV trip — switch to native nav before you leave"],
        ownerSuggestion:
          "The dock is your muscle memory. Put the app you actually use first, not the one that came pre-pinned.",
        troubleshooting:
          "If the wrong map app keeps opening, start the route explicitly from the app you want and reorder CarPlay so Apple Maps is first.",
        relatedLinks: [{ to: "/guide/navigation", label: "Navigation guide" }],
      },
      {
        id: "best-audio-setup",
        title: "Best Apple audio setup",
        body: "Apple Music as primary. Podcasts app second. Spotify installed for shared playlists only. AirPods handoff enabled so audio follows you into and out of the car.",
        recommendedSetting:
          "Sound → equalizer neutral or 'Vocal Booster' for podcasts. AirPods → Automatic Ear Detection on.",
        bestFor: ["Music, podcasts, calls, all one ecosystem"],
        changeItWhen: [
          "Passenger wants their playlist — hand them the moment (their phone via Bluetooth) rather than reshuffling your primary",
        ],
        ownerSuggestion: "Keep Apple Music primary. Everything else is a tool.",
        troubleshooting:
          "If audio jumps to another phone, disconnect that phone in Device Connections and let the primary iPhone rejoin CarPlay.",
      },
      {
        id: "best-siri-setup",
        title: "Best Siri setup",
        body: "Enable 'Hey Siri' on the iPhone. Long-press the wheel voice button as a backup. Turn on 'Announce Notifications' for Favorites only. Set Siri voice to your preferred variant so it's easy to recognize across devices.",
        recommendedSetting:
          "Hey Siri: on. Announce for: Favorites. Wheel long-press: Siri (not car voice).",
        bestFor: ["Everyday driving with minimal screen touches"],
        changeItWhen: ["In a quiet zone (hospital, school pickup) — mute 'Hey Siri' temporarily"],
        ownerSuggestion:
          "Two ways to talk to Siri (voice + wheel) means you always have one that works.",
        troubleshooting:
          "If the steering wheel button opens the wrong assistant, try a long press for Siri and review the GV60 voice-button behavior in the vehicle settings.",
      },
      {
        id: "carplay-layout",
        title: "CarPlay layout and favorites",
        body: "Reorder the CarPlay home screen from the iPhone: Settings → General → CarPlay → GV60 → Customize. Put daily apps (Maps, Music, Phone, Messages, Podcasts) on page 1. Bury the rest.",
        recommendedSetting:
          "Page 1: Apple Maps, Music, Phone, Messages, Podcasts, Calendar. Page 2: Google Maps, Waze, Spotify, Audible.",
        bestFor: ["One-glance access to the apps you actually use"],
        changeItWhen: ["Habits change — re-sort every few months"],
        ownerSuggestion:
          "If you haven't opened an app in 30 days, move it to page 2. Page 1 is precious real estate.",
        troubleshooting:
          "If an app is installed but invisible in CarPlay, re-enable it in the CarPlay customization list and drag it back to page 1 or 2.",
        imagePlaceholder: "CarPlay app customization screen on iPhone",
      },
      {
        id: "notifications",
        title: "Notifications and distraction control",
        body: "Every notification on the phone can announce through CarPlay. That's usually too much. Use Driving Focus + per-app 'Announce Notifications' toggles to keep it to Messages from Favorites and calendar reminders.",
        recommendedSetting:
          "iOS → Notifications → Announce Notifications → only Messages + Calendar, Favorites only.",
        bestFor: ["A calm cabin", "Fewer wrist buzzes on Apple Watch"],
        changeItWhen: ["Waiting on a specific delivery or call — temporarily allow that app"],
        ownerSuggestion:
          "The default (announce everything) is the loudest possible car. Trim aggressively.",
        troubleshooting:
          "If announcements still feel noisy, tighten Driving Focus allowed people/apps and turn off announce notifications app by app.",
        imagePlaceholder: "Charging / app notification example on Apple Watch",
        relatedLinks: [{ to: "/settings", label: "Notification settings cards" }],
      },
      {
        id: "carplay-troubleshooting",
        title: "CarPlay troubleshooting",
        body: "Order of operations: (1) confirm iOS and GV60 software are current, (2) toggle iPhone Bluetooth off/on, (3) power-cycle the car (fully off, driver door open, wait 60s), (4) clean pair, (5) try a USB-C cable, (6) if wired works but wireless doesn't, it's a wireless-radio issue — dealer.",
        recommendedSetting: "Follow the six steps in order. Do not skip.",
        bestFor: [
          "Wireless CarPlay not launching",
          "Audio without UI",
          "UI without audio",
          "Wrong phone connects",
        ],
        changeItWhen: ["Never — always work the list"],
        ownerSuggestion:
          "Keep a USB-C cable in the console. It's the cheapest, fastest CarPlay debug tool you own.",
        troubleshooting:
          "If a clean pair + cable + reboot all fail, and iOS is current, it's a car-side issue, not a phone-side one.",
        imagePlaceholder: "CarPlay troubleshooting flowchart",
        relatedLinks: [{ to: "/troubleshooting", label: "Troubleshooting hub" }],
      },
      {
        id: "cable",
        title: "When to use a cable",
        body: "Wired CarPlay via a good USB-C-to-Lightning (or USB-C-to-USB-C on newer iPhones) cable is more reliable than wireless. Use it on long trips, in weak-cell areas, or any time wireless is misbehaving.",
        recommendedSetting:
          "Keep an Apple-brand or MFi-certified cable in the center console. Front USB-C port for CarPlay.",
        bestFor: ["Road trips", "Diagnosing wireless issues", "Fastest phone charge while driving"],
        changeItWhen: ["Short local trips — wireless is fine"],
        ownerSuggestion: "A $25 cable prevents 90% of 'CarPlay broke on my trip' stories.",
        troubleshooting:
          "If wireless CarPlay fails but the backup cable works, keep driving wired for the day and troubleshoot wireless later from Park.",
        imagePlaceholder: "Backup cable stored in vehicle",
      },
      {
        id: "settings-cards",
        title: "Apple Ecosystem settings cards",
        body: "The Recommended Settings page has cards that mirror the Apple-side setup here (Driving Focus, Announce Notifications, CarPlay dock, Siri). Use those cards as the one-screen reference when configuring a new iPhone.",
        recommendedSetting: "See Recommended Settings → Apple / Phone cards.",
        bestFor: ["Configuring a new iPhone", "Reset after iOS major version"],
        changeItWhen: ["Apple changes a default in a new iOS — re-verify"],
        ownerSuggestion:
          "Bookmark the settings cards you actually change. Skip the ones on defaults.",
        troubleshooting:
          "If the chapter and settings cards disagree after an app update, follow the newer Expanded chapter and flag the card for cleanup.",
        relatedLinks: [{ to: "/settings", label: "Recommended Settings" }],
      },
      {
        id: "summary",
        title: "Final Apple Ecosystem summary",
        body: "One primary iPhone. Native wireless CarPlay, cable as backup. Apple Maps default, native nav for EV trips. Siri for phone stuff, car voice for car stuff. Driving Focus on. Notifications trimmed to Favorites. Apple Watch as a quiet co-pilot, not a control surface. Do a clean pair the moment anything acts weird.",
        recommendedSetting:
          "Follow the above. Revisit after any major iOS or GV60 software update.",
        bestFor: ["A calm, reliable Apple + GV60 setup"],
        changeItWhen: ["New iPhone, new iOS major version, new driver in the car"],
        ownerSuggestion:
          "Set it once, test the three flows (Maps, Siri music, Siri message), then trust it.",
        troubleshooting:
          "When in doubt: check software, remove stale pairings, clean pair the primary iPhone, and keep the backup cable in the vehicle.",
      },
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
