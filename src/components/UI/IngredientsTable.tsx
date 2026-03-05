"use client";

import { deleteIngredient, getIngredients } from "@/actions/ingredients";
import Loading from "@/app/loading";
import useQuery from "@/hooks/useQuery";
import { useWasChanged } from "@/store/ingredientsStore";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmPopup from "./ConfirmPopup";
import ShowError from "./ShowError";

export default function IngredientsTable() {
  const wasChanged = useWasChanged();

  const { data, loading, error, refetch } = useQuery(getIngredients);

  const [pendingId, setPendingId] = useState<string | null>(null);

  useEffect(() => {
    if (wasChanged) refetch();
  }, [wasChanged]);

  async function handleConfirmDelete() {
    if (!pendingId) return;
    try {
      await deleteIngredient(pendingId);
      toast.success("Ingredient deleted successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting ingredient:", error);
      toast.error("Failed to delete ingredient");
    } finally {
      setPendingId(null);
    }
  }

  if (loading) return <Loading />;

  if (error) return <ShowError error={error} />;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Ingredients List
      </h2>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Ingredient</th>
              <th className="px-6 py-3 text-left font-medium">Category</th>
              <th className="px-6 py-3 text-left font-medium">Unit</th>
              <th className="px-6 py-3 text-left font-medium">
                Price per unit
              </th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {!data || data.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No ingredients yet
                </td>
              </tr>
            ) : (
              data.map((ingredient) => (
                <tr key={ingredient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {ingredient.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {ingredient.category}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{ingredient.unit}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {ingredient.pricePerUnit}
                  </td>
                  <td className="flex gap-2 space-x-2 px-6 py-4 text-right">
                    <button className="flex w-8 items-center justify-center gap-1 rounded-lg bg-amber-100 py-1 text-sm text-amber-700 hover:bg-amber-200">
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => setPendingId(ingredient.id)}
                      className="flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ConfirmPopup
        open={!!pendingId}
        onOpenChange={(open) => !open && setPendingId(null)}
        title="Delete Ingredient"
        description="Are you sure you want to delete this ingredient?"
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
}
