"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  DocumentIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

const ProjectCard = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="rounded-2xl bg-gray-100 py-6 px-6  hover:bg-red-100 hover:scale-105 transition cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="rounded-2xl bg-gray-400 h-52"></div>
        <div className="text-black mt-4">
          <h5 className="text-xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            {title}
          </h5>
          <p className="font-medium mt-1">{description}</p>
        </div>
      </button>
      <div className="relative">
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className={`relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 ease-in-out ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="rounded-2xl bg-gray-400 h-96"></div>
              <div className="text-black mt-4">
                <h5 className="text-2xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
                  {title}
                </h5>
                <p className="font-medium mt-1">{description}</p>
              </div>
              <div className="flex flex-row mt-7">
                <Button className="rounded-xl bg-black hover:bg-black hover:bg-opacity-80 mr-3">
                  <ClipboardDocumentListIcon width={20} className="mr-2" />
                  Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
