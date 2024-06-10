import React from "react";
import { Button } from "./ui/button";
import {
  DocumentIcon,
  InboxIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

const CallSection = () => {
  return (
    <section id="call">
      <div className="mb-32 mt-20 mx-20">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl mb-6 mt-10 font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            Convocatoria 2024-2025
          </h1>
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
              Requisitos
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
              Aplica y Contáctanos
            </h2>
            <div className="flex flex-col">
              <Button className="mb-3 rounded-2xl bg-purple-950 hover:bg-purple-950 hover:bg-opacity-80 mr-3 py-6 w-48">
                <DocumentIcon width={20} className="mr-2" />
                <p className="text-lg tracking-tight font-semibold">
                  Google Forms
                </p>
              </Button>
              <Button className="mb-3 rounded-2xl bg-pink-600 hover:bg-pink-600 hover:bg-opacity-80 mr-3 py-6 w-48">
                <InboxIcon width={20} className="mr-2" />
                <p className="text-lg tracking-tight font-semibold">
                  Instagram
                </p>
              </Button>
              <Button className="mb-3 rounded-2xl bg-blue-600 hover:bg-blue-600 hover:bg-opacity-80 mr-3 py-6 w-48">
                <ChatBubbleBottomCenterIcon width={20} className="mr-2" />
                <p className="text-lg tracking-tight font-semibold">LinkedIn</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
