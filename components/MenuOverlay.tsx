import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({
  links,
}: {
  links: { title: string; path: string }[];
}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {...links.map((link, i) => (
        <NavLink key={i} title={link.title} href={link.path} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
