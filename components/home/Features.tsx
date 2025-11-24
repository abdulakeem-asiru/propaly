'use client'
import { useRef } from 'react';
import { Mockup, Mockup2 } from '@/assets/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const columnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
 const images = [Mockup,  Mockup2, Mockup, Mockup2]; 
       // Preload images to avoid flicker
    // images.forEach(img => {
    //   const p = new Image();
    //   p.src = img.src;
    // });


  useGSAP(() => {

    const cards = columnRef.current?.querySelectorAll(".sticky-card");
    if (!cards || !imageRef.current) return;

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "50% top",
        scrub: true, 


        onEnter: () => {
          gsap.fromTo(imageRef.current, {opacity: 0.8}, {
            opacity: 1,
            backgroundImage: `url(${images[index].src})`,
            ease: "back.inOut",
          });
        },

        onEnterBack: () => {
          gsap.fromTo(imageRef.current, {opacity: 0.8}, {
            opacity: 1,
            backgroundImage: `url(${images[index].src})`,
            ease: "back.inOut",
          });
        },
      });
    });
  }, []); 

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl font-semibold max-w-[500px] text-center leading-12">
        Powerful Features to Transform Realtors Journey
      </h2>

      <div className="grid grid-cols-2 gap-4 w-7xl rounded-lg p-6">

        <div ref={columnRef} className="flex flex-col gap-4">
          <div className="sticky-card w-full h-80 bg-gray-300 rounded-2xl sticky top-20 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-300 rounded-2xl sticky top-25 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-300 rounded-2xl sticky top-30 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-300 rounded-2xl sticky top-35 border-t"></div>
          <div className="sticky-card w-full h-80 bg-transparent rounded-2xl sticky top-40"></div>
        </div>

        <div>
          <div
            ref={imageRef}
            className="w-full h-150 rounded-2xl sticky top-20 bg-cover bg-center"
          >
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
