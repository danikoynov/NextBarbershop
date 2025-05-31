import Barbers from "./components/sections/barbers";
import Location from "./components/sections/location";
import HeroSection from "./components/sections/hero";
import Navbar from "./components/sections/navbar";
import Services from "./components/sections/services";
import Working from "./components/sections/working";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});
export default function Home() {
  return (
    <div className={rubik.className}>
      <Navbar />
      <HeroSection />
      <Working />
      <Services />
      <Barbers />
      <Location />
    </div>
  );
}
