'use client'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import {HeroBg, HeroImg}  from "@/assets/images";
import Link from 'next/link';
import useSplitText from '@/hooks/animation/useSplitText';

const Hero = () => {
    const splitTextRef = useSplitText();
  return (
        <div className="bg-cover -mt-30 pt-40 bg-center bg-no-repeat min-h-[600px]
     flex flex-col justify-start items-center"
    style={{ backgroundImage: `url(${HeroBg.src})` }}>
      <div className=" mt-20 flex flex-col gap-6 justify-center items-center px-4">
        <h1 className="font-semibold text-3xl md:text-6xl max-w-[1000px] text-center leading-8 md:leading-18 invisible" ref={splitTextRef}>Real Estate Made Effortless with Intelligent CRM Automation</h1>
        <p className="font-medium text-base max-w-[600px] text-center text-(--text-secondary)">Engage smarter, automate your entire real estate workflow, and grow deeper loyalty, powered by a platform that builds your website,
           markets your properties, and manages your leads.</p>
           <Link href="/dashboard">
          <button 
          className="bg-(--primary-color) shadow-md  text-white px-4 py-3 rounded-lg flex items-center gap-2  transition-colors"
        >
          <span className="font-medium text-[16px]">Explore Propaly</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
        </Link>
      </div>
      <div className="mt-15">
        <Image src={HeroImg} alt="Hero Background" width={1200} height={400} className='shadow-xl rounded-2xl' />
      </div>
      </div> 
  )
}

export default Hero
