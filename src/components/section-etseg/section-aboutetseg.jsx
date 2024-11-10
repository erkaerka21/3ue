import TitlesContainer from "../section-titles-container";
import AboutMeAside from "./aboutme-aside";
import AboutMeText from "./aboutme-text";

const SectionAboutEtseg = () => {
  return (
    <div
      className="grid grid-cols-1 content-center justify-items-center px-20 py-12 bg-gray-white"
      id="etseg"
    >
      <labelTag label="about" />
      <TitlesContainer sTitle={"Эцэг"} sP={""} />
      <div className="flex items-center justify-between gap-x-64">
        <AboutMeText />
        <AboutMeAside />
      </div>
    </div>
  );
};
export default SectionAboutEtseg;
