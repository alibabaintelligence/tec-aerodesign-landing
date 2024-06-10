import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section>
      <div className="bg-black w-full">
        <div className="flex flex-col items-center">
          <div className="hover:-translate-y-5 transition ease-in-out">
            <Image
              src={"/images/aerodesign_logo.png"}
              unoptimized={true}
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          <h1 className="tracking-tight text-white mb-1 text-5xl font-semibold">
            TEC RACING
          </h1>
          <h1 className="tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text mb-4 text-5xl font-extrabold">
            AERODESIGN
          </h1>
          <p className={`text-gray-300 text-lg font-medium ${inter.className}`}>
            DESDE 2021
          </p>
        </div>
        <div className="flex flex-row gap-x-5 w-full justify-center mt-10">
          <div className="hover:opacity-70 transition">
            <Link
              href="https://tec.mx"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={"/images/tec_logo.png"}
                unoptimized={true}
                alt="Logo"
                width={200}
                height={150}
              />
            </Link>
          </div>
          <Image
            src={"/images/ansys_logo.png"}
            unoptimized={true}
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
