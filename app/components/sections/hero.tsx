// components/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroData from "../ui/heroData";

const images = [
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background3.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <u>
      <div className="relative h-screen overflow-hidden z-0">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full z-0"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            width: `${images.length * 100}vw`,
          }}
        >
          {images.map((src, index) => (
            <div
              className="w-screen h-full flex-shrink-0 relative z-0"
              key={index}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                //width={1920}
                //height={1080}
                layout="fill"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <HeroData />
      </div>
    </u>
  );
}
