'use client'
import React from "react";
import {
  Save,
  Upload,
  Plus,
  Trash2,
  GripVertical,
  Palette,
  ExternalLink,
  PencilIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Featured from "@/components/website-editor/Featured";
import HowItWorks from "../../../components/website-editor/HowItWorks";
import Testimonial from "@/components/website-editor/Testimonial";
import Contact from "@/components/website-editor/Contact";
import Appearance from "@/components/website-editor/Appearance";

const whyChooseUs = [ 'Verified property listings',
    'Expert local knowledge',
    'Personalized service',
    'Transparent pricing',
];

const Pages = () => {
  const [headline, setHeadline] = React.useState("Propaly Real Estate");
  const [subheadline, setSubheadline] = React.useState("Looking for your dream home?");
  const [ctaText, setCtaText] = React.useState("View Listings");
  const [ctaLink, setCtaLink] = React.useState("/listings");
  return (
    <section className="mx-auto space-y-6 mb-10">
      {/* Top Bar */}
      <div className="bg-white border-b border-[var(--border-color)] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[20px] font-medium text-[var(--text-primary)]">
              Website Editor
            </h1>
            <p className="text-[var(--text-secondary)] text-[14px]">
              Customize your public website content
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://propaly.netify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] text-[14px] hover:bg-neutral-50 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Site
            </a>
            <button className="px-4 py-2 border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] text-[14px] font-medium hover:bg-neutral-50 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            <button className="px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white rounded-lg text-[14px] font-medium shadow-[0px_2px_2px_0px_inset_rgba(255,255,255,0.4)] border border-[#e46323] flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Choose Template & Publish
            </button>
          </div>
        </div>
      </div>

      <div className="w-full p-4 lg:w-[1200px] mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hero section Editor */}
          <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
            <h2 className="text-lg font-medium text-[18px] mb-5">
              Hero Section
            </h2>
            <div className="space-y-4 pb-6">
              <div>
                <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
                  Headline
                </Label>
                <Input
                 value ={headline}
                 onChange = {(e) => setHeadline(e.target.value)}
                  type="text"
                  placeholder="Enter your headline"
                  className="w-full h-10 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] focus-visible:border-transparent"
                />
              </div>

              <div>
                <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
                  Subheadline
                </Label>
                <Textarea
                  placeholder="Enter your subheadline"
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] focus-visible:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
                    CTA Button Text
                  </Label>
                  <Input
                  value={ctaText}
                  onChange ={(e) => setCtaText(e.target.value)}
                    type="text"
                    placeholder="Enter button text"
                    className="w-full h-10 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#fb6d26] focus-visible:border-transparent"
                  />
                </div>
                <div>
                  <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
                    CTA Link
                  </Label>

                  <Input
                  value={ctaLink}
                  onChange={(e) => setCtaLink(e.target.value)}
                    type="text"
                    placeholder="Enter link"
                    className="w-full h-10 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] focus-visible:border-transparent"
                  />
                </div>
              </div>

              <div>
      <Label
        htmlFor="background-image"
        className="block text-[var(--text-primary)] text-[14px] font-medium mb-2"
      >
        Background Image
      </Label>

      {/* Hidden File Input */}
      <Input
        id="background-image"
        type="file"
        accept="image/*"
        className="hidden"

      />

      {/* Styled Trigger Label */}
      <Label
        htmlFor="background-image"
        className="cursor-pointer mt-2 w-full px-4 py-10 border-2 border-dashed border-[var(--border-color)] rounded-lg hover:border-[var(--primary-color)] hover:bg-[#fcede8] transition-colors flex flex-col items-center gap-2"
      >
        <Upload className="w-6 h-6 text-[var(--text-secondary)]" />
        <span className="text-[var(--text-secondary)] text-[14px]">
          Upload background image
        </span>
      </Label>
    </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--border-color)] rounded-xl p-6">
  <h3 className="text-[var(--text-primary)] font-medium text-[18px mb-4">
    About Section
  </h3>

  <div className="space-y-4">
    {/* Title */}
    <div>
      <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Title
      </Label>
      <Input
        type="text"
        placeholder="Enter about title"
        className="w-full h-10 px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] 
          focus-visible:border-transparent"
      />
    </div>

    {/* Description */}
    <div>
      <Label className="block text-[var(--text-primary)] text-[14px] font-medium mb-2">
        Description
      </Label>
      <Textarea
        placeholder="Enter description"
        rows={3}
        className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg text-[14px] 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] 
          focus-visible:border-transparent resize-none"
      />
    </div>

    {/* About Image */}
    <div>
      <Label
        htmlFor="about-image"
        className="block text-[var(--text-primary)] text-[14px] font-medium mb-2"
      >
        About Image
      </Label>

      {/* Hidden File Input */}
      <Input id="about-image" type="file" accept="image/*" className="hidden" />

      {/* Styled Upload Trigger */}
      <Label
        htmlFor="about-image"
        className="cursor-pointer mt-2 w-full px-4 py-10 border-2 border-dashed border-[var(--border-color)] 
          rounded-lg hover:border-[var(--primary-color)] hover:bg-[#fcede8] transition-colors 
          flex flex-col items-center gap-2"
      >
        <Upload className="w-6 h-6 text-[var(--text-secondary)]" />
        <span className="text-[var(--text-secondary)] text-[14px]">
          Upload image
        </span>
      </Label>
    </div>

    {/* Why Choose Us */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label className="block text-[var(--text-primary)] text-[14px] font-medium">
          Why Choose Us
        </Label>
        <button

          className="text-[var(--primary-color)] text-[14px] flex items-center gap-1 
            hover:text-[#e46323]"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      <div className="space-y-2">
        {whyChooseUs.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <GripVertical className="w-4 h-4 text-[var(--text-secondary)] shrink-0 cursor-move" />
            <Input
              type="text"
              value={item}
              placeholder="Enter reason"
              className="flex-1 h-10 px-3 py-2 border border-[var(--border-color)] rounded-lg text-[14px] 
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] 
                focus-visible:border-transparent"
            />
            <button
              className="p-2 hover:bg-red-50 rounded"
            >
              <Trash2 className="w-4 h-4 text-[#f33f54]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
          <Featured />
        </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HowItWorks />
            <Testimonial />
          </div>
        
        <div className="flex justify-between items-center p-8">
          {/* Articles and Blog Posts Section Editor */}
          <h2 className="text-xl font-semibold text-[var(--text-primary)] w-[300px]">Do you want to share a story, blog, or article?</h2>
           <button className="px-4 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white rounded-lg text-[14px] font-medium shadow-[0px_2px_2px_0px_inset_rgba(255,255,255,0.4)] border border-[#e46323] flex items-center gap-2">
              <PencilIcon className="w-4 h-4" />
              Write an Article
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Contact />
            <Appearance />
          </div>
      </div>
    </section>
  );
};

export default Pages;
