import { PiHandWaving } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";

const HeroIntro = () => {
  return (
    <div className="grid gap-y-8">
      <div>
        <div className="flex items-center justify-start font-bold">
          <h1 className="text-4xl mb-3">
            Сайн байна уу. Би Батбаатарын Эрдэнэсүрэн
          </h1>
          <PiHandWaving className="text-yellow-300 text-4xl" />
        </div>
        <p className="text-justify">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
      </div>
      <div>
        <div className="flex items-center mb-1">
          <FaMapMarkerAlt />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex items-center">
          <GoDotFill className="text-green-500" />
          <p>Шинэ төсөл, шинэ ажилд ороход бэлэн</p>
        </div>
      </div>
      <div className="flex gap-x-5">
        <FaArrowUpRightDots />
        <IoBookSharp />
        <MdLaptopChromebook />
      </div>
    </div>
  );
};
export default HeroIntro;
