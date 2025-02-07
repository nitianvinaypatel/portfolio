import React from "react";
import { AnimatedListDemo } from "./AnimatedList";

const Achievement: React.FC<{}> = ({}) => {
  return (
    <div
      className="container mx-auto px-4 py-16 max-w-4xl relative"
      id="achivements"
    >
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Achivements
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white">
          A chronicle of my academic pursuits and achievements
        </p>
      </div>
      <AnimatedListDemo />
    </div>
  );
};

export default Achievement;
