import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { APP_NAME_LOCALE, NAV_ITEMS_LOCALE } from "@/lib/constants";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import { i18n } from "@/lib/i18n";
import { Locale } from "@/i18n/routing";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions = (locale: Locale): BaseLayoutProps => ({
  githubUrl: "https://github.com/mengxi-ream/read-frog",
  i18n,
  nav: {
    title: (
      <>
        <img src="/logo.png" alt="Logo" className="size-6" />
        {APP_NAME_LOCALE[locale]}
      </>
    ),
  },
});

export const homeLinks = (locale: Locale): LinkItemType[] => [
  {
    text: NAV_ITEMS_LOCALE.tutorial[locale],
    url: `/${locale}/tutorial`,
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
