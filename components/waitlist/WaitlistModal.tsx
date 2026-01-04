'use client'
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
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { waitlistSchema, WaitlistSchemaType } from "@/schemas/waitlistSchema"
import { ReactNode, useState} from "react"
import { FormProvider, useForm } from "react-hook-form"
import toast, {Toaster} from "react-hot-toast";

export function WaitList({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<WaitlistSchemaType>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: '',
      profession: '',
    },
  });

  const onSubmit = async(data: WaitlistSchemaType) => {
    setIsLoading(true);
    try{
       const res = await fetch('/api/waitlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
        toast.success("Successfully Joined The Waitlist!");
      } else {
        toast.error("Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <FormProvider  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader className="space-y-2 mb-4">
            <DialogTitle className="text-xl">Join the Propaly Waiting List</DialogTitle>
            <DialogDescription>
              Get early access to a platform built to improve your credibility,
              capture high-quality leads, and automate your sales process.
            </DialogDescription>
          </DialogHeader>
     
          <div className="grid gap-3">
            <div className="grid gap-3">
              <Label htmlFor="role">Real Estate Profession</Label>
              <select
                id="role"
                className="h-12 w-full rounded-md border border-input  px-3 text-sm"
                {...form.register("profession")}
              >
                <option value="" className="text-(--text-secondary)">Select your role</option>
                <option value="Real Estate Agent">Real Estate Agent</option>
                <option value="Property Developer">Property Developer</option>
                <option value="Shortlet Owner">Shortlet Owner</option>
                <option value="Real Estate Agency">Real Estate Agency</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <p className="text-sm text-red-600">{form.formState.errors.profession?.message}</p>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="h-12"
                {...form.register("email")}
              />
            <p className="text-sm text-red-600">{form.formState.errors.email?.message}</p>
            </div>
          </div>              
            <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className={`bg-(--primary-color) ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}  `}>
              Join Early Access</Button>
          </DialogFooter>
            </form>
      </FormProvider>
        </DialogContent>
      <Toaster />
    </Dialog>
  )
}
