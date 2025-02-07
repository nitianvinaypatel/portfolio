"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Education from "@/components/Education";
import Nav from "@/components/Nav";
import { TimelineDemo } from "@/components/Timeline";
import { CardSpotlightDemo } from "@/components/Cardspotlight";
import { AnimatedListDemo } from "@/components/AnimatedList";
import Achievement from "@/components/Achivement";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import ProjectCard from "@/components/ProjectCard";
import { WobbleCardDemo } from "@/components/WobbleCard";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 px-3">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <WobbleCardDemo />
        <Achievement />
        <Education />
        {/* <Grid /> */}
        <ProjectCard />
        {/* <RecentProjects /> */}
        <AnimatedTestimonialsDemo />
        {/* <Experience /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
