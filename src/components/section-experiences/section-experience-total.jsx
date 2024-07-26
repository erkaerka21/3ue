import experiences from "../experiences";
import TitlesContainer from "../section-titles-container";
import ExperiencesCart from "./experience-cart";

const SectionExperiences = () => {
  return (
    <div className="px-20 py-24 bg-slate-50 flex-col">
      <TitlesContainer
        sTitle={"Experience"}
        sP={"Here is a quick summary of my most recent experiences:"}
      />
      <div className="grid grid-cols-1 justify-items-center">
        {experiences.map(({ companyLogo, title, jobRoles, date }) => (
          <ExperiencesCart
            companyLogo={companyLogo}
            title={title}
            jobRoles={jobRoles}
            date={date}
          />
        ))}
      </div>
    </div>
  );
};
export default SectionExperiences;
