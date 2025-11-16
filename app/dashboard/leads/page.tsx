import React from 'react'
import LeadsSummary from '@/components/leads/Card';
import { Filter } from 'lucide-react';
import LeadLists from '@/components/leads/LeadList';

const Page = () => {
  return (
      <div className="p-8 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
  <div>
    <h1 className="text-[24px] font-medium text-[var(--text-primary)] mb-1">Leads & Inquiries</h1>
    <p className="text-[var(--text-secondary)] text-[14px]">Manage and respond to customer inquiries</p>
  </div>
  <div className="flex items-center gap-3">
    <button className="px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-[14px] flex items-center gap-2 hover:bg-[var(--bg-hover)]">
      <Filter className="w-4 h-4" />
      Filter
    </button>
  </div>
</div>

      <LeadsSummary />
           {/* Leads List */}
           <LeadLists />
      </div>
  )
}

export default Page
