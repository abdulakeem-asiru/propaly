"use client";

import {
  LayoutGrid,
  Inbox,
  Calendar,
  FileChartColumn,
  ArrowLeftRight,
  CalendarCheck2,
  ClipboardList,
  Building2,
  User,
  Cog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/* -------------------- NAVIGATION DATA -------------------- */
const mainLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { name: "Properties", href: "/dashboard/properties", icon: Building2 },
  { name: "Leads", href: "/dashboard/leads", icon: CalendarCheck2 },
  { name: "Analytics", href: "/dashboard/analytics", icon: FileChartColumn },
  { name: "Marketing Tools", href: "/dashboard/marketing", icon: ClipboardList },
  { name: "Website Editor", href: "/dashboard/website-editor", icon: ArrowLeftRight },
];

const appLinks = [
  { name: "Inbox", href: "/dashboard/inbox", icon: Inbox },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
];

/* -------------------- NAV SECTION COMPONENT -------------------- */
function NavSection({
  title,
  links,
  pathname,
}: {
  title: string;
  links: { name: string; href: string; icon: any }[];
  pathname: string;
}) {
  return (
    <div className="hidden md:block">
      <p className="text-xs text-(--text-primary) font-medium mb-3 ml-3 uppercase tracking-wide">
        {title}
      </p>

      <nav className="flex flex-col gap-2">
        {links.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                "flex h-10 items-center gap-2 pl-3 text-[16px] transition-colors rounded-md",
                "text-(--text-secondary) hover:bg-(--primary-color)/15 hover:text-(--text-primary)",
                {
                  "text-black bg-(--primary-color)/15 font-medium":
                    isActive,
                }
              )}
            >
              <Icon className="w-6" />
              <p className="hidden md:block">{name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

/* -------------------- MAIN NAVIGATION COMPONENT -------------------- */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-8 p-4">
      <NavSection title="Main" links={mainLinks} pathname={pathname} />
      <NavSection title="Apps" links={appLinks} pathname={pathname} />
    </section>
  );
}

export function NavigationFooter() {
const pathname = usePathname();
  return (
    <div className="border-t border-(--border-color) flex justify-between items-center px-4">
      <Link className={clsx(
          "flex h-10 items-center gap-1 text-[16px] transition-colors rounded-md",
          "text-(--text-secondary) hover:text-(--text-primary)",
                {
                  "text-(--text-primary)/20 font-medium":
                    pathname === "/profile",
                })} href="/profile">
          <User  size={20}/>Profile
        </Link>

        <Cog size={20} className="text-primary" />
      </div>
        )
    }