import { ArrowUpRight, Code2, Image as ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-card lift-on-hover flex flex-col overflow-hidden rounded-2xl">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <div className="grid size-full place-items-center text-muted-foreground">
            <ImageIcon className="size-7" aria-hidden />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-4 pt-1 text-sm font-medium">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-accent"
            >
              Live Demo <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 className="size-4" aria-hidden /> GitHub
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
