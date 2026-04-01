export default function Header() {
  return (
    <header className="bg-warm-card border-b border-warm-accent/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-warm-accent to-warm-accentLight rounded-2xl flex items-center justify-center text-3xl shadow-lg">
            🍲
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-warm-accentLight">
              Tatar Cuisine
            </h1>
            <p className="text-xs text-warm-accent -mt-1 tracking-widest">TASTE OF TRADITION</p>
          </div>
        </div>

        <nav className="flex items-center gap-9 text-sm font-medium">
          <a href="#" className="hover:text-warm-accentLight transition-colors">
            Recipes
          </a>
          <a href="#" className="hover:text-warm-accentLight transition-colors">
            Ingredients
          </a>
          <a href="#" className="hover:text-warm-accentLight transition-colors">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <div className="text-sm">
            Hello, <span className="text-warm-accentLight font-medium">gus@mail.ru</span>
          </div>
          <button className="bg-warm-accent hover:bg-warm-accentLight text-warm-bg px-6 py-2.5 rounded-2xl font-semibold transition-all active:scale-95">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
