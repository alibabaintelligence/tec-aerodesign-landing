import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-black m-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 place-items-center">
        <Image
          src={"/images/team.png"}
          unoptimized={true}
          className="self-center hover:rotate-6 hover:scale-110 transition"
          alt="Team"
          width={500}
          height={500}
        />
        <div>
          <h2 className="my-4 text-4xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg font-semibold tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
            pretium, imperdiet odio sed, commodo elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam sollicitudin sit amet
            odio nec pretium.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-14 px-4 place-items-center">
        <div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Tecnológico de Monterrey
            </h2>
            <h3 className="mb-4 text-3xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
              Campus Monterrey
            </h3>
          </div>
        </div>
        <Image
          src={"/images/campus_mty.png"}
          unoptimized={true}
          className="hover:-rotate-6 hover:scale-110 transition"
          alt="Campus_Mty"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default AboutSection;
