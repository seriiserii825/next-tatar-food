"use client";
import { siteConfig } from "@/config/siteConfig";
import useSetActiveLink from "@/hooks/useSetActiveLink";
import { authClient } from "@/lib/auth-client";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthMenu() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

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
          className="transition duration-300 text-sm hover:text-amber-600"
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
          className={`transition duration-300 hover:text-amber-600 ${useSetActiveLink(link.href)}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
