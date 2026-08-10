import { EmptyProjectsState } from "./EmptyProjectsState";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return <EmptyProjectsState />;

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
