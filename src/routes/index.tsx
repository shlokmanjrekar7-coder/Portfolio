import { createFileRoute } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Sparkles } from "lucide-react";

import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkButton, LinkStack, SocialLink } from "@/components/LinkButton";

const title = "Shlok Manjrekar — CS Student & Developer";
const description =
  "Computer Science student who likes building things, experimenting with code, and learning along the way. Links to my projects, Instagram, LinkedIn and GitHub.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="page-aura flex min-h-screen items-center justify-center px-[5vw] py-16">
      <div className="w-full max-w-[600px]">
        <ProfileHeader />

        <LinkStack>
          <LinkButton
            to="/vibecode"
            icon={Sparkles}
            label="VibeCode"
            hint="Projects & experiments"
            delay={180}
          />
          <SocialLink
            href="https://www.instagram.com/shlokkmanjrekarr/"
            icon={Instagram}
            label="Instagram"
            hint="@shlokkmanjrekarr"
            delay={240}
          />
          <SocialLink
            href="https://www.linkedin.com/in/shlok-manjrekar-810447383/"
            icon={Linkedin}
            label="LinkedIn"
            hint="Let's connect"
            delay={300}
          />
          <SocialLink
            href="https://github.com/shlokmanjrekar7-coder"
            icon={Github}
            label="GitHub"
            hint="Code & repositories"
            delay={360}
          />
        </LinkStack>
      </div>
    </main>
  );
}
