"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Property = {
  id: string
  name: string
  views: number
  inquiries: number
  conversion: string // e.g., "75%"
}

export const Columns: ColumnDef<{
  name: string
  views: number
  inquiries: number
  conversion: string
}, unknown>[] = [
  {
    id: "index",
    header: "S/N",
    cell: ({ row }) => row.index + 1,
    enableSorting: false
  },
  {
    accessorKey: "name",
    header: "Property Name",
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
    enableGlobalFilter: true
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => <span>{row.getValue("views")}</span>,
    enableGlobalFilter: true
  },
  {
    accessorKey: "inquiries",
    header: "Inquiries",
    cell: ({ row }) => <span>{row.getValue("inquiries")}</span>,
    enableGlobalFilter: true
  },
  {
    accessorKey: "conversion",
    header: "Conversion Rate",
    cell: ({ row }) => {
      const rate = Number((row.getValue("conversion") as string).replace("%", ""))
      return (
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-neutral-100 rounded-full h-2 max-w-[100px]">
            <div
              className={`${
                rate < 50
                  ? "bg-[var(--warning-color)]"
                  : "bg-[var(--success-color)]"
              } h-2 rounded-full`}
              style={{ width: `${rate}%` }}
            />
          </div>
          <span className="text-[var(--text-primary)] text-[14px] font-medium">
            {row.getValue("conversion")}
          </span>
        </div>
      )
    },
    enableGlobalFilter: true
  }
]
