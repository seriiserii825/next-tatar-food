import { z } from "zod";

export default function loginSchema() {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });
  return schema;
}

const schema = loginSchema();
export type TLoginFormData = z.infer<typeof schema>;
