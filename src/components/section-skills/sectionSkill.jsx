import TitlesContainer from "../section-titles-container";
import Skill from "./sectionSkillSkills";
const SectionSkill = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center px-20 py-24">
      <TitlesContainer
        sTitle={"Skills"}
        sP={"The skills, tools and technologies I am really good at:"}
      />
      <Skill />
    </div>
  );
};
export default SectionSkill;
