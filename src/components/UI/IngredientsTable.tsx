import { Pencil, Trash2 } from "lucide-react";

export default function IngredientsTable() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold">Ingredients List</h2>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Ingredient</th>
              <th className="px-6 py-3 text-left font-medium">Category</th>
              <th className="px-6 py-3 text-left font-medium">Unit</th>
              <th className="px-6 py-3 text-left font-medium">Quantity</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-800">Milk</td>
              <td className="px-6 py-4 text-gray-600">Dairy</td>
              <td className="px-6 py-4 text-gray-600">ml</td>
              <td className="px-6 py-4 text-gray-600">250</td>
              <td className="flex gap-2 space-x-2 px-6 py-4 text-right">
                <button className="flex w-8 items-center justify-center gap-1 rounded-lg bg-amber-100 py-1 text-sm text-amber-700 hover:bg-amber-200">
                  <Pencil size={16} />
                </button>

                <button className="flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                No ingredients yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
