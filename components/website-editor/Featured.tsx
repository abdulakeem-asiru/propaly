'use client'
import clsx from "clsx";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { Lekki, Estate } from "@/assets/images";

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    name: "3-Bedroom Duplex in Lekki",
    location: "Lekki, Lagos",
    price: "$450,000",
    status: "Available",
    image: Lekki,
    featured: true,
  },
  {
    id: 2,
    name: "Grand Resort Villa",
    location: "Victoria Island",
    price: "$850,000",
    status: "Available",
    image: Estate,
    featured: true,
  },
  {
    id: 3,
    name: "Modern Penthouse Suite",
    location: "Ikoyi, Lagos",
    price: "$1,200,000",
    status: "Available",
    image: Lekki,
    featured: true,
  },
  {
    id: 4,
    name: "Paris Square Residence",
    location: "Banana Island",
    price: "$2,500,000",
    status: "Sold",
    image: Estate,
    featured: false,
  },
  {
    id: 5,
    name: "Washington Estate",
    location: "Lekki Phase 1",
    price: "$680,000",
    status: "Available",
    image: Lekki,
    featured: false,
  },
  {
    id: 6,
    name: "London Residence",
    location: "Victoria Island",
    price: "$950,000",
    status: "Available",
    image: Estate,
    featured: false,
  },
];


const 
Featured = () => {
  // Featured Properties State
  const [properties, setProperties] = useState(mockProperties);

  const togglePropertyFeatured = (id: number) => {
    setProperties(
      properties.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  return (
    <>
      {/* Featured Properties Section - Full Width */}
      <div className="lg:col-span-2 bg-white border border-[var(--border-color)] rounded-xl p-6">
        <h3 className="text-[var(--text-primary)] font-medium text-[18px] mb-4">
          🏘 Featured Properties
        </h3>
        <p className="text-[var(--text-secondary)] text-[14px] mb-5">
          Select properties to feature on your homepage
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            // Featured Property Cards, clickable to toggle featured status
            <button
              key={property.id}
              aria-pressed={property.featured}
              className={clsx(
                "relative border-2 rounded-xl overflow-hidden cursor-pointer transition-all text-left",
                property.featured
                  ? "border-[var(--primary-color)] bg-[#fcede8]"
                  : "border-[var(--border-color)] hover:border-[var(--primary-color)]"
              )}
              onClick={() => togglePropertyFeatured(property.id)}
            >
              <div className="absolute top-3 right-3 z-10">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg ${
                    property.featured
                      ? "bg-[var(--primary-color)]"
                      : "bg-white border-2 border-[var(--border-color)]"
                  }`}
                >
                  {property.featured && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
              <div className="aspect-video bg-cover bg-center" 
               style={{ backgroundImage: `url(${property.image.src})` }}></div>
              
              <div className="p-4">
                <p className="text-[var(--text-primary)] font-medium text-[14px] mb-1 truncate">
                  {property.name}
                </p>
                <p className="text-[var(--text-secondary)] text-[12px] mb-2">
                  {property.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--primary-color)] font-medium text-[14px]">
                    {property.price}
                  </span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded ${
                      property.status === "Available"
                        ? "bg-[#e7f6ee] text-[#11964f]"
                        : "bg-neutral-100 text-[var(--text-secondary)]"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-5 p-4 bg-[#fcede8] border border-[#fed2bc] rounded-lg">
          <p className="text-[var(--primary-color)] text-[14px]">
            ✓ {properties.filter((p) => p.featured).length} properties selected
            as featured
          </p>
        </div>
      </div>
    </>
  );
};

export default Featured;
