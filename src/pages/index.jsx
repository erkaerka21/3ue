import CopyRightSec from "@/components/copyright-section/cpoy-right-sec";
import GetTouchSec from "@/components/getTouch-section/getTouch-section";
import Hero from "@/components/hero/hero";
import SectionAboutUvuu from "@/components/section-uvuu/section-aboutuvuu";
import { motion } from "framer-motion";
import SectionAboutEtseg from "@/components/section-etseg/section-aboutetseg";
import SectionAboutMe from "@/components/section-me/section-aboutme";
export default function Home() {
  return (
    <main className="flex-col items-center">
      <Hero />
      <SectionAboutUvuu />
      <SectionAboutEtseg />
      <SectionAboutMe />
      <GetTouchSec />
      <CopyRightSec />
    </main>
  );
}
