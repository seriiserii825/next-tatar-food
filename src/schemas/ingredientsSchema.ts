import { z } from "zod";

export default function ingredientsSchema() {
  const schema = z.object({
    name: z.string().min(3, "Name is required"),
    category: z.string().min(1, "Category is required"),
    unit: z.string().min(1, "Unit is required"),
    pricePerUnit: z.coerce.number().positive("Price must be greater than 0"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(200, "Description must be less than 200 characters"),
  });
  return schema;
}

const schema = ingredientsSchema();
export type TIngredientsFormData = z.infer<typeof schema>;
