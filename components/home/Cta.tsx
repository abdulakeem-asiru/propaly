'use client'
import React from 'react'
import Logo from '../shared/Logo'
import { ArrowRightSquare } from 'lucide-react'
import useFadeInUp from '@/hooks/animation/useFadeInUp'

const Cta = () => {
    const fadeInUp = useFadeInUp()

  return (
    <div className='max-w-7xl bg-linear-180 from-[#FFC2A9] relative to-[#FF6347] h-100 rounded-3xl flex flex-col justify-center items-center mx-auto my-20 px-4' ref={fadeInUp}>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <Logo className='text-white'/>
        <h2 className="text-3xl max-w-120 text-center font-bold text-white mt-4">Ready to Grow Your Business Smarter?</h2>
        <button className='backdrop-blur-2xl bg-linear-to-b from-[#FFC2A9] via-[#FF6347]/20 to-[#FFC2A9] inline-flex gap-2 text-lg text-white font-medium border-y justify-center border-white rounded-full p-3 md:w-full lg:w-[calc(100%-200px)]  '>Get CRM Access <ArrowRightSquare /></button>

      </div>
    </div>
  )
}

export default Cta
