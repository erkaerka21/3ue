import { IoClose } from "react-icons/io5";

const MobileMenuModal = () => {
  return (
    <div
      className="bg-gray-300 md:hidden min-h-screen flex flex-row justify-end"
      id="taskModal"
    >
      <div className="bg-white w-11/12 flex flex-col">
        <div className="flex">
          Эрдэнэсүрэн
          <button>
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col">
          <a className="text-gray-600 text-base font-medium">About</a>
          <a className="text-gray-600 text-base font-medium">Work</a>
          <a className="text-gray-600 text-base font-medium">Experience</a>
          <a className="text-gray-600 text-base font-medium">Contact</a>
        </div>
      </div>
    </div>
  );
};
export default MobileMenuModal;
