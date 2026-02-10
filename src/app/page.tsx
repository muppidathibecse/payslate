import DownloadAppSection from "../components/DownloadAppSection";
import Features from "../components/features/Feature";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import HeroSection from "../components/home/hero-section";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <section className="bg-white w-full h-full flex flex-col overflow-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonial />
      <DownloadAppSection />
      <Footer />
    </section>
  );
}
