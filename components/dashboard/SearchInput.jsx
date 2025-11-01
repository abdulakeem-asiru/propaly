import React from 'react'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
       <div className="relative w-[266px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search className="w-4 h-4 text-[#727272]" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white border border-[#e0e0e0] rounded-lg pl-10 pr-16 py-2.5 text-[14px] text-[#2e2e2e] placeholder:text-[#727272] focus:outline-none focus:ring-2 focus:ring-[#fb6d26] focus:border-transparent"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="bg-neutral-50 border border-[#e0e0e0] rounded px-2 py-0.5">
              <span className="text-[12px] text-[#727272] font-medium tracking-wider">⌘K</span>
            </div>
          </div>
        </div>
  )
}

export default SearchInput
