import IngredientForm from "@/forms/IngredientForm";
import Modal from "../Modal";

export default function IngredientUpdate() {
  return (
    <Modal title="Update Ingredient">
      <IngredientForm />
    </Modal>
  );
}
