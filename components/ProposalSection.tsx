"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const ProposalSection = () => {
  return (
    <section id="call">
      <div className="mb-16 mt-20 mx-20">
        <div className="w-full flex justify-start">
          <div className="flex flex-row text-3xl mb-8 mt-10 font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            <h2 className="mr-3">Do you have a proposal?</h2>
            <h2>Tell us!</h2>
          </div>
        </div>
        <p className="text-black text-lg font-semibold tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
          pretium, imperdiet odio sed, commodo elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam sollicitudin sit amet odio nec
          pretium.
        </p>
        <div className="my-6 md:grid md:grid-cols-2 gap-8 items-center px-4 place-items-start">
          <div>
            <h2 className="my-4 text-2xl font-bold tracking-tight text-black">
              Requirements
            </h2>
            <ul className="list-disc text-base font-semibold tracking-tight">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed et diam pretium, imperdiet odio sed, commodo elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Aliquam sollicitudin sit amet odio nec pretium.</li>
            </ul>
          </div>
          <div>
            <h2 className="my-4 text-2xl font-bold tracking-tight text-black">
              Contact us!
            </h2>
            <div className="flex flex-col">
              <Button
                className="mb-3 rounded-2xl bg-rose-600 hover:bg-rose-500 transition mr-3 py-6 w-48"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/tr.aerodesign/",
                    "_blank"
                  )
                }
              >
                <Image
                  src={"/images/instagram_wlogo.png"}
                  alt="Instagram"
                  width={22}
                  height={22}
                />
                <p className="ml-2 text-lg tracking-tight font-semibold">
                  Instagram
                </p>
              </Button>
              <Button
                className="mb-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition mr-3 py-6 w-48"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/tec-racing-aerodesign/",
                    "_blank"
                  )
                }
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
    </section>
  );
};

export default ProposalSection;
