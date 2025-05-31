"use client"; // Only if you're using App Router and want client-side behavior

import React from "react";

interface NavItemProps {
  label: string;
  targetId: string;
}

const NavItem = ({ label, targetId }: NavItemProps) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span
      onClick={handleClick}
      className="
      cursor-pointer 
      px-4 py-2 
      text-white 
      hover:text-yellow-400 transition
      text-2xl

      "
    >
      {label}
    </span>
  );
};

export default NavItem;
