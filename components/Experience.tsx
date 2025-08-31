"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
  achievements?: string[];
}

const experienceData: Experience[] = [
  {
    id: 0,
    role: "React Native Developer Intern",
    company: "Dashwave",
    duration: "April 2025 - Present",
    location: "HRS Layout, Bangalore",
    type: "Internship",
    responsibilities: [
      "Redesigning and modernizing the existing Trifit fitness app using React Native to improve UI/UX and user engagement",
      "Collaborating with backend developers to integrate RESTful APIs and enhance app performance",
      "Implementing responsive design patterns and optimizing application performance",
    ],
    achievements: [
      "Reduced reported issues by 25% within first month",
      "Enhanced data loading efficiency by 20%",
      "Successfully delivered 8+ feature implementations",
    ],
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "RESTful APIs",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEgpiwqq58B6w/company-logo_200_200/company-logo_200_200/0/1704279088673/dashwave_logo?e=1756944000&v=beta&t=ZNWx1gfrsKnlpll_zZJUxZRnX9PX8HXd7NDQXTgQ6d0",
  },
  {
    id: 1,
    role: "Software Developer Intern",
    company: "DevOrbital",
    duration: "April 2025 - June 2025",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Contributing to multiple client projects by implementing new features and fixing bugs using React Native and React.js",
      "Collaborating with development teams to maintain and improve existing web and mobile applications",
      "Focusing on responsive design, API integration, and performance optimization",
    ],
    achievements: [
      "Reduced reported issues by 25% within first month",
      "Successfully delivered 8+ feature implementations",
      "Enhanced data loading efficiency by 20%",
    ],
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "RESTful APIs",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGCahmxhL4wpw/company-logo_200_200/company-logo_200_200/0/1738513421314?e=1756944000&v=beta&t=NNIYELJfdszn9jC5NSfu68WNMllPy6PqKm95ZvW_76s",
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "IIT Bhilai Funded Project, NIT Mizoram",
    duration: "June 2024 - June 2025",
    location: "On Site",
    type: "Internship",
    responsibilities: [
      "Developed and launched the DigiRide Rider App using React Native, Expo, and NativeWind",
      "Built a scalable Admin Dashboard in Next.js with data visualization and performance optimization",
      "Integrated RESTful APIs to reduce latency by 30% using MongoDB, Firebase, and Express.js",
    ],
    achievements: [
      "30% reduction in load times through optimization",
      "99.5% reliability rate for real-time tracking system",
      "Served 500+ daily active users",
    ],
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
      "Participated in web application development using React.js and Node.js",
      "Contributed to problem-solving, teamwork, and adaptability in a professional environment",
      "Developed and optimized web applications to enhance functionality and performance",
    ],
    achievements: [
      "Implemented responsive UI components used across 3 company products",
      "Reduced development time by 15% through API integration modules",
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "Redux", "Material UI"],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEziNnpBzTvTg/company-logo_200_200/company-logo_200_200/0/1676468832144/softwaregiant_logo?e=2147483647&v=beta&t=zitCq5NtHyiE8Hl3akhnyQuV-yx3g3onIOFpAGssGXY",
  },
];

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
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
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="mb-8 group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
        {/* Company Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-white/10 p-2 flex-shrink-0 border border-white/20">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-full h-full object-contain rounded"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <HiOfficeBuilding className="text-sm" />
              <span className="font-medium">{experience.company}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-xs" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-xs" />
                <span>{experience.location}</span>
              </div>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                {experience.type}
              </span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
            <FaBriefcase className="text-blue-400 text-sm" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <BsArrowRight className="text-blue-400 mt-1 text-xs flex-shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {experience.achievements && (
          <div className="mb-6">
            <h4 className="text-lg font-medium text-white mb-3">
              Key Achievements
            </h4>
            <div className="grid gap-2">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                >
                  <span className="text-sm text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
            <FaCode className="text-blue-400 text-sm" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-transparent" id="experience">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-sm font-medium text-blue-400">
              Professional Experience
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Career Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my professional experience and technical growth
            through meaningful projects and collaborations
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
