import React from "react"
import Logo from "../shared/Logo"

type FooterSection = {
  title: string
  items: string[]
}

const footerSections: FooterSection[] = [
  {
    title: "Pages",
    items: ["Features", "Benefit", "Testimonial", "Pricing", "FAQ"],
  },
  {
    title: "Features",
    items: ["Collaboration", "Management", "Tracking", "Tasks"],
  },
  {
    title: "Follow us",
    items: ["Dribbble", "Twitter", "Behance", "LinkedIn"],
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex justify-between items-start max-w-5xl mx-auto">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center">
              <Logo />
            </div>

            <p className="text-base text-black max-w-xs">
              Stay informed with product updates and expert insights.
            </p>

            <button className="px-5 py-2 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
              Subscribed
            </button>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-semibold mb-4">
                {section.title}
              </h4>

              <ul className="space-y-3 text-base text-black">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gray-900 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            Obliq © 2024–2028 ·{" "}
            <span className="underline cursor-pointer">
              Manage Cookies
            </span>
          </p>

          <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-md text-sm">
            English
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
