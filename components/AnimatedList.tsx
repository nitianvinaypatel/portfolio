"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "./ui/border-beam";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Hired as a Software Developer Intern",
    description: "IIT BHILAI Funded Project",
    time: "June 2024",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Rank 1 in Software Development Hackathon",
    description: "Mizoram Police x NIT Mizoram",
    time: "April 2024",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Selected as a GDG lead NIT Mizoram",
    description: "Google Developer Groups",
    time: "October 2024",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Deployed the NIT-MZ Student App on Play Store",
    description: "Google Play Store",
    time: "Feb 2024",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-6", // Increased max width and padding
        // animation styles
        "transition-all duration-300 ease-in-out hover:scale-[105%]", // Increased scale on hover
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <BorderBeam />
      <div className="flex flex-row items-center gap-4">
        {/* Icon Section */}
        <div
          className="flex size-10 items-center justify-center rounded-2xl" // Increased icon size
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-xs sm:text-lg lg:text-lg">{icon}</span>{" "}
          {/* Smaller icon text */}
        </div>

        {/* Text Section */}
        <div className="flex flex-col overflow-hidden">
          <span className="text-xs sm:text-lg md:text-lg lg:text-lg font-bold">
            {name}
          </span>{" "}
          <p className="text-[8px] sm:text-base font-normal dark:text-white/80 lg:text-base">
            {/* Small description text */}
            {description}
          </p>
          <span className="text-[8px] sm:text-sm text-gray-500 lg:text-sm">
            {time}
          </span>{" "}
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[450px] lg:h-[550px] w-full flex-col p-1 overflow-hidden rounded-lg md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
