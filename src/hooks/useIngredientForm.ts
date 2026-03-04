import createIngredient from "@/actions/ingredients";
import ingredientsSchema, {
  TIngredientsFormData,
} from "@/schemas/ingredientsSchema";
import { useState } from "react";

export default function useIngredientForm() {
  const schema = ingredientsSchema();
  const [formData, setFormData] = useState<TIngredientsFormData>({
    name: "",
    category: "",
    unit: "",
    pricePerUnit: 0,
    description: "",
  });

  const [firstTouch, setFirstTouch] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string[];
    category?: string[];
    unit?: string[];
    pricePerUnit?: string[];
    description?: string[];
  }>({});

  function handleChange(field: keyof TIngredientsFormData, value: string) {
    const newForm = { ...formData, [field]: value };
    setFormData(newForm);
    if (firstTouch) {
      const result = schema.safeParse(newForm);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
    }
  }

  async function handlerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFirstTouch(true);

    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    setErrors({});

    try {
      const response = await createIngredient(formData);
      console.log("response", response);
    } catch (error) {
      console.error("Error creating ingredient:", error);
    }
  }

  return {
    firstTouch,
    errors,
    formData,
    setFormData,
    handlerSubmit,
    handleChange,
  };
}
