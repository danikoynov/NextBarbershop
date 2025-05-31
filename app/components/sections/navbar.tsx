import React from "react";
import Logo from "../ui/navbar_ui/logo";
import NavbarCenter from "../ui/navbar_ui/navbarCenter";
import SocialMedia from "../ui/navbar_ui/socialMedia";

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
