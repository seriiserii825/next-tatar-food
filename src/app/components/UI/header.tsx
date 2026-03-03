export default function header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-white font-bold">
          🍲
        </div>
        <span className="text-xl font-semibold tracking-tight">Home Recipes</span>
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
        <a href="#" className="hover:text-amber-600 transition">
          Recipes
        </a>
        <a href="#" className="hover:text-amber-600 transition">
          Ingredients
        </a>
        <a href="#" className="hover:text-amber-600 transition">
          About
        </a>
      </nav>

      <button className="rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white hover:bg-amber-600 transition">
        Add Recipe
      </button>
    </header>
  );
}
