import CardWrapper from '@/components/dashboard/Card'
import Chart from '@/components/dashboard/Chart'
import RecentActivities from '@/components/dashboard/RecentActivities'
import { ArrowRight, Eye, FileText, Plus } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <section className='p-8 mx-auto space-y-6'>
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

     {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
    <Chart />

    <RecentActivities />
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
        <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 border border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] hover:bg-[#fcede8] transition-all group">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[var(--text-primary)] font-medium text-[14px]">Add New Listing</p>
              <p className="text-[var(--text-secondary)] text-[12px]">Create a property listing</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] ml-auto group-hover:text-[var(--primary-color)]" />
          </button>

          <button className="flex items-center gap-3 p-4 border border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] hover:bg-[#fcede8] transition-all group">
            <div className="w-10 h-10 bg-[#13a557] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[var(--text-primary)] font-medium text-[14px]">Create Flyer</p>
              <p className="text-[var(--text-secondary)] text-[12px]">Generate marketing materials</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] ml-auto group-hover:text-[var(--primary-color)]" />
          </button>

          <button className="flex items-center gap-3 p-4 border border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] hover:bg-[#fcede8] transition-all group">
            <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[var(--text-primary)] font-medium text-[14px]">View Website</p>
              <p className="text-[var(--text-secondary)] text-[12px]">Check your live website</p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] ml-auto group-hover:text-[var(--primary-color)]" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page
