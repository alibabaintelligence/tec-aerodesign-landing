import React from "react";
import Image from "next/image";

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
  return (
    <div className="w-full rounded-3xl bg-gray-100 py-6 px-6 hover:bg-red-100 hover:scale-105 transition cursor-pointer">
      <div className="rounded-2xl bg-gray-400 h-52">
        {/* <Image src={imgUrl} alt={name} className="w-full h-full object-cover rounded-2xl" /> */}
      </div>
      <div className="text-black mt-4">
        <h5 className="text-xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
          {name}
        </h5>
        <p className="font-semibold mt-1">{position}</p>
        <p className="font-medium mt-1 mb-3 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MembersCard;
