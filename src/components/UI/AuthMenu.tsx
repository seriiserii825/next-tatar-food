"use client";

import { authClient } from "@/lib/auth-client";
import { siteConfig } from "@/config/siteConfig";
import useSetActiveLink from "@/hooks/useSetActiveLink";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthMenu() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/auth/login");
  }

  if (session) {
    return (
      <nav className="flex gap-4 items-center">
        <span className="text-sm text-gray-500">{session.user.email}</span>
        <button
          onClick={handleLogout}
          className="hover:text-amber-600 transition duration-300">
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
          className={`hover:text-amber-600 transition duration-300 ${useSetActiveLink(link.href)}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
