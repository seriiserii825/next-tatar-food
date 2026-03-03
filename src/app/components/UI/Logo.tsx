import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-white font-bold">
        🍲
      </div>
      <span className="text-xl font-semibold tracking-tight">Home Recipes</span>
    </Link>
  );
}
