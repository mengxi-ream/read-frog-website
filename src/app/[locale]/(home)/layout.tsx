import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, homeLinks } from "@/app/[locale]/layout.config";
import Footer from "@/components/footer";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <HomeLayout {...baseOptions} links={homeLinks(locale)} className="pt-0">
      {children}
      <Footer params={{ locale }} />
    </HomeLayout>
  );
}
