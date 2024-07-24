import Hero from "@/components/hero/hero";
import SectionAboutme from "@/components/section-aboutme/section-aboutme";
import SectionSkill from "@/components/section-skills/sectionSkill";
import Skill from "@/components/section-skills/sectionSkillSkills";

export default function Home() {
  return (
    <main className="flex-col items-center">
      <Hero />
      <SectionAboutme />
      <SectionSkill />
    </main>
  );
}
