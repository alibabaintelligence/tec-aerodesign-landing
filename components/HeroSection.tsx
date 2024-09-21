import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section>
      <div className="bg-black bg-[url('/images/fondo_tec.png')] bg-cover bg-opacity-15  w-full px-12 pb-20 pt-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="hover:-translate-y-5 transition ease-in-out">
              <Image
                src={"/images/aerodesign_logo.png"}
                unoptimized={true}
                alt="Logo"
                width={250}
                height={150}
              />
            </div>
            <h1 className="tracking-tight text-white mt-3 mb-1 text-5xl font-bold">
              TEC RACING
            </h1>
            <h1 className="tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text mb-4 text-5xl font-black">
              AERODESIGN
            </h1>
            <p
              className={`text-gray-300 text-lg font-semibold ${inter.className}`}
            >
              SINCE 2021
            </p>
          </div>
          <div className="flex flex-row gap-x-8 w-full justify-center mt-10">
            <div className="hover:opacity-70 transition">
              <Link
                href="https://tec.mx"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative w-[150px] h-[50px]">
                  <Image
                    src={"/images/sponsors/tec_logo.png"}
                    unoptimized={true}
                    alt="Logo"
                    style={{ objectFit: "contain" }}
                    layout="fill"
                  />
                </div>
              </Link>
            </div>
            <div className="relative w-[150px] h-[50px]">
              <Image
                src={"/images/sponsors/3dfactory_logo.png"}
                unoptimized={true}
                alt="Logo"
                style={{ objectFit: "contain" }}
                // objectPosition="center"
                layout="fill"
              />
            </div>
            <div className="relative w-[150px] h-[50px]">
              <Image
                src={"/images/sponsors/grupossc_logo.png"}
                unoptimized={true}
                alt="Logo"
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[150px] h-[50px]">
              <Image
                src={"/images/sponsors/numericalc_logo.png"}
                unoptimized={true}
                alt="Logo"
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-[70px] h-[50px]">
              <Image
                src={"/images/sponsors/wallacemfg_logo.png"}
                unoptimized={true}
                alt="Logo"
                layout="fill"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
