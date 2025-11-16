import { Upload } from 'lucide-react';
import React, {useState} from 'react'

const Appearance = () => {

      // General Settings
  const [brandColor, setBrandColor] = useState('#fb6d26');
  const [accentColor, setAccentColor] = useState('#13a557');
  const [fontFamily, setFontFamily] = useState('Inter');
  return (
    <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
  <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-5">
    🎨 Appearance & Branding
  </h3>

  <div className="space-y-4">

    {/* Site Logo */}
    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Site Logo
      </label>
      <button
        className="w-full px-4 py-8 border-2 border-dashed border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] hover:bg-[var(--accent-bg)] transition-colors flex flex-col items-center gap-2"
      >
        <Upload className="w-6 h-6 text-[var(--text-secondary)]" />
        <span className="text-[var(--text-secondary)] text-[14px]">Upload logo</span>
      </button>
    </div>

    {/* Primary Brand Color */}
    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Primary Brand Color
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={brandColor}
          onChange={(e) => setBrandColor(e.target.value)}
          className="w-14 h-12 border border-[var(--border-color)] rounded-lg cursor-pointer"
        />

        <input
          type="text"
          value={brandColor}
          onChange={(e) => setBrandColor(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
        />
      </div>
    </div>

    {/* Accent Color */}
    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Accent Color
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="w-14 h-12 border border-[var(--border-color)] rounded-lg cursor-pointer"
        />

        <input
          type="text"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
        />
      </div>
    </div>

    {/* Font Family */}
    <div>
      <label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Font Family
      </label>
      <select
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
      >
        <option value="Inter">Inter</option>
        <option value="Poppins">Poppins</option>
        <option value="DM Sans">DM Sans</option>
        <option value="Roboto">Roboto</option>
      </select>
    </div>

  </div>
</div>

  )
}

export default Appearance
