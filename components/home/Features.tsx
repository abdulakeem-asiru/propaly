'use client'
import { useRef } from 'react';
import { Mockup, Mockup2 } from '@/assets/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const columnRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]); // ref array for all images
  const images = [Mockup, Mockup2, Mockup, Mockup2]; 

  useGSAP(() => {
    const cards = columnRef.current?.querySelectorAll(".sticky-card");
    if (!cards || imageRefs.current.length === 0) return;

    // helper to reset images to initial state
    const resetImages = () => {
      imageRefs.current.forEach((img, i) => {
        gsap.set(img, { opacity: i === 0 ? 1 : 0 });
      });
    };

    // helper to set active image by index
    const setActiveImage = (index: number) => {
      imageRefs.current.forEach((img, i) => {
        gsap.to(img, { opacity: i === index ? 1 : 0, duration: 0.5, ease: "power2.out" });
      });
    };

    resetImages();

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "50% top",
        onEnter: () => setActiveImage(index),
        onEnterBack: () => setActiveImage(index)
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl text-black/80 font-semibold max-w-[500px] text-center leading-10">
        Powerful Features to Transform <span className="text-(--primary-color)">Realtors</span> Journey
      </h2>

      <div className="grid grid-cols-2 gap-4 w-7xl rounded-lg p-6">
        {/* Sticky Cards */}
        <div ref={columnRef} className="flex flex-col gap-4">
          <div className="sticky-card w-full h-80 bg-gray-200 border-white rounded-2xl sticky top-20 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-200 border-white rounded-2xl sticky top-25 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-200 border-white rounded-2xl sticky top-30 border-t"></div>
          <div className="sticky-card w-full h-80 bg-gray-200 border-white rounded-2xl sticky top-35 border-t"></div>
          <div className="sticky-card w-full h-80 bg-transparent rounded-2xl sticky top-40"></div>
        </div>

        {/* Image container */}
        <div className="w-full h-150 rounded-2xl sticky top-20 overflow-hidden">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt="Featured Image"
              fill
              style={{ objectFit: "cover", opacity: i === 0 ? 1 : 0 }}
              ref={(el) => { if (el) imageRefs.current[i] = el; }}
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              priority // preload for smoother transitions
            />
          ))}
        </div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-300"></div>
    </div>
  );
};

export default Features;
