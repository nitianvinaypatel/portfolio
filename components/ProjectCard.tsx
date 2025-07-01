"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import {
  FaGithub,
  FaEye,
  FaStar,
  FaCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaPlay,
  FaRocket,
  FaMobile,
  FaDesktop,
  FaCube,
} from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { HiCode, HiCollection } from "react-icons/hi";
import Image from "next/image";

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
  featured?: boolean;
}

const ProjectCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects: Project[] = [
    {
      id: 1,
      title: "NIT-MZ Student App",
      image:
        "https://play-lh.googleusercontent.com/y-wBMroYPPB6UzUWX8U65BZMpiM86Oft1SNo9yUhKnLWe-bbbw3GeRK1jZ8m7RNKmQ=w416-h235-rw",
      description:
        "Comprehensive Android app for NIT Mizoram students with 500+ daily active users, enhancing campus life experience.",
      longDescription:
        "Feature-rich mobile application designed specifically for NIT Mizoram students. Includes course management, attendance tracking, campus notifications, social features, and real-time updates. Successfully deployed on Google Play Store with over 500+ daily active users.",
      techStack: [
        "Android Studio",
        "Java",
        "XML",
        "Firebase",
        "Google Maps API",
        "SQLite",
      ],
      category: "Mobile App",
      liveLink:
        "https://play.google.com/store/apps/details?id=com.nitmizoram.nitmz&pli=1",
      githubLink: "https://github.com/nitianvinaypatel/NITMZ",
      status: "Completed",
      completionDate: "Sep 2023",
      featured: true,
    },
    {
      id: 2,
      title: "LinkedIn Backend Clone",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description:
        "Full-featured LinkedIn backend with comprehensive API endpoints, authentication, and real-time features.",
      longDescription:
        "Complete backend implementation of LinkedIn's core features including user profiles, connections, posts, messaging, and job postings. Built with scalable architecture and comprehensive API documentation.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Socket.io",
        "Cloudinary",
        "Nodemailer",
      ],
      category: "Backend",
      liveLink: "https://github.com/nitianvinaypatel/LinkedIn-Backend",
      githubLink: "https://github.com/nitianvinaypatel/LinkedIn-Backend",
      status: "Completed",
      completionDate: "Jan 2024",
      featured: true,
    },
    {
      id: 3,
      title: "Check Gate Monitoring System",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      description:
        "Advanced monitoring system for Mizoram Police with real-time tracking and analytics dashboard.",
      longDescription:
        "Comprehensive security monitoring system developed for Mizoram Police. Features real-time vehicle tracking, automated alerts, analytics dashboard, and reporting system with 99.5% reliability rate.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "WebSocket",
        "Chart.js",
        "JWT",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/check-gate-monitoring",
      githubLink: "https://github.com/nitianvinaypatel/check-gate-monitoring",
      status: "Completed",
      completionDate: "Dec 2023",
      featured: true,
    },
    {
      id: 4,
      title: "DigiRide Rider App",
      image:
        "https://www.peppyocean.com/wp-content/uploads/2020/06/delivery-app1.png",
      description:
        "Modern ride-sharing app built with React Native, serving 500+ daily active users with real-time tracking.",
      longDescription:
        "Full-featured ride-sharing application with real-time GPS tracking, payment integration, driver-rider matching, and comprehensive admin dashboard. Optimized for performance with 30% faster load times.",
      techStack: [
        "React Native",
        "Expo",
        "NativeWind",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Google Maps",
      ],
      category: "Mobile App",
      liveLink: "https://github.com/nitianvinaypatel/digiride-rider",
      githubLink: "https://github.com/nitianvinaypatel/digiride-rider",
      status: "Completed",
      completionDate: "Jun 2024",
      featured: false,
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
      description:
        "Modern e-commerce solution with React and Node.js, featuring secure payments and inventory management.",
      longDescription:
        "Full-featured e-commerce platform with real-time inventory management, secure payment processing, admin dashboard, and advanced analytics. Implements modern security practices and optimized for performance.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Redux",
        "Stripe",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/e-commerce-platform",
      githubLink: "https://github.com/nitianvinaypatel/e-commerce-platform",
      status: "Completed",
      completionDate: "Feb 2024",
      featured: false,
    },
    {
      id: 6,
      title: "Task Management System",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      description:
        "Comprehensive task management solution with real-time collaboration and automated workflows.",
      longDescription:
        "Enterprise-grade task management system featuring real-time collaboration, automated workflows, detailed analytics, and integrations with popular productivity tools. Built for scalability and performance.",
      techStack: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "React Query",
        "TypeScript",
        "PWA",
      ],
      category: "Web App",
      liveLink: "https://github.com/nitianvinaypatel/todox",
      githubLink: "https://github.com/nitianvinaypatel/todox",
      status: "Maintenance",
      completionDate: "Nov 2023",
      featured: false,
    },
  ];

  const categories = [
    { name: "all", icon: HiCollection },
    { name: "Mobile App", icon: FaMobile },
    { name: "Web App", icon: FaDesktop },
    { name: "Backend", icon: FaCode },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Maintenance":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mobile App":
        return <FaMobile className="text-sm" />;
      case "Web App":
        return <FaDesktop className="text-sm" />;
      case "Backend":
        return <FaCode className="text-sm" />;
      default:
        return <FaCube className="text-sm" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-transparent" id="projects" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-sm font-medium text-purple-400 flex items-center gap-2">
              <FaRocket className="text-xs" />
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects & Applications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects and real-world applications
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Projects", value: "15+", icon: FaCode },
            { label: "Live Apps", value: "3+", icon: FaPlay },
            { label: "Technologies", value: "12+", icon: FaRocket },
            { label: "Experience", value: "2+ Years", icon: FaCalendarAlt },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <stat.icon className="text-purple-400 text-xl mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border ${
                selectedCategory === category.name
                  ? "border-purple-500 bg-purple-500/10 text-purple-400"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-purple-500/50 hover:text-purple-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="text-sm" />
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        {selectedCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    {/* Project Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        width={600}
                        height={338}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Status & Category Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20 flex items-center gap-1">
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
                          <FaStar className="text-xs" />
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="text-purple-400 text-xs" />
                              {project.completionDate}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
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

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-medium border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-500/10 text-purple-400 rounded-lg font-medium border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 text-gray-300 rounded-lg font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaGithub className="text-sm" />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <HiCode className="text-purple-400" />
              {selectedCategory === "all"
                ? "All Projects"
                : `${selectedCategory} Projects`}
            </h3>
            <span className="text-sm text-gray-400">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Project Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          width={80}
                          height={80}
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h4>
                          {project.featured && (
                            <FaStar className="text-yellow-400 text-sm mt-1" />
                          )}
                        </div>

                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20 flex items-center gap-1">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <FaCalendarAlt className="text-purple-400" />
                            {project.completionDate}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-500/30">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/10 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            Demo
                          </motion.a>
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="text-xs" />
                            Code
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;
