'use client'
import { Mockup, Plane, CardMini, CoinMini, HouseMini } from "@/assets/images";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stepsContent = [
  {
    category: "Saas",
    title: "Building Tools",
    bullets: ["Marketing", "AI", "Operations", "Communication"],
    cardImage: Mockup.src,
    bgColor: "#1C1C1C",
    icons: ["user", "shield", "credit-card"],
  },
  {
    category: "Marketing",
    title: "Automated Marketing",
    bullets: ["Marketing", "AI", "Operations", "Communication"],
    cardImage: Mockup.src,
    bgColor: "#1C1C1C",
    icons: ["building", "users", "shield"],
  },
  {
    category: "Listing",
    title: "Property Management",
    bullets: ["Marketing", "AI", "Operations", "Communication"],
    cardImage: Mockup.src,
    bgColor: "#1C1C1C",
    icons: ["home", "upload", "form"],
  },
  {
    category: "Performance",
    title: "Performance Tracking",
    bullets: ["Marketing", "AI", "Operations", "Communication"],
    cardImage: Mockup.src,
    bgColor: "#1C1C1C",
    icons: ["chart", "automation", "export"],
  },
];

const Steps = () => {

   const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  const section = sectionRef.current;
  const trigger = triggerRef.current;

  if (!section || !trigger) return;

  const totalWidth = section.scrollWidth - window.innerWidth;

  gsap.to(section, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "50% 50%",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    },
  });
});

  return (
    <section className="overflow-x-hidden mt-30">
    <div>
    <div  ref={triggerRef}>
    <div className="flex gap-8 px-5 md:px-10 mb-20" ref={sectionRef}>
      {stepsContent.map((step, index) => (
        <div
          key={index}
          className="rounded-2xl p-8 pb-0 w-screen xl:w-[80vw] text-white flex md:flex-row flex-col justify-between gap-20 h-[420px]"
          style={{ backgroundColor: step.bgColor }}
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col">
            <div>
              <p className="opacity-70 mb-2">{step.category}</p>

              <h3 className="md:text-5xl text-3xl font-bold leading-14 max-w-50 mb-6">
                {step.title}
              </h3>

              <ul className="grid grid-cols-2 gap-2 mb-6 max-w-50">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2 opacity-90">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* icons row */}
            <div className="flex gap-4">
                <div className="w-30 h-20 bg-[#eedabe] rounded-2xl flex justify-center items-center">
                <Image src={Plane.src} alt="Plane Img" width={50} height={50}/></div>
                <div className="w-30 h-20 bg-[#0be49b] rounded-2xl flex justify-center items-center">
                <Image src={CardMini.src} alt="Plane Img" width={50} height={50}/></div>
                <div className="w-30 h-20 bg-[#cee9df] rounded-2xl flex justify-center items-center">
                <Image src={HouseMini.src} alt="Plane Img" width={50} height={50}/></div>
                <div className="w-30 h-20 bg-[#f1f9f6] rounded-2xl flex justify-center items-center">
                <Image src={CoinMini.src} alt="Plane Img" width={50} height={50}/></div>
              
    
            </div>
          </div>

          {/* RIGHT SIDE IMAGE → stays at bottom */}
          <div className="relative md:block hidden self-end w-80 h-100 rounded-xl  rounded-b-none overflow-hidden">
            <Image
              src={step.cardImage}
              alt={step.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

    </div>
    </div>
    </div>
    </section>    
  );
};

export default Steps;
