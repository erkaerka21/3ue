import { IoClose } from "react-icons/io5";

const MobileMenuModal = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-end" id="taskModal">
      <div className="bg-white w-11/12 flex justify-between">
        Эрдэнэсүрэн
        <button>
          <IoClose />
        </button>
      </div>
    </div>
  );
};
export default MobileMenuModal;
