import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex border-l border-gray-400 gap-x-6 items-center">
      <MdOutlineLightMode className="text-3xl text-gray-600 ml-6" />
      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
