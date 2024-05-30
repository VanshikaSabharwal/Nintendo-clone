import Slider from "./components/Slider";
import Featured from "./components/Featured";
import LowerNavbar from "./components/LowerNavbar";
import Navbar from "./components/Navbar";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <LowerNavbar />
      <Slider />
      <Featured />
    </>
  );
}
