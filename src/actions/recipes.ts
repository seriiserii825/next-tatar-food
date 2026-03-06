"use server";
import prisma from "@/lib/prisma";
import { TRecipeFormData } from "@/schemas/recipeSchema";

export default async function getRecipes() {
  const recipes = await prisma.recipe.findMany({
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
    orderBy: { updatedAt: "desc" },
  });
  return {
    success: true,
    recipes,
  };
}

export async function createRecipe(formData: TRecipeFormData) {
  const recipe = await prisma.recipe.create({
    data: {
      name: formData.name,
      description: formData.description,
      imageUrl: formData.imageUrl,
      ingredients: {
        create: formData.ingredients.map((item) => ({
          ingredientId: item.id,
          quantity: item.quantity,
        })),
      },
    },
  });
  return {
    success: true,
    recipe,
  };
}
