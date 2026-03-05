"use client";

import { Button } from "@/components/ui/button";
import { IIngredient } from "@/interfaces/IIngredients";
import { useEffect, useState } from "react";
import DynamicRecipe from "./DynamicRecipe";

interface DynamicRecipesProps {
  ingredients: IIngredient[];
}

interface ISelectedIngredient {
  id: string;
  quantity: number;
}

export default function DynamicRecipes({ ingredients }: DynamicRecipesProps) {
  const [ingredientsOptions, setIngredientsOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [selectedIngredients, setSelectedIngredients] = useState<
    ISelectedIngredient[]
  >([]);

  const [count, setCount] = useState(1);

  function updateSelected(ingredientId: string, quantity: number) {
    setSelectedIngredients((prev) => {
      const existing = prev.find((item) => item.id === ingredientId);
      if (existing) {
        return prev.map((item) =>
          item.id === ingredientId ? { ...item, quantity } : item,
        );
      } else {
        return [...prev, { id: ingredientId, quantity }];
      }
    });
  }

  function addByMaxCount() {
    const ingredientsLength = ingredients.length;
    if (count < ingredientsLength) {
      setCount(count + 1);
    }
  }

  function deleteByIndex(index: number) {
    setSelectedIngredients((prev) => prev.filter((_, i) => i !== index));
    setCount(count - 1);
  }

  useEffect(() => {
    const options = ingredients.map((ingredient) => ({
      label: ingredient.name,
      value: ingredient.id || "1",
    }));
    setIngredientsOptions(options);
  }, []);

  return (
    <div className="mx-auto mt-6 w-full pb-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight">Dynamic Recipes</h2>
      <div className="flex flex-col gap-4">
        {ingredientsOptions &&
          Array.from({ length: count }).map((_, index) => (
            <div key={index} className="flex gap-2">
              <DynamicRecipe
                ingredients={ingredientsOptions}
                index={index}
                onUpdate={updateSelected}
                onDelete={deleteByIndex}
              />
            </div>
          ))}
      </div>
      {ingredients.length > count && (
        <Button onClick={() => addByMaxCount()} className="mt-4">
          +
        </Button>
      )}
    </div>
  );
}
