import React from 'react'
import Logo from '../shared/Logo'
import {NAV_MENU} from '@/lib/constant'
import {  ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="max-w-[850px] h-18 border border-white rounded-md shadow-md bg-white mx-auto flex items-center justify-between mt-10 py-6 px-3 sticky top-0 z-50 backdrop-blur-md">
        <Logo />
      <NavMenu />
          <button 
          className="bg-black  text-white px-4 py-3 rounded-lg flex items-center gap-2  transition-colors"
        >
          <span className="font-medium text-[16px]">Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
    </header>
  )
}

export default Navbar

const NavMenu = () => {
  return (
    <nav>
        <ul className="flex gap-8 text-base font-medium">
          {NAV_MENU.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}