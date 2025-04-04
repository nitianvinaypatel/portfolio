import React, { useState } from "react";
import { FaGithub, FaEye, FaStar, FaCode, FaCalendarAlt } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: string;
  liveLink: string;
  githubLink: string;
  status: "Completed" | "In Progress" | "Maintenance";
  completionDate: string;
}

const ProjectCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      description:
        "A modern e-commerce solution with React and Node.js, powered by MongoDB and Express",
      longDescription:
        "Full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard. Implements modern security practices and optimized for performance.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Redux",
        "Stripe",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/e-commerce-platform",
      githubLink: "https://github.com/nitianvinaypatel/e-commerce-platform",
      status: "Completed",
      completionDate: "2024-02",
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      description:
        "Comprehensive task management solution, built with React, Firebase, and Tailwind CSS for a seamless user experience.",
      longDescription:
        "Enterprise-grade task management system featuring real-time collaboration, automated workflows, and detailed analytics. Includes integrations with popular productivity tools.",
      techStack: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "React Query",
        "TypeScript",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/todox",
      githubLink: "https://github.com/nitianvinaypatel/todox",
      status: "Maintenance",
      completionDate: "2023-11",
    },
    {
      id: 3,
      title: "NIT-MZ Student App",
      image:
        "https://play-lh.googleusercontent.com/y-wBMroYPPB6UzUWX8U65BZMpiM86Oft1SNo9yUhKnLWe-bbbw3GeRK1jZ8m7RNKmQ=w416-h235-rw",
      description:
        "Comprehensive Android app for NIT Mizoram students, enhancing campus life experience.",
      longDescription:
        "Feature-rich mobile application designed specifically for NIT Mizoram students. Includes course management, attendance tracking, campus notifications, and social features.",
      techStack: [
        "Android Studio",
        "Java",
        "XML",
        "Firebase",
        "Google Maps API",
      ],
      category: "Mobile App",
      liveLink:
        "https://play.google.com/store/apps/details?id=com.nitmizoram.nitmz&pli=1",
      githubLink: "https://github.com/nitianvinaypatel/NITMZ",
      status: "Completed",
      completionDate: "2023-09",
    },
    {
      id: 4,
      title: "AI-Powered Code Assistant",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      description:
        "Advanced code analysis and suggestion tool powered by machine learning",
      longDescription:
        "Innovative code assistant that uses AI to analyze code quality, suggest improvements, and detect potential bugs. Features real-time suggestions and integration with major IDEs.",
      techStack: [
        "Python",
        "TensorFlow",
        "FastAPI",
        "Docker",
        "PostgreSQL",
        "React",
      ],
      category: "Developer Tools",
      liveLink: "https://github.com/nitianvinaypatel/ai-code-assistant",
      githubLink: "https://github.com/nitianvinaypatel/ai-code-assistant",
      status: "In Progress",
      completionDate: "2024-03",
    },
    {
      id: 5,
      title: "Real-time Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description:
        "Modern analytics platform with real-time data visualization",
      longDescription:
        "Enterprise analytics dashboard providing real-time insights through interactive charts and customizable widgets. Features machine learning-powered predictions and automated reporting.",
      techStack: ["Next.js", "D3.js", "WebSocket", "Redis", "Python", "AWS"],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/analytics-dashboard",
      githubLink: "https://github.com/nitianvinaypatel/analytics-dashboard",
      status: "Completed",
      completionDate: "2024-01",
    },
    {
      id: 6,
      title: "Blockchain-based Supply Chain",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      description:
        "Decentralized supply chain management system using blockchain",
      longDescription:
        "Revolutionary supply chain management system leveraging blockchain technology for transparency and traceability. Includes smart contracts for automated compliance and real-time tracking.",
      techStack: [
        "Solidity",
        "Ethereum",
        "React",
        "Node.js",
        "Web3.js",
        "IPFS",
      ],
      category: "Blockchain",
      liveLink: "https://github.com/nitianvinaypatel/blockchain-supply-chain",
      githubLink: "https://github.com/nitianvinaypatel/blockchain-supply-chain",
      status: "In Progress",
      completionDate: "2024-04",
    },
  ];

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-yellow-500";
      case "Maintenance":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-black-100 py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white  mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and side projects
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? "border-purple-500 bg-purple-500/10 text-purple-400"
                  : "border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-purple-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1526498460520-4c246339dccb";
                      }}
                      onLoad={() => setIsLoading(false)}
                      width={600}
                      height={338}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-opacity-90 backdrop-blur-sm ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 bg-opacity-90 backdrop-blur-sm text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-purple-400" />
                            {project.completionDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {expandedProject === project.id
                          ? project.longDescription
                          : project.description}
                        {project.longDescription && (
                          <button
                            onClick={() =>
                              setExpandedProject(
                                expandedProject === project.id
                                  ? null
                                  : project.id
                              )
                            }
                            className="ml-2 text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center"
                          >
                            {expandedProject === project.id
                              ? "Show less"
                              : "Read more"}
                            <BsArrowUpRight className="ml-1 text-xs" />
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <BiLinkExternal />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
