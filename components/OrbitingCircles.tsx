import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiPython, SiRedux, SiHtml5 } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex px-20 h-[260px] w-full  flex-col items-center justify-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-8xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>

      <OrbitingCircles iconSize={40}>
        <BiLogoTypescript className="text-blue-500 lg:text-8xl text-3xl" />
        <FaNode className="text-green-600 lg:text-8xl text-3xl" />
        <FaReact className="text-blue-400 lg:text-8xl text-3xl" />
        <SiExpress className="text-gray-800 dark:text-gray-100 lg:text-8xl text-3xl" />
        <SiTailwindcss className="text-cyan-400 lg:text-8xl text-3xl" />
        <SiNextdotjs className="text-black dark:text-white lg:text-8xl text-3xl" />
        <DiMongodb className="text-green-500 lg:text-8xl text-3xl" />
        <RiJavascriptFill className="text-yellow-400 lg:text-8xl text-3xl" />
      </OrbitingCircles>

      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <ImAndroid className="text-green-500 lg:text-8xl text-3xl" />
        <FaJava className="text-red-600 lg:text-8xl text-3xl" />
        <FaGithub className="text-gray-900 dark:text-white lg:text-8xl text-3xl" />
        <SiPython className="text-blue-500 lg:text-8xl text-3xl" />
        <SiRedux className="text-purple-500 lg:text-8xl text-3xl" />
        <SiHtml5 className="text-orange-500 lg:text-8xl text-3xl" />
      </OrbitingCircles>
    </div>
  );
}
