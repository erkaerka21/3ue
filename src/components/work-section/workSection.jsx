import TitlesContainer from "../section-titles-container";

const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center px-20 py-24">
      <TitlesContainer
        sTitle={"Work"}
        sP={"Some of the noteworthy projects I have built:"}
      />
    </div>
  );
};
export default WorkSection;
