import React from "react";
import MembersCard from "@/components/MemberCard";

const membersData = [
  {
    id: 1,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 2,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 3,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 4,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 5,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 6,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 7,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 8,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 9,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
  {
    id: 10,
    imgUrl: "",
    name: "Nombre de miembro",
    position: "Puesto",
    description: "Descripción del miembro",
  },
];

const MembersSection = () => {
  return (
    <section id="members">
      <div className="mb-16 mt-24 mx-20">
        <div className="w-full flex justify-center">
          <h1 className="text-4xl mb-6 mt-10 font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            Miembros
          </h1>
        </div>
        <p className="text-black text-lg font-semibold tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
          pretium, imperdiet odio sed, commodo elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam sollicitudin sit amet odio nec
          pretium.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center pt-14 px-4 place-items-center">
          {membersData.map((member) => (
            <MembersCard
              key={member.id}
              imgUrl={member.imgUrl}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
