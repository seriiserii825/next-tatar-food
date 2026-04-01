import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-warm-bg text-warm-text min-h-screen font-sans flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[180px] leading-none font-display font-bold text-warm-accent/10 mb-8">
          404
        </div>

        <h1 className="text-5xl font-semibold mb-3">Oops! Recipe not found</h1>
        <p className="text-warm-muted text-xl mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-warm-accent hover:bg-warm-accentLight text-warm-bg px-10 py-4 rounded-3xl font-semibold transition-all active:scale-95">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
