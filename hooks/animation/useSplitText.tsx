'use client'
import { useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const useSplitText = () => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        const el = ref.current;
        const split = new SplitText(el, {type : "words"})
        
         gsap.set(el, { visibility: "visible" });
         gsap.from(split.words, {
            yPercent: '60',
            opacity: 0,
            duration: 0.3,
            ease: 'back.InOut(1.7)',
            stagger: {
              each: 0.08,
              from: "start"
            }
        })
    }, [ref]);

    return ref;
}

export default useSplitText