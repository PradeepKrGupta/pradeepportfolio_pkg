import Hero from "@/components/main/Hero";
import Encryption from "@/components/main/Encryption";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Certificates from "@/components/main/Certificates";
import Publications from "@/components/main/Publications";
import Education from "@/components/main/Education";
import Footer from "@/components/main/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-30">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Certificates />
        <Education />
        <Publications />
        <Footer />
      </div>
    </main>
  );
}