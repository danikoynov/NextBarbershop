"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon set you like
import NavItem from "./navItem";

const NavbarCenter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="center absolute left-1/2 transform -translate-x-1/2 text-white">
      {/* Desktop Nav Items */}
      <div className="hidden md:flex">
        <NavItem label="Барбери" targetId="barbers" />
        <NavItem label="Услуги" targetId="services" />
        <NavItem label="Работно време" targetId="working" />
        <NavItem label="Галерия" targetId="gallery" />
        <NavItem label="Локация" targetId="location" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-center">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed top-full left-1/2 transform -translate-x-1/2 bg-neutral-900 flex flex-col items-center gap-3 py-4 px-6 mt-2 rounded-md shadow-lg  z-50">
          <NavItem label="Барбери" targetId="barbers" />
          <NavItem label="Услуги" targetId="services" />
          <NavItem label="Работно време" targetId="working" />
          <NavItem label="Галерия" targetId="gallery" />
          <NavItem label="Локация" targetId="location" />
        </div>
      )}
    </div>
  );
};

export default NavbarCenter;
