import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border"; // Ensure this is the correct import path

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      description:
        "A modern e-commerce solution with React and Node.js, powered by MongoDB and Express",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      description:
        "Comprehensive task management solution, built with React, Firebase, and Tailwind CSS for a seamless user experience.",
      techStack: ["React", "Firebase", "Tailwind CSS", "React Query"],
      liveLink: "https://task-app-demo.com",
      githubLink: "https://github.com/username/task-app",
    },
    {
      id: 3,
      title: "NIT-MZ Student App",
      image:
        "https://play-lh.googleusercontent.com/y-wBMroYPPB6UzUWX8U65BZMpiM86Oft1SNo9yUhKnLWe-bbbw3GeRK1jZ8m7RNKmQ=w416-h235-rw",
      description:
        " Comprehensive Android app for NIT Mizoram students, enhancing campus life experience.",
      techStack: ["Android Studio", "Java", "XML", "Firebase"],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.nitmizoram.nitmz&pli=1",
      githubLink: "https://github.com/nitianvinaypatel/NITMZ",
    },
  ];

  return (
    <div className="bg-black-100 py-20" id="projects">
      <h1 className="heading mb-16">
        <span className="text-purple">My Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <ShineBorder
            key={project.id}
            className="relative flex flex-col h-full overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-700 border border-gray-700">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1526498460520-4c246339dccb";
                  }}
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <BiLinkExternal className="mr-2" />
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${project.title} on GitHub`}
                    className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </ShineBorder>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
