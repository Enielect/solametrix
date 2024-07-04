import Image from "next/image";
import Hero from "@/app/components/LandingSections/Hero";
import About from "@/app/components/LandingSections/About";
import Solution from "@/app/components/LandingSections/Solution";
import FAQ from "@/app/components/LandingSections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen grid justify-center content-center">
      <Hero />
      <About />
      <Solution />
      <FAQ />
    </main>
  );
}
