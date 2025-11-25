'use client'
import { useRef } from 'react';
import { Mockup, Mockup2 } from '@/assets/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Contact, Laptop2, Megaphone, Workflow } from 'lucide-react';
import useFadeInUp from '@/hooks/animation/useFadeInUp';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const fadeInUpRef = useFadeInUp();
  const columnRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]); // ref array for all images
  const images = [Mockup, Mockup2, Mockup, Mockup2, Mockup]; 
  const featuresContent = [
    {
      icon : Laptop2,
      title: "Launch a Premium Real Estate Website in Minutes",
      description: "No developers, no coding, no stress. Realtors get a fast, beautiful, conversion-ready website instantly — live in minutes, not weeks."
    },
    { 
        icon: Megaphone,
        title: "All-in-One Property Marketing & Listing Management",
        description: "Upload your listing once and Propaly automatically publishes, formats, and showcases it across your website and marketing channels — beautifully and professionally."},
    {
        icon: Contact,
        title: "Automated Lead Capture & Follow-Up",
        description: "Propaly turns your website into a selling machine: instant WhatsApp inquiries, smart forms, auto-response flows, and follow-up sequences so no lead goes cold."
    },
    { 
        icon: Workflow,
        title: "Automated Workflows Tailored for Realtors",
        description: "From lead capture to closing, automate your entire real estate workflow with customizable pipelines, task reminders, and follow-up sequences designed specifically for realtors."
    },
  ];
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
        start: "30% top",
        onEnter: () => setActiveImage(index),
        onEnterBack: () => setActiveImage(index)
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center" ref={fadeInUpRef}>
      <h2 className="text-4xl text-black/80 font-semibold max-w-[500px] text-center leading-10">
        Powerful Features to Transform <span className="text-(--primary-color)">Realtors</span> Journey
      </h2>

      <div className="grid grid-cols-2 gap-4 w-7xl rounded-lg p-6">
        {/* Sticky Cards */}
        <div ref={columnRef} className="flex flex-col gap-4">
          {featuresContent.map((feature, index) => {
          const Icon = feature.icon;
          return (
          <div
            key={feature.title}
            className={`sticky-card items-center justify-center w-full h-70 bg-white border-2 border-(--primary-color)/10 rounded-2xl sticky top-20 border-b-3`}
            style={{ top: `${80 + 15 * index}px` }}
          >
            <div className='p-8'>
              <Icon className="w-10 h-10 m-4 text-(--primary-color)" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black/80">{feature.title}</h3>
                <p className="text-(--text-secondary)">{feature.description}</p>
              </div>
            </div>
          </div>
          )})}
          {/* <div className="sticky-card w-full h-80 bg-transparent rounded-2xl sticky top-40"></div> */}
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
    </div>
  );
};

export default Features;
