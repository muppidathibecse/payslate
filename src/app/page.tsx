import { Landing } from "@/src/components/landing/Landing";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-white w-full h-full flex flex-col overflow-hidden"
    >
      <Landing />
    </section>
  );
}