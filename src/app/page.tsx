import Features from "../components/Features";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <Navbar />
        <div className="bg-red-200 h-[300px]"></div>
        <div className="bg-red-200 h-[300px]"></div>
        <div className="bg-red-200 h-[300px]"></div>
        <div className="bg-red-200 h-[300px]"></div>
        <div className="bg-red-200 h-[300px]"></div>
        <Features />
      </section>
    </>
  );
}
