"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useStaggerEffect = (
  selector: string,
  options = {}
) => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(selector) as HTMLElement[];
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elements[0], // first element triggers the group
          start: "top 60%",
        },
        ...options,
      }
    );
  }, [selector]);
};

export default useStaggerEffect;