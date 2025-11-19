import { TrendingUp, Eye, Users, MousePointer, DollarSign} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string; // the main color (e.g., var(--warning-color))
  change: string;
}

const StatsCard = ({ title, value, icon: Icon, color, change }: StatsCardProps) => {
  return (
    <div className="bg-white border border-[var(--border-color)] rounded-xl p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[var(--text-secondary)] text-[14px] mb-2">{title}</p>
          <p className="text-[var(--text-dark)] font-medium text-[24px]">{value}</p>
        </div>

        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`
          }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-[var(--success-color)]" />
        <span className="text-[var(--success-color)] text-[12px]">{change}</span>
        <span className="text-[var(--text-secondary)] text-[12px]">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;



export function AnalyticsCardWrapper() {
    const statsData : StatsCardProps[] = [
  {
    title: "Total Views",
    value: "23,456",
    icon: Eye,
    color: "var(--primary-color)",
    change: "+18.2%",
  },
  {
    title: "Total Inquiries",
    value: "5,432",
    icon: Users,
    color: "var(--success-color)",
    change: "+12.5%",
  },
  {
    title: "Conversion Rate",
    value: "23.2%",
    icon: MousePointer,
    color: "var(--info-color)",
    change: "+3.1%",
  },
  {
    title: "Avg. Property Price",
    value: "$285K",
    icon: DollarSign,
    color: "var(--warning-color)",
    change: "+5.8%",
  },
];

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {statsData.map((item) => (
            <StatsCard key={item.title} {...item} />
          ))}
        </div>
)}