import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, homeLinks } from "@/app/[lang]/layout.config";
import Footer from "@/components/footer";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <HomeLayout {...baseOptions} links={homeLinks(lang)} className="pt-0">
      {children}
      <Footer />
    </HomeLayout>
  );
}
