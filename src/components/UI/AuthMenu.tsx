"use client";
import { siteConfig } from "@/config/siteConfig";
import { authClient } from "@/lib/auth-client";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AuthMenu() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/auth/login");
  }

  if (isPending) return <div>Loading...</div>;

  if (session) {
    return (
      <nav className="flex items-center gap-4">
        <span className="flex items-center gap-2 border-b border-gray-400 text-sm text-gray-500">
          <User className="text-muted-foreground h-5 w-5" />
          {session.user.name}
        </span>
        <button
          onClick={handleLogout}
          className="text-sm transition duration-300 hover:text-amber-600"
        >
          Logout
        </button>
      </nav>
    );
  }
  return (
    <nav className="flex gap-4">
      {siteConfig.authMenu.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`transition duration-300 hover:text-amber-600 ${pathname === link.href ? "text-amber-600" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
