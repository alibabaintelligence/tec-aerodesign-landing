import Link from "next/link";
import Image from "next/image";

import { US, MX, DE } from "country-flag-icons/react/3x2";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <div className="flex flex-col mt-2 mb-3">
          <div className="flex flex-col md:flex-row items-center mb-2">
            <Link href="/" className="text-2xl font-semibold mb-2 md:mb-0">
              <Image
                src={"/images/aerodesign_logo.png"}
                unoptimized={true}
                alt="Logo"
                width={45}
                height={45}
              />
            </Link>
            <p className="text-sm md:ml-4">
              © {new Date().getFullYear()} Tec Racing Aerodesign
            </p>
          </div>
            <div className="flex flex-row items-center">
              <div className="">
                {/* <MX
                  title="Mexico"
                  className="rounded-sm overflow-hidden mr-3"
                  width={20}
                /> */}
              </div>
              <div>
                <p className="text-xs text-gray-400">
                  Monterrey, Nuevo León, Mexico
                </p>
              </div>
            </div>
        </div>
        <div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              href="https://www.instagram.com/tr.aerodesign/"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-600 transition"
            >
              <Image
                src={"/images/instagram_wlogo.png"}
                alt="Instagram"
                width={22}
                height={22}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/tec-racing-aerodesign/"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
            >
              <Image
                src={"/images/linkedin_wlogo.webp"}
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
