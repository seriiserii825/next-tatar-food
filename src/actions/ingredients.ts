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
