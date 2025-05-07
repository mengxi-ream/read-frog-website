import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, homeLinks } from "@/app/[lang]/layout.config";
import Footer from "@/components/footer";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} links={homeLinks} className="pt-0">
      {children}
      <Footer />
    </HomeLayout>
  );
}
