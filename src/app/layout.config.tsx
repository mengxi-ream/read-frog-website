import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { APP_NAME } from "@/lib/constants";
import { GithubInfo } from "fumadocs-ui/components/github-info";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/mengxi-ream/read-frog",
  nav: {
    title: (
      <>
        <img src="/logo.png" alt="Logo" className="size-6" />
        {APP_NAME}
      </>
    ),
  },
};

export const homeLinks: LinkItemType[] = [
  {
    text: "Tutorial",
    url: "/tutorial",
    active: "nested-url",
  },
];

export const docsLinks: LinkItemType[] = [
  {
    type: "custom",
    children: (
      <GithubInfo owner="mengxi-ream" repo="read-frog" className="lg:-mx-2" />
    ),
  },
];
