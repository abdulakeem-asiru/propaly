import React from 'react'
import SearchInput from './SearchInput' 
import Notification from './Notification'
import Message from './Message'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <div className='px-4 md:px-8  flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full'>
      
      {/* Search */}
      <div className='flex-1 min-w-[200px]'>
        <SearchInput />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 justify-end ">
        {/* Notifications */}
        <Message /> 
        <Notification />

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-neutral-50 rounded-lg px-2 sm:px-3 py-2 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#fb6d26] to-[#e46323] flex items-center justify-center">
            <span className="text-white font-medium text-sm sm:text-base">KH</span>
          </div>

          {/* Hide text on small screens */}
          <div className="hidden sm:block">
            <p className="text-[var(--text-primary)] font-medium text-[13px] sm:text-[14px]">Propaly</p>
            <p className="text-[var(--text-secondary)] text-[11px] sm:text-[12px]">hello@propaly.com</p>
          </div>

          <ChevronDown className="hidden sm:block w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-secondary)]" />
        </div>
      </div>
    </div>
  )
}

export default Header
