"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our Team",
    path: "/team",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Sponsors",
    path: "/sponsors",
  },
];

interface NavbarProps {
  navbarAnimation?: boolean; // Optional boolean prop
}

const NavBar: React.FC<NavbarProps> = ({ navbarAnimation = true }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!navbarAnimation) return;

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarAnimation]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition duration-300 ${
        navbarAnimation
          ? isScrolled
            ? "bg-black backdrop-blur-md bg-opacity-70"
            : "bg-transparent"
          : "bg-black backdrop-blur-md bg-opacity-80"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between px-8 py-2 mx-auto container">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          <Image
            src={"/images/aerodesign_logo.png"}
            unoptimized={true}
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="mobile-menu block md:hidden ">
          {navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {...navLinks.map((link, i) => (
              <li key={i}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
