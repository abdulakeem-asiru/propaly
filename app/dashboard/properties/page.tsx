import { Plus } from 'lucide-react'
import React from 'react'
import {columns, Property} from '@/components/properties/Table/columns'
import { DataTable } from '@/components/properties/Table/data-table'
import { PropertyData } from '@/data/PropertyData'
import CardWrapper from '@/components/properties/Card'

const Page = () => {
  const data: Property[] = PropertyData;
  
  return (
    <section className='p-8 max-w-[1440px] mx-auto space-y-6'>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[24px] font-medium text-[var(--text-primary)] mb-1">Property</h1>
          <p className="text-[var(--text-secondary)] text-[14px]">Manage your property listings</p>
        </div>
        <button 
          className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-[0px_2px_2px_0px_inset_rgba(255,255,255,0.4)] border border-[#e46323] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium text-[14px]">Add Property</span>
        </button>
      </div>

      <div>
        <CardWrapper />
      </div>

      <div className="w-full mx-auto py-4 ">
        <DataTable columns={columns} tableData={data} heading="Properties List" filter = ""/>
      </div>
  
    </section>
  )
}

export default Page
