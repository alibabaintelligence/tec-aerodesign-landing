import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <div>
      <Link
        href={href}
        className="block py-2 pr-4 rounded md:p-0 hover:text-white transition text-gray-400 font-medium tracking-tight"
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
