"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { motion } from "framer-motion";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  link?: string;
  tags?: string[];
}

let notifications = [
  {
    name: "Hired as a Software Developer Intern",
    description: "IIT BHILAI Funded Project",
    time: "June 2024",
    icon: "💸",
    color: "#00C9A7",
    tags: ["Internship", "Development"],
    link: "#",
  },
  {
    name: "Rank 1 in Software Development Hackathon",
    description: "Mizoram Police x NIT Mizoram",
    time: "April 2024",
    icon: "👤",
    color: "#FFB800",
    tags: ["Hackathon", "Achievement"],
    link: "#",
  },
  {
    name: "Selected as a GDG lead NIT Mizoram",
    description: "Google Developer Groups",
    time: "October 2024",
    icon: "💬",
    color: "#FF3D71",
    tags: ["Leadership", "Community"],
    link: "#",
  },
  {
    name: "Deployed the NIT-MZ Student App on Play Store",
    description: "Google Play Store",
    time: "Feb 2024",
    icon: "🗞️",
    color: "#1E86FF",
    tags: ["Mobile", "Development"],
    link: "#",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  icon,
  color,
  time,
  tags,
  link,
}: Item) => {
  return (
    <motion.figure
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-6",
        "transition-all duration-300 ease-out",
        "border border-gray-100 dark:border-gray-800",
        "hover:border-gray-200 dark:hover:border-gray-700",
        "shadow-sm hover:shadow-md dark:shadow-none",
        link && "hover:shadow-lg"
      )}
      onClick={() => link && window.open(link, "_blank")}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
            style={{
              border: `1.5px solid ${color}`,
            }}
          >
            <span className="text-xl">{icon}</span>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <h3 className="font-bold leading-tight text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <time className="text-xs text-gray-500">{time}</time>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[450px] lg:h-[550px] w-full flex-col overflow-hidden rounded-lg p-4",
        className
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
