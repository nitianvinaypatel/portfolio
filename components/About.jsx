import React from "react";
import { WobbleCardDemo } from "./WobbleCard";
import {
  FaCode,
  FaGraduationCap,
  FaTrophy,
  FaHeart,
  FaRocket,
  FaLightbulb,
  FaMobile,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const AboutSection = ({}) => {
  const skills = [
    { name: "React Native", icon: <FaMobile />, color: "text-blue-400" },
    { name: "React.js", icon: <FaCode />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaServer />, color: "text-green-400" },
    { name: "MongoDB", icon: <FaDatabase />, color: "text-emerald-400" },
    { name: "Express.js", icon: <FaServer />, color: "text-gray-400" },
    { name: "AWS", icon: <FaCloud />, color: "text-orange-400" },
  ];

  const achievements = [
    {
      title: "🏆 Rank 1 - Hackventure 2.0",
      description: "First place winner in competitive hackathon",
    },
    {
      title: "👨‍💼 GDG Lead at NIT Mizoram",
      description: "Leading Google Developer Group activities",
    },
    {
      title: "📱 NIT-MZ Student App",
      description: "Published on Google Play Store",
    },
    {
      title: "🏢 LinkedIn Backend Clone",
      description: "Full-featured social platform backend",
    },
  ];

  const experiences = [
    {
      company: "Dashwave",
      role: "Software Development Intern",
      type: "Current",
      color: "text-emerald-400",
    },
    {
      company: "DevOrbital",
      role: "Development Intern",
      type: "Current",
      color: "text-purple-400",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Enhanced Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate{" "}
            <span className="text-blue-400 font-semibold">
              Software Developer
            </span>{" "}
            and
            <span className="text-purple-400 font-semibold">
              {" "}
              CSE Student
            </span>{" "}
            at NIT Mizoram, building scalable applications and leading tech
            communities.
          </p>
        </div>
      </div>

      {/* Main Content - WobbleCards */}
      <div className="container mx-auto px-4 pb-8">
        <WobbleCardDemo />
      </div>
    </div>
  );
};

export default AboutSection;
