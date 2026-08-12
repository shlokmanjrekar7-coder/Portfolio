import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const liveDemoAvailable = project.liveDemoAvailable && project.liveDemoUrl;

  return (
    <article className="surface-card lift-on-hover flex flex-col overflow-hidden rounded-2xl">
      <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} preview`}
            loading="lazy"
            width={1024}
            height={640}
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center text-muted-foreground">
            <ImageIcon className="size-6" aria-hidden />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <h3 className="truncate text-sm font-semibold sm:text-base">{project.name}</h3>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {project.description}
        </p>

        {project.technologies?.length ? (
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs font-medium">
          {liveDemoAvailable ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-primary transition-colors hover:text-accent"
            >
              Live Demo <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-1 text-muted-foreground/60"
            >
              Live Demo — Coming Soon
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
            hidden={!project.githubUrl}
          >
            GitHub <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
