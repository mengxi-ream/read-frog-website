import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
  SITE_PUBLIC_URL,
} from "@/lib/constants";
import "@/styles/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Metadata } from "next";
import { Translations } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_PUBLIC_URL),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    locale: "en_US",
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const cn: Partial<Translations> = {
  search: "Translated Content",
  // other translations
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Chinese",
    locale: "cn",
  },
];

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            // available languages
            locales,
            // translations for UI
            translations: { cn }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
