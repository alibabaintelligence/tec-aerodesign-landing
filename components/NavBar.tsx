"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Resultados",
    path: "#results",
  },
  {
    title: "Convocatoria",
    path: "#call",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-85 backdrop-blur-sm">
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
