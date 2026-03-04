"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShowError from "@/components/UI/ShowError";
import SimpleSelect from "@/components/UI/SimpleSelect";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select_options";
import useIngredientForm from "@/hooks/useIngredientForm";

export default function IngredientForm() {
  const { handlerSubmit, handleChange, formData, firstTouch, errors } =
    useIngredientForm();
  return (
    <form
      onSubmit={handlerSubmit}
      className="flex flex-col gap-4 rounded bg-white p-4 shadow-md"
    >
      <Input
        type="text"
        className="w-full"
        placeholder="Ingredient Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      {firstTouch && errors.name && <ShowError error={errors.name[0]} />}
      <div className="flex gap-2">
        <div className="w-1/3">
          <SimpleSelect
            label="Category"
            placeholder="Select category"
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
            value={formData.pricePerUnit ?? ""}
            onChange={(e) => handleChange("pricePerUnit", e.target.value)}
          />
          {firstTouch && errors.pricePerUnit && (
            <ShowError error={errors.pricePerUnit[0]} />
          )}
        </div>
      </div>
      <Textarea
        placeholder="Type your message here."
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
      {firstTouch && errors.description && (
        <ShowError error={errors.description[0]} />
      )}
      <div className="flex">
        <Button type="submit" variant={"secondary"}>
          Submit
        </Button>
      </div>
    </form>
  );
}
