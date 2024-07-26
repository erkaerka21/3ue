import { BsCopy } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import TitlesContainer from "../section-titles-container";
const GetTouchSec = () => {
  return (
    <div>
      <TitlesContainer
        sTitle={"Get in touch"}
        sP={
          "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
        }
      />
      <div className="">
        <div className="flex justify-center items-center mb-3 gap-x-3">
          <CiMail className="text-2xl" />
          <p className="font-semibold text-4xl">tom@pinecone.mn</p>
          <BsCopy className="text-2xl" />
        </div>
        <div className="flex justify-center items-center mb-16 gap-x-3">
          <CiPhone className="text-2xl" />
          <p className="font-semibold text-4xl">+976 88112233</p>
          <BsCopy className="text-2xl" />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p>You may also find me on these platforms!</p>
          <div className="flex text-base gap-x-3">
            <FiGithub className="text-2xl" />
            <CiTwitter className="text-2xl" />
            <FaFigma className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetTouchSec;
