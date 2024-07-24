import Hero from "@/components/hero/hero";
import SectionAboutme from "@/components/section-aboutme/section-aboutme";
import SectionExperiences from "@/components/section-experiences/section-experience-total";
import SectionSkill from "@/components/section-skills/sectionSkill";

export default function Home() {
  return (
    <main className="flex-col items-center">
      <Hero />
      <SectionAboutme />
      <SectionSkill />
      <SectionExperiences />
    </main>
  );
}
