import { z } from "zod";

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ACCEPTED_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
]);

export const onboardingSchema = z.object({
  companyName: z
    .string()
    .min(1, "Company name is required"),

  logo: z
    .instanceof(File)
    .refine(file => ACCEPTED_TYPES.has(file.type), {
      message: "Only PNG, JPG, SVG, WEBP files are allowed",
    })
    .refine(file => file.size <= MAX_FILE_SIZE, {
      message: "Logo must be under 3MB",
    })
    .nullable()
    .optional(),

  profession: z
    .string()
    .min(1, "Profession is required"),

  source: z
    .string()
    .min(1, "Source is required"),
});

export type OnboardingSchemaType = z.infer<typeof onboardingSchema>;