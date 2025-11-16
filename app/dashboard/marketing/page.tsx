import React from 'react'

const page = () => {
  return (
   <div className="w-full h-screen bg-white border border-[var(--border-color)] rounded-xl flex flex-col items-center justify-center text-center p-6">
  
  <div className="w-14 h-14 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-4">
    <svg
      className="w-8 h-8 text-[var(--primary-color)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6l3 3m6-3A9 9 0 1112 3a9 9 0 0112 9z"
      />
    </svg>
  </div>

  <h2 className="text-[20px] font-semibold text-[var(--text-primary)] mb-2">
    Coming Soon
  </h2>

  <p className="text-[14px] text-[var(--text-secondary)] max-w-sm">
    This feature is currently under development. We’re working hard to bring it to you soon.
  </p>

</div>

  )
}

export default page
