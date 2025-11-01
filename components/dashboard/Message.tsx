import React from 'react'
import { MessageCircle } from 'lucide-react'

const Message = () => {
  return (
    <>
      {/* Notifications */}
          <button className="relative  rounded-lg transition-colors">
            <MessageCircle size={20} className="text-[var(--text-secondary)]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full border-1 border-[var(--border-color)]" />
          </button>
    </>
  )
}

export default Message
