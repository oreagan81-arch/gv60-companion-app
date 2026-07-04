import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader, FeatureCard, SettingTable, Chip, ImagePlaceholder } from "@/components/guide";

export const Route = createFileRoute("/guide/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Driver Assistance — GV60 Full Guide" },
      { name: "description", content: "Chapter 7: Safety and Driver Assistance for the 2023 Genesis GV60 Performance — mindset, systems, settings, and troubleshooting." },
      { property: "og:title", content: "Safety & Driver Assistance — GV60" },
      { property: "og:description", content: "The full safety chapter, with Owen's recommended defaults." },
    ],
  }),
  component: SafetyChapter,
});

export function SafetyChapter() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div>
        <Link to="/guide" className="text-xs text-muted-foreground">← Full Guide</Link>
      </div>
      <SectionHeader
        eyebrow="Chapter 05"
        title="Safety & Driver Assistance"
        description="Driver assistance is support. It is not self-driving. You remain responsible for steering, braking, acceleration, lane changes, parking, speed, road judgment, and attention at all times."
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.1 Safety System Mindset</h2>
        <p className="text-sm text-muted-foreground">These systems help you notice, react, and manage the vehicle more confidently — they don't replace your judgment.</p>
        <SettingTable rows={[
          ["Forward safety", "On"],
          ["Blind-spot warning", "On"],
          ["Lane alerts", "On"],
          ["Parking sensors", "On"],
          ["Rear cross-traffic", "On"],
          ["Driver attention", "On"],
          ["Cruise following distance", "Medium–long"],
          ["Warning volume", "Audible but not startling"],
        ]} />
        <p className="text-sm italic text-primary">Owner: don't turn off a warning just because it surprised you once. Learn what it means first.</p>
        <ImagePlaceholder caption="Safety overview graphic — forward, side, rear, lane, parking zones" />
      </section>

      <FeatureCard
        title="7.2 Sensor & Camera Awareness"
        whatItDoes="Cameras, radar, and ultrasonic sensors support parking, blind-spot, lane, forward safety, cross-traffic, and highway systems."
        recommendation="Keep sensor and camera areas clean; check after snow, rain, mud, salt, car washes, or dusty roads."
        bestFor={["Reliable warnings", "Clear parking views", "Better lane behavior", "Predictable assistance"]}
        changeWhen={["Immediately after snow, ice, heavy rain, mud, road salt, car washes, bug buildup"]}
        ownerNote="If a safety feature suddenly acts strange, clean the cameras and sensors before assuming it's broken."
        image="Exterior diagram — sensor/camera 'keep clean' zones"
      />

      <FeatureCard
        title="7.3 Forward Safety Systems"
        whatItDoes="Monitors the road ahead; may warn or assist on slowing/stopped vehicles, pedestrians, cyclists, and frontal collision risk."
        recommendation="Forward warning ON · standard timing · clearly audible · emergency braking support ON if configurable."
        bestFor={["Traffic", "Sudden slowdowns", "Urban driving", "Highway commuting", "Distracted-moment backup"]}
        changeWhen={["Heavy rain, snow, fog, sun glare, dirty sensors, construction, unusual traffic"]}
        ownerNote="Forward safety is a backup — not a following-distance excuse. Keep enough space that you don't need it."
        image="Forward detection zone — vehicle ahead + pedestrian/cyclist"
      />

      <FeatureCard
        title="7.4 Forward Collision Warning Behavior"
        whatItDoes="Alerts sharply when a collision risk ahead is detected."
        recommendation="Look ahead → cover/press brake → steer only if safe → don't assume the vehicle will handle it → rebuild distance."
        bestFor={["Unexpected closing speed", "Traffic slowdowns", "Busy-area backup"]}
        changeWhen={["If warnings happen often, add following distance before tweaking sensitivity"]}
        ownerNote="If warnings are frequent, the fix is usually more distance, not a settings change."
        image="Warning response flow — alert → look → brake → reassess"
      />

      <FeatureCard
        title="7.5 Blind-Spot Warning"
        whatItDoes="Alerts when another vehicle is in or approaching the adjacent lane."
        recommendation="Signal → mirrors → blind-spot indicator → blind-spot camera (if equipped) → glance → change lanes."
        bestFor={["Highway lane changes", "City merging", "Multi-lane roads", "Shared-driver confidence"]}
        changeWhen={["Motorcycles, fast-approach vehicles, rain, snow/mud on sensors, curved roads"]}
        ownerNote="A blind-spot light means 'do not move yet.' No light does not mean 'go without looking.'"
        image="Side mirror blind-spot icon with adjacent vehicle zone"
      />

      <FeatureCard
        title="7.6 Blind-Spot Camera View"
        whatItDoes="Shows a live camera view of the side of the vehicle in the driver display when you signal."
        recommendation="Enable it. Use it as your second check — mirrors and awareness still come first."
        bestFor={["Highway", "Lane changes", "Merging", "Learning vehicle width"]}
        changeWhen={["Feels distracting → practice in light traffic until natural"]}
        ownerNote="Excellent tool, second check. Mirrors first."
        image="Driver cluster showing blind-spot camera view"
      />

      <FeatureCard
        title="7.7 Lane Departure Warning"
        whatItDoes="Warns if the vehicle appears to drift out of its lane without signaling."
        recommendation="Keep ON."
        bestFor={["Highway driving", "Long commutes", "Fatigue backup", "Unintentional-drift awareness"]}
        changeWhen={["Faded markings, construction, snow, sun glare, sharp curves, narrow roads"]}
        ownerNote="If warnings happen often, check your lane position and steering habits before turning it off."
        image="Lane departure graphic — drift toward line"
      />

      <FeatureCard
        title="7.8 Lane Keeping Assist"
        whatItDoes="May apply steering input to discourage unintended lane departure."
        recommendation="Keep enabled during the learning period. Understand its behavior before adjusting."
        bestFor={["Highways", "Clear markings", "Long drives", "Backup steering support"]}
        changeWhen={["Corrections feel too strong, narrow rural roads, frequent construction"]}
        ownerNote="A guardrail, not a chauffeur."
        image="Driver display lane icons — detected / active / unavailable"
      />

      <FeatureCard
        title="7.9 Lane Following Assist"
        whatItDoes="Helps the vehicle stay centered in a lane under suitable conditions."
        recommendation="Learn only after lane departure warning and lane keeping feel familiar."
        bestFor={["Divided highways", "Clear markings", "Long trips", "Light–moderate traffic"]}
        changeWhen={["Poor markings, merges, construction, sharp curves, weather, dirty camera area"]}
        ownerNote="If the vehicle can't clearly see the lane, don't expect lane following to be smooth."
        image="Lane following display — centered vehicle, visible lines"
      />

      <FeatureCard
        title="7.10 Smart Cruise Control"
        whatItDoes="Maintains a set speed and following distance; adjusts speed based on traffic ahead."
        recommendation="Start at medium–long following distance in light-to-moderate highway traffic, clear weather, good markings, full attention."
        bestFor={["Highway commutes", "Road trips", "Steady traffic", "Reducing fatigue"]}
        changeWhen={["Construction, heavy rain, snow, fog, city streets, aggressive traffic, poor markings, complex merges, school zones"]}
        ownerNote="Smart Cruise is best when the road is already easy. Don't use it to make a hard situation feel easier."
        image="Driver display — set speed + following-distance bars"
      />

      <FeatureCard
        title="7.11 Following Distance Settings"
        whatItDoes="Controls how closely the GV60 follows traffic under Smart Cruise."
        recommendation="Medium–long as default. Longer in wet/poor visibility, unpredictable traffic, tired driver, passengers aboard."
        bestFor={["Smooth braking", "Passenger comfort", "Wet roads", "Highway safety"]}
        changeWhen={["Shorten only in clear conditions when you understand the behavior and stay fully attentive"]}
        ownerNote="If Smart Cruise feels abrupt, add distance before blaming the system."
        image="Distance graphic — short / medium / long gaps"
      />

      <FeatureCard
        title="7.12 Highway Driving Assistance"
        whatItDoes="Combines speed, distance, and lane-support functions on suitable highways."
        recommendation="Use only after Smart Cruise and lane systems feel natural individually. Divided highways, clear markings, predictable traffic, good weather."
        bestFor={["Divided highways", "Long drives", "Workload reduction"]}
        changeWhen={["Shifting construction lanes, poor weather, disappearing markings, aggressive traffic, if you start disengaging mentally"]}
        ownerNote="Highway assistance should lower stress, not attention. If you start trusting it too much, turn it off for a while."
        image="Highway assistance screen — speed + lane + distance"
      />

      <FeatureCard
        title="7.13 Automatic Lane Change Assistance"
        whatItDoes="May assist with a lane change after driver input (like signaling) when conditions are met."
        recommendation="Use only after blind-spot, lane following, Smart Cruise, highway assistance, and manual lane-change routines all feel comfortable."
        bestFor={["Clear highways", "Light traffic", "Good markings", "Experienced users"]}
        changeWhen={["Heavy traffic, rain, snow, construction, fast-approach vehicles, near exits or merges"]}
        ownerNote="The lane change is still your decision. Signal, check mirrors, check blind spots, stay ready to steer."
        image="Assisted lane-change sequence — signal → check → assist → complete"
      />

      <FeatureCard
        title="7.14 Rear Cross-Traffic Warning"
        whatItDoes="Warns about vehicles approaching from either side while you're backing up."
        recommendation="Keep ON. Back out slowly so it has time to help."
        bestFor={["Parking lots", "Driveways", "Blocked-view spaces", "Shopping/school parking"]}
        changeWhen={["Large vehicles blocking sensors, fast traffic, small objects, snow/mud on sensors, tight angles"]}
        ownerNote="Rear cross-traffic works best when you move slowly."
        image="Rear cross-traffic graphic — approaching vehicle L/R"
      />

      <FeatureCard
        title="7.15 Parking Distance Warning"
        whatItDoes="Alerts as the vehicle gets closer to objects around it."
        recommendation="Keep ON."
        bestFor={["Garages", "Curbs", "Poles", "Tight spaces", "Public chargers", "Parallel parking"]}
        changeWhen={["Very low or thin objects, soft/angled obstacles, moving children or pets, curbs hidden below camera view"]}
        ownerNote="Sensors help, but they don't know everything. Use cameras, mirrors, and direct vision together."
        image="Parking sensor distance zones — green/yellow/red"
      />

      <FeatureCard
        title="7.16 Surround-View / 360 Camera"
        whatItDoes="Shows views around the vehicle for parking and low-speed maneuvering."
        recommendation="Use it frequently during your first month."
        bestFor={["Learning vehicle size", "Curbs", "Garages", "Public chargers", "Tight driveways", "Parallel parking"]}
        changeWhen={["Reduced by rain, snow, dirt, darkness, glare, lens distortion"]}
        ownerNote="Open the camera before you're already in trouble. Easier to avoid a curb than correct after."
        image="Center screen 360 view — front/rear/side labels"
      />

      <FeatureCard
        title="7.17 Safe Exit & Door Awareness"
        whatItDoes="Warns about approaching traffic when occupants are opening doors."
        recommendation="Keep exit-warning features ON if equipped. Teach passengers to pause and look."
        bestFor={["Street parking", "Kids/passengers", "Urban areas", "Bike lanes", "Rideshare stops"]}
        changeWhen={["Always check manually for cyclists, scooters, motorcycles, delivery vehicles"]}
        ownerNote="Technology helps, but door safety is a habit."
        image="Street parking door warning — cyclist approaching"
      />

      <FeatureCard
        title="7.18 Driver Attention Warning"
        whatItDoes="Monitors driving patterns; may recommend a break if inattention/fatigue is detected."
        recommendation="Keep ON. If it suggests a break — take it seriously."
        bestFor={["Long drives", "Late nights", "Road trips", "Monotonous highways"]}
        changeWhen={["Never disable to push through fatigue"]}
        ownerNote="If the car thinks you need a break, at least ask yourself honestly whether it's right."
        image="Driver attention coffee-cup style alert"
      />

      <FeatureCard
        title="7.19 Speed Limit & Speed Alerts"
        whatItDoes="Displays posted limits and/or speed-related alerts based on maps, cameras, and region."
        recommendation="Use as a helpful reference — not as your only source."
        bestFor={["Unfamiliar roads", "School zones", "Highway transitions", "Road trips"]}
        changeWhen={["Data may be wrong due to construction, temporary signs, school-zone timing, map issues"]}
        ownerNote="The sign on the road wins. Treat vehicle speed-limit data as assistance, not legal proof."
        image="Driver display speed-limit icon"
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.20 Parking Lot Safety</h2>
        <SettingTable rows={[
          ["Drive mode", "Comfort"],
          ["Regen", "Low–medium"],
          ["Camera", "Use early"],
          ["Parking sensors", "On"],
          ["Rear cross-traffic", "On"],
          ["Speed", "Very slow"],
          ["Attention", "High"],
        ]} />
        <p className="text-sm text-muted-foreground">Watch for children, carts, reversing vehicles, pedestrians between cars, curbs, poles, distracted drivers.</p>
        <p className="text-sm italic text-primary">Owner: parking lots aren't low-risk just because speeds are low.</p>
      </section>

      <FeatureCard
        title="7.21 Charger Safety"
        whatItDoes="Public/private charging locations add cable, cord, pedestrian, and surface hazards."
        recommendation="Approach slowly → cameras → park for cable reach → cable slack → don't block stalls → inspect connector → confirm charging."
        bestFor={["Public DC fast charging", "Shared L2 lots", "Wet or icy stalls"]}
        changeWhen={["Poor lighting, damaged connectors, other EVs backing in — pause and reassess"]}
        ownerNote="At chargers, attention splits between vehicle, cable, and people. Move deliberately."
        image="Charging station safety card — cable/stall/pedestrian"
      />

      <FeatureCard
        title="7.22 Car Wash Safety"
        whatItDoes="Automatic washes complicate EV controls — Neutral, Auto Hold, parking brake, mirrors, wipers."
        recommendation="Read wash instructions · know how to select Neutral · turn off Auto Hold if needed · disable auto wipers · fold mirrors only if appropriate · follow attendant · keep key inside."
        bestFor={["Automatic conveyor washes"]}
        changeWhen={["Practice selecting Neutral parked before you need it in line"]}
        ownerNote="Practice Neutral before it matters."
        image="Car wash prep checklist"
      />

      <FeatureCard
        title="7.23 Child & Passenger Safety"
        whatItDoes="Passenger comfort and safety require more than seatbelts."
        recommendation="Confirm belts → child seats installed → child locks → rear climate → reduce regen for comfort → Comfort mode → keep exit-warning ON."
        bestFor={["Family trips", "School runs", "Carpools", "Motion-sensitive riders"]}
        changeWhen={["Solo? Return regen and mode to your daily default"]}
        ownerNote="Passengers experience regen and acceleration differently than the driver."
        image="Rear-seat safety checklist"
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.24 Pet Safety</h2>
        <SettingTable rows={[
          ["Drive mode", "Comfort"],
          ["Regen", "Low"],
          ["Climate", "Auto"],
          ["Acceleration", "Gentle"],
          ["Braking", "Early and smooth"],
          ["Pet restraint", "Properly secured"],
          ["Window controls", "Managed by driver"],
        ]} />
        <p className="text-sm italic text-primary">Owner: lower regen when carrying pets. Abrupt lift-off is uncomfortable for them.</p>
        <ImagePlaceholder caption="Pet-safe rear seat or cargo restraint setup" />
      </section>

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.25 Night Driving</h2>
        <SettingTable rows={[
          ["Headlights", "Auto, verify active"],
          ["HUD", "Lower brightness"],
          ["Center screen", "Comfortable night brightness"],
          ["Driver display", "Clear, not cluttered"],
          ["Following distance", "Longer"],
          ["Wipers / glass", "Clean"],
          ["Driver assistance", "Alerts on"],
        ]} />
        <p className="text-sm italic text-primary">Owner: if night driving feels tiring, lower HUD/screen brightness before blaming headlights.</p>
      </section>

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.26 Rain Safety</h2>
        <SettingTable rows={[
          ["Drive mode", "Eco or Comfort"],
          ["Regen", "Low to moderate"],
          ["Following distance", "Longer"],
          ["Wipers", "Auto or manual as needed"],
          ["Headlights", "On when visibility drops"],
          ["Cruise", "Use cautiously"],
          ["Lane assistance", "Monitor carefully"],
        ]} />
        <p className="text-sm italic text-primary">Owner: in rain, smoothness is safety. Avoid sudden inputs.</p>
      </section>

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.27 Snow & Ice Safety</h2>
        <SettingTable rows={[
          ["Drive mode", "Snow, Eco, or Comfort"],
          ["Regen", "Low to moderate"],
          ["Climate", "Precondition while plugged in"],
          ["Following distance", "Much longer"],
          ["Acceleration", "Gentle"],
          ["Tires", "Winter-capable if needed"],
          ["Sensors", "Clear snow and salt"],
        ]} />
        <p className="text-sm italic text-primary">Owner: no safety system overcomes bad traction. Tires, speed, and smoothness matter most.</p>
      </section>

      <FeatureCard
        title="7.28 Warning Lights & Messages"
        whatItDoes="The GV60 may show warnings in the driver display or center screen."
        recommendation="Read the message → reduce speed if needed → check surroundings → don't dismiss repeat warnings → pull over safely if urgent → consult owner's manual or service."
        bestFor={["Avoiding ignored issues", "Understanding system status", "Safe troubleshooting"]}
        changeWhen={["Repeated warnings mean information, not annoyance"]}
        ownerNote="Don't clear a warning until you understand it."
        image="Generic warning card — read/respond/verify"
      />

      <FeatureCard
        title="7.29 Turning Systems Off Temporarily"
        whatItDoes="Some situations (car washes, deep snow, unusual maneuvers) may require temporary changes."
        recommendation="Understand what it does → turn off only for the specific situation → turn back on afterward → confirm no warning remains."
        bestFor={["Auto washes", "Service procedures", "Sensor blockage", "False warnings from special conditions"]}
        changeWhen={["Set a reminder to re-enable — 'temporary off' shouldn't become 'permanently forgotten'"]}
        ownerNote="If you disable a safety feature, set a reminder to turn it back on."
        image="Temporary off → complete task → turn back on"
      />

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.30 Safety Troubleshooting</h2>
        <ul className="text-sm space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Forward warnings happen too often →</strong> check following distance, driving style, warning sensitivity, traffic, sensor cleanliness.</li>
          <li><strong className="text-foreground">Blind-spot warning inconsistent →</strong> clean rear/side sensor areas; fast-approaching vehicles behave differently.</li>
          <li><strong className="text-foreground">Lane system confused →</strong> check markings, windshield camera area, weather, construction, status icons.</li>
          <li><strong className="text-foreground">Smart Cruise brakes too hard →</strong> increase following distance; retest in lighter traffic.</li>
          <li><strong className="text-foreground">Parking sensors beep too much →</strong> proximity to curbs, walls, poles, bikes, snow, sensor dirt.</li>
          <li><strong className="text-foreground">Camera view blurry →</strong> clean the lens gently.</li>
          <li><strong className="text-foreground">Rear cross-traffic fails to alert →</strong> back out slower, clean sensors, parked vehicles can block detection.</li>
          <li><strong className="text-foreground">Driver assistance unavailable →</strong> check for blocked cameras/sensors from snow, mud, glare, rain.</li>
        </ul>
        <p className="text-sm italic text-primary">Owner: most complaints are one of four things — dirty sensors, bad weather, unclear road markings, or a setting you haven't learned yet.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-display font-semibold">7.31 Recommended Safety Settings Cards</h2>

        <div className="grid gap-3">
          <QuickCard title="Everyday" rows={[
            ["Forward Safety", "On"], ["Blind-Spot", "On"], ["Rear Cross-Traffic", "On"], ["Parking Sensors", "On"],
            ["Lane Alerts", "On"], ["Cruise Distance", "Medium–long"], ["Camera", "Use often"], ["Warning Volume", "Audible + comfortable"],
          ]} />
          <QuickCard title="Highway" rows={[
            ["Drive Mode", "Comfort"], ["Smart Cruise", "Good conditions only"], ["Following Distance", "Medium–long"],
            ["Lane Assist", "On, monitor"], ["Blind-Spot", "On"], ["Navigation", "Active before departure"],
            ["Driver Attention", "Full"], ["Weather", "Avoid assist reliance in poor weather"],
          ]} />
          <QuickCard title="Parking" rows={[
            ["Camera", "Open early"], ["Parking Sensors", "On"], ["Rear Cross-Traffic", "On"],
            ["Speed", "Very slow"], ["Mirrors", "Use with camera"], ["Auto Hold", "Use carefully"], ["Direct Vision", "Always check"],
          ]} />
          <QuickCard title="Rain" rows={[
            ["Drive Mode", "Eco or Comfort"], ["Regen", "Low to moderate"], ["Following Distance", "Longer"],
            ["Wipers", "Ready"], ["Headlights", "On when needed"], ["Cruise", "Cautious use only"], ["Lane Assistance", "Monitor closely"],
          ]} />
          <QuickCard title="Winter" rows={[
            ["Drive Mode", "Snow, Eco, or Comfort"], ["Regen", "Low to moderate"], ["Following Distance", "Much longer"],
            ["Climate", "Precondition"], ["Tires", "Check condition/pressure"], ["Sensors", "Clear before driving"], ["Speed", "Conservative"],
          ]} />
          <QuickCard title="Shared Driver" rows={[
            ["Profile", "Separate per driver"], ["Safety Alerts", "Keep on"], ["Drive Mode", "Comfort"],
            ["Regen", "Level 1–2"], ["Cruise", "Teach before use"], ["Parking Camera", "Demonstrate"], ["Boost", "Explain restrictions"],
          ]} />
        </div>
      </section>

      <section className="card-glass p-5 space-y-3">
        <h2 className="text-xl font-display font-semibold">7.32 Final Safety Summary</h2>
        <p className="text-sm text-muted-foreground">GV60 safety systems work best when you understand their limits.</p>
        <div>
          <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">Best learning order</p>
          <ol className="text-sm text-muted-foreground list-decimal ml-5 space-y-0.5">
            <li>Parking sensors</li>
            <li>360 camera</li>
            <li>Blind-spot warning</li>
            <li>Forward safety warning</li>
            <li>Lane departure warning</li>
            <li>Lane keeping assist</li>
            <li>Smart Cruise Control</li>
            <li>Lane following assist</li>
            <li>Highway assistance</li>
            <li>Assisted lane change (if equipped)</li>
          </ol>
        </div>
        <p className="text-sm italic text-primary">Owner: the safest GV60 setup isn't the one with the most tech turned on blindly. It's the one where the driver understands each system, keeps sensors clean, uses conservative settings, and stays fully engaged.</p>
      </section>

      <div className="flex flex-wrap gap-2 pt-2">
        <Chip tone="primary">Chapter 05 · Safety</Chip>
        <Link to="/owen#alerts" className="text-xs text-primary self-center">See Owen's alert defaults →</Link>
      </div>
    </div>
  );
}

function QuickCard({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="card-glass p-4">
      <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-3">{title}</h3>
      <SettingTable rows={rows} />
    </div>
  );
}
