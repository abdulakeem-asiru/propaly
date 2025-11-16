import React from 'react'


interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  subtitleColor?: string;
}



// Reusable Card component
const StatCard = ({ title, value, subtitle, subtitleColor = "#727272" }: StatCardProps) => (
<div className="bg-white border border-[var(--border-color)] rounded-xl p-5">
  <p className="text-[var(--text-secondary)] text-[14px] mb-2">{title}</p>
  <p className="text-[var(--text-primary)] font-medium text-[24px]">{value}</p>
  <p className="text-[12px] mt-2 text-[var(--text-secondary)]">
    {subtitle}
  </p>
</div>

);

export default function LeadsSummary() {
    const statsData = [
  {
    title: "New Leads",
    value: "48",
    subtitle: "+12% from last week",
    subtitleColor: "#13a557",
  },
  {
    title: "In Progress",
    value: "124",
    subtitle: "Active conversations",
  },
  {
    title: "Qualified",
    value: "89",
    subtitle: "+8% conversion rate",
    subtitleColor: "#13a557",
  },
  {
    title: "Converted",
    value: "34",
    subtitle: "This month",
    subtitleColor: "#13a557",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
      {statsData.map((item, i) => (
        <StatCard
          key={i}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          subtitleColor={item.subtitleColor}
        />
      ))}
    </div>
  );
}