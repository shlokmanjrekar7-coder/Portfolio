import { Sparkles } from "lucide-react";

export function EmptyProjectsState() {
  return (
    <div className="surface-card animate-rise mt-10 flex flex-col items-center rounded-3xl px-6 py-14 text-center">
      <span
        className="grid size-14 place-items-center rounded-2xl text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <Sparkles className="size-6" aria-hidden />
      </span>
      <h2 className="mt-5 text-xl font-semibold">Projects coming soon 🚀</h2>
      <p className="mt-2 max-w-sm text-balance text-sm text-muted-foreground">
        Currently building, experimenting, and learning. Check back soon.
      </p>
    </div>
  );
}
