import { EmptyProjectsState } from "./EmptyProjectsState";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return <EmptyProjectsState />;

  return (
    <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
