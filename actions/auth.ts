'use server'
import { createClient } from "@/lib/supabase/server";
import { loginFormSchema, LoginFormSchemaType } from "@/schemas/loginSchema"
import { signupFormSchema, signupSchemaType  } from "@/schemas/signupSchema";
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

export async function signUp(values: signupSchemaType) {
    const supabase = await createClient()
      const validatedFields = signupFormSchema.safeParse(values)

 if (!validatedFields.success) {
      return {
        errors: z.treeifyError(validatedFields.error),
        message: 'Missing Fields. Failed to Create customer account.',
      };
    }
// Prepare data for insertion into the database
const {email, password } = validatedFields.data;

try{
const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
   if (error) {
        return {
          error : error.message || "Unable to signUp",
        }
   }
   if (data.user?.identities?.length === 0){
    return {
          error : "User already exist",
        }
    }else{
      return{
        success : true,
      }
   }

  } catch (err) {
    console.error('Signup Error');
    throw err;
  }
}

export async function resendConfirmationEmail(email: string) {
          const supabase = await createClient()
          await supabase.auth.resend({
            type: 'signup',
            email,
          })
        }