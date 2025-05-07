import { Header } from "@/components/hero/header";
import { Demo } from "@/components/hero/demo";
import { Recall } from "@/components/hero/recall";
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col dark:bg-[#18181b]">
      <Header />
      <Demo />
      <Recall />
    </main>
  );
}
