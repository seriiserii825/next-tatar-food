export default function Footer() {
  return (
    <footer className="bg-amber-100/70 border-t border-amber-200">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-white font-bold">
                🍲
              </div>
              <span className="text-lg font-semibold">Home Recipes</span>
            </div>

            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              A cozy collection of homemade recipes inspired by tradition and cooked with love.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-800 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Add Recipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-800 mb-4">Stay in touch</h4>
            <p className="text-sm text-zinc-600 mb-4">
              Get new recipes and updates straight to your inbox.
            </p>

            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-amber-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-amber-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© 2026 Home Recipes. All rights reserved.</p>

          <div className="flex gap-5 text-sm text-zinc-500">
            <a href="#" className="hover:text-amber-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
