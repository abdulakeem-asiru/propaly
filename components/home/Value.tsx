'use client';
import {
  Crown,
  BarChart3,
  Settings2,
  Zap,
  Smile,
  ShieldCheck
} from "lucide-react";
import useFadeInUp from "@/hooks/animation/useFadeInUp";
import useStaggerEffect from "@/hooks/animation/useStaggerEffect";
import { use } from "react";
export const OurValues = [
  {
    title: "Expert Team",
    description:
      "An expert team ready to tackle your challenges with innovative solutions and proven strategies.",
    icon: Crown,
  },
  {
    title: "Fast and Scalable",
    description:
      "Scale your business effortlessly with our SaaS, designed to grow alongside your evolving needs.",
    icon: BarChart3,
  },
  {
    title: "Customizable for You",
    description:
      "Customize the platform to perfectly align with your business's unique requirements and goals.",
    icon: Settings2,
  },
  {
    title: "Maximum Efficiency",
    description:
      "Maximize efficiency with integrated solutions that eliminate bottlenecks, saving time and costs.",
    icon: Zap,
  },
  {
    title: "User Friendly",
    description:
      "A simple and accessible interface for users of all skill levels, making it easy to find what you need.",
    icon: Smile,
  },
  {
    title: "Security You Can Trust",
    description:
      "Protect sensitive data with industry-leading security to prevent unauthorized breaches.",
    icon: ShieldCheck,
  },
];


const Value = () =>{
    useStaggerEffect(".staggered-cards > div");
    const fadeInUpRef = useFadeInUp()
    return(
<div className="flex flex-col gap-12 items-center" ref={fadeInUpRef}>
             <h2 className="text-4xl text-black/80 font-semibold max-w-[600px] text-center leading-10">
       Everything You Need to Convert, <span className="text-(--primary-color)">Retain</span>, and Grow Customers
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 staggered-cards">
        {OurValues.map(({ title, description, icon: Icon }) => (
          <div key={title} className="w-sm h-60 border border-(--primary-color)/30 rounded-2xl p-6 flex flex-col gap-2">
            <Icon className="w-10 h-10 border border-(--primary-color)/20 p-2 rounded-full text-(--primary-color) mb-2 " />
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-base font-normal text-(--text-secondary)">{description}</p>
          </div>
        ))}
      
      </div>
      <div className="h-20"></div>
        </div>
    )
} 

export default Value;