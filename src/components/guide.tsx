import { useState, type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow && <p className="text-[11px] uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h1 className="text-3xl sm:text-4xl font-display font-semibold leading-tight">{title}</h1>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
      <div className="copper-rule mt-4" />
    </div>
  );
}

export type ImagePlaceholderData = {
  id?: string;
  title: string;
  description: string;
  suggestedCaption?: string;
  altText?: string;
  priority?: "High" | "Medium" | "Low";
  chapter?: string;
  category?: string;
  desiredImage?: string;
  sourceUrl?: string;
  sourceName?: string;
  imagePreviewUrl?: string;
  safeToEmbed?: boolean;
  localAssetPath?: string;
  licenseNotes?: string;
  usageStatus?: string;
  preferredSourceType?: string;
  replacementNeeded?: boolean;
  reviewRequired?: boolean;
  notes?: string;
};

export function ImagePlaceholder({
  caption,
  image,
  imageId,
  desiredImage,
  sourceUrl,
  sourceName,
  status,
  altText,
}: {
  caption?: string;
  image?: ImagePlaceholderData;
  imageId?: string;
  desiredImage?: string;
  sourceUrl?: string;
  sourceName?: string;
  status?: string;
  altText?: string;
}) {
  if (image) {
    const priorityCls =
      image.priority === "High"
        ? "bg-primary/15 text-primary"
        : image.priority === "Medium"
          ? "bg-amber-500/15 text-amber-400"
          : "bg-muted text-muted-foreground";
    const previewUrl = getSafeImagePreviewUrl(image);
    return (
      <figure className="my-4 rounded-xl border border-dashed border-border/70 bg-muted/40 p-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="text-sm font-display font-semibold">{image.title}</p>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {image.priority && (
              <span
                className={`text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 ${priorityCls}`}
              >
                {image.priority}
              </span>
            )}
            {image.usageStatus && (
              <span className="text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 bg-muted text-muted-foreground">
                {image.usageStatus.replaceAll("-", " ")}
              </span>
            )}
          </div>
        </div>
        <ImagePreviewFrame src={previewUrl} alt={image.altText ?? image.title} />
        <dl className="space-y-1.5 text-xs">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">What to shoot</dt>
            <dd className="text-muted-foreground">{image.description}</dd>
          </div>
          {image.desiredImage && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Desired image
              </dt>
              <dd className="text-muted-foreground">{image.desiredImage}</dd>
            </div>
          )}
          {image.suggestedCaption && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Suggested caption
              </dt>
              <dd className="text-muted-foreground italic">{image.suggestedCaption}</dd>
            </div>
          )}
          {image.altText && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Alt text</dt>
              <dd className="text-muted-foreground">{image.altText}</dd>
            </div>
          )}
          {image.sourceUrl && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Source candidate
              </dt>
              <dd>
                <a
                  href={image.sourceUrl}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {image.sourceName ?? image.sourceUrl}
                </a>
              </dd>
            </div>
          )}
          {image.licenseNotes && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Usage note</dt>
              <dd className="text-muted-foreground">{image.licenseNotes}</dd>
            </div>
          )}
          {image.preferredSourceType && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Preferred source
              </dt>
              <dd className="text-muted-foreground">
                {image.preferredSourceType.replaceAll("-", " ")}
              </dd>
            </div>
          )}
          {image.notes && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Notes</dt>
              <dd className="text-muted-foreground">{image.notes}</dd>
            </div>
          )}
          {image.replacementNeeded !== undefined && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Review</dt>
              <dd className="text-muted-foreground">
                {image.replacementNeeded ? "Replacement needed" : "No replacement needed"}
                {image.reviewRequired ? " · manual review required" : ""}
              </dd>
            </div>
          )}
        </dl>
      </figure>
    );
  }

  const hasRichCaption = imageId || desiredImage || sourceUrl || status || altText;
  return (
    <figure className="my-4 rounded-xl border border-dashed border-border/70 bg-muted/40 p-4 text-center">
      <div className="flex items-center justify-center h-32 rounded-lg bg-background/50 text-3xl text-primary/60">
        ◧
      </div>
      <figcaption className="mt-2 text-[11px] italic text-muted-foreground">
        Image: {caption}
      </figcaption>
      {hasRichCaption && (
        <dl className="mt-3 space-y-1.5 text-left text-xs">
          {imageId && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Image ID</dt>
              <dd className="text-muted-foreground">{imageId}</dd>
            </div>
          )}
          {status && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Status</dt>
              <dd className="text-muted-foreground">{status.replaceAll("-", " ")}</dd>
            </div>
          )}
          {desiredImage && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Desired image
              </dt>
              <dd className="text-muted-foreground">{desiredImage}</dd>
            </div>
          )}
          {altText && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">Alt text</dt>
              <dd className="text-muted-foreground">{altText}</dd>
            </div>
          )}
          {sourceUrl && (
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-primary">
                Source candidate
              </dt>
              <dd>
                <a
                  href={sourceUrl}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {sourceName ?? sourceUrl}
                </a>
              </dd>
            </div>
          )}
        </dl>
      )}
    </figure>
  );
}

function getSafeImagePreviewUrl(image: ImagePlaceholderData): string | undefined {
  if (image.usageStatus !== "approved-local-asset" || image.safeToEmbed !== true) {
    return undefined;
  }

  if (image.localAssetPath && isLocalAssetPath(image.localAssetPath)) {
    return image.localAssetPath;
  }

  if (image.imagePreviewUrl && (isLocalAssetPath(image.imagePreviewUrl) || image.safeToEmbed)) {
    return image.imagePreviewUrl;
  }

  return undefined;
}

function isLocalAssetPath(path: string) {
  return path.startsWith("/") && !path.startsWith("//") && !/^https?:\/\//i.test(path);
}

function ImagePreviewFrame({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex items-center justify-center h-24 rounded-lg bg-background/50 text-2xl text-primary/60 mb-3">
        ◧
      </div>
    );
  }

  return (
    <div className="h-24 rounded-lg bg-background/50 overflow-hidden mb-3">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function FeatureCard({
  title,
  whatItDoes,
  recommendation,
  bestFor,
  changeWhen,
  ownerNote,
  troubleshoot,
  image,
}: {
  title: string;
  whatItDoes: string;
  recommendation: string;
  bestFor: string[];
  changeWhen: string[];
  ownerNote: string;
  troubleshoot?: string;
  image?: string;
}) {
  return (
    <article className="card-glass p-5 space-y-4">
      <header>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
        <div
          className="copper-rule mt-2 w-16 !bg-primary"
          style={{ background: "var(--primary)" }}
        />
      </header>

      <Row label="What it does" value={whatItDoes} />
      <Row label="Recommended setting" value={recommendation} highlight />

      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">Best for</p>
        <ul className="text-sm space-y-0.5 text-muted-foreground">
          {bestFor.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">Change it when</p>
        <ul className="text-sm space-y-0.5 text-muted-foreground">
          {changeWhen.map((c) => (
            <li key={c}>• {c}</li>
          ))}
        </ul>
      </div>

      <blockquote className="border-l-2 border-primary pl-3 py-1 text-sm italic text-foreground/90">
        <span className="not-italic text-[10px] uppercase tracking-[0.15em] text-primary block mb-1">
          Owner suggestion
        </span>
        {ownerNote}
      </blockquote>

      {troubleshoot && (
        <details className="text-sm rounded-md bg-muted/40 border border-border/50">
          <summary className="cursor-pointer px-3 py-2 text-primary font-medium">
            Related troubleshooting
          </summary>
          <p className="px-3 pb-3 pt-1 text-muted-foreground">{troubleshoot}</p>
        </details>
      )}

      {image && <ImagePlaceholder caption={image} />}
    </article>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.15em] text-primary mb-1">{label}</p>
      <p
        className={
          highlight
            ? "text-base font-medium text-foreground"
            : "text-sm text-muted-foreground leading-relaxed"
        }
      >
        {value}
      </p>
    </div>
  );
}

export function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "primary" | "warning" | "success";
}) {
  const tones = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary/15 text-primary",
    warning: "bg-warning/15 text-warning",
    success: "bg-success/15 text-success",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function SettingTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={k} className={i % 2 ? "bg-muted/30" : ""}>
              <td className="px-3 py-2 text-muted-foreground w-1/2 border-r border-border/50">
                {k}
              </td>
              <td className="px-3 py-2 font-medium">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
