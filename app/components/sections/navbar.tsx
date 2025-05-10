import React from "react";
import Logo from "../ui/logo";
import NavbarCenter from "../ui/navbarCenter";
import SocialMedia from "../ui/socialMedia";

const Navbar = () => {
  return (
    <div
      className="
    bg-neutral-900 w-screen 
    h-20 md:h-24 lg:h-28
    text-white
    flex items-center justify-between
    relative z-100
    "
    >
      <Logo />

      <NavbarCenter />

      <SocialMedia />
    </div>
  );
};

export default Navbar;
