import * as z from "zod";
export const loginZodSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must not exceed 16 characters"),
});
