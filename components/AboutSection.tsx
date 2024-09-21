import React from "react";
import Image from "next/image";
import { MX } from "country-flag-icons/react/3x2";

const AboutSection = () => {
  return (
    <section className="text-black m-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 place-items-center">
        <div className="rounded-xl overflow-hidden self-center hover:rotate-3 transition">
          <Image
            src={"/images/team.png"}
            unoptimized={true}
            alt="Team"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            Who we are?
          </h2>
          <p className="mb-6 text-lg font-semibold tracking-tight">
            Multidisciplinary team dedicated to the design and development of
            experimental cargo aircraft with participation in national and
            international competitions.
          </p>
          <div className="flex flex-row items-center">
            <MX
              title="Mexico"
              className="rounded-md overflow-hidden mr-3"
              width={45}
            />

            <h2 className=" text-xl font-bold tracking-tight text-black">
              Monterrey, Nuevo León, Mexico
            </h2>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-14 px-4 place-items-center">
        <div>
          <div className="flex flex-col items-center">
            <div className="relative w-[150px] h-[150px] hover:scale-110 transition">
              <Image
                src={"/images/sponsors/black_logos/tecracingblack_logo.png"}
                unoptimized={true}
                alt="Logo"
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Tecnológico de Monterrey
            </h2>
            <h3 className="mb-1 text-3xl font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
              Campus Monterrey
            </h3>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden self-center hover:rotate-3 transition">
          <Image
            src={"/images/campus_mty.png"}
            unoptimized={true}
            alt="Campus_Mty"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
