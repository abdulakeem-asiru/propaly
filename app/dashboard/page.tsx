import CardWrapper from '@/components/dashboard/Card'
import React from 'react'

const Page = () => {
  return (
    <section className='p-8 max-w-[1440px] mx-auto'>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-[var(--text-primary)] mb-2">
          Welcome back, Propaly 👋
        </h1>
        <p className="text-[var(--text-secondary)] text-base">Here&apos;s what&apos;s happening with your properties today.</p>
      </div>

      <div>
        <CardWrapper />
      </div>
    </section>
  )
}

export default Page
