'use client'

import { DollarSign, Check, CircleStar } from 'lucide-react'
import Link from 'next/link';

const Pricing = () => {
  return (
    <div className='flex items-center gap-6 flex-col pb-20 p-4' >
      <h3 className='md:text-4xl text-2xl font-semibold max-w-lg text-center leading-8 md:leading-10'>Choose a <span className="text-(--primary-color)">Flexible</span> Plan That Fits Your Needs</h3>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 w-full gap-6 items-center justify-center md:mt-15'>
        <div className='w-full border-(--border-color) border px-4 py-6 rounded-2xl space-y-4'>
            <span className='flex gap-2'><CircleStar className='rounded-full p-1 border 
            text-(--primary-color) border-(--primary-color)' /> Basis Plan</span>
            <span className='flex items-end text-(--primary-color) font-semibold text-3xl'><span className='flex items-center'><DollarSign />14 </span>
            <p className='text-(--text-primary) text-base font-normal'> /month</p></span>
            <p className='text-(--text-primary) max-w-70'>Perfect simple plan for individuals and small teams</p>
                <Link href="/dashboard">
  <button 
    className="bg-black font-medium text-white px-4 py-3 w-80 rounded-lg inline-flex justify-center mt-2 "
  >
    Get Started
  </button>
</Link>
<ul className='flex flex-col gap-2 items-start mt-5'>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
</ul>
        </div>
        <div className='relative rounded-2xl max-md:mt-8'>
     <div className="absolute -top-10 inline-flex justify-center rounded-tl-2xl rounded-tr-2xl left-1/2 -translate-x-1/2 bg-(--primary-color) text-white py-4 -z-10  w-full">
    ⭐ Popular
  </div>
     <div className='w-full border-(--primary-color)/50 border-2 px-4 py-6 rounded-2xl space-y-4 bg-white'>
            <span className='flex gap-2'><CircleStar className='rounded-full p-1 border 
            text-(--primary-color) border-(--primary-color)' /> Premium Plan</span>
            <span className='flex items-end text-(--primary-color) font-semibold text-3xl'><span className='flex items-center'><DollarSign />32 </span>
            <p className='text-(--text-primary) text-base font-normal'> /month</p></span>
            <p className='text-(--text-primary) max-w-70'>Perfect simple plan for individuals and small teams</p>
                <Link href="/dashboard">
  <button 
    className="bg-(--primary-color) font-medium text-white px-4 py-3 w-80 rounded-lg inline-flex justify-center mt-2 "
  >
    Get Started
  </button>
</Link>
<ul className='flex flex-col gap-2 items-start mt-5'>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full bg-(--primary-color)/80 p-1 border text-white border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full bg-(--primary-color)/80 p-1 border text-white border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full bg-(--primary-color)/80 p-1 border text-white border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full bg-(--primary-color)/80 p-1 border text-white border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full bg-(--primary-color)/80 p-1 border text-white border-(--primary-color)'/>Basic task management</li>
</ul>
        </div>
        </div>     
        <div className='w-full border-(--border-color) border px-4 py-6 rounded-2xl space-y-4'>
            <span className='flex gap-2'><CircleStar className='rounded-full p-1 border 
            text-(--primary-color) border-(--primary-color)' /> Enterprise Plan</span>
            <span className='flex items-end text-(--primary-color) font-semibold text-3xl'><span className='flex items-center'><DollarSign />42 </span>
            <p className='text-(--text-primary) text-base font-normal'> /month</p></span>
            <p className='text-(--text-primary) max-w-70'>Perfect simple plan for individuals and small teams</p>
                <Link href="/dashboard">
  <button 
    className="bg-black font-medium text-white px-4 py-3 w-80 rounded-lg inline-flex justify-center mt-2 "
  >
    Get Started
  </button>
</Link>
<ul className='flex flex-col gap-2 items-start mt-5'>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
  <li className='inline-flex justify-center items-center gap-2 text-sm font-normal text-(--text-primary)'><Check className='rounded-full p-1 border text-(--primary-color) border-(--primary-color)'/>Basic task management</li>
</ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
