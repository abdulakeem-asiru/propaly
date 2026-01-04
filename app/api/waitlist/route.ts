import { createClient } from "@/lib/supabase/server";
import { waitlistSchema } from "@/schemas/waitlistSchema";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(req : Request) {

  try {
    const body = await req.json();
    const supabase = await createClient();
    const validatedFields = waitlistSchema.safeParse(body);
    if (!validatedFields.success) {
      return NextResponse.json(
        { errors: z.treeifyError(validatedFields.error) },
        { status: 400 }
      );
    }

    const { email, profession} = validatedFields.data;
    const { error } = await supabase.from("waitlist").insert({
      profession,
      email
    }).select();

    if (error) {
      return NextResponse.json(
        { error: "Failed to update profile", errorDetail: error.message },
        { status: 500 }
      );
    }

  if(!error){
      return NextResponse.json(
  { success: true },
  { status: 200 }
);
  }

  } catch (error){
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}