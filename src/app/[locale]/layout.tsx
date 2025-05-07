import { SITE_PUBLIC_URL } from "@/lib/constants";
import "@/styles/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Metadata } from "next";
import { Translations } from "fumadocs-ui/i18n";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_PUBLIC_URL),
    title: {
      default: t("appDefaultTitle"),
      template: t("appTitleTemplate"),
    },
    description: t("appDescription"),
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: "website",
      siteName: t("appName"),
      title: {
        default: t("appDefaultTitle"),
        template: t("appTitleTemplate"),
      },
      locale: locale,
      description: t("appDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: {
        default: t("appDefaultTitle"),
        template: t("appTitleTemplate"),
      },
      description: t("appDescription"),
    },
  };
}

const zh: Partial<Translations> = {
  search: "搜索",
  // other translations
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const localesInUI = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Chinese",
    locale: "zh",
  },
];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider>
          <RootProvider
            i18n={{
              locale,
              // available languages
              locales: localesInUI,
              // translations for UI
              translations: locale !== "en" ? { zh }[locale] : undefined,
            }}
          >
            {children}
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
