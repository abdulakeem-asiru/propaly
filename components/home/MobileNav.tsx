import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"
// import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "../shared/Logo"
import { NAV_MENU } from "@/lib/constant"
import { WaitList } from "../waitlist/WaitlistModal"


export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><Logo /></SheetTitle>

        </SheetHeader>
        <NavMenu />
        <SheetFooter>     
          {/* <Link href="/auth/login">
          <button 
          className="bg-black w-full inline-flex text-white px-4 py-3 rounded-lg justify-center items-center gap-2  transition-colors"
          >
          <span className="font-medium text-[16px]">Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        </Link> */}
        <WaitList>
             <button 
          className="bg-black w-full inline-flex text-white px-4 py-3 rounded-lg justify-center items-center gap-2  transition-colors"
          >
          <span className="font-medium text-[16px]">Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        </WaitList>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const NavMenu = () => {
  return (
    <nav>
        <ul className="md:flex-row flex-col p-4 flex gap-12 text-base font-medium">
          {NAV_MENU.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}