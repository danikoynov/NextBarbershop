import React from "react";
import BookButton from "./bookButton";

const HeroData = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <div className="text-center text-white px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Вашият стил е наш дълг{" "}
        </h1>

        <h1
          className="text-3xl md:text-7xl font-bold mb-4"
          style={{ textShadow: "4px 4px 12px rgba(0,0,0,0.6)" }}
        >
          BARBER STUDIO MAZZNU
        </h1>

        <BookButton />
      </div>
    </div>
  );
};

export default HeroData;
