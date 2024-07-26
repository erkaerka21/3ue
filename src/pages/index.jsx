import CopyRightSec from "@/components/copyright-section/cpoy-right-sec";
import GetTouchSec from "@/components/getTouch-section/getTouch-section";
import Hero from "@/components/hero/hero";
import SectionAboutme from "@/components/section-aboutme/section-aboutme";
import SectionExperiences from "@/components/section-experiences/section-experience-total";
import FeedbackSection from "@/components/section-feedback/feedbacksection";
import SectionSkill from "@/components/section-skills/sectionSkill";
import WorkSection from "@/components/work-section/workSection";

export default function Home() {
  return (
    <main className="flex-col items-center">
      <Hero />
      <SectionAboutme />
      <SectionSkill />
      <SectionExperiences />
      <WorkSection />
      <GetTouchSec />
      <FeedbackSection />
      <CopyRightSec />
    </main>
  );
}
