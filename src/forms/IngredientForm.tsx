"use client";

import createIngredient from "@/actions/ingredients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import SimpleSelect from "@/components/UI/SimpleSelect";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select_options";
import useForm from "@/hooks/useForm";
import ingredientsSchema, {
  TIngredientsFormData,
} from "@/schemas/ingredientsSchema";
import toast from "react-hot-toast";

export default function IngredientForm() {
  const { onSubmit, handleChange, form, pending, firstTouch, errors } =
    useForm<TIngredientsFormData>(
      ingredientsSchema(),
      { name: "", category: "", unit: "", pricePerUnit: 0, description: "" },
      createIngredient,
      onSuccess,
    );

  function onSuccess() {
    toast.success("Ingredient created successfully!");
    form.name = "";
    form.category = "";
    form.unit = "";
    form.pricePerUnit = 0;
    form.description = "";
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded bg-white p-4 shadow-md"
    >
      <Input
        type="text"
        className="w-full"
        placeholder="Ingredient Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {firstTouch && errors.name && <ShowError error={errors.name[0]} />}
      <div className="flex gap-2">
        <div className="w-1/3">
          <SimpleSelect
            label="Category"
            placeholder="Select category"
            optionValue={form.category}
            options={CATEGORY_OPTIONS}
            handleChange={(newValue) => handleChange("category", newValue)}
          />
          {firstTouch && errors.category && (
            <ShowError error={errors.category[0]} />
          )}
        </div>
        <div className="w-1/3">
          <SimpleSelect
            label="Unit of Measurement"
            placeholder="Select unit"
            optionValue={form.unit}
            options={UNIT_OPTIONS}
            handleChange={(newValue) => handleChange("unit", newValue)}
          />
          {firstTouch && errors.unit && <ShowError error={errors.unit[0]} />}
        </div>
        <div className="w-1/3">
          <Input
            type="number"
            className="w-full"
            placeholder="Price per unit"
            value={form.pricePerUnit ?? ""}
            onChange={(e) => handleChange("pricePerUnit", e.target.value)}
          />
          {firstTouch && errors.pricePerUnit && (
            <ShowError error={errors.pricePerUnit[0]} />
          )}
        </div>
      </div>
      <Textarea
        placeholder="Type your message here."
        value={form.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
      {firstTouch && errors.description && (
        <ShowError error={errors.description[0]} />
      )}
      <div className="flex">
        <Button disabled={pending} type="submit" variant={"secondary"}>
          {pending && <Spinner data-icon="inline-start" />}
          Submit
        </Button>
      </div>
    </form>
  );
}
