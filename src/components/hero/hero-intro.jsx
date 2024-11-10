import { PiHandWaving } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";

const HeroIntro = () => {
  return (
    <div className="w-2/3 flex flex-col space-y-8">
      <div>
        <div className="flex flex-row items-center justify-between font-bold mb-4">
          <div className="min-xl:text-6xl">
            <h1 className="text-3xl">Сайн байна уу.</h1>
            <h1 className="text-3xl">
              Миний 3 үеийн намтарын веб хуудсанд тавтай морилно уу
            </h1>
          </div>
          <PiHandWaving className="text-yellow-300 text-7xl min-xl:text-9xl" />
        </div>
      </div>
      <div className="min-xl:text-3xl">
        <div className="flex items-center mb-1">
          <FaMapMarkerAlt />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex items-center">
          <GoDotFill className="text-green-500" />
          <p>Pinecone академид сурч байгаа.</p>
        </div>
      </div>
      <div className="flex gap-x-5 min-xl:text-3xl">
        <FaArrowUpRightDots />
        <IoBookSharp />
        <MdLaptopChromebook />
      </div>
    </div>
  );
};
export default HeroIntro;
