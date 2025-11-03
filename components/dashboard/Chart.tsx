'use client'
import React from 'react'
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const performanceData = [
  { month: 'Jan', views: 1200, inquiries: 450 },
  { month: 'Feb', views: 1900, inquiries: 680 },
  { month: 'Mar', views: 1600, inquiries: 520 },
  { month: 'Apr', views: 2400, inquiries: 890 },
  { month: 'May', views: 2100, inquiries: 750 },
  { month: 'Jun', views: 2800, inquiries: 980 },
];

const Chart = () => {
  return (
        <div className="lg:col-span-2 bg-white border border-[var(--border-color)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-1">Property Performance</h3>
              <p className="text-[var(--text-seondary)] text-[14px]">Views and inquiries over time</p>
            </div>
            <button className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-neutral-50">
              Last 6 months
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#727272" style={{ fontSize: '12px' }} />
              <YAxis stroke="#727272" style={{ fontSize: '12px' }} />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#fb6d26" strokeWidth={2} />
              <Line type="monotone" dataKey="inquiries" stroke="#13a557" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  )
}

export default Chart;
