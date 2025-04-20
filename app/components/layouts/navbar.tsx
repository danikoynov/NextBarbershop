import React from "react";
import Logo from "../sections/logo";
import NavbarCenter from "../sections/navbarCenter";
import SocialMedia from "../sections/socialMedia";

const Navbar = () => {
  return (
    <div
      className="
    bg-neutral-900 w-screen 
    h-20 md:h-24 lg:h-28
    text-white
    flex items-center justify-between
    "
    >
      <Logo />

      <NavbarCenter />

      <SocialMedia />
    </div>
  );
};

export default Navbar;
