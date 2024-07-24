import SectionskillTitle from "./sectionSkill-title";
import Skill from "./sectionSkillSkills";
const SectionSkill = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center px-20 py-24">
      <SectionskillTitle />
      <Skill />
    </div>
  );
};
export default SectionSkill;
