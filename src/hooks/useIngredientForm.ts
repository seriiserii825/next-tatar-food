import createIngredient from "@/actions/ingredients";
import ingredientsSchema, {
  TIngredientsFormData,
} from "@/schemas/ingredientsSchema";
import useForm from "./useForm";

export default function useIngredientForm(onSuccess?: () => void) {
  return useForm<TIngredientsFormData>(
    ingredientsSchema(),
    { name: "", category: "", unit: "", pricePerUnit: 0, description: "" },
    createIngredient,
    onSuccess,
  );
}
