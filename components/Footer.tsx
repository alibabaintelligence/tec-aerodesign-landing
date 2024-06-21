import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <div className="flex flex-col md:flex-row items-center">
          <Link href="/" className="text-2xl font-semibold mb-2 md:mb-0">
            <Image
              src={"/images/aerodesign_logo.png"}
              unoptimized={true}
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
          <p className="text-sm md:ml-4">
            © {new Date().getFullYear()} Tec Racing Aerodesign
          </p>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link
            href="https://www.instagram.com/tr.aerodesign/"
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-600 transition"
          >
            <Image
              src={"/images/instagram_logo.png"}
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
              src={"/images/linkedin_logo.png"}
              alt="LinkedIn"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
