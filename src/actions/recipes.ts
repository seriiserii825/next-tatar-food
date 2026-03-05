import prisma from "@/lib/prisma";

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

export async function createRecipe(formData: any) {

}
