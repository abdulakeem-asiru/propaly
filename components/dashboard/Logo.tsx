import React from 'react'
import { Building2 } from 'lucide-react'

const Logo = () => {
  return (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-[#e0e0e0]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#fb6d26] to-[#e46323] rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-[20px]">Propaly</span>
        </div>
      </div>
    </>
  )
}

export default Logo
