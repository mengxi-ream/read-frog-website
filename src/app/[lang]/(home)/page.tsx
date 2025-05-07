import { Header } from "@/components/hero/header";
import { Demo } from "@/components/hero/demo";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col dark:bg-[#18181b]">
      <Header />
      <Demo />
    </main>
  );
}
