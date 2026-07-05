import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page isn't part of Owen's GV60 companion.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1613" },
      { title: "Owen's GV60 Companion — 2023 Genesis GV60 Performance" },
      {
        name: "description",
        content:
          "A personalized in-car companion guide for Owen Reagan's 2023 Genesis GV60 Performance — recommended settings, quick-start checklists, and the full owner guide.",
      },
      { property: "og:title", content: "Owen's GV60 Companion" },
      {
        property: "og:description",
        content: "Personalized owner companion for Owen Reagan's 2023 Genesis GV60 Performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function TopNav() {
  const linkBase =
    "rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition";
  const linkActive = "rounded-full px-3 py-1.5 bg-primary/15 text-primary";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-app flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-display font-semibold tracking-tight">
            GV60 <span className="text-primary">Companion</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-xs">
          <Link to="/in-car" className={linkBase} activeProps={{ className: linkActive }}>
            In Car
          </Link>
          <Link to="/quick-start" className={linkBase} activeProps={{ className: linkActive }}>
            Quick Start
          </Link>
          <Link to="/full-guide" className={linkBase} activeProps={{ className: linkActive }}>
            Full Guide
          </Link>
          <Link to="/settings" className={linkBase} activeProps={{ className: linkActive }}>
            Settings
          </Link>
          <Link to="/troubleshooting" className={linkBase} activeProps={{ className: linkActive }}>
            Troubleshoot
          </Link>
          <Link to="/favorites" className={linkBase} activeProps={{ className: linkActive }}>
            ★
          </Link>
          <Link to="/search" className={linkBase} activeProps={{ className: linkActive }}>
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}

function BottomTabs() {
  const tabClass = "flex flex-col items-center gap-0.5 py-2 px-2 text-[10px] text-muted-foreground";
  const activeClass = "flex flex-col items-center gap-0.5 py-2 px-2 text-[10px] text-primary";
  return (
    <nav className="sticky bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="container-app grid grid-cols-5">
        <Link
          to="/"
          className={tabClass}
          activeProps={{ className: activeClass }}
          activeOptions={{ exact: true }}
        >
          <span aria-hidden>🏠</span>
          <span>Home</span>
        </Link>
        <Link to="/quick-start" className={tabClass} activeProps={{ className: activeClass }}>
          <span aria-hidden>⚡</span>
          <span>Quick Start</span>
        </Link>
        <Link to="/settings" className={tabClass} activeProps={{ className: activeClass }}>
          <span aria-hidden>◆</span>
          <span>Settings</span>
        </Link>
        <Link to="/troubleshooting" className={tabClass} activeProps={{ className: activeClass }}>
          <span aria-hidden>🛠</span>
          <span>Troubleshoot</span>
        </Link>
        <Link to="/search" className={tabClass} activeProps={{ className: activeClass }}>
          <span aria-hidden>🔍</span>
          <span>Search</span>
        </Link>
      </div>
    </nav>
  );
}

function GlobalDisclaimer() {
  return (
    <div className="container-app pb-8 pt-4">
      <div className="rounded-lg border border-border/60 bg-card/40 p-3 text-[11px] leading-relaxed text-muted-foreground">
        Feature availability, menu names, and behavior may vary by software version, region, and
        equipment. Confirm in your exact vehicle and official Genesis materials.
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <GlobalDisclaimer />
        <BottomTabs />
      </div>
    </QueryClientProvider>
  );
}
