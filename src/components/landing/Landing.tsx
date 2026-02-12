import HeroSection from "../home/hero-section";
import HowItWorks from "../HowItWorks";
import Features from "../features/Feature";
import Testimonial from "../Testimonial";
import DownloadAppSection from "../DownloadAppSection";

export const Landing = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonial />
      <DownloadAppSection />
    </>
  );
};