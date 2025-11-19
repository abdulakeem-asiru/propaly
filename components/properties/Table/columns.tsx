"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreVertical, ArrowUpDown, Bed } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export type Property = {
  id: string
  property: {
    name: string;
    imageUrl: string;
  };
  location : string;
  size: number
  bedroom : number
  propertiesType: string
  price: number
  PropertyFor: "Rent" | "Sale"
}
interface PropertyCellProp{
  name : string,
  imageUrl : string
}


const PropertyCell = ({ name, imageUrl } : PropertyCellProp) => (
  <div className="flex items-center space-x-2 min-w-[200px]">
    <Image src={imageUrl} alt={name} width={50} height={50} className="rounded-3xl object-fill" />
    <span>{name}</span>
  </div>
);

const Bedroom = ( bedroom : number) => (
  <div className="flex items-center space-x-2 min-w-[50px]"><Bed className="text-[var(--text-secondary)]"/><span>{bedroom}</span>
  </div>
);
export const columns: ColumnDef<Property>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    {
    accessorKey: "property.name",
    header: "Property Name",
    cell: ({ row }) => (
      <PropertyCell
        name={row.original.property.name}
        imageUrl={row.original.property.imageUrl ?? "/logo.png"} // Fallback image if none
      />
    ),
    enableGlobalFilter : true
  },
  {
    accessorKey: "propertiesType",
    header: "Properties Type",
    enableGlobalFilter : true
  },
  {
    accessorKey: "size",
    header: "Size",
    cell :({row}) =>{
      const size : number = row.getValue("size");
return <span>{size} ft</span>
    },
    enableGlobalFilter : true
  },
    {
    accessorKey: "PropertyFor",
      header: () => <div className="text-center">Rent/Sale</div>,
    cell: ({ row }) => {
      const PropertyFor: string = row.getValue("PropertyFor");
      const statusStyle = PropertyFor === "Rent" ? 
      "text-[var(--text-success)] bg-[var(--success)] text-center p-1 rounded-md capitalize border-1 border-[var(--text-success)]" : 
      "text-[var(--text-warning)] bg-[var(--warning)] capitalize text-center p-1 rounded-md border-1 border-[var(--text-warning)]"
 
      return <div className={statusStyle}>{PropertyFor}</div>
    },
    enableGlobalFilter : true 
  },
   {
    accessorKey: "bedroom",
    header: "Bedroom",
    cell: ({ row }) => Bedroom(row.getValue("bedroom")),
    enableGlobalFilter : true
  },
   {
    accessorKey: "location",
    header: "Location",
    enableGlobalFilter : true
  },
  {
    accessorKey: "price",
   header: ({column}) => <div><Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button></div>,

      cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(price) 
      return <div>{formatted}</div>
    },
    enableGlobalFilter : true
  },


   {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View property</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },

  },
]