"use client";

import useSetActiveLink from "@/hooks/useSetActiveLink";
import { ILink } from "@/interfaces/ILink";
import Link from "next/link";

export default function AuthMenu() {
  const links: ILink[] = [
    { name: "Login", href: "/auth/login" },
    { name: "Register", href: "/auth/register" },
  ];
  return (
    <nav className="flex gap-4">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`${useSetActiveLink(link.href)} text-sm font-medium text-zinc-600 hover:text-amber-600 transition duration-300`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
