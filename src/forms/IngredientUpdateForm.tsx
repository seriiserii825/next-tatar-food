"use client";

import { updateIngredient } from "@/actions/ingredients";
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

interface IngredientUpdateFormProps {
  id: string;
  initialData: TIngredientsFormData;
  onSuccess: () => void;
}

export default function IngredientUpdateForm({
  id,
  initialData,
  onSuccess,
}: IngredientUpdateFormProps) {
  const { onSubmit, handleChange, form, pending, firstTouch, errors } =
    useForm<TIngredientsFormData>(
      ingredientsSchema(),
      initialData,
      (data) => updateIngredient(id, data),
      () => {
        toast.success("Ingredient updated successfully!");
        onSuccess();
      },
    );

  return (
    <form onSubmit={onSubmit} className="flex w-full min-w-96 flex-col gap-4">
      <Input
        type="text"
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
            handleChange={(v) => handleChange("category", v)}
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
            handleChange={(v) => handleChange("unit", v)}
          />
          {firstTouch && errors.unit && <ShowError error={errors.unit[0]} />}
        </div>
        <div className="w-1/3">
          <Input
            type="number"
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
        placeholder="Description"
        value={form.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
      {firstTouch && errors.description && (
        <ShowError error={errors.description[0]} />
      )}

      <div className="flex justify-end gap-2">
        <Button disabled={pending} type="submit">
          {pending && <Spinner data-icon="inline-start" />}
          Save
        </Button>
      </div>
    </form>
  );
}
