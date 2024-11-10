import { BsCopy } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import TitlesContainer from "../section-titles-container";
const GetTouchSec = () => {
  return (
    <div className="py-12">
      <TitlesContainer sTitle={"Холбоо барих"} />
      <div className="">
        <div className="flex justify-center items-center mb-3 gap-x-3">
          <CiMail className="text-2xl mt-3" />
          <p className="font-semibold text-4xl">
            erdenesuren.bat2024@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center mb-16 gap-x-3">
          <CiPhone className="text-2xl mt-3" />
          <p className="font-semibold text-4xl">+976 95191251</p>
          <p className="font-semibold text-4xl">+976 86646168</p>
        </div>
      </div>
    </div>
  );
};
export default GetTouchSec;
