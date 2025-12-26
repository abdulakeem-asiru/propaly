'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
   const router = useRouter()
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push('/dashboard');
    }
  return (
    <form className={cn("", className)} {...props}  onSubmit={handleSubmit}>
      <FieldGroup className="space-y-2">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Signup to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to Signup to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
         
          </div>
          <Input id="password" type="password" placeholder="Enter your Password" required />
        </Field>
        <Field>
              <Button type="submit" className="bg-(--primary-color)"> Signup </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
          <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#EA4335"
    d="M24 9.5c3.54 0 6.73 1.22 9.23 3.22l6.9-6.9C35.9 2.34 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.24C12.57 13.72 17.87 9.5 24 9.5z"
  />
  <path
    fill="#4285F4"
    d="M46.98 24.55c0-1.63-.15-3.2-.43-4.73H24v9.01h12.93c-.56 2.96-2.23 5.48-4.73 7.18l7.3 5.67c4.27-3.94 6.48-9.74 6.48-17.13z"
  />
  <path
    fill="#FBBC05"
    d="M10.6 28.46a14.5 14.5 0 0 1 0-8.92l-8.04-6.24a24 24 0 0 0 0 21.4l8.04-6.24z"
  />
  <path
    fill="#34A853"
    d="M24 48c6.48 0 11.93-2.13 15.9-5.82l-7.3-5.67c-2.02 1.36-4.62 2.16-8.6 2.16-6.13 0-11.43-4.22-13.4-9.96l-8.04 6.24C6.51 42.62 14.62 48 24 48z"
  />
</svg>

            Signup with Google
          </Button>
          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline underline-offset-4">
              Login 
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
