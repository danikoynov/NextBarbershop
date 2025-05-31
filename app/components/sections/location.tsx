import React from "react";

const Location = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center pt-10">
        КЪДЕ МОЖЕ ДА НИ НАМЕРИТЕ
      </h1>
      <div className="w-full max-w-5xl pb-10">
        <iframe
          className="w-full h-[450px] md:h-[600px] border-2 border-neutral-900"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.105522609589!2d26.93827717563589!3d43.27016507712102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a58b007a1c3a87%3A0x5a8c3daeb8676383!2sMaZZnu%20Barber%20Studio!5e0!3m2!1sbg!2sbg!4v1748712543694!5m2!1sbg!2sbg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
