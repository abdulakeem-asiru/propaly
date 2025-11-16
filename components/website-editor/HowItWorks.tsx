'use client'
import { Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const HowItWorks = () => {
        // How It Works State
    const [howItWorks, setHowItWorks] = useState([
    { id: 1, title: 'Contact Us', description: 'Reach out to our team to discuss your property needs.' },
    { id: 2, title: 'Property Search', description: 'We search for properties that match your criteria.' },
    { id: 3, title: 'Property Inspection', description: 'Our team inspects the property to ensure it meets your expectations.' },
  ]);

       const addHowItWorks = () => {
    const newId = Math.max(...howItWorks.map(s => s.id)) + 1;
    setHowItWorks([...howItWorks, { id: newId, title: '', description: '' }]);
  };

  const removeHowItWorks = (id: number) => {
    setHowItWorks(howItWorks.filter(s => s.id !== id));
  };

  const updateHowItWorks = (id: number, field: string, value: string) => {
    setHowItWorks(howItWorks.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };
  return (
              <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[var(--text-primary)] font-medium text-[18px]"> How It Works</h3>
                  <button
                    onClick={addHowItWorks}
                    className="text-[var(--primary-color)] text-[14px] flex items-center gap-1 hover:text-[var(--primary-hover)]"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {howItWorks.map((step, index) => (
                    <div key={step.id} className="bg-[#f9f9f9] border border-[var(--border-color)] rounded-[12px] p-4">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1">
                          <div className="bg-neutral-950 box-border flex items-center justify-center p-2 rounded-full w-[28px] h-[28px]">
                            <span className="text-white text-[12px] font-medium">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            placeholder="Title"
                            value={step.title}
                            onChange={(e) => updateHowItWorks(step.id, 'title', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[var(--border-color)] rounded-lg text-[14px] font-medium focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
                          />
                          <textarea
                            placeholder="Description"
                            value={step.description}
                            onChange={(e) => updateHowItWorks(step.id, 'description', e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 bg-white border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-secondary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                          />
                        </div>
                        <button
                          onClick={() => removeHowItWorks(step.id)}
                          className="p-2 hover:bg-red-50 rounded shrink-0 mt-1"
                        >
                          <Trash2 className="w-4 h-4 text-[#f33f54]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default HowItWorks
