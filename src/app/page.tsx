"use client";

import ErrorToast from "@/components/UI/ErrorToast";
import Title from "@/components/UI/Title";
import CreateRecipeForm from "@/forms/CreateRecipeForm";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <ErrorToast />
      </Suspense>
      <Title />
      <section className="mx-auto mt-16 max-w-7xl px-6 pb-16">
        <CreateRecipeForm />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604908554027-3b2f5f0c39ff"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Echpochmak</h3>

              <p className="mt-2 text-sm text-zinc-600">
                Traditional pastries with a rich filling
              </p>

              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-zinc-700">
                  Ingredients:
                </p>
                <ul className="space-y-1 text-sm text-zinc-600">
                  <li>• Potatoes — 1 kg</li>
                  <li>• Meat — 1 kg</li>
                  <li>• Onion — 500 g</li>
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="text-sm font-medium text-amber-600 hover:underline">
                  Edit
                </button>
                <button className="text-sm font-medium text-rose-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Kystybyi</h3>

              <p className="mt-2 text-sm text-zinc-600">
                Soft flatbreads with a flavorful filling
              </p>

              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-zinc-700">
                  Ingredients:
                </p>
                <ul className="space-y-1 text-sm text-zinc-600">
                  <li>• Potatoes — 1 kg</li>
                  <li>• Flour — 600 g</li>
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="text-sm font-medium text-amber-600 hover:underline">
                  Edit
                </button>
                <button className="text-sm font-medium text-rose-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604908177522-050a1bfa2a5f"
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">Gubadiya</h3>

              <p className="mt-2 text-sm text-zinc-600">
                A layered festive pie
              </p>

              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-zinc-700">
                  Ingredients:
                </p>
                <ul className="space-y-1 text-sm text-zinc-600">
                  <li>• Eggs — 3 pcs</li>
                  <li>• Milk — 500 ml</li>
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="text-sm font-medium text-amber-600 hover:underline">
                  Edit
                </button>
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
