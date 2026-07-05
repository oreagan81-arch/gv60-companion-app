import { createFileRoute, Link } from "@tanstack/react-router";
import { SettingTable, Chip, ImagePlaceholder } from "@/components/guide";
import { settingsCards, atAGlance } from "@/data/settingsCards";

export const Route = createFileRoute("/owen")({
  head: () => ({
    meta: [
      { title: "Recommended Settings for Owen Reagan — 2023 Genesis GV60 Performance" },
      { name: "description", content: "Personalized recommended settings for Owen Reagan's 2023 Genesis GV60 Performance: drive modes, regen, weather setups, phone, charging, navigation, and more." },
      { property: "og:title", content: "Recommended Settings for Owen Reagan" },
      { property: "og:description", content: "Owen's tuned defaults for the 2023 Genesis GV60 Performance." },
    ],
  }),
  component: OwenPage,
});

/**
 * Reusable settings body — no page wrapper, no title header.
 * Rendered inside /owen (with its own page header) AND /settings (inside the hub).
 */
export function OwenSettingsContent() {
  return (
    <div className="space-y-8">
      <section className="card-glass p-4">
        <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3">At a glance</h2>
        <SettingTable rows={atAGlance} />
      </section>

      {settingsCards.map((card) => (
        <section key={card.id} id={card.id} className="space-y-4 scroll-mt-24">
          <div>
            <h2 className="text-lg font-display font-semibold">{card.title}</h2>
            <p className="text-sm text-muted-foreground">{card.summary}</p>
          </div>
          <div className="grid gap-3">
            {card.items.map((item, i) => (
              <article key={`${card.id}-${i}`} className="card-glass p-4 space-y-3">
                <header>
                  <h3 className="text-base font-semibold">{item.feature}</h3>
                </header>
                <div className="rounded-md bg-primary/10 border border-primary/30 px-3 py-2 text-sm">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-primary block">Recommended</span>
                  <span className="font-medium">{item.setting}</span>
                </div>
                <div className="grid gap-2 text-sm">
                  {item.bestFor && (
                    <p><span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-0.5">Best for</span><span className="text-muted-foreground">{item.bestFor}</span></p>
                  )}
                  <p><span className="text-[10px] uppercase tracking-[0.15em] text-primary block mb-0.5">Change it when</span><span className="text-muted-foreground">{item.changeWhen}</span></p>
                </div>
                <blockquote className="border-l-2 border-primary pl-3 text-sm italic">
                  <span className="not-italic text-[10px] uppercase tracking-[0.15em] text-primary block mb-1">Owen suggestion</span>
                  {item.why}
                </blockquote>
                {item.related && (
                  <Link to={item.related.to} className="text-xs text-primary">
                    Related: {item.related.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function OwenPage() {
  return (
    <div className="container-app py-8 space-y-8 pb-16">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary">Personalized</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold leading-tight">
          Recommended Settings for <span className="text-primary">Owen Reagan</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A tuned default setup for Owen's 2023 Genesis GV60 Performance. These
          are opinionated starting points — safe, comfortable, and easy to
          revisit when conditions change.
        </p>
        <div className="copper-rule" />
        <div className="flex flex-wrap gap-2">
          <Chip tone="primary">2023 GV60 Performance</Chip>
          <Chip>Owen's baseline</Chip>
          <Chip tone="success">Reviewable anytime</Chip>
        </div>
      </div>

      <OwenSettingsContent />

      <ImagePlaceholder caption="Owen's GV60 Performance — hero exterior, 3/4 front" />

      <div className="card-glass p-4 text-sm">
        <p className="text-muted-foreground">
          Ready to try these in the car? Open the{" "}
          <Link to="/quick-start" className="text-primary">Quick Start checklist</Link>{" "}
          or dig into the{" "}
          <Link to="/full-guide" className="text-primary">Full Guide</Link>.
        </p>
      </div>
    </div>
  );
}
