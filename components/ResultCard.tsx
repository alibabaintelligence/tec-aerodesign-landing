import React from "react";
import { Button } from "./ui/button";
import {
  DocumentIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

const ResultCard = ({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-3xl bg-gray-100 py-6 px-6  hover:bg-red-100 hover:scale-105 transition cursor-pointer">
      <div className="rounded-2xl bg-gray-400 h-52"></div>
      <div className="text-black mt-4">
        <h5 className="text-xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
          {title}
        </h5>
        <p className="font-medium mt-1 mb-3">{description}</p>
        <div className="flex flex-row">
          <Button className="rounded-xl bg-black hover:bg-black hover:bg-opacity-80 mr-3">
            <DocumentIcon width={20} className="mr-2" />
            Ficha Técnica
          </Button>
          <Button className="rounded-xl bg-[#ED0000] hover:bg-[#ED0000] hover:bg-opacity-80">
          <ClipboardDocumentListIcon width={20} className="mr-2" />
            Recursos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
