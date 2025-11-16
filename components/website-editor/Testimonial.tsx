'use client'
import { Plus, Trash2, Upload } from 'lucide-react';
import React, { useState } from 'react'

const Testimonial = () => {
    
      // Testimonials State
  const [testimonials, setTestimonials] = useState([
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Estate Developer',
    message: 'Propaly helped us find the perfect family home in Lekki. Professional and reliable!',
    image: '',
    showOnHomepage: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Airbnb Manager',
    message: 'Outstanding service! The attention to detail and local expertise made all the difference.',
    image: '',
    showOnHomepage: true
  },
  {
    id: 3,
    name: 'Amina Ibrahim',
    role: 'Estate Agent',
    message: 'I highly recommend Propaly for anyone looking for luxury properties in Lagos.',
    image: '',
    showOnHomepage: true
  },
]);

  const addTestimonial = () => {
    const newId = Math.max(...testimonials.map(t => t.id)) + 1;
    setTestimonials([...testimonials, { id: newId, name: '', message: '', image: '', role: '', showOnHomepage: true }]);
  };

  const removeTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const updateTestimonial = (id: number, field: string, value: any) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  return (
    <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
  <div className="flex items-center justify-between mb-5">
    <h3 className="text-[var(--text-primary)] font-medium text-[18px]">
      💬 Testimonials
    </h3>

    <button
      onClick={addTestimonial}
      className="text-[var(--primary-color)] text-[14px] flex items-center gap-1 hover:text-[var(--primary-hover)]"
    >
      <Plus className="w-4 h-4" />
      Add
    </button>
  </div>

  <div className="space-y-4 max-h-[500px] overflow-y-auto">
    {testimonials.map((testimonial) => (
      <div
        key={testimonial.id}
        className="bg-[var(--card-bg)] rounded-[8px] p-4 border border-[var(--border-color)]"
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <div className="w-[60px] h-[60px] rounded-[8px] bg-neutral-200 border-1
            
            border-white flex items-center justify-center overflow-hidden">
              <Upload className="w-5 h-5 text-[var(--text-secondary)]" />
            </div>
          </div>

          <div className="flex-1 space-y-3">

            {/* Name + delete */}
            <div className="flex items-center gap-1
            
            ">
              <input
                type="text"
                placeholder="Name"
                value={testimonial.name}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "name", e.target.value)
                }
                className="flex-1 px-3 py-1
                
                bg-white border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1
                
                 focus:ring-[var(--primary-color)] focus:border-transparent"
              />

              <button
                onClick={() => removeTestimonial(testimonial.id)}
                className="p-1
                
                hover:bg-red-50 rounded shrink-0"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>

            {/* Role */}
            <input
              type="text"
              placeholder="Role/Title (e.g., New Homeowner)"
              value={testimonial.role}
              onChange={(e) =>
                updateTestimonial(testimonial.id, "role", e.target.value)
              }
              className="w-full px-3 py-1
              
              bg-white border border-[var(--border-color)] rounded-lg text-[13px] italic text-[var(--text-tertiary)] focus:outline-none focus:ring-1
              
               focus:ring-[var(--primary-color)] focus:border-transparent"
            />

            {/* Message */}
            <textarea
              placeholder="Testimonial message"
              value={testimonial.message}
              onChange={(e) =>
                updateTestimonial(testimonial.id, "message", e.target.value)
              }
              rows={1


              }
              className="w-full px-3 py-1
              
              bg-white border border-[var(--border-color)] rounded-lg text-[14px] text-[var(--text-secondary)] focus:outline-none focus:ring-1
              
               focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
            />

            {/* Checkbox */}
            <label className="flex items-center gap-1
            
            cursor-pointer">
              <input
                type="checkbox"
                checked={testimonial.showOnHomepage}
                onChange={(e) =>
                  updateTestimonial(testimonial.id, "showOnHomepage", e.target.checked)
                }
                className="w-4 h-4 accent-[var(--primary-color)]"
              />
              <span className="text-[var(--text-secondary)] text-[13px]">
                Show on homepage
              </span>
            </label>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Testimonial
