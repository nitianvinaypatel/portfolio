import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaBookReader,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaMedal,
} from "react-icons/fa";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

interface Education {
  id: number;
  institution: string;
  degree: string;
  course: string;
  duration: string;
  description: string;
  achievements: Array<{
    title: string;
    type: "award" | "achievement" | "certification";
    date?: string;
  }>;
  image: string;
  grade?: string;
  location?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "National Institute of Technology (NIT), Mizoram",
    degree: "Bachelor of Technology",
    course: "Computer Science & Engineering",
    duration: "2022 - 2026",
    description:
      "Currently in 7th semester of my B.Tech degree, exploring new technologies and building innovative projects.",
    achievements: [
      {
        title: "Rank 1 in Hackventure 2.0 Hackathon",
        type: "award",
        date: "2023",
      },
      {
        title: "GDG NIT-Mizoram Lead",
        type: "achievement",
        date: "2023",
      },
      {
        title: "8.0 CGPA",
        type: "achievement",
      },
    ],
    image: "https://www.holidify.com/images/bgImages/MIZORAM.jpg",
    grade: "8.0 CGPA",
    location: "Aizawl, Mizoram",
  },
  {
    id: 2,
    institution: "AMI Inter College Barabanki",
    degree: "12th Grade",
    course: "Mathematics & Science",
    duration: "2020 - 2021",
    description:
      "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, preparing for competitive examinations.",
    achievements: [
      {
        title: "Head Boy of the Class",
        type: "achievement",
        date: "2021",
      },
      {
        title: "Computer Science Club President",
        type: "achievement",
        date: "2020",
      },
    ],
    image:
      "https://media.istockphoto.com/id/1759780706/photo/jorasanko-thakurbari-is-located-in-kolkata-west-bengal-india.jpg?s=612x612&w=0&k=20&c=I_Lo4c_XuTTXK6b5rGj89NZB6xHccj3E6rRW4GoDuNM=",
    location: "Barabanki, Uttar Pradesh",
  },
  {
    id: 3,
    institution: "Sita Inter College Mahmudabad",
    degree: "10th Grade",
    course: "Mathematics & Computer Science",
    duration: "2018 - 2019",
    description:
      "Completed secondary education with distinction in Mathematics and Computer Science, building strong foundation in logical thinking.",
    achievements: [
      {
        title: "Among Top 5 in Class",
        type: "achievement",
      },
      {
        title: "1st Prize in Essay Writing Competition",
        type: "award",
        date: "2019",
      },
    ],
    image:
      "https://i.ytimg.com/vi/INgjfWkI7iw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVChRMA8=&rs=AOn4CLD5BB87yweGIBqRiwK6s_UcHlTHZg",
    location: "Mahmudabad, Uttar Pradesh",
  },
];

const EducationCard = ({
  education,
  index,
}: {
  education: Education;
  index: number;
}) => {
  const [showAchievements, setShowAchievements] = useState(false);
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

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "award":
        return <FaTrophy className="text-yellow-500 text-sm" />;
      case "certification":
        return <FaMedal className="text-blue-500 text-sm" />;
      default:
        return <FaAward className="text-purple-500 text-sm" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="mb-8 group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-300">
        {/* Institution Image Header */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={education.image}
            alt={education.institution}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Institution Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
              {/* <FaUniversity className="text-blue-400 text-lg" /> */}
              {education.institution}
            </h3>
            {education.location && (
              <div className="flex items-center gap-1 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-xs" />
                <span>{education.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Degree Information */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <FaGraduationCap className="text-sm" />
              <span className="font-semibold text-lg text-white">
                {education.degree}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <FaBookReader className="text-xs" />
                <span>{education.course}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-xs" />
                <span>{education.duration}</span>
              </div>
              {education.grade && (
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                  {education.grade}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {education.description}
          </p>

          {/* Achievements Toggle */}
          {education.achievements.length > 0 && (
            <div>
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm mb-4"
              >
                <FaAward className="text-xs" />
                <span>
                  {showAchievements
                    ? "Hide Achievements"
                    : `View Achievements (${education.achievements.length})`}
                </span>
                <motion.div
                  animate={{ rotate: showAchievements ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsArrowDown className="text-xs" />
                </motion.div>
              </button>

              {/* Achievements List */}
              <AnimatePresence>
                {showAchievements && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2">
                      {education.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-gray-800/50 border border-gray-700 rounded-lg"
                        >
                          <div className="mt-0.5">
                            {getAchievementIcon(achievement.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 text-sm">
                              {achievement.title}
                            </p>
                            {achievement.date && (
                              <p className="text-xs text-gray-500 mt-1">
                                {achievement.date}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const EducationTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-transparent" id="education">
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
              Educational Background
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A chronicle of my academic pursuits, achievements, and continuous
            learning
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
