import { AnalyticsCardWrapper } from '@/components/analytics/Card'
import Charts from '@/components/analytics/Charts'
import DataTable from '@/components/analytics/table/data-table'
import {Columns} from '@/components/analytics/table/columns'
import { Download } from 'lucide-react'
import React from 'react'

const tableData = [
  { name: 'Grand Resort Villa', views: 3245, inquiries: 892, conversion: '80.5%' },
  { name: 'Luxury Penthouse', views: 2980, inquiries: 734, conversion: '24.6%' },
  { name: 'Washington Residence', views: 2456, inquiries: 612, conversion: '24.9%' },
  { name: 'Paris Square', views: 2123, inquiries: 548, conversion: '25.8%' },
  { name: 'London Residence', views: 1897, inquiries: 445, conversion: '23.5%' },
];


const page = () => {
  return (
    <section className="p-8 mx-auto space-y-6">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
        <h1 className="text-[24px] font-medium text-[var(--text-primary)] mb-1">Analytics</h1>
        <p className="text-[var(--text-secondary)] text-[14px]">Track your property performance and insights</p>
        </div>
          <button 
          className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-[0px_2px_2px_0px_inset_rgba(255,255,255,0.4)] border border-[#e46323] transition-colors"
        >
          <Download className="w-5 h-5" />
          <span className="font-medium text-[14px]">Export CSV</span>
        </button>
      </div>
    {/* Analytics Card Wrapper */}
      <AnalyticsCardWrapper />
      {/* Charts */}
      <Charts />

      {/* Performance */}
       <div className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden">
        <DataTable columns={Columns} tableData={tableData}/>
       </div>
    </section>
  )
}

export default page
