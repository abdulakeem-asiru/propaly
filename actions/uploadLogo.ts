'use server'
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();

export const uploadLogo = async (
  file: File,
  workspaceId: string
) => {
  const fileExt = file.name.split(".").pop();
  const filePath = `workspaces/${workspaceId}.${fileExt}`;

  const { error } = await supabase.storage
    .from("LOGO")
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type,
      cacheControl: "3600",
    });

  if (error) {
    throw new Error(error.message);
  }

  return filePath;
};


export const getPublicLogoUrl = async(filePath: string) => {
  const { data } = supabase.storage
    .from("LOGO")
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const saveLogoToDb = async (
  workspaceId: string,
  logoUrl: string
) => {
  const { error } = await supabase
    .from("workspaces")
    .update({ logo: logoUrl })
    .eq("id", workspaceId);

  if (error) {
    throw new Error(error.message);
  }
};


