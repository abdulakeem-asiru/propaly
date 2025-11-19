'use client'
import React from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'


const viewsData = [
  { month: 'Jan', views: 2400, inquiries: 880 },
  { month: 'Feb', views: 3200, inquiries: 1120 },
  { month: 'Mar', views: 2800, inquiries: 950 },
  { month: 'Apr', views: 4100, inquiries: 1450 },
  { month: 'May', views: 3800, inquiries: 1250 },
  { month: 'Jun', views: 4500, inquiries: 1680 },
];

const sourceData = [
  { name: 'Direct', value: 35, color: 'var(--primary-color)' },
  { name: 'Social Media', value: 28, color: 'var(--success-color)' },
  { name: 'Search Engine', value: 22, color: 'var(--info-color)' },
  { name: 'Referral', value: 15, color: 'var(--warning-color)' },
];



const Charts = () => {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
  {/* Views & Inquiries Chart */}
  <div className="lg:col-span-2 bg-white border border-[var(--border-color)] rounded-xl p-6">
    <div className="mb-6">
      <h3 className="text-[var(--text-dark)] font-medium text-[18px] mb-1">
        Views & Inquiries Trend
      </h3>
      <p className="text-[var(--text-secondary)] text-[14px]">
        Monthly performance overview
      </p>
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={viewsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
        <XAxis
          dataKey="month"
          stroke="var(--text-secondary)"
          style={{ fontSize: '12px' }}
        />
        <YAxis
          stroke="var(--text-secondary)"
          style={{ fontSize: '12px' }}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="views"
          fill="var(--warning-color)"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="inquiries"
          fill="var(--success-color)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Inquiry Sources */}
  <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
    <div className="mb-6">
      <h3 className="text-[var(--text-dark)] font-medium text-[18px] mb-1">
        Inquiry Sources
      </h3>
      <p className="text-[var(--text-secondary)] text-[14px]">
        Where leads come from
      </p>
    </div>

    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={sourceData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {sourceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

    <div className="mt-4 space-y-2">
      {sourceData.map((source, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: source.color }}
            />
            <span className="text-[var(--text-dark)] text-[13px]">
              {source.name}
            </span>
          </div>
          <span className="text-[var(--text-secondary)] text-[13px] font-medium">
            {source.value}%
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Charts
