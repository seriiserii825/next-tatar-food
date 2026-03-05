"use client";
import { Input } from "@/components/ui/input";
import SimpleSelect from "@/components/UI/SimpleSelect";
import { useEffect, useState } from "react";

interface DynamicRecipeProps {
  ingredients: {
    label: string;
    value: string;
  }[];
  index: number;
  onUpdate: (ingredientId: string, quantity: number) => void;
  onDelete: (index: number) => void;
}

export default function DynamicRecipe({
  ingredients,
  index,
  onUpdate,
  onDelete,
}: DynamicRecipeProps) {
  const [selectedIngredient, setSelectedIngredient] = useState<string>("");
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    const num = Number(quantity);
    if (selectedIngredient && num > 0) {
      onUpdate?.(selectedIngredient, num);
    }
  }, [selectedIngredient, quantity]);

  return (
    <div className="flex gap-2">
      <div className="w-48">
        <SimpleSelect
          label="Ingredients"
          placeholder="Select ingredient"
          options={ingredients}
          optionValue={selectedIngredient}
          handleChange={(value) => setSelectedIngredient(value)}
        />
      </div>
      <Input
        className="w-24"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button
        onClick={() => onDelete(index)}
        className="flex items-center border px-4"
      >
        -
      </button>
    </div>
  );
}
