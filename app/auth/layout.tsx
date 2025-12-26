
'use client'
import Image from "next/image"
import Logo from "@/components/shared/Logo"
import Link from "next/link"
import { Mockup } from "@/assets/images"
import { ArrowLeft } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter()

  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
          <header className='flex justify-between items-center'>
            <Link href="/">
             <Logo />
            </Link>
       
        <button className='bg-transparent border-none cursor-pointer inline-flex items-center gap-2
        hover:bg-transparent hover:scale-[1.1] text-sm text-(--text-secondary) shadow-none'
        onClick={() => {router.back()}}><ArrowLeft />Go Back</button>
      </header>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
                    {children}
          </div>
        </div>
      </div>
      <div className="bg-muted hidden relative md:block">
        <Image
          src= {Mockup.src}
         fill
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
