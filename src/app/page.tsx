export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800">Recipes</h1>
        <p className="mt-2 text-zinc-600">Warm home cooking and time-tested dishes</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group rounded-3xl bg-white shadow-sm hover:shadow-xl transition overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604908554027-3b2f5f0c39ff"
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Echpochmak</h3>

              <p className="mt-2 text-sm text-zinc-600">Traditional pastries with a rich filling</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-700 mb-2">Ingredients:</p>
                <ul className="text-sm text-zinc-600 space-y-1">
                  <li>• Potatoes — 1 kg</li>
                  <li>• Meat — 1 kg</li>
                  <li>• Onion — 500 g</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="text-sm font-medium text-amber-600 hover:underline">Edit</button>
                <button className="text-sm font-medium text-rose-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </article>

          <article className="group rounded-3xl bg-white shadow-sm hover:shadow-xl transition overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Kystybyi</h3>

              <p className="mt-2 text-sm text-zinc-600">Soft flatbreads with a flavorful filling</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-700 mb-2">Ingredients:</p>
                <ul className="text-sm text-zinc-600 space-y-1">
                  <li>• Potatoes — 1 kg</li>
                  <li>• Flour — 600 g</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="text-sm font-medium text-amber-600 hover:underline">Edit</button>
                <button className="text-sm font-medium text-rose-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </article>

          <article className="group rounded-3xl bg-white shadow-sm hover:shadow-xl transition overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604908177522-050a1bfa2a5f"
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Gubadiya</h3>

              <p className="mt-2 text-sm text-zinc-600">A layered festive pie</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-700 mb-2">Ingredients:</p>
                <ul className="text-sm text-zinc-600 space-y-1">
                  <li>• Eggs — 3 pcs</li>
                  <li>• Milk — 500 ml</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="text-sm font-medium text-amber-600 hover:underline">Edit</button>
                <button className="text-sm font-medium text-rose-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
