import IngredientsTable from "@/components/UI/IngredientsTable";
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
          <h3 className="mb-4 text-center text-2xl font-semibold">
            Add New Ingredient
          </h3>
          <IngredientForm />
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <IngredientsTable />
        </div>
      </div>
    </>
  );
}
