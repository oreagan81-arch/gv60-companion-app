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
    summary:
      "A mobile-first walk-through of every daily control, screen, storage area, and setup habit in the 2023 Genesis GV60 Performance cabin.",
    status: "Expanded",
    route: "/full-guide/cabin-tour",
    sections: [
      {
        id: "setup-order",
        title: "Cabin setup philosophy",
        body: "The GV60 cabin is easiest to learn in layers: first fit the car to Owen, then save the position, then connect the primary phone, then learn the high-use driving controls. Seat, steering wheel, mirrors, and driver profile should feel settled before pairing phones or changing deeper settings.",
        recommendedSetting:
          "Comfort mode, parked, primary driver profile selected, no phone pairing until the driving position feels correct.",
        bestFor: [
          "First week setup",
          "Reducing menu confusion",
          "Building repeatable muscle memory",
        ],
        changeItWhen: ["A second driver is setting up their own profile"],
        ownerSuggestion:
          "Set seat, steering wheel, and mirrors before pairing phones. The cabin should fit you before the software gets personal.",
        troubleshooting:
          "If settings seem to move around between drives, confirm the correct driver profile is loaded before adjusting the seat or mirrors again.",
      },
      {
        id: "driver-seat-controls",
        title: "Driver seat controls",
        body: "The side-mounted driver seat controls move the seat base, backrest, lumbar support, and cushion position. These are the foundation for every other cabin adjustment because your reach to the wheel, pedals, mirrors, and screen depends on the seat being right.",
        recommendedSetting:
          "Adjust seat height for a clear cluster view, slide distance for a relaxed knee bend, then set backrest and lumbar for long-drive comfort.",
        bestFor: [
          "Daily driving comfort",
          "Clear view of the driver display / cluster",
          "Safe pedal reach",
        ],
        changeItWhen: ["Shoes, coat, or long-drive comfort changes your posture"],
        ownerSuggestion:
          "Take five quiet minutes here. Do not save seat memory until the position feels correct for both city and highway driving.",
        troubleshooting:
          "If the wheel or mirrors feel wrong after seat changes, re-adjust the seat first, then steering wheel, then mirrors in that order.",
        imagePlaceholder: "Driver seat controls",
      },
      {
        id: "seat-memory",
        title: "Seat memory",
        body: "Seat memory saves the driver seat and related position settings so the GV60 can return to Owen's preferred setup after another driver uses the car. It is one of the most useful convenience features once the driving position is genuinely dialed in.",
        recommendedSetting:
          "Save position 1 only after the seat, steering wheel, and mirrors are correct. Use position 2 for another frequent driver or a temporary alternate setup.",
        bestFor: [
          "Two-driver households",
          "Keeping Owen's setup consistent",
          "Fast recovery after service or valet use",
        ],
        changeItWhen: [
          "The driving position has changed for more than a day, not just one quick errand",
        ],
        ownerSuggestion:
          "Save memory positions after the driving position feels correct. Do not overwrite a good memory slot during a rushed adjustment.",
        troubleshooting:
          "If memory recall feels wrong, check the active driver profile first; the car may be loading a different profile or a different memory slot.",
        imagePlaceholder: "Seat memory buttons",
      },
      {
        id: "steering-wheel-adjustment",
        title: "Steering wheel adjustment",
        body: "The steering wheel adjusts for reach and height so Owen can see the cluster, rest hands naturally, and reach controls without leaning forward. This should be set after the seat and before the mirrors.",
        recommendedSetting:
          "Wheel close enough for relaxed elbows, low enough to see the road clearly, high enough not to block the driver display.",
        bestFor: ["Comfortable wheel control", "Clear cluster view", "Reducing shoulder fatigue"],
        changeItWhen: ["Seat height or seat distance changes"],
        ownerSuggestion:
          "Set the wheel with both hands at 9 and 3. If your shoulders lift or your wrists lock, the wheel is not done yet.",
        troubleshooting:
          "If the cluster is blocked, adjust wheel height before changing driver display settings.",
        imagePlaceholder: "Steering wheel overview",
      },
      {
        id: "mirrors",
        title: "Mirrors",
        body: "The side mirrors and rearview mirror complete the driving position. The GV60's camera systems help, but physical mirror setup still matters for lane changes, parking, and quick awareness.",
        recommendedSetting:
          "Set mirrors after seat and steering wheel. Minimize body reflection in side mirrors while keeping a small reference edge.",
        bestFor: ["Lane changes", "Parking confidence", "Reducing blind spots"],
        changeItWhen: ["Seat memory is changed", "Another driver used the vehicle"],
        ownerSuggestion:
          "Do mirrors before phone pairing. A clean driving position matters more than getting CarPlay online first.",
        troubleshooting:
          "If mirror positions keep changing, confirm the correct seat memory and driver profile are being recalled.",
      },
      {
        id: "driver-profile",
        title: "Driver profile connection",
        body: "The driver profile ties cabin preferences to the person using the car. It can affect seat memory, display preferences, connected devices, and other convenience behavior depending on vehicle setup.",
        recommendedSetting:
          "Use one driver profile per regular driver. Load Owen's profile before saving seat memory or pairing the primary phone.",
        bestFor: [
          "Shared vehicle setup",
          "Keeping personal settings stable",
          "Reducing wrong-phone connections",
        ],
        changeItWhen: ["A second regular driver needs their own profile"],
        ownerSuggestion:
          "Profile first, memory second, phone third. That order prevents most cabin setup confusion.",
        troubleshooting:
          "If the wrong phone connects or the seat position changes unexpectedly, verify the active driver profile before changing anything else.",
        relatedLinks: [{ to: "/full-guide/apple", label: "Apple Ecosystem Guide" }],
      },
      {
        id: "steering-wheel-controls",
        title: "Steering wheel controls",
        body: "The wheel is the main no-look control surface: audio, calls, voice, cruise, lane assistance, driver display pages, and regen paddles all live here. Learn it before digging into touchscreen menus while moving.",
        recommendedSetting:
          "Practice the wheel controls while parked, then use them for common actions instead of reaching for the center screen.",
        bestFor: ["Keeping eyes up", "Quick audio changes", "Driver-assistance adjustments"],
        changeItWhen: ["A control is confusing - stop and test it parked"],
        ownerSuggestion:
          "Treat the steering wheel as the command center. The touchscreen is for setup, not constant fiddling.",
        troubleshooting:
          "If a wheel button seems to do the wrong thing, check whether it uses short-press, long-press, or a mode-specific function.",
        imagePlaceholder: "Steering wheel overview",
      },
      {
        id: "voice-button",
        title: "Voice button / Siri vs vehicle voice",
        body: "The voice button can reach different assistants depending on press length and source. Siri is for iPhone tasks through CarPlay; the vehicle voice assistant is for car-side tasks like navigation, climate, and built-in features.",
        recommendedSetting:
          "Learn short-press versus long-press while parked. Use Siri for phone, messages, music, and CarPlay. Use vehicle voice for car functions.",
        bestFor: ["Hands-free messages", "Navigation requests", "Reducing touchscreen use"],
        changeItWhen: [
          "CarPlay is disconnected or you need a vehicle function instead of an iPhone function",
        ],
        ownerSuggestion:
          "Learn the difference between short-press and long-press voice controls. It is one of the cabin's most useful habits.",
        troubleshooting:
          "If Siri does not respond, confirm CarPlay is connected and the iPhone allows Siri while locked.",
        imagePlaceholder: "Voice button",
        relatedLinks: [{ to: "/full-guide/apple", label: "Siri and CarPlay setup" }],
      },
      {
        id: "audio-controls",
        title: "Audio controls",
        body: "Audio controls on the wheel and console handle volume, track skip, source behavior, and call audio. These are safer than reaching through CarPlay or media screens while driving.",
        recommendedSetting:
          "Use wheel controls for volume and track changes. Use the media screen only for larger source changes while stopped.",
        bestFor: ["Music", "Podcasts", "Calls", "Keeping the center screen calm"],
        changeItWhen: ["A passenger is managing audio from the center screen"],
        ownerSuggestion:
          "Let the wheel handle small audio moves. Keep glossy touch surfaces cleaner by touching them less.",
        troubleshooting:
          "If audio changes the wrong source, check whether the active source is CarPlay, Bluetooth, radio, or built-in media.",
        relatedLinks: [{ to: "/full-guide/apple", label: "Apple audio setup" }],
      },
      {
        id: "cruise-controls",
        title: "Cruise controls",
        body: "Cruise controls manage Smart Cruise speed, following distance, and related highway behavior. They sit where you can reach them without looking away from traffic.",
        recommendedSetting:
          "Use Comfort mode as the baseline while learning cruise behavior. Start with conservative following distance.",
        bestFor: ["Highway driving", "Longer commutes", "Reducing fatigue"],
        changeItWhen: ["Traffic, weather, or visibility gets worse"],
        ownerSuggestion:
          "Do not learn cruise and cabin controls at the same time in traffic. Get comfortable with the buttons first.",
        troubleshooting:
          "If cruise will not engage, check speed, brake status, sensor warnings, and whether driver-assistance systems are available.",
        relatedLinks: [{ to: "/full-guide/safety", label: "Safety and Driver Assistance" }],
      },
      {
        id: "lane-assistance-controls",
        title: "Lane / driver-assistance controls",
        body: "Lane and driver-assistance controls toggle or adjust systems that help with lane centering, warnings, and highway support. These systems are helpful, but they are not a substitute for steering attention.",
        recommendedSetting:
          "Keep safety alerts on while learning. Adjust sensitivity only after you understand what each alert means.",
        bestFor: ["Highway support", "Learning ADAS feedback", "Reducing missed warnings"],
        changeItWhen: [
          "Construction, snow, faded lane lines, or confusing road markings make assistance less reliable",
        ],
        ownerSuggestion:
          "Treat assistance buttons as support controls, not autopilot controls. Learn each warning before muting anything.",
        troubleshooting:
          "If lane support drops out, check lane markings, camera cleanliness, weather, and driver display messages.",
        relatedLinks: [{ to: "/full-guide/safety", label: "Driver assistance details" }],
      },
      {
        id: "regen-paddles",
        title: "Regenerative braking paddles",
        body: "The regen paddles behind the wheel change how strongly the GV60 slows when you lift off the accelerator. They are a major daily-driving control, especially in traffic, hills, and one-pedal-style driving.",
        recommendedSetting:
          "Start around Auto or Level 2 while learning. Move up or down intentionally based on traffic and passenger comfort.",
        bestFor: ["Daily smoothness", "Traffic control", "Learning EV driving feel"],
        changeItWhen: ["Passengers feel head-toss", "Roads are slick", "You want more coasting"],
        ownerSuggestion:
          "Treat the regen paddles as a major daily-driving control. They matter as much as drive mode for smoothness.",
        troubleshooting:
          "If the car slows more or less than expected, glance at the cluster regen level and reset to a familiar baseline.",
        imagePlaceholder: "Regen paddles",
        relatedLinks: [{ to: "/full-guide/driving", label: "Driving Like a Pro" }],
      },
      {
        id: "driver-display",
        title: "Driver display / cluster",
        body: "The driver display / cluster shows speed, range, regen level, drive mode, driver-assistance state, warnings, and turn-by-turn information from supported native systems. It should be readable at a glance.",
        recommendedSetting:
          "Use a clean cluster layout while learning. Prioritize speed, range, regen, and driver-assistance status.",
        bestFor: ["Core driving information", "Regen feedback", "Safety messages"],
        changeItWhen: ["A display theme or page hides information you need often"],
        ownerSuggestion:
          "Do not clutter the cluster in week one. Learn what the car is telling you before customizing deeply.",
        troubleshooting:
          "If a warning appears, read the cluster message before opening menus. The cluster usually tells you what system needs attention.",
        imagePlaceholder: "Driver display / cluster",
      },
      {
        id: "blind-spot-camera",
        title: "Blind-spot camera display",
        body: "The blind-spot camera display shows a side camera view in the cluster when signaling, helping you check adjacent lanes in addition to mirrors and shoulder checks.",
        recommendedSetting:
          "Keep the feature enabled if equipped. Use it as an extra check, not as a mirror replacement.",
        bestFor: ["Lane changes", "Urban traffic", "Learning the car's width"],
        changeItWhen: ["Heavy rain, glare, or dirty cameras make the image unclear"],
        ownerSuggestion:
          "Use the blind-spot camera as confirmation after mirrors. The order is still mirror, signal, glance, move.",
        troubleshooting:
          "If the blind-spot camera image is blurry, clean the exterior camera area and check whether the turn signal fully engaged.",
        imagePlaceholder: "Blind-spot camera display",
        relatedLinks: [{ to: "/full-guide/safety", label: "Blind-spot and safety systems" }],
      },
      {
        id: "head-up-display",
        title: "Head-up display",
        body: "The HUD projects key information near the driver's forward view, reducing the need to look down. It works best when it is subtle and not overloaded.",
        recommendedSetting:
          "Use speed and essential guidance only. Keep brightness comfortable and position low enough not to distract.",
        bestFor: ["Speed awareness", "Native navigation prompts", "Keeping eyes up"],
        changeItWhen: ["The HUD competes with the road, windshield glare, or night visibility"],
        ownerSuggestion:
          "Use the HUD subtly, not cluttered. It should feel like a quiet aid, not another screen demanding attention.",
        troubleshooting:
          "If HUD information is hard to see, adjust brightness, height, and display content before assuming a fault.",
        imagePlaceholder: "HUD settings",
      },
      {
        id: "center-touchscreen",
        title: "Center touchscreen",
        body: "The center touchscreen is the main surface for infotainment, settings, EV information, navigation, media, phone connections, and many vehicle menus. It is powerful, but it should not become a distraction while moving.",
        recommendedSetting:
          "Set up major menus while parked. Use bookmarks, wheel controls, and physical controls for common driving tasks.",
        bestFor: ["Setup", "Navigation entry", "EV information", "CarPlay"],
        changeItWhen: ["A passenger can safely manage a deeper menu"],
        ownerSuggestion:
          "Clean fingerprints from glossy/touch surfaces with a microfiber cloth. Do not use harsh cleaners on screens or glossy trim.",
        troubleshooting:
          "If the screen seems laggy, wait for startup to finish before tapping through multiple menus.",
        imagePlaceholder: "Center touchscreen home screen",
        relatedLinks: [{ to: "/full-guide/maintenance", label: "Cleaning touch surfaces" }],
      },
      {
        id: "setup-menu",
        title: "Setup menu",
        body: "The Setup menu is where deeper vehicle, display, sound, phone, profile, and connectivity preferences live. It is the right place for intentional configuration, not constant driving adjustments.",
        recommendedSetting:
          "Use Setup while parked. Change one setting at a time and test it before changing another.",
        bestFor: [
          "Initial configuration",
          "Driver profile preferences",
          "Display and sound settings",
        ],
        changeItWhen: ["A setting is clearly annoying after several drives"],
        ownerSuggestion:
          "Avoid menu wandering. If you cannot describe the setting you want, bookmark the question and come back parked.",
        troubleshooting:
          "If a setting does not seem to stick, check driver profile, user permissions, and whether the vehicle needs to be in Park.",
      },
      {
        id: "device-connections",
        title: "Device Connections",
        body: "Device Connections manages Bluetooth, phone pairing, and CarPlay-capable devices. This is where wrong-phone and primary-phone behavior usually starts.",
        recommendedSetting:
          "Pair the primary phone first. Keep unnecessary phones out of the priority list until Owen's phone is reliable.",
        bestFor: [
          "Primary phone setup",
          "CarPlay troubleshooting",
          "Shared vehicle phone management",
        ],
        changeItWhen: ["Adding a second regular driver or replacing a phone"],
        ownerSuggestion:
          "Primary phone first. Test it for a couple of drives before adding secondary phones.",
        troubleshooting:
          "If the wrong phone connects, open Device Connections, disconnect the wrong device, and review phone priority.",
        imagePlaceholder: "Device Connections screen",
        relatedLinks: [{ to: "/full-guide/apple", label: "Apple and CarPlay setup" }],
      },
      {
        id: "ev-screen",
        title: "EV screen",
        body: "The EV screen shows charge status, range information, charging settings, energy use, and EV-specific planning tools. It is the cabin's main window into battery behavior.",
        recommendedSetting:
          "Check the EV screen before longer drives and before changing charge targets or charging schedules.",
        bestFor: ["Range awareness", "Charging planning", "Understanding energy use"],
        changeItWhen: ["Road trip, winter weather, or charging schedule changes"],
        ownerSuggestion:
          "Learn the EV screen early. It makes charging decisions feel less mysterious.",
        troubleshooting:
          "If range looks surprising, check recent driving efficiency, climate use, outside temperature, and charge target before assuming a battery issue.",
        imagePlaceholder: "EV screen",
        relatedLinks: [{ to: "/full-guide/charging", label: "Charging and Battery Guide" }],
      },
      {
        id: "navigation-screen",
        title: "Navigation screen",
        body: "The built-in navigation screen handles Genesis navigation, route guidance, charger-aware planning, and directions that can integrate with the driver display or HUD depending on feature support.",
        recommendedSetting:
          "Use built-in navigation for EV trips that need charging stops or preconditioning. Use Apple Maps or other CarPlay apps for simple daily routes.",
        bestFor: ["Longer EV trips", "HUD guidance", "Built-in route planning"],
        changeItWhen: ["A local trip is easier through CarPlay"],
        ownerSuggestion:
          "For a route inside comfortable battery range, CarPlay is fine. If charging matters, use the native navigation tools.",
        troubleshooting:
          "If Apple Maps directions do not appear in the HUD, use built-in navigation; that is a system limitation, not a cabin fault.",
        relatedLinks: [
          { to: "/full-guide/apple", label: "Apple navigation setup" },
          { to: "/full-guide/charging", label: "EV trip planning" },
        ],
      },
      {
        id: "media-screen",
        title: "Media screen",
        body: "The media screen shows current audio source, playback, radio, Bluetooth, and CarPlay audio information. It is useful for source selection, but most small adjustments can happen from the wheel or console controls.",
        recommendedSetting:
          "Keep daily audio sources simple: primary phone / CarPlay first, built-in sources as backup.",
        bestFor: ["Changing source", "Seeing now playing", "Passenger-controlled audio"],
        changeItWhen: ["Audio is coming from the wrong source"],
        ownerSuggestion:
          "If CarPlay is connected, let the phone own media. Do not fight the car and phone for the same audio job.",
        troubleshooting:
          "If media audio is silent, check source, volume, mute state, and whether a call or voice assistant has taken audio focus.",
        relatedLinks: [{ to: "/full-guide/apple", label: "Apple audio setup" }],
      },
      {
        id: "climate-controls",
        title: "Climate controls",
        body: "The climate controls manage temperature, fan, seat heat/ventilation where equipped, airflow, and comfort settings. Physical climate access is one of the best reasons not to bury common tasks in the touchscreen.",
        recommendedSetting:
          "Set a comfortable auto climate baseline and make small changes instead of constantly changing fan and temperature.",
        bestFor: ["Daily comfort", "Passenger comfort", "Reducing screen touches"],
        changeItWhen: ["Weather, fogging, or passenger comfort changes"],
        ownerSuggestion:
          "Use Comfort mode as the baseline while learning the vehicle, including cabin comfort behavior.",
        troubleshooting:
          "If the cabin is not warming or cooling as expected, check Auto mode, sync/zone settings, and whether defrost is redirecting airflow.",
        imagePlaceholder: "Climate control panel",
      },
      {
        id: "defrost-controls",
        title: "Defrost controls",
        body: "Defrost controls prioritize windshield and window clearing. They temporarily change airflow and fan behavior to restore visibility quickly.",
        recommendedSetting:
          "Use front defrost at the first sign of fogging, then return to normal climate once visibility is clear.",
        bestFor: ["Rain", "Cold mornings", "Fast visibility recovery"],
        changeItWhen: ["Windows are clear and normal comfort matters again"],
        ownerSuggestion:
          "Visibility beats comfort. Hit defrost early instead of trying to finesse fan settings while driving.",
        troubleshooting:
          "If fogging returns, check recirculation, wet floor mats, cabin humidity, and whether passengers are adding moisture.",
      },
      {
        id: "center-console",
        title: "Center console",
        body: "The center console collects the shifter area, drive controls, infotainment controller, cupholders, storage, charging, and frequently used hard buttons. It is the second command center after the steering wheel.",
        recommendedSetting:
          "Learn the console by touch while parked: shifter, drive mode, camera, Auto Hold, parking brake, and controller locations.",
        bestFor: ["Daily driving controls", "Parking", "Phone storage", "Quick camera access"],
        changeItWhen: ["You find yourself looking down too long for a control"],
        ownerSuggestion:
          "Practice the center console parked until your hand knows where camera, Auto Hold, and Drive Mode live.",
        troubleshooting:
          "If a console button does not respond, check vehicle state first; some controls require Park, brake pedal, or Ready mode.",
      },
      {
        id: "crystal-sphere",
        title: "Crystal Sphere / gear selector",
        body: "The Crystal Sphere rotates to reveal the gear selector when the vehicle is ready. It is a signature GV60 feature and a useful visual cue for whether the car is ready to drive.",
        recommendedSetting:
          "Confirm the selector position and cluster gear indicator before moving. Do not rush the startup animation.",
        bestFor: ["Gear selection", "Startup orientation", "Confirming vehicle state"],
        changeItWhen: ["Parking, reversing, or handing the car to someone unfamiliar"],
        ownerSuggestion:
          "Let the Crystal Sphere be a state check: pretty is nice, but gear confirmation is the useful part.",
        troubleshooting:
          "If the selector is unavailable, confirm the vehicle is on, the brake is pressed, and no startup warning is active.",
        imagePlaceholder: "Crystal Sphere / gear selector",
      },
      {
        id: "start-stop-button",
        title: "Start/Stop button",
        body: "The Start/Stop button powers the vehicle into accessory or ready states depending on brake pedal use. In an EV, silence can make state confusing, so rely on the cluster and Crystal Sphere cues.",
        recommendedSetting:
          "Brake pressed, Start/Stop once, confirm Ready state and gear availability before selecting Drive or Reverse.",
        bestFor: ["Starting", "Shutting down", "Understanding vehicle state"],
        changeItWhen: ["You only need accessory power while parked"],
        ownerSuggestion:
          "Do not assume silence means off. Check the cluster before leaving the vehicle.",
        troubleshooting:
          "If the car will not go Ready, check key/phone key presence where applicable, brake pedal pressure, and cluster messages.",
      },
      {
        id: "drive-mode-selector",
        title: "Drive Mode selector",
        body: "The Drive Mode selector changes the vehicle's personality: throttle response, steering feel, AWD behavior, and related driving calibration. It is one of the most important cabin controls.",
        recommendedSetting:
          "Use Comfort mode as the baseline while learning the vehicle. Move to Eco, Sport, or My Mode intentionally.",
        bestFor: ["Daily driving", "Weather changes", "Learning car behavior"],
        changeItWhen: ["Range, weather, road, or performance needs change"],
        ownerSuggestion:
          "Comfort first. Learn what normal feels like before adding Sport or Boost.",
        troubleshooting:
          "If the car feels too sharp or too muted, check Drive Mode before changing other settings.",
        imagePlaceholder: "Drive Mode selector",
        relatedLinks: [{ to: "/full-guide/driving", label: "Drive modes explained" }],
      },
      {
        id: "boost-button",
        title: "Boost button",
        body: "Boost temporarily sharpens the Performance model's acceleration response. It is exciting, but it is not a casual learning tool and should never be used when cabin controls still feel unfamiliar.",
        recommendedSetting:
          "Leave Boost alone while learning the cabin. Use only in safe, dry, legal conditions with full attention.",
        bestFor: ["Brief performance use", "Already-familiar drivers", "Open, appropriate roads"],
        changeItWhen: [
          "Roads are wet, traffic is present, passengers are uncomfortable, or the driver is still learning",
        ],
        ownerSuggestion:
          "Do not use Boost casually while learning the cabin controls. There is enough going on already.",
        troubleshooting:
          "If Boost is unavailable, check drive state, battery/temperature constraints, and vehicle messages.",
        imagePlaceholder: "Boost button",
        relatedLinks: [{ to: "/full-guide/driving", label: "Boost guidance" }],
      },
      {
        id: "camera-button",
        title: "Camera button",
        body: "The camera button opens parking and surround-view camera angles where equipped. It is a confidence builder for learning the GV60's corners, wheels, and parking clearance.",
        recommendedSetting:
          "Use the 360 camera often at first, especially in tight parking, curbs, garages, and unfamiliar spaces.",
        bestFor: ["Parking", "Garage entry", "Learning vehicle size"],
        changeItWhen: [
          "Camera view is dirty, distorted by weather, or less useful than direct visibility",
        ],
        ownerSuggestion:
          "Use the 360 camera often at first. Build a mental map of the car before you need it in a tight spot.",
        troubleshooting:
          "If the camera view is unclear, clean exterior camera lenses and check lighting or weather conditions.",
        imagePlaceholder: "Camera button",
        relatedLinks: [{ to: "/full-guide/safety", label: "Cameras and sensors" }],
      },
      {
        id: "auto-hold",
        title: "Auto Hold",
        body: "Auto Hold keeps the vehicle stopped after you release the brake, usually in traffic or at lights. It can be convenient, but the feel must be understood before relying on it.",
        recommendedSetting:
          "Practice Auto Hold in a quiet area before using it in stop-and-go traffic.",
        bestFor: ["Traffic lights", "Drive-throughs", "Stop-and-go comfort"],
        changeItWhen: [
          "Parking maneuvers, car washes, tight spaces, or any moment where creeping control matters",
        ],
        ownerSuggestion:
          "Keep Auto Hold understandable before relying on it. Know when it is on, when it releases, and how the pedal feels.",
        troubleshooting:
          "If the car does not creep as expected, check whether Auto Hold is active before pressing harder on the accelerator.",
        imagePlaceholder: "Auto Hold button",
        relatedLinks: [{ to: "/full-guide/driving", label: "Smooth driving habits" }],
      },
      {
        id: "parking-brake",
        title: "Parking brake",
        body: "The electronic parking brake secures the vehicle when parked and may apply automatically in some conditions. It is separate from Auto Hold and should be understood as its own control.",
        recommendedSetting:
          "Use Park and confirm the parking brake state on slopes or when parking for longer periods.",
        bestFor: [
          "Parking on inclines",
          "Secure shutdown",
          "Understanding hold versus park behavior",
        ],
        changeItWhen: [
          "Car wash, towing, service, or special movement procedures require a different state",
        ],
        ownerSuggestion:
          "Do not confuse parking brake with Auto Hold. One is for parking; one is for temporary stops.",
        troubleshooting:
          "If the vehicle resists movement, check the parking brake indicator before assuming a drive system issue.",
        relatedLinks: [{ to: "/full-guide/driving", label: "Driving basics" }],
      },
      {
        id: "infotainment-controller",
        title: "Infotainment controller",
        body: "The infotainment controller gives a physical way to move through screen functions without reaching to tap the display. It is useful when roads are bumpy or the screen is just out of comfortable reach.",
        recommendedSetting: "Use it parked first, then for simple selections only while moving.",
        bestFor: ["Menu selection", "Reducing fingerprints", "Passenger-free control"],
        changeItWhen: ["Touch is faster and the vehicle is stopped"],
        ownerSuggestion:
          "The controller is a precision tool, not a reason to browse menus while driving.",
        troubleshooting:
          "If focus seems to jump unexpectedly, slow down inputs and watch which screen region is active.",
      },
      {
        id: "volume-tune-controls",
        title: "Volume/tune controls",
        body: "Volume and tune controls give tactile access to audio level and station or track behavior. They are often faster and safer than touchscreen audio controls.",
        recommendedSetting:
          "Use physical volume for every drive. Keep startup volume moderate so CarPlay or media surprises are not loud.",
        bestFor: ["Fast volume changes", "Radio tuning", "Passenger-friendly audio control"],
        changeItWhen: [
          "A phone call, navigation prompt, or voice assistant temporarily changes audio focus",
        ],
        ownerSuggestion:
          "If something sounds wrong, lower volume first, then figure out the source.",
        troubleshooting:
          "If volume changes do not affect the expected audio, wait for the active prompt or call to finish and try again.",
      },
      {
        id: "usb-wireless-charging",
        title: "USB / wireless charging",
        body: "The console charging area handles phone power through USB and wireless charging where equipped. It is also the practical backup path when wireless CarPlay or phone battery becomes unreliable.",
        recommendedSetting:
          "Keep a known-good backup cable in the vehicle and place the phone carefully on the wireless charging pad.",
        bestFor: ["Phone charging", "CarPlay backup cable", "Road-trip reliability"],
        changeItWhen: ["Phone overheats, wireless charging pauses, or CarPlay needs a wired test"],
        ownerSuggestion:
          "Wireless charging is convenient; a cable is dependable. Keep both options ready.",
        troubleshooting:
          "If wireless charging stops, remove thick cases or metal accessories, re-center the phone, and let the phone cool.",
        imagePlaceholder: "Center console USB / wireless charging area",
        relatedLinks: [{ to: "/full-guide/apple", label: "When to use a cable" }],
      },
      {
        id: "storage-areas",
        title: "Storage areas",
        body: "Cabin storage includes console bins, cupholders, door pockets, phone areas, and smaller trays. Good storage habits keep the cabin quiet and controls unobstructed.",
        recommendedSetting:
          "Keep a microfiber cloth, backup cable, tire gauge, and small essentials in predictable places.",
        bestFor: ["Daily carry", "Charging gear", "Keeping glossy surfaces clean"],
        changeItWhen: ["Items slide, rattle, block controls, or overheat near charging areas"],
        ownerSuggestion:
          "A tidy console makes the GV60 feel calmer. Do not let loose items crowd the shifter or buttons.",
        troubleshooting:
          "If rattles appear, empty door pockets and console bins before assuming a trim issue.",
        relatedLinks: [{ to: "/full-guide/maintenance", label: "In-car care kit" }],
      },
      {
        id: "door-controls",
        title: "Door controls",
        body: "Door controls group mirrors, windows, locks, and memory buttons around the driver's left side. This area should be learned early because it affects setup, visibility, and daily entry/exit.",
        recommendedSetting:
          "Learn mirror, window, lock, and memory button positions while parked before saving final memory.",
        bestFor: ["Driver setup", "Window and mirror control", "Seat memory access"],
        changeItWhen: ["A second driver needs their own setup"],
        ownerSuggestion:
          "This is the setup panel. Use it deliberately, then leave it alone while driving.",
        troubleshooting:
          "If a door control seems disabled, check child locks, window lock, vehicle state, and whether the door is fully closed.",
        imagePlaceholder: "Door controls",
      },
      {
        id: "window-controls",
        title: "Window controls",
        body: "Window controls handle each cabin window and may include auto-up/down behavior. The driver's panel also usually includes a lockout for passenger windows.",
        recommendedSetting: "Keep window lock off unless children or passengers make it useful.",
        bestFor: ["Ventilation", "Toll booths", "Passenger control"],
        changeItWhen: ["Kids, pets, or car wash procedures require more control"],
        ownerSuggestion:
          "Know where the window lock is before someone thinks their window is broken.",
        troubleshooting:
          "If a passenger window will not move, check the window lock before checking the window switch.",
      },
      {
        id: "mirror-fold-controls",
        title: "Mirror fold controls",
        body: "Mirror fold controls tuck the side mirrors for tight spaces, parking, and garages. Depending on settings, the mirrors may also fold automatically when locking.",
        recommendedSetting:
          "Use auto-fold if it suits the parking environment; manually fold in tight garages or narrow streets.",
        bestFor: ["Garage parking", "Street parking", "Tight spaces"],
        changeItWhen: ["Ice, snow, or tight mechanical resistance could make folding unwise"],
        ownerSuggestion: "Fold mirrors for tight spaces, not as a substitute for careful parking.",
        troubleshooting:
          "If a mirror does not fold smoothly, check for ice, dirt, or obstruction before forcing it.",
      },
      {
        id: "lighting-controls",
        title: "Lighting controls",
        body: "Lighting controls manage headlights, interior lighting behavior, and visibility-related settings. Auto lighting is usually the easiest daily baseline.",
        recommendedSetting:
          "Use Auto headlights for daily driving and verify exterior lights in rain, fog, or unusual lighting.",
        bestFor: ["Daily visibility", "Night driving", "Reducing forgotten-light issues"],
        changeItWhen: ["Weather or visibility calls for manual lights"],
        ownerSuggestion:
          "Auto is a baseline, not an excuse. Look for the lighting indicator when conditions are weird.",
        troubleshooting:
          "If lighting behavior seems wrong, check the stalk/control position and whether Auto mode is active.",
      },
      {
        id: "wipers",
        title: "Wipers",
        body: "The wiper stalk controls front and rear wiping, washer functions, and intermittent or auto behavior depending on equipment. It is a high-use bad-weather control that should be familiar before you need it.",
        recommendedSetting:
          "Learn mist, intermittent/auto, low, high, and washer positions while parked.",
        bestFor: ["Rain", "Road spray", "Snow-season visibility"],
        changeItWhen: ["Rain intensity changes or auto wiping is too sensitive"],
        ownerSuggestion:
          "Do not wait for a storm to learn the wipers. The stalk should be muscle memory.",
        troubleshooting:
          "If wiping streaks or chatters, clean the glass and blades before replacing parts.",
        imagePlaceholder: "Wiper stalk",
        relatedLinks: [{ to: "/full-guide/maintenance", label: "Glass and wiper care" }],
      },
      {
        id: "hazard-lights",
        title: "Hazard lights",
        body: "Hazard lights warn other drivers when the vehicle is stopped, disabled, or creating an unusual road situation. The button should be easy to find without hunting.",
        recommendedSetting:
          "Know the hazard button location before driving. Use it when stopped unexpectedly or when visibility/safety calls for it.",
        bestFor: ["Emergency stops", "Roadside issues", "Warning traffic"],
        changeItWhen: ["The vehicle is moving normally again and the warning is no longer needed"],
        ownerSuggestion:
          "Find this button parked. In a stressful moment, you do not want to search.",
        troubleshooting:
          "If hazards are on unintentionally, press the hazard button once and confirm exterior indicators stop flashing.",
      },
      {
        id: "glovebox",
        title: "Glovebox",
        body: "The glovebox is best for documents and low-use essentials, not heavy clutter. Keep registration, insurance, service papers, and a small microfiber if space allows.",
        recommendedSetting:
          "Keep paperwork organized and leave room for a small cleaning cloth or emergency note.",
        bestFor: ["Documents", "Owner materials", "Low-use cabin items"],
        changeItWhen: ["Items rattle, jam the latch, or make documents hard to find"],
        ownerSuggestion: "Treat the glovebox like a document drawer, not a junk drawer.",
        troubleshooting: "If the glovebox rattles, empty it first and re-pack only flat items.",
      },
      {
        id: "rear-seat-controls",
        title: "Rear seat controls",
        body: "Rear seat controls may include climate vents, USB power, heated seats where equipped, armrest/cupholders, and seat fold or comfort features depending on trim. Rear passengers should know the basics without changing driver settings.",
        recommendedSetting:
          "Show regular passengers vents, USB power, and seat controls once, then keep driver climate baseline stable.",
        bestFor: ["Family trips", "Passenger comfort", "Rear charging"],
        changeItWhen: ["Passengers need different airflow, heat, or charging access"],
        ownerSuggestion:
          "Give rear passengers the controls they need, but keep driver setup and front climate predictable.",
        troubleshooting:
          "If rear passengers report no airflow or power, check front climate state, rear vents, and USB cable/device condition.",
      },
      {
        id: "cargo-area",
        title: "Cargo area",
        body: "The cargo area handles daily bags, charging accessories, emergency gear, and fold-down flexibility. It should stay organized so charging gear and safety items are easy to reach.",
        recommendedSetting:
          "Keep charging adapters/cards, gloves, towel, and roadside essentials in a consistent cargo or underfloor location.",
        bestFor: ["Errands", "Road trips", "Charging gear", "Emergency supplies"],
        changeItWhen: ["Cargo blocks visibility, rattles, or hides charging gear"],
        ownerSuggestion:
          "Make the cargo area boring and predictable. That is exactly what you want when charging in bad weather.",
        troubleshooting:
          "If cargo noise appears, check loose charging gear, cargo cover fit, and underfloor storage before assuming a trim rattle.",
        imagePlaceholder: "Cargo area",
        relatedLinks: [
          { to: "/full-guide/charging", label: "Charging gear" },
          { to: "/full-guide/maintenance", label: "Care kit" },
        ],
      },
      {
        id: "cabin-checklist",
        title: "Cabin setup checklist",
        body: "Use this checklist when setting up the GV60 for Owen or after a reset: profile, seat, wheel, mirrors, memory, primary phone, CarPlay, display/HUD, climate, drive baseline, regen baseline, camera practice, storage kit.",
        recommendedSetting:
          "Profile -> seat -> steering wheel -> mirrors -> seat memory -> primary phone -> Device Connections -> CarPlay -> HUD -> Comfort mode -> regen baseline.",
        bestFor: ["First setup", "New phone", "After service", "Shared vehicle reset"],
        changeItWhen: ["A new regular driver is added"],
        ownerSuggestion:
          "Pair the primary phone first, but only after the physical cabin setup is saved. That order keeps everything calmer.",
        troubleshooting:
          "If the checklist feels out of order, restart at driver profile and physical position before touching phone or screen settings.",
        relatedLinks: [
          { to: "/full-guide/apple", label: "Apple setup" },
          { to: "/full-guide/driving", label: "Driving baseline" },
          { to: "/settings", label: "Recommended Settings" },
        ],
      },
      {
        id: "cabin-troubleshooting",
        title: "Cabin troubleshooting",
        body: "Most cabin confusion comes from the wrong profile, unsaved seat memory, a second phone taking over, unfamiliar press-and-hold controls, or a feature being unavailable in the current vehicle state. Work from physical setup outward.",
        recommendedSetting:
          "Troubleshoot in this order: driver profile, seat memory, vehicle state, phone connection, active drive mode, then deeper settings.",
        bestFor: [
          "Wrong seat position",
          "Wrong phone connects",
          "Buttons feel inconsistent",
          "Display or HUD confusion",
        ],
        changeItWhen: [
          "A warning light or safety issue appears - follow the vehicle message first",
        ],
        ownerSuggestion:
          "Do not chase every symptom at once. Fix the profile and physical setup first; then test the cabin controls one by one.",
        troubleshooting:
          "If a control still behaves oddly after a restart and profile check, search the Troubleshooting hub and note the exact screen message.",
        relatedLinks: [
          { to: "/troubleshooting", label: "Troubleshooting hub" },
          { to: "/full-guide/apple", label: "Phone and CarPlay issues" },
          { to: "/full-guide/safety", label: "Driver assistance issues" },
        ],
      },
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
