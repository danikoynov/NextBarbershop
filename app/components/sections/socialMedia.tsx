import React from "react";
import Image from "next/image";
const SocialMedia = () => {
  return (
    <div className="right h-14/20 pr-4">
      <a href="https://www.instagram.com/mazznu.studio/" target="_blank">
        <Image
          src="/images/instagram_icon_transparent.png"
          alt="Instagram Icon"
          width={706}
          height={706}
          className="h-full w-auto object-contain"
        ></Image>
      </a>
    </div>
  );
};

export default SocialMedia;
