"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { siteConfig } from "../config/site";
import { Link } from "@nextui-org/react";

import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = e.currentTarget.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      e.preventDefault(); // Prevent default behavior of link

      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0;

      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight,
          behavior: "smooth",
        });
        setIsMenuOpen(false); // Close the menu
      }
    }
  };

  return (
    <div className="relative">
      {/* Blur Background when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}

      <Navbar
        className="flex h-14 pt-4 pb-3 w-full lg:px-20 lg:mx-10 bg-black-100/75 justify-center items-center relative z-50"
        position="static"
      >
        {/* Brand Section */}
        <NavbarBrand className="flex items-center pl-4 justify-start">
          <p className="font-bold text-2xl text-orange-500">Portfolio</p>
        </NavbarBrand>

        {/* Full Navbar Links (hidden on mobile/tablet) */}
        <NavbarContent className="hidden lg:flex flex-grow gap-6 pr-20 justify-center items-center">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                className="text-foreground hover:text-orange-500"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Social Icons */}
        <NavbarContent className="hidden lg:flex basis-1/5 pr-20 justify-end">
          <NavbarItem className="flex gap-2 justify-end">
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <FaGithub className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
            >
              <FaLinkedin className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <FaInstagram className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Facebook"
              href={siteConfig.links.facebook}
            >
              <FaFacebook className="text-default-500" />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile/Tablet Hamburger Icon */}
        <div className="lg:hidden flex pr-4 items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <RxCross2 className="text-2xl text-default-500" />
            ) : (
              <RiMenu3Fill className="text-2xl text-default-500" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full border rounded-lg bg-black-100/50 shadow-lg z-50">
            <div className="flex flex-col gap-4 p-4">
              {siteConfig.navItems.map((item, index) => (
                <a
                  key={index}
                  className="text-foreground hover:text-orange-500 cursor-pointer"
                  href={item.href}
                  onClick={handleLinkClick} // Adjust scroll and close menu
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Icons in Mobile Menu */}
            <div className="flex justify-around p-4 border-t">
              <Link
                isExternal
                aria-label="Github"
                href={siteConfig.links.github}
              >
                <FaGithub className="text-default-500" />
              </Link>
              <Link
                isExternal
                aria-label="LinkedIn"
                href={siteConfig.links.linkedin}
              >
                <FaLinkedin className="text-default-500" />
              </Link>
              <Link
                isExternal
                aria-label="Instagram"
                href={siteConfig.links.instagram}
              >
                <FaInstagram className="text-default-500" />
              </Link>
              <Link
                isExternal
                aria-label="Facebook"
                href={siteConfig.links.facebook}
              >
                <FaFacebook className="text-default-500" />
              </Link>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
}
