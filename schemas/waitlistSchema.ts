import {z} from 'zod'


export const waitlistSchema = z.object({
    email : z.email(),
      profession: z.string().min(1, "Profession is required"),
      interest: z.string().optional()
});

export type WaitlistSchemaType = z.infer<typeof waitlistSchema>;