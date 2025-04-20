import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="left h-14/20 pl-4">
      <Link href="/" className="block h-full">
        <Image
          src="/images/logo_yellow_transparent.png"
          alt="Barbershop Logo"
          width={1442}
          height={326}
          priority
          className="h-full w-auto object-contain"
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;
