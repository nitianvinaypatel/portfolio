import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import pic from "../public/memoji-computer.png";
import Ripple from "./ui/ripple";
import { siteConfig } from "@/config/site";
import { BorderBeam } from "./ui/border-beam";

const Hero = () => {
  useEffect(() => {
    const adjustScrollPosition = (e: Event) => {
      const targetId = (e.target as HTMLAnchorElement).getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        if (targetElement) {
          e.preventDefault(); // Prevent default anchor behavior
          const elementPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Attach event listener for anchor links
    document
      .querySelectorAll('a[href^="#"]')
      .forEach((link) => link.addEventListener("click", adjustScrollPosition));

    return () => {
      // Cleanup on unmount
      document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) =>
          link.removeEventListener("click", adjustScrollPosition)
        );
    };
  }, []);

  return (
    <div className="pb-20 pt-20 relative" id="hero">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="violet"
        />
      </div>

      {/* Background Grid */}
      <div
        className="absolute h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black-100/[0.2]
        top-0 left-0 flex items-center justify-center"
      ></div>

      {/* Ripple Effect */}
      <Ripple />

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10 px-4">
        <div className="w-full max-w-[95vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          {/* Image and Availability Badge */}
          <div className="flex flex-col items-center">
            <Image
              src={pic}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain mx-auto"
              alt="Memoji Computer"
            />
            <div className="mt-4 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-full">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Text Effect */}
          <TextGenerateEffect
            words="Exploring the world of AI/ML and Full Stack Development"
            className="text-center text-[clamp(24px,5vw,40px)] md:text-[clamp(30px,6vw,50px)] lg:text-[clamp(36px,4vw,60px)]"
          />

          {/* Subheading */}
          <p className="text-center text-xs md:text-lg lg:text-xl leading-relaxed md:tracking-wider mb-4">
            Hi! I&apos;m Vinay Patel, a Full Stack Developer, AI/ML Enthusiast,
            and a Tech Blogger.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#about">
              <MagicButton
                title="Explore more"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href={siteConfig.links.linkedin}>
              <MagicButton
                title="Let's connect "
                icon={"🤝"}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
