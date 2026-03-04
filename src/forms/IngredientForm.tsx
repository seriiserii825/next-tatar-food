"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleSelect from "@/components/UI/SimpleSelect";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select_options";
import { IIngredient } from "@/interfaces/IIngredients";
import { useState } from "react";

export default function IngredientForm() {
  const [formData, setFormData] = useState<IIngredient>({
    name: "",
    category: "",
    unit: "",
    pricePerUnit: null,
    description: "",
  });

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных на сервер или сохранения их в состоянии
    console.log(formData);
  }

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
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <div className="flex gap-2">
        <div className="w-1/3">
          <SimpleSelect
            label="Category"
            placeholder="Select category"
            options={CATEGORY_OPTIONS}
            handleChange={(newValue) =>
              setFormData({ ...formData, category: newValue })
            }
          />
        </div>
        <div className="w-1/3">
          <SimpleSelect
            label="Unit of Measurement"
            placeholder="Select unit"
            options={UNIT_OPTIONS}
            handleChange={(newValue) =>
              setFormData({ ...formData, unit: newValue })
            }
          />
        </div>
        <div className="w-1/3">
          <Input
            type="number"
            className="w-full"
            placeholder="Price per unit"
            value={formData.pricePerUnit ?? ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                pricePerUnit: e.target.value
                  ? parseFloat(e.target.value)
                  : null,
              })
            }
          />
        </div>
      </div>
      <Textarea
        placeholder="Type your message here."
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <div className="flex">
        <Button type="submit" variant={"secondary"}>
          Submit
        </Button>
      </div>
    </form>
  );
}
