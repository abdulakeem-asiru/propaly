// import { getPublicLogoUrl, saveLogoToDb, uploadLogo } from "@/actions/uploadLogo";
import { createClient } from "@/lib/supabase/server";
import { onboardingSchema } from "@/schemas/onboardingSchema";
import { NextResponse } from "next/server";
import z from "zod";

export async function POST(req : Request) {
  try {
    const body = await req.json();
    const supabase = await createClient();
    const validatedFields = onboardingSchema.safeParse(body);
    if (!validatedFields.success) {
       console.log(z.treeifyError(validatedFields.error));
      return NextResponse.json(
        { errors: z.treeifyError(validatedFields.error) },
        { status: 400 }
      );
    }
    const { data } = await supabase.auth.getUser();
    const user = data.user;
    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }
  // const { data : workspace } = await supabase.from("workspaces")
  //   .select("id").eq("owner_id", user.id).single();
  //  const workspaceId = workspace?.id;

  //    async function handleLogoUpload() {
//   if (!logo) return;

//   const filePath = await uploadLogo(logo, workspaceId);
//   const logoUrl = await getPublicLogoUrl(filePath);
//   await saveLogoToDb(workspaceId, logoUrl);
// }
    // await handleLogoUpload();

    const { companyName, profession, source } = validatedFields.data;
    const slug = companyName.toLowerCase().replaceAll(/\s+/g, "-");
    const { error } = await supabase.from("workspaces").insert({
      company_name: companyName,
      slug : slug,
      profession,
      source,
      owner_id: user.id,
    }).select();
    if (error) {
      return NextResponse.json(
        { error: "Failed to update profile" },
        { status: 500 }
      );
    }

    return NextResponse.json(
  { success: true },
  { status: 200 }
);
  } catch (error){
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}