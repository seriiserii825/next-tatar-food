export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
        <h2 className="font-display text-5xl font-bold tracking-tighter text-warm-accentLight">
          Recipes
        </h2>
        <button className="bg-gradient-to-r from-warm-accent to-warm-accentLight hover:from-warm-accentLight hover:to-warm-accent text-warm-bg px-8 py-4 rounded-3xl font-semibold flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-warm-accent/40">
          <i className="fas fa-plus"></i>
          <span>Add Recipe</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Echpochmak */}
        <div className="bg-warm-card rounded-3xl overflow-hidden border border-warm-accent/20 hover:border-warm-accentLight/50 transition-all group">
          <div className="h-64 bg-[#1F1812] flex items-center justify-center p-10">
            <img
              src="https://i.imgur.com/0zKzXvL.png"
              alt="Echpochmak"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold">Echpochmak</h3>
            <p className="text-warm-muted text-sm mt-1">Famous Tatar triangular meat pies</p>
            <div className="mt-7">
              <p className="font-medium text-warm-accent mb-3">Ingredients:</p>
              <ul className="space-y-2 text-sm text-warm-textLight">
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Potatoes — 1 kg
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Lamb — 1 kg
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10">
              <button className="py-3.5 bg-[#2C2118] hover:bg-warm-card border border-warm-accent/30 hover:border-warm-accentLight rounded-2xl text-sm font-medium transition-all">
                Edit
              </button>
              <button className="py-3.5 bg-red-950/40 hover:bg-red-900/60 text-red-300 rounded-2xl text-sm font-medium transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Kystybyi */}
        <div className="bg-warm-card rounded-3xl overflow-hidden border border-warm-accent/20 hover:border-warm-accentLight/50 transition-all group">
          <div className="h-64 bg-[#1F1812] flex items-center justify-center p-10">
            <img
              src="https://i.imgur.com/5zqW3pK.png"
              alt="Kystybyi"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold">Kystybyi with Millet</h3>
            <p className="text-warm-muted text-sm mt-1">Incredibly delicious</p>
            <div className="mt-7">
              <p className="font-medium text-warm-accent mb-3">Ingredients:</p>
              <ul className="space-y-2 text-sm text-warm-textLight">
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Onion — 1 kg
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Potatoes — 1 kg
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10">
              <button className="py-3.5 bg-[#2C2118] hover:bg-warm-card border border-warm-accent/30 hover:border-warm-accentLight rounded-2xl text-sm font-medium transition-all">
                Edit
              </button>
              <button className="py-3.5 bg-red-950/40 hover:bg-red-900/60 text-red-300 rounded-2xl text-sm font-medium transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Gubadia */}
        <div className="bg-warm-card rounded-3xl overflow-hidden border border-warm-accent/20 hover:border-warm-accentLight/50 transition-all group">
          <div className="h-64 bg-[#1F1812] flex items-center justify-center p-10">
            <img
              src="https://i.imgur.com/8kL2pQv.png"
              alt="Gubadia"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-semibold">Gubadia</h3>
            <p className="text-warm-muted text-sm mt-1">The most delicious dessert</p>
            <div className="mt-7">
              <p className="font-medium text-warm-accent mb-3">Ingredients:</p>
              <ul className="space-y-2 text-sm text-warm-textLight">
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Chicken eggs — 3 pcs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-warm-accent">•</span> Dry yeast — 0.1 g
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10">
              <button className="py-3.5 bg-[#2C2118] hover:bg-warm-card border border-warm-accent/30 hover:border-warm-accentLight rounded-2xl text-sm font-medium transition-all">
                Edit
              </button>
              <button className="py-3.5 bg-red-950/40 hover:bg-red-900/60 text-red-300 rounded-2xl text-sm font-medium transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
