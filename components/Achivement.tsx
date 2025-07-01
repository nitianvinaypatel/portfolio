"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCode,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  date: string;
  type: "award" | "achievement" | "leadership" | "project";
  tags: string[];
  icon: string;
  color: string;
  link?: string;
}

const achievementData: Achievement[] = [
  {
    id: 1,
    title: "Rank 1 in Hackventure 2.0 Hackathon",
    organization: "Mizoram Police x NIT Mizoram",
    description:
      "Won first place in a competitive software development hackathon focusing on innovative solutions for law enforcement challenges.",
    date: "April 2024",
    type: "award",
    tags: ["Hackathon", "Software Development", "Innovation"],
    icon: "🏆",
    color: "#FFD700",
    link: "#",
  },
  {
    id: 2,
    title: "Google Developer Groups Lead",
    organization: "Google Developer Groups NIT Mizoram",
    description:
      "Selected as the official GDG lead, responsible for organizing tech events, workshops, and building developer community.",
    date: "October 2024",
    type: "leadership",
    tags: ["Leadership", "Community", "Google"],
    icon: "👨‍💼",
    color: "#4285F4",
    link: "#",
  },
  {
    id: 3,
    title: "Software Developer Intern",
    organization: "IIT Bhilai Funded Project",
    description:
      "Secured a paid internship position working on cutting-edge research projects in collaboration with IIT Bhilai.",
    date: "June 2024",
    type: "achievement",
    tags: ["Internship", "Research", "IIT"],
    icon: "💼",
    color: "#10B981",
    link: "#",
  },
  {
    id: 4,
    title: "NIT-MZ Student App Launch",
    organization: "Google Play Store",
    description:
      "Successfully developed and deployed the official NIT Mizoram student application on Google Play Store, serving 1000+ students.",
    date: "February 2024",
    type: "project",
    tags: ["Mobile Development", "React Native", "Play Store"],
    icon: "📱",
    color: "#8B5CF6",
    link: "#",
  },
];

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "award":
        return <FaTrophy className="text-yellow-500 text-sm" />;
      case "leadership":
        return <FaUsers className="text-blue-500 text-sm" />;
      case "project":
        return <FaCode className="text-purple-500 text-sm" />;
      default:
        return <FaMedal className="text-green-500 text-sm" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="group"
    >
      <div
        className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 cursor-pointer"
        onClick={() =>
          achievement.link && window.open(achievement.link, "_blank")
        }
      >
        {/* Achievement Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl border-2 transition-transform group-hover:scale-110"
            style={{
              borderColor: achievement.color,
              backgroundColor: `${achievement.color}20`,
            }}
          >
            <span>{achievement.icon}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-white leading-tight">
                {achievement.title}
              </h3>
              {achievement.link && (
                <FaExternalLinkAlt className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>

            <div className="flex items-center gap-2 text-blue-400 mb-2">
              {getTypeIcon(achievement.type)}
              <span className="font-medium text-sm">
                {achievement.organization}
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <FaCalendarAlt className="text-xs" />
              <span>{achievement.date}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {achievement.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-700/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover Effect Overlay */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: achievement.color }}
        />
      </div>
    </motion.div>
  );
};

const Achievement: React.FC = () => {
  return (
    <section className="py-20 bg-transparent" id="achievements">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="text-sm font-medium text-yellow-400 flex items-center gap-2">
              <HiSparkles className="text-sm" />
              Achievements & Recognition
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of milestones, awards, and significant accomplishments
            throughout my journey
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Awards Won", value: "2+", icon: <FaTrophy /> },
            { label: "Leadership Roles", value: "1+", icon: <FaUsers /> },
            { label: "Projects Deployed", value: "3+", icon: <FaCode /> },
            { label: "Internships", value: "4+", icon: <FaBriefcase /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="text-yellow-400 text-xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-white text-xl font-bold">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-6">
          {achievementData.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
