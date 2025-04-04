import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaBookReader,
  FaCalendarAlt,
  FaMedal,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Image from "next/image";

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
  skills?: string[];
}

const EducationTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.1", "end 0.9"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const educationData: Education[] = [
    {
      id: 1,
      institution: "NIT Mizoram",
      degree: "Bachelor of Technology",
      course: "Computer Science & Engineering",
      duration: "2022 - 2026",
      description:
        "Currently in 6th semester of my B.Tech degree, i am learning new things and exploring new technologies.",
      achievements: [
        {
          title: "Paid internship in IIT BHILAI Project",
          type: "achievement",
          date: "2023",
        },
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
      image:
        "https://images.collegedunia.com/public/college_data/images/og_images/news/1669307994-pasted-image-0---2022-11-24T220727.310.png",
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
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Prepared extensively for competitive examinations while maintaining academic excellence.",
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
        "Completed secondary education with distinction in Mathematics and Computer Science. Developed strong foundation in logical thinking and problem-solving.",
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

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "award":
        return <FaTrophy className="text-yellow-500" />;
      case "certification":
        return <FaCertificate className="text-blue-500" />;
      default:
        return <FaMedal className="text-purple-500" />;
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-20" id="education">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A chronicle of my academic pursuits and achievements
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            />
          </div>

          {educationData.map((education, index) => (
            <div
              key={education.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
              }`}
            >
              <div
                className={`flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <HiOutlineAcademicCap className="text-purple-500 text-lg" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-[calc(50%-2rem)] bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={education.image}
                      alt={education.institution}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                      <div className="absolute bottom-4 left-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-white">
                            <FaUniversity className="text-purple-400 text-xl" />
                            <h3 className="text-xl font-bold">
                              {education.institution}
                            </h3>
                          </div>
                          {education.location && (
                            <div className="text-sm text-gray-300 flex items-center gap-1">
                              <span>📍</span> {education.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-purple-400" />
                        <span className="text-white font-semibold">
                          {education.degree}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-purple-400" />
                        <span className="text-white">{education.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaBookReader className="text-purple-400" />
                      <span className="text-white font-semibold">
                        {education.course}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {education.description}
                    </p>

                    <AnimatePresence>
                      {expandedId === education.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-gray-700 pt-4 mt-4">
                            <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                              <FaAward className="text-yellow-500" />
                              Achievements & Recognition
                            </h4>
                            <div className="space-y-3">
                              {education.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-700/30 border border-gray-600"
                                >
                                  <div className="mt-1">
                                    {getAchievementIcon(achievement.type)}
                                  </div>
                                  <div>
                                    <p className="text-white">
                                      {achievement.title}
                                    </p>
                                    {achievement.date && (
                                      <p className="text-sm text-gray-400">
                                        {achievement.date}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => toggleExpand(education.id)}
                      className="text-green-500 hover:text-purple-300 font-medium transition-colors flex items-center gap-2"
                    >
                      {expandedId === education.id
                        ? "Show Less"
                        : "View Achievements"}
                      <motion.span
                        animate={{
                          rotate: expandedId === education.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
