import TitlesContainer from "../section-titles-container";
import AboutMeAside from "./aboutme-aside";
import AboutMeText from "./aboutme-text";

const SectionAboutUvuu = () => {
  return (
    <div
      className=" grid grid-cols-1 content-center justify-items-center px-20 py-12 bg-gray-100"
      id="uvuu"
    >
      <labelTag label="about" />
      <TitlesContainer sTitle={"Эцэг өвөө"} sP={""} />
      <div className="max-sm:flex-col flex items-center justify-between gap-x-64">
        <AboutMeAside />
        <AboutMeText />
      </div>
    </div>
  );
};
export default SectionAboutUvuu;
