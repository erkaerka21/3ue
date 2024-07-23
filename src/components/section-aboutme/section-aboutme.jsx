import AboutMeAside from "./aboutme-aside";
import AboutMeText from "./aboutme-text";
import AboutmeTitle from "./aboutme-title";

const SectionAboutme = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center px-20 py-24 bg-gray-100">
      <AboutmeTitle />
      <div className="flex items-center justify-between gap-x-64">
        <AboutMeAside />
        <AboutMeText />
      </div>
    </div>
  );
};
export default SectionAboutme;
