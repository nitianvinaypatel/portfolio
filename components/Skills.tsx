"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaTools,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaGithub,
  FaTerminal,
  FaChartBar,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiAndroid,
  SiGit,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiAppwrite,
  SiPostman,
  SiAndroidstudio,
  SiNumpy,
  SiPandas,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { HiCode } from "react-icons/hi";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  mastery: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  projects: number;
  yearsOfExperience: number;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: FaCode,
    description: "Core programming languages for software development",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        description:
          "Modern JavaScript including ES6+ features and async programming",
        mastery: "Expert",
        projects: 10,
        yearsOfExperience: 2,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description: "Type-safe development with advanced TypeScript features",
        mastery: "Advanced",
        projects: 8,
        yearsOfExperience: 1,
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        description: "Python for backend development and data science",
        mastery: "Advanced",
        projects: 3,
        yearsOfExperience: 1,
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396",
        description: "Java for Android development and backend services",
        mastery: "Advanced",
        projects: 2,
        yearsOfExperience: 1,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        description: "Systems programming and algorithm implementation",
        mastery: "Intermediate",
        projects: 2,
        yearsOfExperience: 1,
      },
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
        description: "Low-level programming and system development",
        mastery: "Intermediate",
        projects: 1,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Frontend Development",
    icon: FaReact,
    description: "Building responsive and interactive user interfaces",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
        color: "#61DAFB",
        description: "Component-based UI development with React ecosystem",
        mastery: "Expert",
        projects: 10,
        yearsOfExperience: 2,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        description: "Server-side rendering and static site generation",
        mastery: "Advanced",
        projects: 5,
        yearsOfExperience: 1,
      },
      {
        name: "React Native",
        icon: SiReact,
        color: "#61DAFB",
        description: "Cross-platform mobile development with React Native",
        mastery: "Advanced",
        projects: 7,
        yearsOfExperience: 1,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        description: "Semantic HTML and web accessibility",
        mastery: "Expert",
        projects: 12,
        yearsOfExperience: 2,
      },
      {
        name: "CSS3",
        icon: SiCss3,
        color: "#1572B6",
        description: "Modern CSS including Flexbox and Grid",
        mastery: "Expert",
        projects: 12,
        yearsOfExperience: 2,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        description: "Utility-first CSS framework for rapid development",
        mastery: "Expert",
        projects: 8,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Backend Development",
    icon: FaServer,
    description: "Server-side development and API integration",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        description: "Server-side JavaScript runtime",
        mastery: "Advanced",
        projects: 8,
        yearsOfExperience: 1,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000",
        description: "Web application framework for Node.js",
        mastery: "Advanced",
        projects: 8,
        yearsOfExperience: 1,
      },
      {
        name: "RESTful APIs",
        icon: SiPostman,
        color: "#FF6C37",
        description: "API design and implementation",
        mastery: "Expert",
        projects: 10,
        yearsOfExperience: 1,
      },
      {
        name: "WebSocket",
        icon: BiNetworkChart,
        color: "#010101",
        description: "Real-time bidirectional communication",
        mastery: "Intermediate",
        projects: 2,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Databases",
    icon: FaDatabase,
    description: "Database management and optimization",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        description: "NoSQL database design and optimization",
        mastery: "Advanced",
        projects: 8,
        yearsOfExperience: 1,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        description: "Relational database management",
        mastery: "Advanced",
        projects: 3,
        yearsOfExperience: 1,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        description: "Real-time database and cloud functions",
        mastery: "Advanced",
        projects: 5,
        yearsOfExperience: 1,
      },
      {
        name: "Appwrite",
        icon: SiAppwrite,
        color: "#FD366E",
        description: "Open-source backend server",
        mastery: "Intermediate",
        projects: 2,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Developer Tools",
    icon: FaTools,
    description: "Development tools and version control",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        description: "Version control and collaboration",
        mastery: "Expert",
        projects: 20,
        yearsOfExperience: 2,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        description: "Project hosting and collaboration",
        mastery: "Expert",
        projects: 20,
        yearsOfExperience: 2,
      },
      {
        name: "VS Code",
        icon: FaTerminal,
        color: "#007ACC",
        description: "Primary code editor and IDE",
        mastery: "Expert",
        projects: 25,
        yearsOfExperience: 2,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        description: "API testing and documentation",
        mastery: "Advanced",
        projects: 10,
        yearsOfExperience: 1,
      },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      },
    },
  };

  const masteryColors = {
    Beginner: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      border: "border-blue-500/30",
    },
    Intermediate: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border-green-500/30",
    },
    Advanced: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      border: "border-purple-500/30",
    },
    Expert: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      border: "border-orange-500/30",
    },
  };

  const masteryLevel = Math.ceil((skill.yearsOfExperience / 2) * 5);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
        {/* Skill Header */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/20"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <skill.icon className="text-xl" style={{ color: skill.color }} />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`px-2 py-0.5 rounded-full text-xs border ${
                  masteryColors[skill.mastery].bg
                } ${masteryColors[skill.mastery].text} ${
                  masteryColors[skill.mastery].border
                }`}
              >
                {skill.mastery}
              </span>
              <span className="text-gray-400 text-xs">
                {skill.projects} projects
              </span>
            </div>
          </div>
        </div>

        {/* Skill Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Proficiency</span>
            <span>{skill.yearsOfExperience} years</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={
                isInView
                  ? { width: `${Math.min(masteryLevel * 20, 100)}%` }
                  : { width: 0 }
              }
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>

        {/* Expandable Description */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors w-full text-left"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-white/10 overflow-hidden"
            >
              <p className="text-gray-300 text-xs leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Frontend Development"
  );

  return (
    <section className="py-20 bg-transparent" id="skills">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-sm font-medium text-blue-400 flex items-center gap-2">
              <HiCode className="text-sm" />
              Technical Skills
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and proficiency
            across various technologies
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
                  selectedCategory === category.name
                    ? "border-purple-500 bg-purple-500/20 text-purple-400"
                    : "border-white/20 text-gray-400 hover:border-purple-500/50 hover:text-purple-400"
                }`}
              >
                <Icon className="text-sm" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Description */}
            <div className="text-center mb-8">
              <p className="text-gray-400 max-w-2xl mx-auto">
                {
                  skillCategories.find((cat) => cat.name === selectedCategory)
                    ?.description
                }
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories
                .find((cat) => cat.name === selectedCategory)
                ?.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Languages", value: "6+", icon: <FaCode /> },
              { label: "Frameworks", value: "10+", icon: <FaReact /> },
              { label: "Databases", value: "4+", icon: <FaDatabase /> },
              { label: "Tools", value: "15+", icon: <FaTools /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="text-purple-400 text-2xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-white text-xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
