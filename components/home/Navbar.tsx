import React from 'react'
import Logo from '../shared/Logo'
import {NAV_MENU} from '@/lib/constant'
import {  ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from './MobileNav'

const Navbar = () => {
  return (
    <header className="max-w-[850px] md:w-full h-18 border border-white rounded-md shadow-md bg-white mx-auto flex items-center justify-between mt-10 py-6 px-3 ">
        <Logo />
    <div className='md:hidden block'>
      <MobileNav/>
    </div>

        <div className='hidden md:block'>       
      <NavMenu/>
        </div>
        <div className='hidden md:block'>      
          <Link href="/auth/login"><button 
          className="bg-black  text-white px-4 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
          >
          <span className="font-medium text-[16px]">Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button></Link>
          </div>
    </header>
  )
}

export default Navbar

const NavMenu = () => {
  return (
    <nav>
        <ul className="md:flex-row flex-col flex gap-8 text-base font-medium">
          {NAV_MENU.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}