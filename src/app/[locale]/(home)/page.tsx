import { Header } from "@/components/hero/header";
import { Demo } from "@/components/hero/demo";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  // const t = useTranslations("home");

  return (
    <main className="flex flex-1 flex-col dark:bg-[#18181b]">
      <Header />
      <Demo />
    </main>
  );
}
