import {z} from 'zod'


export const waitlistSchema = z.object({
    email : z.email(),
      profession: z
    .string()
});

export type WaitlistSchemaType = z.infer<typeof waitlistSchema>;