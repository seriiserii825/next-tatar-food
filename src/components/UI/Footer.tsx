export default function Footer() {
  return (
    <footer className="bg-warm-bg py-10 border-t border-warm-accent/20 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-warm-muted text-sm">
        Tatar Cuisine Recipes &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
