import Hero from "@/components/hero/hero";
import SectionAboutme from "@/components/section-aboutme/section-aboutme";

export default function Home() {
  return (
    <main className="flex-col items-center">
      <Hero />
      <SectionAboutme />
    </main>
  );
}
