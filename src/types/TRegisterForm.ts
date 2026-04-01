import { registerZodSchema } from "@/zodSchemas/registerZodSchema";
import * as z from "zod";

// Тип формы на основе Zod
export type TRegisterForm = z.infer<typeof registerZodSchema>;
