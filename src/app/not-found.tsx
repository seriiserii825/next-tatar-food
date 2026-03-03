import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative">
          <h1 className="text-8xl md:text-9xl font-bold text-amber-500/20 tracking-tighter select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center -mt-12 md:-mt-16">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-300 to-rose-300 flex items-center justify-center shadow-xl">
              <span className="text-6xl md:text-7xl">🥟</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">Page Not Found</h2>

        <p className="text-lg text-zinc-600 mb-10 max-w-md mx-auto">
          It seems this recipe hasn&apos;t been cooked yet... or got lost on the way to the kitchen
          😔
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300">
            Back to Home
          </Link>
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Maybe it was chak-chak that got eaten too early? 🍯
        </p>
      </div>
    </div>
  );
}
