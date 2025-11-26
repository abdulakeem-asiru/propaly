import Navbar from "@/components/home/Navbar";
import { TrustedClient } from "@/components/home/TrustedClient";
import Features from "@/components/home/Features";
import Value from "@/components/home/Value";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <section>
      <Navbar />
    <Hero />
      <div className="mt-15 flex flex-col justify-center gap-8 items-center px-4">
        <h3 className="text-base font-medium text-black/80">Trusted by 50,000+ businesses for innovative design and growth.</h3>
        <TrustedClient />
      </div>
      <div>
        <Features />
      </div>
      <div className="mt-16">
        <Value />
      </div>
      <div className="h-300 bg-linear-to-b from-white to-(--primary-color)/10"></div>
    </section>
  );
}
