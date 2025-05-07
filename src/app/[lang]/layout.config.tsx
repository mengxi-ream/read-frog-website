import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { APP_NAME } from "@/lib/constants";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { i18n } from "@/lib/i18n";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/mengxi-ream/read-frog",
  i18n,
  nav: {
    title: (
      <>
        <img src="/logo.png" alt="Logo" className="size-6" />
        {APP_NAME}
      </>
    ),
  },
};

export const homeLinks = (lang: string): LinkItemType[] => [
  {
    text: "Tutorial",
    url: `/${lang}/tutorial`,
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
