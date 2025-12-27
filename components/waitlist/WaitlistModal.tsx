import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactNode } from "react"

export function WaitList({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="space-y-2 mb-4">
            <DialogTitle className="text-xl">Join the Propaly Waiting List</DialogTitle>
            <DialogDescription>
              Get early access to a platform built to improve your credibility,
              capture high-quality leads, and automate your sales process.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="role">Real Estate Profession</Label>
              <select
                id="role"
                name="role"
                className="h-12 w-full rounded-md border border-input  px-3 text-sm"
              >
                <option value="" className="text-(--text-secondary)">Select your role</option>
                <option value="agent">Real Estate Agent</option>
                <option value="developer">Property Developer</option>
                <option value="shortlet-owner">Shortlet Owner</option>
                <option value="agency">Real Estate Agency</option>
              </select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="h-12"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-(--primary-color)">Join Early Access</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
