import React from "react";

const BookButton = () => {
  return (
    <a
      href="https://www.fresha.com/bg/a/mazznu-barber-studio-shumen-dobrudzhanski-bul-madara-32-9708-shumen-l61kmh1c/booking"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="
            font-[450]
    px-6 py-2 text-sm md:px-8 md:py-3 md:text-base 
    lg:px-10 lg:py-4 lg:text-4xl
    text-white bg-amber-500 rounded-xl
    hover:bg-amber-600 transition-all duration-300
    cursor-pointer
    "
      >
        Запази час
      </button>
    </a>
  );
};

export default BookButton;
