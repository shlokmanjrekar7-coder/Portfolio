import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

const title = "My projects — Shlok Manjrekar";
const description =
  "Things I've built, experiments I've tried, and projects I'm working on — the project portfolio of Shlok Manjrekar.";

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
    <main className="page-aura min-h-screen px-[5vw] py-14">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          to="/"
          className="animate-rise surface-card lift-on-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back
        </Link>

        <div className="mt-10">
          <h1 className="animate-rise text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">VibeCode</span>
          </h1>
          <p
            className="animate-rise mt-3 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base"
            style={{ animationDelay: "80ms" }}
          >
            Things I've built, experiments I've tried, and projects I'm working on.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
