import PageContent from "@/components/UI/PageContent";
import Title from "@/components/UI/Title";
import IngredientForm from "@/forms/IngredientForm";

export default function Page() {
  return (
    <>
      <div className="pb-24">
        <Title />
        <PageContent />
        <div className="mx-auto max-w-xl">
          <h3 className="mb-4 text-2xl font-semibold">Add New Ingredient</h3>
          <IngredientForm />
        </div>
      </div>
    </>
  );
}
