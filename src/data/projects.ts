export type Project = {
  id: string;
  name: string;
  description: string;
  /** Image URL or an imported asset from src/assets */
  thumbnail?: string;
  technologies?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  /** Set false to show "Live Demo — Coming Soon" (disabled). */
  liveDemoAvailable?: boolean;
};

/**
 * Add projects here — they automatically render as cards in the grid.
 *
 * Example:
 * {
 *   id: "my-app",
 *   name: "My App",
 *   description: "A short description of what it does.",
 *   thumbnail: "https://example.com/shot.png",
 *   technologies: ["React", "TypeScript"],
 *   githubUrl: "https://github.com/shlokmanjrekar7-coder/my-app",
 *   liveDemoUrl: "https://myapp.com",
 *   liveDemoAvailable: true,
 * },
 */
export const projects: Project[] = [
  {
    id: "urban-threads",
    name: "Urban Threads",
    description: "A fashion and clothing website built as a web development project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/shlokmanjrekar7-coder/Urban-threads",
    liveDemoUrl: "https://shlokmanjrekar7-coder.github.io/Urban-threads/",
    liveDemoAvailable: true,
  },
];
