"use client";

import { getIngredients } from "@/actions/ingredients";
import { createRecipe } from "@/actions/recipes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import useForm from "@/hooks/useForm";
import useQuery from "@/hooks/useQuery";
import { recipeSchema, TRecipeFormData } from "@/schemas/recipeSchema";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import DynamicRecipes from "./DynamicRecipes";

export default function CreateRecipeForm() {
  const { data, loading, error, refetch } = useQuery(getIngredients);

  const { onSubmit, handleChange, form, pending, firstTouch, errors } =
    useForm<TRecipeFormData>(
      recipeSchema(),
      {
        name: "",
        description: "",
        imageUrl: "",
        ingredients: [],
      },
      createRecipe,
      onSuccess,
    );

  function onSuccess() {
    toast.success("Recipe created successfully!");
    form.name = "";
    form.description = "";
    form.imageUrl = "";
    form.ingredients = [];
  }

  function updateDynamicIngredients(
    ingredients: { id: string; quantity: number }[],
  ) {
    form.ingredients = ingredients;
    // setForm((prev) => ({ ...prev, ingredients }));
  }

  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">Create New Recipe</h2>
      <form
        onSubmit={onSubmit}
        className="mb-16 flex flex-col gap-4 rounded bg-white p-4 shadow-md"
      >
        <Input
          type="text"
          className="w-full"
          placeholder="Recipe Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {firstTouch && errors.name && <ShowError error={errors.name[0]} />}
        <Textarea
          placeholder="Type your message here."
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        {firstTouch && errors.description && (
          <ShowError error={errors.description[0]} />
        )}
        <Input
          type="text"
          className="w-full"
          placeholder="Image Url"
          value={form.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
        />
        {firstTouch && errors.imageUrl && (
          <ShowError error={errors.imageUrl[0]} />
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <ShowError error={error} />
        ) : (
          <DynamicRecipes
            updateDynamicIngredients={updateDynamicIngredients}
            ingredients={data || []}
          />
        )}
        <div className="flex">
          <Button disabled={pending} type="submit" variant={"secondary"}>
            {pending && <Spinner data-icon="inline-start" />}
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
