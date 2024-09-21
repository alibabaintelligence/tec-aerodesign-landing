"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const MembersCard = ({
  imgUrl,
  name,
  position,
  description,
}: {
  imgUrl: string;
  name: string;
  position: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-3xl bg-gray-100 py-6 px-6 hover:bg-red-100 hover:scale-105 transition cursor-pointer"
      >
        <div className="rounded-2xl bg-gray-400 h-52">
          {/* <Image src={imgUrl} alt={name} className="w-full h-full object-cover rounded-2xl" /> */}
        </div>
        <div className="text-black mt-4">
          <h5 className="text-xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            {name}
          </h5>
          <p className="font-semibold mt-1">{position}</p>
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
            className={`relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 ease-in-out ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="flex flex-row justify-end mt-0">
                <div className="rounded-2xl bg-gray-400 h-52 w-40"></div>
              </div>
              <div className="text-black mt-4">
                <h5 className="text-2xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
                  {name}
                </h5>
                <p className="font-semibold mt-1 text-lg">{position}</p>
                <p className="font-medium mt-3">{description}</p>
              </div>
              <div className="flex flex-row justify-end mt-0">
                <Button
                  className="mb-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition mr-3 py-6 w-48"
                  // onClick={() =>
                  //   window.open(
                  //     "https://www.linkedin.com/company/tec-racing-aerodesign/",
                  //     "_blank"
                  //   )
                  // }
                >
                  <Image
                    src={"/images/linkedin_wlogo.webp"}
                    alt="LinkedIn"
                    width={22}
                    height={22}
                  />
                  <p className="ml-2 text-lg tracking-tight font-semibold">
                    LinkedIn
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
