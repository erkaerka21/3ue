import { FiExternalLink } from "react-icons/fi";

const WorkCart = ({ srcWorkPic, title, paragraph, workSubs }) => {
  return (
    <div className="w-[70vw] flex mb-12 rounded-xl border-solid border-8 border-black">
      <div className="w-6/12 p-12 bg-transparent bg-slate-600 flex justify-center items-center rounded-xl">
        <div className="w-full">
          <img alt="zurag" src={srcWorkPic} className="object-contain" />
        </div>
      </div>
      <div className="w-6/12 p-12">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-justify">{paragraph}</p>
        <div className="grid grid-cols-4">
          {workSubs.map((worksub) => (
            <p className="py-1 px-3 bg-gray-100 text-center rounded-2xl">
              {worksub}
            </p>
          ))}
        </div>
        <FiExternalLink />
      </div>
    </div>
  );
};
export default WorkCart;
