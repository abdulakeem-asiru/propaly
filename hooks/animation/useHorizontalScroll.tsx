import { useGSAP } from '@gsap/react';
import  { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const useHorizontalScroll = () => {

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
      invalidateOnRefresh: true, 
      markers: true,
    },
  });
}, [sectionRef, triggerRef]);
return {sectionRef, triggerRef}
}

export default useHorizontalScroll
