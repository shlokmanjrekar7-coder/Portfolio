import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type BaseProps = {
  icon: LucideIcon;
  label: string;
  hint?: string;
  delay?: number;
};

const shell =
  "lift-on-hover surface-card animate-rise group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left";

function Inner({ icon: Icon, label, hint, external }: BaseProps & { external?: boolean }) {
  const Arrow = external ? ArrowUpRight : ArrowRight;
  return (
    <>
      <span
        className="grid size-11 shrink-0 place-items-center rounded-xl text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold">{label}</span>
        {hint ? (
          <span className="block truncate text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </span>
      <Arrow
        className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
        aria-hidden
      />
    </>
  );
}

export function LinkButton({ to, delay = 0, ...rest }: BaseProps & { to: string }) {
  return (
    <Link to={to} className={shell} style={{ animationDelay: `${delay}ms` }}>
      <Inner {...rest} />
    </Link>
  );
}

export function SocialLink({ href, delay = 0, ...rest }: BaseProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={shell}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Inner {...rest} external />
    </a>
  );
}

export function LinkStack({ children }: { children: ReactNode }) {
  return <nav className="mt-10 flex flex-col gap-3">{children}</nav>;
}
