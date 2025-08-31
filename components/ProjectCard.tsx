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
      title: "Hostel Management System",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description:
        "Comprehensive hostel management system for efficient administration and student services.",
      longDescription:
        "A complete hostel management solution developed as a final year project to streamline hostel operations. Features include student registration and room allocation, fee management with payment tracking, complaint management system, visitor management with entry/exit logs, mess management with meal planning, attendance tracking, and administrative dashboard with detailed analytics. Built with modern web technologies to provide a seamless experience for both students and hostel administrators.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT Authentication",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/hostel-management-system",
      githubLink:
        "https://github.com/nitianvinaypatel/hostel-management-system",
      status: "In Progress",
      completionDate: "2025-12",
    },
    {
      id: 2,
      title: "Water Tanker Verification System",
      image:
        "https://raw.githubusercontent.com/mazipan/bootstrap4-admin-dashboard-template/master/screenshoot.png",
      description:
        "Full-stack web app to digitize hostel water tanker delivery verification with GPS, uploads, and role-based authentication.",
      longDescription:
        "Developed a full-stack Next.js 14 + TypeScript + Appwrite application to modernize water tanker delivery verification. Features include GPS capture, multimedia uploads, role-based authentication, and an admin dashboard with approval workflows, real-time statistics, image gallery previews, and advanced filtering for efficient delivery management.",
      techStack: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Appwrite",
        "Tailwind CSS",
      ],
      category: "Web App",
      liveLink:
        "https://github.com/nitianvinaypatel/hostel-water-tanker-verification",
      githubLink:
        "https://github.com/nitianvinaypatel/hostel-water-tanker-verification",
      status: "Completed",
      completionDate: "2025-07",
    },
    {
      id: 3,
      title: "Digiride e-Transport",
      image:
        "https://play-lh.googleusercontent.com/1ZBXOCln6LDm2S1qmVuWKZ-dmKn1QWjYo7c6D5YY4vcEV4Oo5x3lpVZT_of3IiGd67g=w416-h235-rw",
      description:
        "React Native + Expo MVP enabling OTP login, ride booking, real-time tracking, and route visualization.",
      longDescription:
        "Built a mobile-first MVP for e-transport using React Native and Expo. Core features include phone OTP authentication, pickup/drop location selection with Google Maps API, ride option selection, and real-time route visualization with MapViewDirections. Implemented Redux Toolkit for ride state management, Tailwind CSS for UI, Socket.io for real-time communication, and Axios/AsyncStorage for simulated API calls with local storage support.",
      techStack: [
        "React Native",
        "Tailwind CSS",
        "Socket.io",
        "Redux Toolkit",
        "i18n",
      ],
      category: "Mobile App",
      liveLink: "https://github.com/nitianvinaypatel/digiride-e-transport",
      githubLink: "https://github.com/nitianvinaypatel/digiride-e-transport",
      status: "Completed",
      completionDate: "2025-01",
    },
    {
      id: 4,
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
      id: 5,
      title: "Media Dost - Advertising Platform",
      image:
        "https://www.mediadost.com/admin/uploads/blogs/6804f8dc3bc36-Untitled%20-%202025-04-20T190734.441.png",
      description:
        "Comprehensive advertising and media services platform for strategic marketing solutions",
      longDescription:
        "Media Dost is a modern advertising platform that offers strategic advertising solutions with a wide range of media options including outdoor, influencer marketing, digital PR, radio, television, and more. Features seamless booking experience with advanced filters, maps, transparent pricing, and expert media planning services. The platform connects businesses with various advertising mediums to maximize their reach and impact.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "Vercel",
        "Web APIs",
      ],
      category: "Web App",
      liveLink: "https://media-dost.vercel.app/",
      githubLink: "https://github.com/nitianvinaypatel/media-dost",
      status: "Completed",
      completionDate: "2025-06",
    },
    {
      id: 6,
      title: "GDG NIT Mizoram - Developer Community",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQG_YFTBteFbdg/feedshare-shrink_800/feedshare-shrink_800/0/1732521326639?e=1759363200&v=beta&t=ewe6fStcUmwyfOhdfys-Fq1pPr6IMQ7QuWBKMElIiIY",
      description:
        "Official website for Google Developer Group at NIT Mizoram fostering tech community",
      longDescription:
        "GDG NIT Mizoram is the official Google Developer Group chapter at National Institute of Technology, Mizoram. The website serves as a hub for the developer community, featuring upcoming tech events, workshops, hackathons, and educational resources. It connects students and professionals interested in Google technologies, providing a platform for knowledge sharing, collaboration, and skill development in various domains like Android, Web, Cloud, AI/ML, and more.",
      techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      category: "Web App",
      liveLink: "https://gdg-nitmizoram.vercel.app/",
      githubLink: "https://github.com/nitianvinaypatel/gdg-nitmizoram",
      status: "Completed",
      completionDate: "2024-12",
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
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-sm font-medium text-purple-400 flex items-center gap-2">
              <FaCode className="text-sm" />
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest work and innovative solutions built with modern
            technologies
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
