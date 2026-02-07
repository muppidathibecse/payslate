import DownloadAppSection from "../components/DownloadAppSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/home/hero-section";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="bg-white w-full h-full flex flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <DownloadAppSection />
      <Footer/>
    </section>
  );
}
