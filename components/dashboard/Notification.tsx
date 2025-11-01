import React from 'react'
import { Bell } from 'lucide-react' 

const Notification = () => {
  return (
  <>
      {/* Notifications */}
          <button className="relative  rounded-lg transition-colors">
            <Bell size={20} className="text-[var(--text-secondary)]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border-1 border-[var(--border-color)]" />
          </button>
    </>
  )
}

export default Notification
