'use client'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const useFadeInUp = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
    useGSAP(() => {
    if (!ref.current) return;
    const el = ref.current;
   
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {y: 0, opacity: 1,
       duration: 1,
       ease: "power2.out",
       scrollTrigger: {
        // markers: true,
        trigger: el,
        start: "top 60%",
        ...options}
        }
    );
  }, [options]);

  return ref;
}

export default useFadeInUp;