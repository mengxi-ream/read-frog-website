import { Header } from "@/components/hero/header";
import { Demo } from "@/components/hero/demo";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  // const t = useTranslations("home");

  return (
    <main className="flex flex-1 flex-col dark:bg-[#18181b]">
      <Header />
      <Demo />
      {/* <p>{t("title")}</p> */}
    </main>
  );
}
