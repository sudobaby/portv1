import { FaNodeJs } from "react-icons/fa6";
import Marquee from "./ui/marquee";
import { FaJs, FaPython, FaJava } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";

const Lang = () => {
  return (
    <div className="w-11/12 flex flex-col gap-4 overflow-hidden">
      <h1 className="text-2xl font-bold text-white">Languages</h1>
      {/* First Row */}
      <Marquee>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-white">
            <FaJs className="text-yellow-500" /> JavaScript
          </span>
          <span className="flex items-center gap-2 text-white">
            <FaPython className="text-blue-500" /> Python
          </span>
          <span className="flex items-center gap-2 text-white">
            <FaJava className="text-red-500" /> Java
          </span>
        </div>
      </Marquee>
      {/* Second Row */}
      <Marquee>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-white">
            <FaNodeJs className="text-green-500" /> NodeJs
          </span>
          <span className="flex items-center gap-2 text-white">
            <RiReactjsFill className="text-teal-500" /> ReactJs
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Lang;
