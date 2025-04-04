"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaLaptopCode,
  FaTools,
  FaAward,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsArrowRight, BsGraphUp, BsStars } from "react-icons/bs";
import { MdWorkOutline, MdLocationOn, MdExpandMore } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";

interface Achievement {
  description: string;
  metrics?: string;
  highlight?: boolean;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: Achievement[];
  teamSize?: string;
  projectScope?: string;
  impact?: string;
  logo: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "DevOrbital",
    duration: "April 2025 - Present",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Contribute to multiple client projects by implementing new features and fixing bugs using React Native, React.js, Node.js, Express.js, and MongoDB to enhance application functionality and user experience.",
      "Collaborate with development teams to maintain and improve existing web and mobile applications, focusing on responsive design, API integration, and performance optimization.",
    ],
    achievements: [
      {
        description: "Resolved critical bugs affecting user experience",
        metrics: "Reduced reported issues by 25% within first month",
        highlight: true,
      },
      {
        description:
          "Implemented new features across multiple client applications",
        metrics: "Successfully delivered 8+ feature implementations",
      },
      {
        description:
          "Improved API response handling in React Native applications",
        metrics: "Enhanced data loading efficiency by 20%",
      },
    ],
    teamSize: "Working across multiple project teams",
    projectScope: "Multiple client web and mobile applications",
    impact:
      "Contributing to applications serving thousands of users across various client businesses",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript/TypeScript",
      "RESTful APIs",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGCahmxhL4wpw/company-logo_200_200/company-logo_200_200/0/1738513421314?e=1749081600&v=beta&t=cI27AWiyQ6JvJVZKM9KacQZ4LvL0-Zc5L8I76IftxNE",
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "IIT Bhilai Funded Project, NIT Mizoram",
    duration: "June 2024 - June 2025",
    location: "On Site",
    type: "Internship",
    responsibilities: [
      "Developed and launched the DigiRide Rider App using React Native, Expo, and NativeWind, enhancing real-time booking, UI/UX, and API-driven interactions for seamless user experience.",
      "Built a scalable Admin Dashboard in Next.js, optimizing ride management, data visualization, and performance, while integrating RESTful APIs to reduce latency by 30% with MongoDB, Firebase, and Express.js.",
    ],
    achievements: [
      {
        description: "Improved app performance optimization",
        metrics: "30% reduction in load times",
        highlight: true,
      },
      {
        description:
          "Implemented real-time location tracking and notification system",
        metrics: "99.5% reliability rate",
      },
      {
        description: "Developed comprehensive user analytics dashboard",
        metrics: "Used by 5 team members for decision making",
      },
    ],
    teamSize: "5 developers",
    projectScope: "Mobile app + Admin dashboard",
    impact:
      "Served 500+ daily active users with seamless transportation booking experience",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "Next.js",
      "MongoDB",
      "Firebase",
      "Express.js",
    ],
    logo: "https://events.iitbhilai.ac.in/icmc2025/iitbh_logo.png",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Software Giant",
    duration: "June 2023 - July 2023",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Actively participated in a project during a 2-month internship at Software Giant, demonstrating strong technical skills in React.js and Node.js.",
      "Contributed to problem-solving, teamwork, and adaptability while developing and optimizing web applications, enhancing functionality and performance.",
    ],
    achievements: [
      {
        description: "Implemented responsive UI components using React",
        metrics: "Used across 3 company products",
        highlight: true,
      },
      {
        description: "Developed API integration modules",
        metrics: "Reduced development time by 15%",
      },
    ],
    teamSize: "8 developers",
    projectScope: "Web application development",
    impact: "Contributed to product used by 2000+ business clients",
    technologies: ["React.js", "Node.js", "TypeScript", "Redux", "Material UI"],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEziNnpBzTvTg/company-logo_200_200/company-logo_200_200/0/1676468832144/softwaregiant_logo?e=2147483647&v=beta&t=zitCq5NtHyiE8Hl3akhnyQuV-yx3g3onIOFpAGssGXY",
  },
];

const TracingBeam = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.1", "end 0.9"],
  });

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heightTransform = useTransform(scrollYSpring, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYSpring, [0, 0.1], [0, 1]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-7xl mx-auto">
      {/* Timeline line with animated glow effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20">
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        />
      </div>
      {children}
    </div>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3 + index * 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
  };

  const getIconColor = (index: number) => {
    const colors = [
      "from-purple-400 to-pink-500",
      "from-blue-400 to-indigo-500",
      "from-emerald-400 to-teal-500",
      "from-amber-400 to-orange-500",
    ];
    return colors[index % colors.length];
  };

  const getStatCards = useMemo(() => {
    const stats = [
      { label: "Team Size", value: experience.teamSize, icon: <RiTeamLine /> },
      {
        label: "Project Scope",
        value: experience.projectScope,
        icon: <FaLaptopCode />,
      },
      { label: "Impact", value: experience.impact, icon: <FaChartLine /> },
    ].filter((stat) => stat.value);

    return stats.map((stat, idx) => (
      <motion.div
        key={idx}
        variants={itemVariants}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <span className="text-purple-400">{stat.icon}</span>
          <span className="font-medium">{stat.label}</span>
        </div>
        <p className="text-white text-sm">{stat.value}</p>
      </motion.div>
    ));
  }, [
    experience.teamSize,
    experience.projectScope,
    experience.impact,
    itemVariants,
  ]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`relative flex ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-start gap-8 mb-24`}
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 hidden md:block z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        >
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <motion.div
              initial={{ rotate: -30, scale: 0.8 }}
              animate={
                isInView ? { rotate: 0, scale: 1 } : { rotate: -30, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.3,
                type: "spring",
              }}
              className={`text-xl bg-gradient-to-r ${getIconColor(
                index
              )} bg-clip-text text-transparent`}
            >
              {index === 0 ? <FaLaptopCode /> : <MdWorkOutline />}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={controls}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`flex-1 relative rounded-xl overflow-hidden shadow-2xl ${
          index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"
        }`}
      >
        {/* Card Background with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-600/20 to-blue-600/20 p-[1px] rounded-xl" />

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-xl blur-xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative h-full rounded-xl bg-gray-900/90 backdrop-blur-xl overflow-hidden z-10 border border-gray-800/50">
          {/* Card Header with Logo */}
          <div className="relative h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-blue-900/80" />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent)]"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isHovered ? 0.6 : 0.3 }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative flex items-center px-6 py-5">
              <motion.div
                className="w-16 h-16 rounded-lg bg-gradient-to-tr from-purple-600/30 to-pink-600/30 p-[1px] shadow-lg mr-4 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-lg bg-gray-900/90 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-12 h-12 object-contain filter contrast-125"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              <div>
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-bold text-white"
                >
                  {experience.role}
                </motion.h3>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <HiOfficeBuilding className="text-purple-400" />
                  <span className="font-medium">{experience.company}</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-300"
              >
                <FaCalendarAlt className="text-purple-400" />
                <span>{experience.duration}</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-300"
              >
                <MdLocationOn className="text-purple-400" />
                <span>{experience.location}</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300"
              >
                {experience.type}
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
            >
              {getStatCards}
            </motion.div>

            {/* Responsibilities */}
            <motion.div className="mt-6" variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaBriefcase className="text-purple-400" />
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-300 p-3 rounded-lg bg-gray-800/40 border border-gray-700/50 hover:border-purple-500/30 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <BsArrowRight className="text-purple-400 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements Section */}
            {experience.achievements && (
              <motion.div className="mt-6" variants={itemVariants}>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FaAward className="text-purple-400" />
                    Key Achievements
                  </h4>
                </div>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className={`p-3 rounded-lg border ${
                        achievement.highlight
                          ? "bg-purple-900/20 border-purple-500/40"
                          : "bg-gray-800/40 border-gray-700/50"
                      } hover:border-purple-500/30 transition-colors duration-300`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="text-purple-400 mt-1 flex-shrink-0">
                            {achievement.highlight ? (
                              <BsStars />
                            ) : (
                              <BsGraphUp />
                            )}
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {achievement.description}
                          </span>
                        </div>
                        {achievement.metrics && (
                          <div className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded font-medium">
                            {achievement.metrics}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Show More Button */}
            <motion.div
              className="mt-6 flex justify-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setShowDetails((prev) => !prev)}
                className="flex items-center gap-2 text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300 hover:border-purple-500/40 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {showDetails ? "Hide Technologies" : "Show Technologies"}
                <motion.div
                  animate={{ rotate: showDetails ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdExpandMore />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Technologies - Collapsible */}
            <AnimatePresence>
              {showDetails && experience.technologies && (
                <motion.div
                  key="technologies"
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 pt-4 border-t border-gray-800/50 overflow-hidden"
                >
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaTools className="text-purple-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + idx * 0.05,
                        }}
                        whileHover={{
                          y: -2,
                          scale: 1.05,
                          backgroundColor: "rgba(168, 85, 247, 0.2)",
                        }}
                        className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 hover:border-purple-500/40 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-28" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-white">
              Professional Experience
            </span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Career Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my professional experience, achievements, and skills
            acquired through meaningful projects
          </p>
        </motion.div>

        <TracingBeam>
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </TracingBeam>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
