import HeroSection from "../components/home/hero-section";
import HeroContent from "../components/home/hero-section/HeroContent";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/features/Feature";
import Testimonial from "../components/Testimonial";
import DownloadAppSection from "../components/DownloadAppSection";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-white w-full h-full flex flex-col overflow-hidden"
    >
      <HeroSection>
        <HeroContent />
      </HeroSection>
      <HowItWorks />
      <Features />
      {false && <Testimonial />}
      <DownloadAppSection />
    </section>
  );
}
