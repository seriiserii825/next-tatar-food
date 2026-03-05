import { z } from "zod";
import ingredientsSchema from "./ingredientsSchema";

export function recipeIngredientSchema() {
  const schema = z.object({
    ingredientId: z.string().min(1, "Ingredient name is required"),
    quantity: z.number().positive("Quantity must be a positive number"),
    ingredient: ingredientsSchema(),
  });
  return schema;
}

const recipeIngredientSchemaData = recipeIngredientSchema();

export type TRecipeIngredient = z.infer<typeof recipeIngredientSchemaData>;

export function recipeSchema() {
  const schema = z.object({
    name: z.string().min(3, "Name is required"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(200, "Description must be less than 200 characters"),
    imageUrl: z.string().url("Image URL must be a valid URL").optional(),
    ingredients: z
      .array(recipeIngredientSchema())
      .min(1, "At least one ingredient is required"),
  });
  return schema;
}

const schema = recipeSchema();
export type TRecipeFormData = z.infer<typeof schema>;
