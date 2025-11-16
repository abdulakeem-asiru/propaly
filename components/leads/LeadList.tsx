import { MessageCircle, Phone, Mail, MoreVertical, Calendar } from 'lucide-react';


const leads = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 234 567 890', property: '3-Bed Duplex in Lekki', status: 'new', date: '2 hours ago', priority: 'high' },
  { id: 2, name: 'Michael Chen', email: 'mchen@email.com', phone: '+1 234 567 891', property: 'Grand Resort Villa', status: 'contacted', date: '5 hours ago', priority: 'medium' },
  { id: 3, name: 'Emma Williams', email: 'emma.w@email.com', phone: '+1 234 567 892', property: 'Paris Square', status: 'qualified', date: '1 day ago', priority: 'high' },
  { id: 4, name: 'James Brown', email: 'jbrown@email.com', phone: '+1 234 567 893', property: 'Washington Residence', status: 'contacted', date: '1 day ago', priority: 'low' },
  { id: 5, name: 'Olivia Davis', email: 'olivia.d@email.com', phone: '+1 234 567 894', property: 'London Residence', status: 'new', date: '2 days ago', priority: 'medium' },
  { id: 6, name: 'William Miller', email: 'wmiller@email.com', phone: '+1 234 567 895', property: 'House Residence', status: 'qualified', date: '3 days ago', priority: 'high' },
  { id: 7, name: 'Sophia Garcia', email: 'sophia.g@email.com', phone: '+1 234 567 896', property: 'Canada Residence', status: 'negotiating', date: '4 days ago', priority: 'high' },
  { id: 8, name: 'Liam Martinez', email: 'liam.m@email.com', phone: '+1 234 567 897', property: 'Luxury Penthouse', status: 'contacted', date: '5 days ago', priority: 'medium' },
];

const LeadLists = () =>{
    return(
<div className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden">
  <div className="p-5 border-b border-[var(--border-color)]">
    <h3 className="text-[var(--text-primary)] font-medium text-[18px]">All Leads</h3>
  </div>

  <div className="divide-y divide-[var(--border-color)]">
    {leads.map((lead) => (
      <div key={lead.id} className="p-5 hover:bg-[var(--bg-hover)] transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover)] flex items-center justify-center shrink-0">
              <span className="text-white font-medium text-[16px]">
                {lead.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>

            {/* Lead Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-[var(--text-primary)] font-medium text-[16px]">{lead.name}</h4>
                {lead.status === "new" && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[var(--status-new-bg)] border border-[var(--status-new-border)] text-[var(--status-new-text)] text-[11px] rounded">
                    New
                  </span>
                )}
                {lead.status === "contacted" && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[var(--status-contacted-bg)] border border-[var(--status-contacted-border)] text-[var(--status-contacted-text)] text-[11px] rounded">
                    Contacted
                  </span>
                )}
                {lead.status === "qualified" && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[var(--status-qualified-bg)] border border-[var(--status-qualified-border)] text-[var(--status-qualified-text)] text-[11px] rounded">
                    Qualified
                  </span>
                )}
                {lead.status === "negotiating" && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[var(--status-negotiating-bg)] border border-[var(--status-negotiating-border)] text-[var(--status-negotiating-text)] text-[11px] rounded">
                    Negotiating
                  </span>
                )}
                {lead.priority === "high" && (
                  <span className="text-[var(--text-danger)] text-[11px] font-medium">● High Priority</span>
                )}
              </div>

              <p className="text-[var(--text-secondary)] text-[14px] mb-2">
                Interested in: <span className="text-[var(--text-primary)] font-medium">{lead.property}</span>
              </p>

              <div className="flex items-center gap-4 text-[var(--text-secondary)] text-[13px]">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>{lead.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span>{lead.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{lead.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-4">
            <button className="p-2.5 border border-[var(--border-color)] rounded-lg hover:bg-[var(--status-new-bg)] hover:border-[var(--primary-color)] transition-colors group">
              <MessageCircle className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--primary-color)]" />
            </button>
            <button className="p-2.5 border border-[var(--border-color)] rounded-lg hover:bg-[var(--status-contacted-bg)] hover:border-[var(--primary-hover)] transition-colors group">
              <Phone className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--primary-hover)]" />
            </button>
            <button className="p-2.5 hover:bg-[var(--bg-hover)] rounded-lg">
              <MoreVertical className="w-4 h-4 text-[var(--text-secondary)]" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="border-t border-[var(--border-color)] px-5 py-3 flex items-center justify-between">
    <div className="text-[var(--text-secondary)] text-[14px]">
      Showing 1-8 of 342 leads
    </div>
    <div className="flex items-center gap-2">
      <button className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-[var(--bg-hover)]">
        Previous
      </button>
      <button className="px-3 py-2 bg-[var(--bg-surface)] rounded-lg text-[var(--text-secondary)] text-[14px]">1</button>
      <button className="px-3 py-2 rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-[var(--bg-hover)]">2</button>
      <button className="px-3 py-2 rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-[var(--bg-hover)]">3</button>
      <button className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-[var(--bg-hover)]">
        Next
      </button>
    </div>
  </div>
</div>

    )
}

export default LeadLists;