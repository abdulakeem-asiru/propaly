import Navbar from "@/components/home/Navbar";
import {HeroBg, HeroImg}  from "@/assets/images";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TrustedClient } from "@/components/home/TrustedClient";
import Features from "@/components/home/Features";


export default function Home() {
  return (
    <section>
      <Navbar />
    <div className="bg-cover -mt-30 pt-40 bg-center bg-no-repeat min-h-[600px]
     flex flex-col justify-start items-center"
    style={{ backgroundImage: `url(${HeroBg.src})` }}>
      <div className=" mt-20 flex flex-col gap-6 justify-center items-center px-4">
        <h1 className="font-semibold text-6xl max-w-[1000px] text-center leading-18">Real Estate Made Effortless with Intelligent CRM Automation</h1>
        <p className="font-medium text-base max-w-[600px] text-center text-(--text-secondary)">Engage smarter, automate your entire real estate workflow, and grow deeper loyalty, powered by a platform that builds your website,
           markets your properties, and manages your leads.</p>
           <button 
          className="bg-(--primary-color) shadow-md  text-white px-4 py-3 rounded-lg flex items-center gap-2  transition-colors"
        >
          <span className="font-medium text-[16px]">Explore Propaly</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-15">
        <Image src={HeroImg} alt="Hero Background" width={1200} height={400} />
      </div>
      </div>   
      <div className="mt-15 flex flex-col justify-center gap-8 items-center px-4">
        <h3 className="text-base font-medium text-black/80">Trusted by 50,000+ businesses for innovative design and growth.</h3>
        <TrustedClient />
      </div>
      <div>
        <Features />
      </div>
    </section>
  );
}
