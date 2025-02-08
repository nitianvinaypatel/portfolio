import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaAward } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

interface Education {
  id: number;
  institution: string;
  degree: string;
  course: string;
  duration: string;
  description: string;
  achievements: string[];
  image: string;
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
        "Currently i am in 6th semester of my B.Tech degree, i am learning new things and exploring new technologies.",
      achievements: [
        "Paid internship in IIT BHILAI Project",
        "Rank 1 in Hackventure 2.0 Hackathon",
        "GDG NIT-Mizoram Lead",
        "8.0 CGPA",
      ],
      image:
        "https://images.collegedunia.com/public/college_data/images/og_images/news/1669307994-pasted-image-0---2022-11-24T220727.310.png",
    },
    {
      id: 2,
      institution: "AMI Inter College Barabanki",
      degree: "12th",
      course: "Mathematics & Science",
      duration: "2020 - 2021",
      description:
        "Focused on Physics, Chemistry, and Mathematics, and prepared for jee mains and advance exams.",
      achievements: [
        "Head Boy of the Class",
        "Computer Science Club President",
      ],
      image:
        "https://media.istockphoto.com/id/1759780706/photo/jorasanko-thakurbari-is-located-in-kolkata-west-bengal-india.jpg?s=612x612&w=0&k=20&c=I_Lo4c_XuTTXK6b5rGj89NZB6xHccj3E6rRW4GoDuNM=",
    },
    {
      id: 3,
      institution: "Sita Inter College Mahmudabad",
      degree: "10th",
      course: "Mathematics & Computer Science",
      duration: "2018 - 2019",
      description:
        "Focused on Mathematics, Science, and Computer Science, and prepared for board exams.",
      achievements: [
        "Among Top 5 in Class",
        "1st Prize in Eassy Writing Competition",
      ],
      image:
        "https://i.ytimg.com/vi/INgjfWkI7iw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVChRMA8=&rs=AOn4CLD5BB87yweGIBqRiwK6s_UcHlTHZg",
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 py-16 max-w-4xl relative"
      id="education"
    >
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          My Educational Journey
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white">
          A chronicle of my academic pursuits and achievements
        </p>
      </div>

      <div className="relative">
        {/* Light beam background */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-neutral-200 to-transparent overflow-hidden">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-green-500 to-transparent rounded-full"
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
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-lg relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>
              </div>

              <div
                className="w-full md:w-[calc(50%-2rem)] bg-white rounded-lg shadow-lg border hover:shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => toggleExpand(education.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === education.id}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={education.image}
                    alt={education.institution}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    width={500} // Specify width
                    height={300} // Specify height
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2">
                        <FaUniversity className="text-2xl" />
                        <h3 className="text-xl font-bold">
                          {education.institution}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-black-100">
                  <div className="flex items-center gap-2 mb-2">
                    <FaGraduationCap className="text-blue-500 text-xl" />
                    <h4 className="font-semibold text-white">
                      {education.degree}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaBookReader className="text-blue-500" />
                    <h4 className="font-semibold text-white">
                      {education.course}
                    </h4>
                  </div>

                  <p className="text-violet-500 mb-4">{education.duration}</p>

                  <div
                    className={`transition-all duration-300 ${
                      expandedId === education.id ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <p className="text-white mb-3">{education.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-green-400 flex items-center gap-2">
                        <FaAward className="text-yellow-500" />
                        Key Achievements
                      </h5>
                      <ul className="list-disc list-inside text-orange-400 ml-4">
                        {education.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    className="mt-3 text-blue-500 hover:text-blue-700 font-normal transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(education.id);
                    }}
                  >
                    {expandedId === education.id ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
