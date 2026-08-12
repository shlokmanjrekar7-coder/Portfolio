import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import avatar from "@/assets/profile-placeholder.jpg";

const title = "My projects — Shlok Manjrekar";
const description =
  "Small, creative, and useful web projects built by Shlok Manjrekar — a project showcase.";

export const Route = createFileRoute("/vibecode")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VibeCode,
});

function VibeCode() {
  return (
    <main className="projects-dark projects-aura min-h-screen px-[5vw] py-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          className="animate-rise surface-card lift-on-hover inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium sm:text-sm"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back
        </Link>

        <header className="animate-rise mt-8 flex flex-col items-center text-center">
          <img
            src={avatar}
            alt="Shlok Manjrekar"
            width={96}
            height={96}
            className="size-16 rounded-full border border-border object-cover shadow-[var(--shadow-lift)] sm:size-20"
          />
          <h1 className="mt-3 text-xl font-bold uppercase tracking-[0.18em] sm:text-2xl">
            <span className="text-gradient-brand">Shlok Manjrekar</span>
          </h1>
          <p className="mt-2 max-w-sm text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Building small, creative, and useful web projects.
          </p>
        </header>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
