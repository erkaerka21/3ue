import TitlesContainer from "../section-titles-container";
import WorkCart from "./workCart";
import workCartDatas from "./workCartDatas";

const WorkSection = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center px-20 py-24">
      <TitlesContainer
        sTitle={"Work"}
        sP={"Some of the noteworthy projects I have built:"}
      />
      {workCartDatas.map(({ srcWorkPic, title, paragraph, workSubs }) => (
        <WorkCart
          srcWorkPic={srcWorkPic}
          title={title}
          paragraph={paragraph}
          workSubs={workSubs}
          className=""
        />
      ))}
    </div>
  );
};
export default WorkSection;
