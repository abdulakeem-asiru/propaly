import React from 'react'

const recentActivities = [
  { id: 1, type: 'inquiry', message: 'New inquiry for 3-Bed Duplex in Lekki', time: '5 mins ago', property: 'Lekki Duplex' },
  { id: 2, type: 'listing', message: 'Your listing "Grand Resort Villa" got 15 new views', time: '1 hour ago', property: 'Grand Resort Villa' },
  { id: 3, type: 'inspection', message: 'Inspection booked for Paris Square', time: '2 hours ago', property: 'Paris Square' },
  { id: 4, type: 'inquiry', message: 'Follow-up needed for Washington Residence', time: '3 hours ago', property: 'Washington Residence' },
  { id: 5, type: 'listing', message: 'New listing "London Residence" published', time: '5 hours ago', property: 'London Residence' },
];

const RecentActivities = () => {
  return (
           <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
          <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="pb-4 border-b border-neutral-50 last:border-0 last:pb-0">
                <p className="text-[var(--text-primary)] text-[14px] mb-1">{activity.message}</p>
                <p className="text-[var(--text-secondary)] text-[12px]">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default RecentActivities
