import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaTools,
  FaReact,
  FaAws,
  FaJava,
  FaPython,
  FaNode,
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
  SiPostgresql,
  SiAndroid,
  SiFlutter,
  SiSwift,
  SiGit,
  SiDocker,
  SiTensorflow,
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
  SiAxios,
  SiFigma,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";

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
        yearsOfExperience: 1,
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
        icon: FaPython,
        color: "#3776AB",
        description: "Python for backend development and data science",
        mastery: "Advanced",
        projects: 2,
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
        projects: 1,
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
        projects: 7,
        yearsOfExperience: 1,
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
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        description: "Semantic HTML and web accessibility",
        mastery: "Expert",
        projects: 5,
        yearsOfExperience: 1,
      },
      {
        name: "CSS3",
        icon: SiCss3,
        color: "#1572B6",
        description: "Modern CSS including Flexbox and Grid",
        mastery: "Expert",
        projects: 5,
        yearsOfExperience: 1,
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
      {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        description: "State management for React applications",
        mastery: "Advanced",
        projects: 6,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Mobile Development",
    icon: FaMobile,
    description: "Cross-platform and native mobile app development",
    skills: [
      {
        name: "React Native",
        icon: FaReact,
        color: "#61DAFB",
        description: "Cross-platform mobile development with React Native",
        mastery: "Advanced",
        projects: 7,
        yearsOfExperience: 1,
      },
      {
        name: "Android (Java)",
        icon: SiAndroid,
        color: "#3DDC84",
        description: "Native Android development with Java",
        mastery: "Advanced",
        projects: 2,
        yearsOfExperience: 1,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        description: "Mobile backend and authentication",
        mastery: "Advanced",
        projects: 3,
        yearsOfExperience: 1,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "#3DDC84",
        description: "Android IDE and development tools",
        mastery: "Advanced",
        projects: 1,
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
        projects: 6,
        yearsOfExperience: 1,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000",
        description: "Web application framework for Node.js",
        mastery: "Advanced",
        projects: 6,
        yearsOfExperience: 1,
      },
      {
        name: "RESTful APIs",
        icon: SiPostman,
        color: "#FF6C37",
        description: "API design and implementation",
        mastery: "Expert",
        projects: 7,
        yearsOfExperience: 1,
      },
      {
        name: "WebSocket",
        icon: BiNetworkChart,
        color: "#010101",
        description: "Real-time bidirectional communication",
        mastery: "Intermediate",
        projects: 1,
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
        projects: 6,
        yearsOfExperience: 1,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        description: "Relational database management",
        mastery: "Advanced",
        projects: 1,
        yearsOfExperience: 1,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        description: "Real-time database and cloud functions",
        mastery: "Advanced",
        projects: 2,
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
        projects: 16,
        yearsOfExperience: 1,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        description: "Project hosting and collaboration",
        mastery: "Expert",
        projects: 16,
        yearsOfExperience: 1,
      },
      {
        name: "VS Code",
        icon: FaTerminal,
        color: "#007ACC",
        description: "Primary code editor and IDE",
        mastery: "Expert",
        projects: 20,
        yearsOfExperience: 2,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        description: "API testing and documentation",
        mastery: "Advanced",
        projects: 8,
        yearsOfExperience: 1,
      },
    ],
  },
  {
    name: "Data Science & UI/UX",
    icon: FaTools,
    description: "Data analysis and design tools",
    skills: [
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "#013243",
        description: "Numerical computing with Python",
        mastery: "Intermediate",
        projects: 1,
        yearsOfExperience: 1,
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "#150458",
        description: "Data manipulation and analysis",
        mastery: "Intermediate",
        projects: 1,
        yearsOfExperience: 1,
      },
      {
        name: "Data Visualization",
        icon: FaChartBar,
        color: "#4C72B0",
        description:
          "Statistical data visualization with Seaborn and other tools",
        mastery: "Intermediate",
        projects: 1,
        yearsOfExperience: 1,
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
        description: "UI/UX design and prototyping",
        mastery: "Intermediate",
        projects: 1,
        yearsOfExperience: 1,
      },
    ],
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const masteryColors = {
    Beginner: "border-blue-500 text-blue-500",
    Intermediate: "border-green-500 text-green-500",
    Advanced: "border-purple-500 text-purple-500",
    Expert: "border-orange-500 text-orange-500",
  };

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 dark:from-orange-500/10 dark:to-pink-500/10" />

        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <skill.icon className="text-3xl" style={{ color: skill.color }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {skill.name}
              </h3>
              <span
                className={`text-sm px-3 py-1 rounded-full border ${
                  masteryColors[skill.mastery]
                }`}
              >
                {skill.mastery}
              </span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Projects:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.projects}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Experience:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.yearsOfExperience} years
                  </span>
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < Math.ceil(skill.yearsOfExperience)
                        ? "bg-gradient-to-r from-orange-500 to-pink-500"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Frontend Development"
  );

  return (
    <section ref={ref} className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mastering modern technologies to create innovative solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "border-orange-500 text-orange-500 shadow-lg scale-105"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {skillCategories
              .find((cat) => cat.name === selectedCategory)
              ?.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
