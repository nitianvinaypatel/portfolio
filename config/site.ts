export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portfolio",
  description: "A simple portfolio website",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Achievements",
      href: "#achivements",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "About",
      href: "#about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nitianvinaypatel",
    linkedin: "https://www.linkedin.com/in/nitianvinaypatel/",
    instagram: "https://www.instagram.com/vinaypatel_nitmz/",
    facebook: "https://www.facebook.com/nitianvinaypatel/",
  },
};
