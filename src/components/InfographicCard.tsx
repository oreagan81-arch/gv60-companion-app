import { Link } from "@tanstack/react-router";

export type InfographicCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  to: string;
  linkLabel: string;
  hash?: string;
};

export function InfographicCard({
  title,
  description,
  imageSrc,
  alt,
  to,
  linkLabel,
  hash,
}: InfographicCardProps) {
  return (
    <article className="card-glass overflow-hidden">
      <a href={imageSrc} target="_blank" rel="noreferrer" aria-label={`Open ${title} full size`}>
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="w-full max-h-[520px] object-contain bg-background/70"
        />
      </a>
      <div className="p-4 space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Visual guide</p>
        <h2 className="text-lg font-display font-semibold leading-snug">{title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            to={to}
            hash={hash}
            className="inline-flex items-center rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/25"
          >
            {linkLabel} →
          </Link>
          <a
            href={imageSrc}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-muted text-muted-foreground px-3 py-1 text-xs font-medium hover:text-foreground"
          >
            Open full size
          </a>
        </div>
      </div>
    </article>
  );
}
