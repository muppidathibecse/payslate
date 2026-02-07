import DownloadAppSection from "../components/DownloadAppSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <section className="h-full bg-white">
        <Navbar />
        <Features />
        <DownloadAppSection />
        <Footer />
      </section>
    </>
  );
}
