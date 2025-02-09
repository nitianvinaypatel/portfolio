import React from "react";
import { WobbleCardDemo } from "./WobbleCard";

const AboutSection = ({}) => {
  return (
    <div id="about">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-4">
          Passionate software developer with a keen interest in building
          scalable and efficient applications.
        </p>
      </div>
      <WobbleCardDemo />
    </div>
  );
};

export default AboutSection;
