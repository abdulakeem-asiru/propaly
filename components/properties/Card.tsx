import React from 'react'
import { Users, TrendingUp, TrendingDown, DollarSign, House } from 'lucide-react'


interface CardProps {
  title: string
  value: string
  icon: React.ElementType
  trend: string
  trendType: 'up' | 'down'
}

// Reusable Card component
export const Card = ({ title, value, icon: Icon, trend, trendType }: CardProps) => {
  const isPositive = trendType === 'up'

  return (
    <div className="bg-white border border-[var(--border-color)] rounded-xl p-5 transition-all hover:shadow-sm">
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[var(--text-secondary)] text-[14px] mb-2">{title}</p>
          <p className="text-[var(--text-primary)] font-medium text-[20px]">{value}</p>
        </div>

        <div className="w-10 h-10 bg-white border border-[var(--border-color)] rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-[var(--text-primary)]" />
        </div>
      </div>

      {/* Trend Section */}
      <div className="flex items-center gap-2 pt-3 border-t border-neutral-50">
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-[var(--text-success)]" />
          ) : (
            <TrendingDown className="w-4 h-4 text-[var(--text-danger)]" />
          )}
          <span
            className={`text-[12px] ${
              isPositive ? 'text-[var(--text-success)]' : 'text-[var(--text-danger)]'
            }`}
          >
            {trend}
          </span>
        </div>
        <span className="text-[var(--text-secondary)] text-[12px]">vs last month</span>
      </div>
    </div>
  )
}

export default function CardWrapper() {
  const demoData: CardProps[] = [
    {
      title: 'Total income',
      value: '$15,780',
      icon: DollarSign,
      trend: '8%',
      trendType: 'up',
    },
    {   
      title: 'Total Properties',
      value: '20,430 Units',
      icon: House,
      trend: '12%',
      trendType: 'up',
    },
    {
      title: 'Unit Sold',
      value: '2800 Units',
      icon: DollarSign,
      trend: '5%',
      trendType: 'up',
    },
    {
      title: 'Unit Rented',
      value: '490 Units',
      icon: Users,
      trend: '3%',
      trendType: 'down',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {demoData.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  )
}

