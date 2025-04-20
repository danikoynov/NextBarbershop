import Navbar from "./components/layouts/navbar";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});
export default function Home() {
  return (
    <div className={rubik.className}>
      <Navbar />
    </div>
  );
}
