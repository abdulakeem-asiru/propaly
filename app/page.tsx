import Navbar from "@/components/home/Navbar";
import { TrustedClient } from "@/components/home/TrustedClient";
import Features from "@/components/home/Features";
import Value from "@/components/home/Value";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
import Pricing from "@/components/home/Pricing";
import { Faq } from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <section>
      <div className="max-md:px-4 sticky top-0 z-50 backdrop-blur-md">
      <Navbar />
      </div>
    <Hero />
       <div className="mt-15 flex flex-col justify-center gap-8 items-center px-4">
        <h3 className="text-base text-center font-medium text-black/80">Trusted by 50,000+ businesses for innovative design and growth.</h3>
        <TrustedClient />
      </div> 
      <div id="features">
        <Features />
      </div>
      <div className="mt-16">
        <Value />
      </div>
      <div className="bg-linear-to-b from-white via-(--primary-color)/10 to-white">
      <Steps />
      </div>
         <div className="mt-20" id="pricing">
        <Pricing />
      </div>
         <div id="faq">
        <Faq />
      </div>
       <div className="p-4" id="cta">
        <Cta />
      </div>
        <div>
        <Footer />
      </div>
    </section>
  );
}
