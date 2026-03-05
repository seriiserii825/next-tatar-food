"use server";

import prisma from "@/lib/prisma";
import { TIngredientsFormData } from "@/schemas/ingredientsSchema";

export default async function createIngredient(formData: TIngredientsFormData) {
  await prisma.ingredient.create({
    data: {
      name: formData.name,
      category: formData.category,
      unit: formData.unit,
      pricePerUnit: formData.pricePerUnit,
      description: formData.description,
    },
  });
}

export async function getIngredients() {
  return await prisma.ingredient.findMany({
    orderBy: { updatedAt: "desc" },
  });
}

export async function deleteIngredient(id: string) {
  await prisma.ingredient.delete({
    where: { id },
  });
}

export async function updateIngredient(
  id: string,
  formData: TIngredientsFormData,
) {
  await prisma.ingredient.update({
    where: { id },
    data: {
      name: formData.name,
      category: formData.category,
      unit: formData.unit,
      pricePerUnit: formData.pricePerUnit,
      description: formData.description,
    },
  });
}
