import React from "react";
import { FaGithub, FaLinkedin, FaTwitter as FaXTwitter } from "react-icons/fa";
import { FlipWords } from "@/components/ui/flip-words";
import SparklesText from "@/components/ui/sparkles-text";

function AboutContent() {
  const words = [
    "Software Developer!",
    "Web Developer!",
    "Mobile App Developer!",
    "Full-Stack Developer!",
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex lg:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex max-w-max items-center">
            <SparklesText className="mx-1 -mt-4" text="Hey there!👋" />
          </div>
          <h1 className="mt-2 max-w-2xl text-2xl font-extrabold tracking-tight md:text-2xl lg:text-5xl flex">
            <span className="mr-3 font-medium">I&apos;m</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Vinay Patel
            </span>
          </h1>
          <h2 className="mt-2 font-bold lg:text-2xl md:text-xl sm:text-lg flex flex-row items-center">
            <span>a</span>
            <div className="text-orange-500">
              <FlipWords words={words} />
            </div>
          </h2>
          <p className="mt-2 text-sm leading-loose lg:w-[50%]">
            Welcome to my portfolio! I specialize in Mobile App Development in
            React Native and Back-End development with Node.js and Front-End
            with React.js. I&apos;ve worked on projects like{" "}
            <span className="text-green-500">NIT-MZ Student App</span> and a{" "}
            <span className="text-green-500">LinkedIn Backend</span>. Currently
            designing a{" "}
            <span className="text-green-500">Check Gate Monitoring System</span>{" "}
            for Mizoram Police with ANPR integration for real-time vehicle
            tracking and database management. I&apos;m passionate about creating
            elegant, impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
