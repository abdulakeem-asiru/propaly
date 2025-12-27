'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { loginFormSchema, LoginFormSchemaType } from "@/schemas/loginSchema"
import toast, {Toaster} from "react-hot-toast"
import { login } from "@/actions/auth"
import { useRouter } from "next/navigation"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: LoginFormSchemaType) => {
    setIsLoading(true)

    try {
      const response = await login(values)

      if (response?.error) {
        toast.error(response.error.toString())
        return
      }

      toast.success("Authenticated successfully")
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.error("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormProvider {...form}>
      <form
        className={cn("", className)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FieldGroup className="space-y-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-muted-foreground text-sm">
              Enter your email below to login to your account
            </p>
          </div>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type="email"
              placeholder="m@example.com"
              {...form.register("email")}
            />
            <FieldError>{form.formState.errors.email?.message}</FieldError>
          </Field>

          <Field>
            <div className="flex items-center">
              <FieldLabel>Password</FieldLabel>
              <Link
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="Enter a secure password"
              {...form.register("password")}
            />
            <FieldError>{form.formState.errors.password?.message}</FieldError>
          </Field>

          <Field>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-(--primary-color)"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Field>

          <FieldSeparator>Or continue with</FieldSeparator>

          <Field>
            <Button variant="outline" type="button">
              {/* Google SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              Login with Google
            </Button>

            <FieldDescription className="text-center">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
      <Toaster /> 
    </FormProvider>
  )
}
