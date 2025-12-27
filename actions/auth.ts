'use server'
import { createClient } from "@/lib/supabase/server";
import { loginFormSchema, LoginFormSchemaType } from "@/schemas/loginSchema"
import { z } from "zod"

export async function login(values: LoginFormSchemaType) {
  const supabase = await createClient()
  const validatedFields = loginFormSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error),
      message: 'Missing Fields. Failed to create customer account.',
    }
  }
  const { email, password } = validatedFields.data
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
        return {
          error : error.message || "Invalid Credentials",
        }
    }
  } catch (err) {
    console.log(err)
    return {
      error : 'An unexpected error occurred. Please try again later.,',
    }
  }
}
