export type Project = {
  name: string;
  description: string;
  /** Image URL or an imported asset from src/assets */
  thumbnail?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
};

/**
 * Add projects here — they automatically render as cards in the grid.
 *
 * Example:
 * {
 *   name: "My App",
 *   description: "A short description of what it does.",
 *   thumbnail: "https://example.com/shot.png",
 *   liveUrl: "https://myapp.com",
 *   githubUrl: "https://github.com/shlokmanjrekar7-coder/my-app",
 *   tags: ["React", "TypeScript"],
 * },
 */
export const projects: Project[] = [];
