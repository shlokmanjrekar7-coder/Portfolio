/**
 * To use your own photo: drop it in src/assets/ and change the import below.
 * e.g. import profilePhoto from "@/assets/shlok.jpg";
 */
import profilePhoto from "@/assets/profile-placeholder.jpg";

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="animate-rise relative">
        <div
          aria-hidden
          className="absolute -inset-1 rounded-full opacity-70 blur-md"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        />
        <img
          src={profilePhoto}
          alt="Shlok Manjrekar"
          width={512}
          height={512}
          className="relative size-28 rounded-full border-4 border-card object-cover shadow-[var(--shadow-soft)] sm:size-32"
        />
      </div>

      <h1
        className="animate-rise mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ animationDelay: "60ms" }}
      >
        SHLOK <span className="text-gradient-brand">MANJREKAR</span>
      </h1>

      <p
        className="animate-rise mt-3 max-w-md text-balance text-sm leading-relaxed text-muted-foreground sm:text-base"
        style={{ animationDelay: "120ms" }}
      >
        Computer Science student who likes building things, experimenting with code, and learning
        along the way.
      </p>
    </header>
  );
}
